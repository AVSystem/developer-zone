.. _Lwm2mBestEffortGetTask:

======================
Lwm2mBestEffortGetTask
======================

.. figure:: images/Lwm2mBestEffortGet_Task.*
   :align: center

   *Fig. Lwm2mBestEffortGetTask*

This task is supported by LwM2M. It gets the device parameters in the best-effort way. It is used by the system as a default task for refreshing the data model.

+-----------------------------+-----------------------+---------+-------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Property name               | XML attribute         | Type    | Description                                                                                                                                                 |
+=============================+=======================+=========+=============================================================================================================================================================+
| Data model key              | key                   | string  | Requests only for children of a given key will be performed.                                                                                                |
+-----------------------------+-----------------------+---------+-------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Use data model refresh      | useRefreshDataModel   | boolean | Allows to try to refresh a full data model. This parameter applies only when a key is an empty path.                                                        |
+-----------------------------+-----------------------+---------+-------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Use Read on object          | useObjectRead         | boolean | Allows to use *Read* requests targeting a LwM2M object to get children of the given key.                                                                    |
+-----------------------------+-----------------------+---------+-------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Use Read on object instance | useObjectInstanceRead | boolean | Allows to use *Read* requests targeting a LwM2M object instance to get children of the given key.                                                           |
+-----------------------------+-----------------------+---------+-------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Use Read on resource        | useResourceRead       | boolean | Allows to use *Read* requests targeting a LwM2M resource to get children of the given key.                                                                  |
+-----------------------------+-----------------------+---------+-------------------------------------------------------------------------------------------------------------------------------------------------------------+
| With Discover               | useDiscover           | boolean | Allows to use the *Discover* request. This request allows to find executable and write-only parameters supported by a device. It also retrieves attributes. |
+-----------------------------+-----------------------+---------+-------------------------------------------------------------------------------------------------------------------------------------------------------------+
