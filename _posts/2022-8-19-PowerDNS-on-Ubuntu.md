---
title: Installing PowerDNS on Ubuntu
date: 2022-08-19 23:19:00 +1300
categories: [net]
tags: [PowerDNS]
---
## Installing PowerDNS on Ubuntu



Instal MariaDB and enable

To install the latest PowerDNS packages from the official repository:

1. Run the below commands to add the PowerDNS repository and GPG key to your system.

# Download PowerDNS GPG Key
```
wget -qO- https://repo.powerdns.com/FD380FBB-pub.asc | gpg --dearmor > /etc/apt/trusted.gpg.d/pdns.gpg
```

# Adding the PowerDNS Repository for Ubuntu 20.04 System
```
echo "deb [arch=amd64] http://repo.powerdns.com/ubuntu focal-auth-45 main" | sudo tee /etc/apt/sources.list.d/pdns.list
```
vim /etc/apt/preferences.d/pdns 
```
# all packages with first name pdns- will be installed from the repo.powerdns.com repository
Package: pdns-*
Pin: origin repo.powerdns.com
Pin-Priority: 600
```
# Run the following commands to update and refresh repositories, then install the PowerDNS (pdns-server) and PowerDNS MariaDB/MySQL backend (pdns-backend-mysql).
```
apt install pdns-server pdns-backend-mysql -y

systemctl status pdns.service
```
# Creating Database and Import Database Schema for PowerDNS
```
create database pdns;

grant all on pdns.* to pdnsadmin@localhost identified by 'StrongPdnsPasswd';

flush privileges;
```

# import the schema.mysql.sql to the pdns database
```
mysql -u pdnsadmin -p pdns < /usr/share/pdns-backend-mysql/schema/schema.mysql.sql
```

# Check list of tables on the pdns database
```
mysqlshow pdns
```

# Setting up PowerDNS with MariaDB Backend
```
systemctl stop pdns.service
```
vim /etc/powerdns/pdns.d/myself.conf
```
# Update the database username and password

# Define the gmysql backend
launch+=gmysql

# Details MariaDB database for PowerDNS
gmysql-host=127.0.0.1
gmysql-port=3306
gmysql-dbname=pdns
gmysql-user=pdnsadmin
gmysql-password=StrongPdnsPasswd
gmysql-dnssec=yes
# gmysql-socket=
```
# update the permission and ownership of the mysql.conf file
```
sudo chown pdns:pdns /etc/powerdns/pdns.d/mysql.conf
sudo chmod 640 /etc/powerdns/pdns.d/mysql.conf
```

# start PowerDNS service and verify status of the PowerDNS service
```
systemctl start pdns.service

systemctl status pdns.service
```
# check the syslog file. This command lets you ensure the MySQL backend module is loaded to the PowerDNS server.
```
grep -rin pdns_server /var/log/syslog
```
# Run the pdnsutil command below to create a new DNS zone (create-zone) named example.io.
```
pdnsutil create-zone example.io
```
# create a new nameserver and assign the nameserver to the PowerDNS server IP address.

# define ns1 A record to IP address 172.16.5.10
```
pdnsutil add-record example.io ns1 A 172.16.5.10
```
# define nameserver for example.io to the ns1.example.io
```
pdnsutil add-record example.io @ NS ns1.example.io
```
# add the new A record for the example.io domain. This domain will use the IP address 172.16.5.20.
```
pdnsutil add-record example.io @ A 172.16.5.20
```
# add new subdomains for your applications.

# add subdomain www
```
pdnsutil add-record example.io www A 172.16.5.20
```
# add subdomain storage with the target server 172.16.5.50
```
pdnsutil add-record example.io storage A 172.16.5.50
```
# add an MX record. The MX record handles email delivery for the main domain (example.io).
```
pdnsutil add-record example.io @ MX "10 example.io"
```
# set nano as the default editor and open the example.io file.
```
# setup default editor on the system temporary
export EDITOR=nano
```
# edit DNS zone example.io manually
```
pdnsutil edit-zone example.io

```

Modify the default SOA record in the example.io file with the configuration below. After doing so, save the changes and exit from the editor.
```
example.io      3600    IN      SOA     ns1.example.io admin.example.io 0 10800 3600 604800 3600
Setting up SOA record
Setting up SOA record
```
# show all available DNS records on the example.io zone.
```
pdnsutil list-zone example.io
```
# verify PowerDNS zones configuration.
```
pdnsutil check-all-zones
```
#install the dnsutils package on your system.
```
apt install dnsutils -y
```
# check the A record for the example.io domain. In this example, the PowerDNS server IP address is 172.16.5.10.
```
dig example.io @172.16.5.10
```

# check subdomain www.example.io
```
dig www.example.io @172.16.5.10
```
# check subdomain storage.example.io
```
dig storage.example.io @172.16.5.10
```
# check the MX record for the example.io domain.
```
dig MX example.io @172.16.5.10
```
