.. _taskReport object:

.. role:: sign
.. role:: sym
.. role:: dyn

``taskReport`` object
=====================

Provides access to data in a report of a currently executed task.

API reference
-------------

.. This API is from: com.avsystem.ump.core.db.entities.TaskReport

| :sign:`taskReport.`:sym:`blocking`:sign:`: Boolean`

  Returns true if a task is in a state which is a blocking state but it is also not the last state of this task. It means
  that the same instance (with the same stored state) of this task will be invoked during the next provisioning session.

| :sign:`taskReport.`:sym:`device`:sign:`: String`

  Returns an id of a device for ``taskReport``.

| :sign:`taskReport.`:sym:`finishTime`:sign:`: Date`

  Returns finish time of a task.

| :sign:`taskReport.`:sym:`id`:sign:`: String`

  Returns an id of a ``taskReport``.

| :sign:`taskReport.`:sym:`lastUpdateTime`:sign:`: Date`

  Returns a date of a last update for a ``taskReport``.

| :sign:`taskReport.`:sym:`properties`:sign:`: Map[String,Any]`

  Returns a map of properties. The key is a property name.

| :sign:`taskReport.`:sym:`property.`:dyn:`<propertyName>`:sign:`: Any`

  This is an alternative syntax for using ``taskReport.properties``. For example, you can write
  ``taskReport.property.someProperty`` instead of ``taskReport.properties('someProperty')``.

| :sign:`taskReport.`:sym:`stage`:sign:`: String`

  Returns a stage of a task.

| :sign:`taskReport.`:sym:`startTime`:sign:`: Date`

  Returns a start date of a task.

| :sign:`taskReport.`:sym:`status`:sign:`: TaskReport.Status`

  Returns a current status of a task. Possible values are: ``NOT_STARTED``, ``IN_PROGRESS``, ``SUCCESS``, ``WARNING``, ``ERROR``.

| :sign:`taskReport.`:sym:`summary`:sign:`: String`

  Returns a summary of a ``taskReport``.

| :sign:`taskReport.`:sym:`task`:sign:`: String`

  Returns a task id of a ``taskReport``.

| :sign:`taskReport.`:sym:`trimmedSummary`:sign:`: String`

  Returns a trimmed summary of a ``taskReport``.
