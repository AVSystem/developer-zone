.. _Provisioning expression context:

.. role:: sign
.. role:: sym

Provisioning expression context
===============================

When using an expression in provisioning (for example, in task configurations), expression API exposes all of the
:ref:`Common utility API`, but also exposes additional objects that give access to data associated with a particular
device and a provisioning session.

Provisioning expression context also uses some additional, specialized data types. Most of them are enumeration types.
These are:

 * ``TaskReport.Status`` - represents a task execution status. Possible values are
   ``IN_PROGRESS``, ``SUCCESS``, ``WARNING`` and ``ERROR``.
 * ``LogLevel`` - represents a logging level (used for example, in ``log`` tag in XML task) - possible
   values are ``TRACE``, ``DEBUG``, ``INFO``, ``WARN``, ``ERROR``, ``OFF``.
 * ``AlertStatus`` - represents a monitoring alert status. Possible values are ``IS_RAISED`` or ``IS_HIDDEN``.
 * ``FileType`` - represents a type of a resource being downloaded by a device from Coiote DM or uploaded by the device to UMP.
   See :ref:`transfer object` for more information.
 * ``ProtocolType`` - represents a protocol used for file transfer. See :ref:`transfer object` for more information.

API reference
-------------

| :sym:`device`

  Provides access to device data.

| :sym:`dm`

  Provides access to a device data model saved in the Coiote DM database. Usage of ``dm`` object is discouraged - it may cause
  performance problems.

| :sym:`root`

  Allows to define a live data model query. Such a query may be supplied to :ref:`find <XmlTask_find>` and
  :ref:`foreach <XmlTask_foreach>` tags in :ref:`XmlTask` to traverse a device data model in a desired pattern.

| :sym:`query`

   Allows to define a live data model query - similar to :ref:`root object`.

| :sym:`prefix`

  Similar to :ref:`query object`.

| :sym:`sv`

  Provides access to a SV profile of a device.

| :sym:`task`

  Provides access to information about a currently executed task.

| :sym:`taskReport`

  Provides access to data in a report of a currently executed task.

| :sym:`transfer`

  Utilities for file transfer between devices and Coiote DM resources.

| :sym:`res`

  Provides access to CSV resources.

| :sym:`lwm2m`

  Provides access to data about LwM2M Session. This works only for LwM2M provisioned devices.

**See also:**

.. toctree::
   :maxdepth: 1

   Provisioning_Expression_Context/device
   Provisioning_Expression_Context/dm
   Provisioning_Expression_Context/root
   Provisioning_Expression_Context/sv
   Provisioning_Expression_Context/task
   Provisioning_Expression_Context/taskReport
   Provisioning_Expression_Context/transfer
   Provisioning_Expression_Context/res
   Provisioning_Expression_Context/query
   Provisioning_Expression_Context/prefix
   Provisioning_Expression_Context/lwm2m