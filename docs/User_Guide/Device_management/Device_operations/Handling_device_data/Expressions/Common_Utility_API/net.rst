.. _UG_E_CUA_net_object:

.. role:: sign
.. role:: sym

``net`` object
==============

Contains utility functions for manipulating MAC addresses, IP addresses, etc.

Some of these functions should be already available as part of a native API of :ref:`String API`.

API reference
-------------

.. This API is from: com.avsystem.ump.util.expr.function.NetUtil

| :sign:`net.`:sym:`compareIp`:sign:`(ip1: String, ip2: String): Integer`

  Returns true if ``ip1`` equals ``ip2``. Fails if arguments are not valid IP addresses.

| :sign:`net.`:sym:`isIp`:sign:`(ip: String): Boolean`

  Returns true if the given string ``ip`` is a valid IP address. Returns false otherwise.

| :sign:`net.`:sym:`isIpInSubnet`:sign:`(ip: String, subnetWithMask: String): Boolean`

  Returns true if ``ip`` is in the given ``subnetWithMask``. The format of ``subnetWithMask`` should be CIDR signature (for example, 192.168.0.57/27).

| :sign:`net.`:sym:`isIpInSubnetWithMask`:sign:`(ip: String, subnet: String, mask: String): Boolean`

  Returns true if ``ip`` is in the given ``subnet`` with ``mask``.

| :sign:`net.`:sym:`isIps`:sign:`(ips: String): Boolean`

  Returns true if ``ips`` is the list of IPs separated with a comma.

| :sign:`net.`:sym:`isMac`:sign:`(mac: String): Boolean`

  Returns true if ``mac`` is a valid MAC address. Returns false otherwise.

| :sign:`net.`:sym:`networkAddress`:sign:`(ip: String, mask: String): String`

  Returns the network address of ``ip`` within ``mask``.

| :sign:`net.`:sym:`stripMac`:sign:`(mac: String): String`

  Returns a new string with a stripped MAC address from ``mac``.