.. _AddObjectTask:

=============
AddObjectTask
=============

.. figure:: images/1.*
  :align: center

  *Fig. AddObjectTask*

It creates a new instance of a writable node.

+---------------+---------------+--------+----------------------+
| Property name | XML attribute | Type   | Description          |
+===============+===============+========+======================+
| Array path    | objectName    | string | A name of the object |
+---------------+---------------+--------+----------------------+

This task allows for one subtag:

+---------------+----------------------------------------------------------------------+
| Property name | Description                                                          |
+===============+======================================================================+
| with          | Specifies an initial value for a parameter of a new object instance. |
+---------------+----------------------------------------------------------------------+

The following fields are available for the :guilabel:`with` subtag:

.. figure:: images/AddObjectTask_with_tag.*
  :align: center

  *Fig. The with subtag*

+-------------------+---------------+--------+--------------------------------------------------------------------------------------------------+
| Property name     | XML attribute | Type   | Description                                                                                      |
+===================+===============+========+==================================================================================================+
| Key for parameter | key           | string | A key relative to *parentKey.i.*.                                                                |
+-------------------+---------------+--------+--------------------------------------------------------------------------------------------------+
| Value             | value         | string | A new value.                                                                                     |
+-------------------+---------------+--------+--------------------------------------------------------------------------------------------------+
| Type              | type          | string | A type of a value. If it is left empty; then ACS will try to infer a type on a basis of the key. |
+-------------------+---------------+--------+--------------------------------------------------------------------------------------------------+
