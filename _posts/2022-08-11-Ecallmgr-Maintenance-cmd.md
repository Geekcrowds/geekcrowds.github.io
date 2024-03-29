---
title: KAZOO Ecallmgr Maintenance commands
date: 2022-08-11 17:45:00 +1300
categories: [VOIP]
tags: [KAZOO]
---
## Kazoo Ecallmgr Maintenance commands

```
All commands should be prefixed by sup -n ecallmgr ecallmgr_maintenance. So if the command is listed as list_fs_nodes, the full command you would actually run from the command line is sup -n ecallmgr ecallmgr_maintenance list_fs_nodes.

# note -n {NODE} should be specified anytime the Erlang VM is not named kazoo_apps. Traditionally ecallmgr has run in its own Erlang VM named ecallmgr. This setup is no longer a requirement; adjust SUP's -n accordingly if you run differently.

SUP-able functions#
Function	Arguments	Description
acl_summary/0		list the ACLs that are currently being fetched from the config
acl_summary/1	(boolean())	true to get the default list of ACLs
add_fs_node/1	(FSNode)	Instructs ecallmgr to connect to the provided FreeSWITCH server and add the FS server to the defailt startup list
add_fs_node/2	(FSNode,boolean())	Set {AS_DEFAULT} to false (true if not specified) to only add the FreeSWITCH node to the local ecallmgr's system_config entry.
allow_carrier/1	(Name)	Uses Name as label and IP
allow_carrier/2	(Name,IP)	Allows traffic from the IP address (or CIDR) in the carrier ACL list. Name is a human-friendly label to associate with the IP Address
allow_carrier/3	(Name,IP,boolean())	Set third argument to 'true' to put in the default carrier ACLs (default is per-node)
allow_sbc/1	(Name)	Users Name as label and IP
allow_sbc/2	(Name,IP)	Allows traffic from the IP address (or CIDR) in the SBC ACL list. Name is a human-friendly label to associate with the IP Address.
allow_sbc/3	(Name,IP,boolean())	Use true to add SBC to the default list
carrier_acls/0		List the known carrier ACLs for the current ecallmgr
carrier_acls/1	(boolean())	Pass true for the default list of ACLs
channel_details/0		List details of known channels, across all connected FreeSWITCH servers
channel_details/1	(UUID)	List channel details of the UUID
channel_summary/0		List a summary of known channels, across all connected FreeSWITCH servers
channel_summary/1	(Node)	List a summary of known channels on the specified FreeSWITCH server
check_sync/2	(Username,Realm)	Sends a check-sync NOTIFY payload to the Username@Realm if registered
conference_details/0		List a detailed report of all conferences on all connected FreeSWITCH servers
conference_details/1	(UUID)	List a detailed report of the conference specified by UUID
conference_summary/0		List a summary report of all conferences on all connected FreeSWITCH servers
conference_summary/1	(Node)	List a summary report of all conferences on the specified FreeSWITCH server
deny_carrier/1	(Name)	Uses Name as label and IP
deny_carrier/2	(Name,IP)	Denies traffic from the IP address (or CIDR) in the carrier ACL list. Name is a human-friendly label to associate with the IP Address.
deny_carrier/3	(Name,IP,boolean())	Set third argument to 'true' to block by default (false for per-node)
deny_sbc/1	(Name)	Uses Name as label and IP
deny_sbc/2	(Name,IP)	Denies traffic from the IP address (or CIDR) in the SBC ACL list. Name is a human-friendly label to associate with the IP Address.
deny_sbc/3	(Name,IP,boolean())	Set third argument to 'true' to block by default (false for per-node)
disable_authz/0		Turns off authorization for all ecallmgrs
disable_local_resource_authz/0		Turns off authorization for calls to local resources - Kazoo is not responsible for limiting calls to these local resources.
enable_authz/0		Turns on authorization for all ecallmgrs (or at least, those that don't override it in their personal configs).
enable_local_resource_authz/0		Turns on authorization for calls to local resources - Kazoo will still track the channel as if it was using a global resource.
flush_acls/0		Flushes the cached ACLs from the ecallmgr node
flush_authn/0		Flushes SIP credentials (used to speed up responses to INVITE/REGISTER attempts)
flush_node_channels/1	(Node)	Flush the FreeSWITCH Node's tracked channels in ecallmgr
flush_node_conferences/1	(Node)	Flush the FreeSWITCH Node's tracked conferences in ecallmgr
flush_registrar/0		Flushes the registration cache
flush_registrar/1	(Realm)	Flushes the registration cache of all registrations under Realm
flush_registrar/2	(Username,Realm)	Flushes the registration for Username@Realm
flush_util/0		Flushes the util cache, used by authz, origination, and other parts of ecallmgr
get_fs_nodes/0		Fetches the configured list of FreeSWITCH servers from the AMQP bus.
hangup/1	(UUID)	Issues a hangup to the FreeSWITCH server with UUID on it
hangup_long_running_channels/0		Hang up channels older than the system-configured limit (0 for no limit to age of channel)
hangup_long_running_channels/1	(MaxAge)	Hang up channels older than MaxAge seconds
limit_channel_uptime/1	(MaxAge)	Set the limit for how long channels can remain up (in seconds); 0 to disable the check
limit_channel_uptime/2	(MaxAge,boolean())	User true to set as the default
list_fs_nodes/0		Lists the FreeSWITCH servers ecallmgr is currently connected to and interacting with.
node_details/0		Get a detailed report of all connected FreeSWITCH nodes
node_details/1	(NodeName)	Get a detailed report of the FreeSWITCH node (freeswitch@the.host.com)
node_summary/0		Get a summary of all connected FreeSWITCH nodes.
registrar_details/0		List known registration details for all known registrations
registrar_details/1	(Realm)	List known registration details for all known registrations on Realm
registrar_details/2	(Username,Realm)	List registration details for Username@Realm
registrar_summary/0		List known registration summary for all known registrations
registrar_summary/1	(Realm)	List known registration summary for all known registrations on Realm
registrar_sync/0		Issues an AMQP request to sync known registrations to the local cache
reload_acls/0		Issues a reloadacl command to all connected FreeSWITCH servers
remove_acl/1	(Name)	removes the ACL-related information associated with the Name label used when allowing/denying an IP address.
remove_acl/2	(Name,boolean())	Use true to remove from the default ACLs
remove_fs_node/1	(FSNode)	disconnect ecallmgr from the provided FreeSWITCH server.
remove_fs_node/2	(FSNode,boolean())	Set {AS_DEFAULT} to true to persist the change to the default list of FreeSWITCH servers; otherwise only the local ecallmgr's config is updated.
sbc_acls/0		List the known SBC ACLs for the current ecallmgr
sbc_acls/1	(boolean())	Pass true for the default list of ACLs
show_calls/0		Deprecated: use channel_summary or channel_details
show_channels/0		Deprecated: use channel_summary or channel_details
sync_channels/0		Reconcile ecallmgr's list of channels against known channels on the FreeSWITCH servers. Useful during disconnect/reconnect scenarios if the list isn't reflecting the actual channels up.
sync_channels/1	(Node)	Reconcile channels against the FreeSWITCH Node
sync_conferences/0		Reconcile ecallmgr's list of conferences against known conferences on the FreeSWITCH servers. Useful during disconnect/reconnect scenarios if the list isn't reflecting the actual conferences up.
sync_conferences/1	(Node)	Reconcile conferences against the FreeSWITCH Node
test_carrier_ip/1	(IP)	Tests an IP address against all connected FreeSWITCH servers and reports if it would be allowed or denied by the carrier ACLs.
test_carrier_ip/2	(IP,Node)	Tests an IP address against a specific FreeSWITCH server and reports if it would be allowed or denied by the carrier ACLs.
test_sbc_ip/1	(IP)	Tests an IP address against all connected FreeSWITCH servers and reports if it would be allowed or denied by the SBC ACLs.
test_sbc_ip/2	(IP,Node)	Tests an IP address against a specific FreeSWITCH server and reports if it would be allowed or denied by the SBC ACLs.
```
