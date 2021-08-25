.. _UG_E_PEC_sv_object:

.. role:: sign
.. role:: sym
.. role:: dyn

``sv`` object
=============

Provides access to a device Setting Value profile.

API reference
-------------

| :sign:`sv.`:sym:`get`:sign:`(svName: String): String`

  Returns a value of SV with a given name. ``null`` is returned when there is no value, but you can provide a fallback
  value with ``?`` operator, for example, ``sv.get('someSv') ? 'defaultValue'``.

| :sign:`sv.`:dyn:`<svName>`:sign:`: String`

  This is an alternative syntax for ``get(svName: String)``. For example, you can write ``sv.someSv`` instead of
  ``sv.get('someSv')``. If a name of SV contains non-alphanumerical characters, you can still use this syntax but with
  additional backticks, for example, ``sv.`some.complex.sv.name```.
