.. _Lwm2mSoftwareManagementTask:

===========================
Lwm2mSoftwareManagementTask
===========================

.. figure:: images/Lwm2mSoftwareManagementTask.*
  :align: center

  *Fig. Lwm2mSoftwareManagementTask*

It executes installation and uninstallation of software.

+-------------------+----------------+---------+--------------------------------------------------------------------------------------------------------------------------------------------+
| Property name     | XML attribute  | Type    | Description                                                                                                                                |
+===================+================+=========+============================================================================================================================================+
| Operation         | operation      | string  | An operation that will be performed.                                                                                                       |
+-------------------+----------------+---------+--------------------------------------------------------------------------------------------------------------------------------------------+
| Resource          | resourceId     | string  | A package file.                                                                                                                            |
+-------------------+----------------+---------+--------------------------------------------------------------------------------------------------------------------------------------------+
| Delivery method   | transferMethod | string  | :guilabel:`Push` - use CoAP blockwise transfer, :guilabel:`Pull` - use URI for download.                                                   |
+-------------------+----------------+---------+--------------------------------------------------------------------------------------------------------------------------------------------+
| Instance ID       | instanceId     | string  | An instance ID representing a software package.                                                                                            |
+-------------------+----------------+---------+--------------------------------------------------------------------------------------------------------------------------------------------+
| Transfer protocol | protocol       | string  | A protocol to conduct a client pull.                                                                                                       |
+-------------------+----------------+---------+--------------------------------------------------------------------------------------------------------------------------------------------+
| Base URL          | baseUrl        | string  | Protocol, host and port. If it is not set, then it will be determined on the basis of an download protocol and SVs                         |
|                   |                |         | (preferredPublicURLBase/preferredPublicURLBaseHTTP/preferredPublicURLBaseFTP). If SV is not available, then a default value from Coiote DM |
|                   |                |         | configuration will be used.                                                                                                                |
+-------------------+----------------+---------+--------------------------------------------------------------------------------------------------------------------------------------------+
| Use quota         | useQuota       | boolean | Use quota to restrict resources available for the task.                                                                                    |
+-------------------+----------------+---------+--------------------------------------------------------------------------------------------------------------------------------------------+
| Blocking          | blocking       | boolean | If it is set to *true*, then other tasks will not be executed until this task ends.                                                        |
+-------------------+----------------+---------+--------------------------------------------------------------------------------------------------------------------------------------------+
| Upgrade timeout   | timeoutInSec   | integer | Timeout is seconds.                                                                                                                        |
+-------------------+----------------+---------+--------------------------------------------------------------------------------------------------------------------------------------------+
