.. _RefreshDataModelTask:

====================
RefreshDataModelTask
====================

.. figure:: images/1.*
   :align: center

   *Fig. RefreshDataModelTask*

It updates the data model of a device, both its structure and parameter values. It invokes *GetParameterNames* and *GetParameterValues*. By default, it is set as inactive in the system and replaced by the :ref:`Lwm2mBestEffortGetTask`.

+---------------+---------------+---------+-------------------------------------------------------------------------------+
| Property name | XML attribute | Type    | Description                                                                   |
+===============+===============+=========+===============================================================================+
| Use quota     | useQuota      | boolean | It is recommended to set it to *true*. Read more in the :ref:`Quota` chapter. |
+---------------+---------------+---------+-------------------------------------------------------------------------------+
