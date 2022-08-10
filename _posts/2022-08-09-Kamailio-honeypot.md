---
title: Kamailio Honeypot
date: 2022-08-09 23:03:00 +1300
categories: [VOIP]
tags: [Kamailio]
---
## Kamailio Honeypot

build a SIP honeypot using Kamailio. It’ll listen on a Public IP address for SIP connections from people scanning the internet with malicious intent and log their IPs, so our real SIP softswitches know to ignore them.

We’ll use GeoIP2 to lookup the location of the IP and then store that data into a MySQL database.

Lastly we’ll create a routing block we can use on another Kamailio instance to verify if that the IP address of the received SIP message is not in our blacklist by searching the MySQL database for the source IP.

The Database
In this example I’m going to create a database called “blacklist” with one table called “baddies”, in MySQL I’ll run:
```
CREATE database blacklist;
CREATE TABLE `baddies` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`ip_address` INT unsigned UNIQUE,
	`hits` INT,
	`last_seen` DATETIME,
	`ua` TEXT,
	`country` TEXT,
	`city` TEXT
);
```
I’ll setup a MySQL user to INSERT/UPDATE/SELECT data from the MySQL database.

For storing IP addresses in the database we’ll store them as unsigned integers, and then use the INET_ATON('127.0.0.1') MySQL command to encode them from dotted-decimal format, and the INET_NTOA('2130706433') to put them back into dotted decimal.

Modparams
Now we’ll need to configure Kamailio, I’ll continue on from where we left off in the last post on GeoIP2 as we’ll use that to put Geographic data about the IP before adding the MySQL and SQLOps modules:
```
# ----- SQL params -----
loadmodule "db_mysql.so"
loadmodule "sqlops.so"

#Create a new MySQL database connection called blacklist_db 
modparam("sqlops","sqlcon","blacklist_db=>mysql://root:yourpassword@localhost/blacklist")  

#Set timeouts for MySQL Connections
modparam("db_mysql", "ping_interval", 60)
modparam("db_mysql", "auto_reconnect", 1)
modparam("db_mysql", "timeout_interval", 2)
After loading db_mysql and sqlops we create a new object / connection called blacklist_db with our MySQL Database parameters.

Now after a restart we’ll be connected to our MySQL database.

Honeypot Routing Logic
Now we’ll create a route to log the traffic:

####### Routing Logic ########


/* Main SIP request routing logic
 * - processing of any incoming SIP request starts with this route
 * - note: this is the same as route { ... } */
request_route {

        route(AddToBlacklist);
        sl_reply('200', 'Sure thing boss!');

}
route[AddToBlacklist]{
        xlog("Packet received from IP $si");
        sql_xquery("blacklist_db", "insert into baddies (ip_address, hits, last_seen, ua, country, city) values (2130706433, 10, NOW(), 'testua2', 'Australia', 'Hobart');");
}
```
Now for each SIP message received a new record will be inserted into the database:
```
 root@ip-172-31-8-156:/etc/kamailio# mysql -u root -p blacklist -e "select * from baddies;"
 Enter password:
 +----+------------+------+---------------------+---------+-----------+--------+
 | id | ip_address | hits | last_seen           | ua      | country   | city   |
 +----+------------+------+---------------------+---------+-----------+--------+
 |  1 | 2130706433 |   10 | 2019-08-13 02:52:57 | testua2 | Australia | Hobart |
 |  2 | 2130706433 |   10 | 2019-08-13 02:53:01 | testua2 | Australia | Hobart |
 |  3 | 2130706433 |   10 | 2019-08-13 02:53:05 | testua2 | Australia | Hobart |
 +----+------------+------+---------------------+---------+-----------+--------+
 ```
 
This is great but we’re not actually putting the call variables in here, and we’ve got a lot of duplicates, let’s modify our sql_xquery() to include the call variables:

sql_xquery("blacklist_db", "insert into baddies (ip_address, hits, last_seen, ua, country, city) values (INET_ATON('$si'), 10, NOW(), '$ua', 'Australia', 'Hobart');");
Now we’re setting the IP Address value to the Source IP psedovariable ($si) and formatting it using the INET_ATON function in MySQL, setting the last_seen to the current timestamp and setting the user agent to the User Agent psedovariable ($ua).

Let’s restart Kamailio, truncate the data that’s currently in the DB, send some SIP traffic to it and then check the contents:

mysql -u root -p blacklist -e "select *, INET_NTOA(ip_address) from baddies;"

Here you can see we’re starting to get somewhere, the IP, UA and last_seen values are all now correct.

We’re getting multiple entries from the same IP though, instead we just want to increment the hits counter and set the last_seen to the current time, for that we’ll just update the SQL query to set the time to be NOW() and if that IP is already in the database to update the last_seen value and incriment the hits counter:

sql_xquery("blacklist_db", "insert into baddies (ip_address, hits, last_seen, ua, country, city) values (INET_ATON('$si'), 1, NOW(), '$ua', 'Australia', 'Hobart') ON DUPLICATE KEY UPDATE last_seen = NOW(), hits = hits + 1;");
Now we’ve only got one line per IP address, with the hit counters showing how many SIP requests we’ve received from that IP.

Finally we’ll use the GeoIP2 Module to get the geographic info of the source of the traffic, like we’ve talked about in the previous post:
```
route[AddToBlacklist]{
        xlog("Packet received from IP $si");
        geoip2_match("$si", "src"))
        sql_xquery("blacklist_db", "insert into baddies (ip_address, hits, last_seen, ua, country, city) values (INET_ATON('$si'), 1, NOW(), '$ua', '$gip2(src=>cc)', '$gip2(src=>city)') ON DUPLICATE KEY UPDATE last_seen = NOW(), hits = hits + 1;", "r_sql");

}
```
The only issue with this is if GeoIP2 doesn’t have a match, no record will be added in the database, so we’ll add a handler for that:
```
route[AddToBlacklist]{
        xlog("Packet received from IP $si");
        if(geoip2_match("$si", "src")){
                sql_xquery("blacklist_db", "insert into baddies (ip_address, hits, last_seen, ua, country, city) values (INET_ATON('$si'), 1, NOW(), '$ua', '$gip2(src=>cc)', '$gip2(src=>city)') ON DUPLICATE KEY UPDATE last_seen = NOW(), hits = hits + 1;", "r_sql");
        }else{          ##If no match in GeoIP2 leave Country & City fields blank
                sql_xquery("blacklist_db", "insert into baddies (ip_address, hits, last_seen, ua, country, city) values (INET_ATON('$si'), 1, NOW(), '$ua', '', '') ON DUPLICATE KEY UPDATE last_seen = NOW(), hits = hits + 1;", "r_sql");
        }
}
```
Now let’s check our database again and see how the data looks:
```
mysql -u root -p blacklist -e "select *, INET_NTOA(ip_address) from baddies;" 
```
Perfect! Now we’re inserting data into our blacklist from our honeypot. Now we’ll configure a new routing block we can use on another Kamailio instance to see if an IP is in the blacklist.

I left this running on my AWS box for a few hours, and lots of dodgy UAs dropped in to say hello, one of which was very insistent on making calls to Poland…


Querying the Data
Now we’ve got a blacklist it’s only useful if we block the traffic from our malicous actors who we’ve profiled in the database.

You could feed this into BGP to null route the traffic, or hook this into your firewall’s API, but we’re going to do this in Kamailio, so we’ll create a new routing block we can use on a different Kamailio instance – Like a production one – to see if the IP it just received traffic from is in the blacklist.

We’ve already spoken about querying databases in the SQLops Kamailio bytes, but this routing block will query the blacklist database, and if the sender is in the database, one or more records will be returned, so we know they’re bad and will drop their traffic:

```
route[CheckBlacklist]{

        xlog("Checking blacklist for ip $si");

        #Define a variable containing the SQL query we'll run
        $var(sql) = "select INET_NTOA(ip_address) as ip_address from baddies;";

        #Log the SQL query we're going to run to syslog for easy debugging
        xlog("Query to run is $var(sql)");

        #Query blacklist_db running the query stored in $var(sql) and store the result of the query to result_sql
        sql_query("blacklist_db", "$var(sql)", "result_sql");

        #If more than 0 records were returned from the database, drop the traffic
        if($dbr(result_sql=>rows)>0){
                xlog("This guy is bad news. Dropping traffic from $si");
                exit;
        }else{
                xlog("No criminal record for $si - Allowing to progress");
        }


}
```
Recap
We’d previously touched on using the GeoIP2 module to lookup the location of IP Addresses and SQLops and db_mysql to work with relational databases from within Kamailio.

This Honeypot use case just put those elements together.

In reality a far better implementation of this would use HTable to store this data, but hopefully this gives you a better understanding of how to actually work with data.
