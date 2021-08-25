.. _LWM2M_Lwm2mBootstrap_task:

==================
Lwm2mBootstrapTask
==================

Allows to initially configure devices and connect them with a regular server as well as a bootstrap server.

.. figure:: images/lwm2mBootstrapTask.*
   :align: center

   *Fig. The lwm2mBootstrapTask*

This tag allowes for two subtags:

+---------------+------------------------------------+
| Property name | Description                        |
+===============+====================================+
| bootstrap     | A bootstrap server configuration.  |
+---------------+------------------------------------+
| regular       | A management server configuration. |
+---------------+------------------------------------+

Both subtags have one field:

.. figure:: images/lwm2mBootstrapTask_subtag.*
   :align: center

   *Fig. The lwm2mBootstrapTask subtag*

+---------------+---------------+--------+--------------------------------------------------------------------------+
| Property name | XML attribute | Type   | Description                                                              |
+===============+===============+========+==========================================================================+
| Server name   | serverName    | string | A name of a server to be configured. The list contains names of servers. |
+---------------+---------------+--------+--------------------------------------------------------------------------+