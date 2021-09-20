.. _task object:

.. role:: sign
.. role:: sym
.. role:: dyn

``task`` object
===============

Provides access to information about a currently executed task.

API reference
-------------

.. This API is from: com.avsystem.ump.core.db.entities.Task

| :sign:`task.`:sym:`active`:sign:`: Boolean`

  Returns true if a ``task`` is active.

| :sign:`task.`:sym:`appliesToSubgroups`:sign:`: Boolean`

  Returns true if a group ``task`` will be invoked on subgroups.

| :sign:`task.`:sym:`creationTime`:sign:`: Date`

  Returns a creation date of a ``task``.

| :sign:`task.`:sym:`device`:sign:`: String`

  Returns an id of a device if a ``task`` is a device task. Returns null if it is not the device task.

| :sign:`task.`:sym:`domain`:sign:`: String`

  Returns a multitenancy domain of a ``task``.

| :sign:`task.`:sym:`group`:sign:`: String`

  Returns an id of a group if a ``task`` is a group task.  Returns null if it is not the group task.

| :sign:`task.`:sym:`id`:sign:`: String`

  Returns an id of a ``task``.

| :sign:`task.`:sym:`idSuffix`:sign:`: String`

  Returns the suffix of ``task``\ 's id.

| :sign:`task.`:sym:`isActive`:sign:`: Boolean`

  Returns true if a ``task`` is active (will be executed during a session).

| :sign:`task.`:sym:`isAppliesToSubgroups`:sign:`: Boolean`

  Returns true if a group ``task`` will be invoked on subgroups.

| :sign:`task.`:sym:`lastFailedRestartTime`:sign:`: Date`

  Returns the last time of failed restart for a ``task``.

| :sign:`task.`:sym:`lastRestartTime`:sign:`: Date`

  Returns the last time restart for a ``task``.

| :sign:`task.`:sym:`name`:sign:`: String`

  Returns a name of a ``task``.

| :sign:`task.`:sym:`parent`:sign:`: String`

  Returns a parent task id of a ``task``.

| :sign:`task.`:sym:`properties`:sign:`: Map[String,String]`

  Returns ``task`` properties. The key is a property name.

| :sign:`task.`:sym:`property.`:dyn:`<propertyName>`:sign:`: String`

  Returns a value of a property for a given ``propertyName``.
  For example, you can write ``task.property.myProperty``.
