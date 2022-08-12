---
title: Ubuntu Network configuration
date: 2022-08-12 20:45:00 +1300
categories: [linux]
tags: [Ubuntu]
---

# Network configuration on the command line

First type netstat -I to find the interface name. Then type the below command:
``
ifconfig eth0 192.168.72.6 netmask 255.255.255.0
````
Then to add a default gateway, add the below command:
```
route add default gw 192.168.72.1 eth0
````


# Configure the network by editing /etc/interfaces file


vim /etc/network/interfaces

Then add the following lines:
```
auto eth1
  iface eth1 inet dhcp
Add new eth1 interface
```
Save the file and restart networking services using the below command.
```
systemctl restart networking
```
To set a Static IP address, you have to edit /etc/network/interfaces

vim /etc/network/interfaces

Add the below lines to /etc/network/interfaces.
```
auto eth1
  iface eth1 inet static
  address 192.168.72.8
  netmask 255.255.255.0
  gateway 192.168.72.1
  dns-nameservers 8.8.8.8 4.4.2.2
 ```
Save the file and restart networking services.

systemctl restart networking


# Setting up/Changing Hostname
The hostname of Ubuntu OS is configured in the file /etc/hostname.

vim /etc/hostname

This file contains only the hostname of the file, change the name, and then save it.

Edit Ubuntu hostname

Hosts file maps hostname to IP address locally. For instance, you have a server in your local network, instead of remembering its IP, you can map its IP with a name in your /etc/hosts file. It will allow you to access that machine with a name instead of the IP.

To edit a hosts file, enter:

vim /etc/hosts

Add the server IP address and name in the hosts file in the following format.
```
192.168.72.10 fileserver
```
Set hostname in /etc/hosts file

Save the file and reboot the system to apply changes.
