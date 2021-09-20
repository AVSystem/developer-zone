.. _Boolean API:

.. role:: sign
.. role:: sym

``Boolean``
===========

The ``Boolean`` type represents boolean values, i.e. ``true`` or ``false``.

API reference
-------------

``Boolean`` values expose :ref:`Universal API` plus operations listed below.

:sym:`!`:sign:`(b: Boolean)`

  An unary operator for a logical negation.

| :sign:`(b1: Boolean)` :sym:`&&` :sign:`(b2: Boolean): Boolean`
| :sign:`(b1: Boolean)` :sym:`and` :sign:`(b2: Boolean): Boolean`

  A logical conjunction (AND) of two boolean values.

| :sign:`(b1: Boolean)` :sym:`||` :sign:`(b2: Boolean): Boolean`
| :sign:`(b1: Boolean)` :sym:`or` :sign:`(b2: Boolean): Boolean`

  A logical alternative (OR) of two boolean values.

| :sign:`(b1: Boolean)` :sym:`<` :sign:`(b2: Boolean): Boolean`
| :sign:`(b1: Boolean)` :sym:`<=` :sign:`(b2: Boolean): Boolean`
| :sign:`(b1: Boolean)` :sym:`>` :sign:`(b2: Boolean): Boolean`
| :sign:`(b1: Boolean)` :sym:`>=` :sign:`(b2: Boolean): Boolean`

  Ordered comparison operators for boolean values. ``true`` is defined to be "greater" than ``false``.

:sign:`(b: Boolean).`:sym:`toString`:sign:`: String`

  Returns a textual representation of the boolean value, i.e. "true" or "false".
