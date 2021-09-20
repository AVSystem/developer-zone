.. _Numeric types API:

.. role:: sign
.. role:: sym

Numeric types API
=================

Operators and methods available on all numeric types, i.e. :ref:`Byte API`, :ref:`Short API`, :ref:`Int API`,
:ref:`Long API`, :ref:`Float API` and :ref:`Double API`.

There is a number of operators and methods that works on two arbitrary numeric values that may be of different types.
For example, you can compare ``Int`` and ``Long`` for equality:

  ``10 == 10L``

Such operations work firstly by determining which type is more general. In this case the ``Long`` type is
deemed more general than ``Int`` (because every ``Int`` value can be converted to ``Double`` without loss of data).
Then, value of the less general type is converted to the other type. In this case, ``10`` will be converted to ``10L``
(as if ``toLong`` method was called on it). Now that the two values have the same type, an actual conversion will be
performed.

Additionally, ``Float`` and ``Double`` are defined to be more general than integral types, even though conversions may
be lossy, for example, large ``Long`` values may not be representable as ``Double``.

API reference
-------------

All numeric types expose :ref:`Universal API` plus operations listed below.

In definitions below, types ``A`` and ``B`` denote arbitrary numeric types while the type ``C`` denotes the "more general"
type out of ``A`` and ``B`` (for example, if ``A`` is ``Double`` and ``B`` is ``Int`` then ``C`` is ``Double``).

| :sign:`(a: A)` :sym:`==` :sign:`(b: B): Boolean`
| :sign:`(a: A)` :sym:`!=` :sign:`(b: B): Boolean`

  An equality and inequality comparison of two numeric values.

| :sign:`(a: A)` :sym:`<` :sign:`(b: B): Boolean`
| :sign:`(a: A)` :sym:`<=` :sign:`(b: B): Boolean`
| :sign:`(a: A)` :sym:`>` :sign:`(b: B): Boolean`
| :sign:`(a: A)` :sym:`>=` :sign:`(b: B): Boolean`

  An ordered comparison of two numeric values.

| :sign:`(a: A)` :sym:`+` :sign:`(b: B): C`
| :sign:`(a: A)` :sym:`-` :sign:`(b: B): C`
| :sign:`(a: A)` :sym:`*` :sign:`(b: B): C`
| :sign:`(a: A)` :sym:`/` :sign:`(b: B): C`
| :sign:`(a: A)` :sym:`%` :sign:`(b: B): C`

  Arithmetic operations on two numeric values. Remember that if both values are integral (neither ``Float`` nor ``Double``),
  then a result of division will also be integral (any decimal part will be lost).

| :sign:`(a: A).`:sym:`max`:sign:`(b: B): C`

  Minimum of two numeric values.

| :sign:`(a: A).`:sym:`min`:sign:`(b: B): C`

  Minimum of two numeric values.

| :sign:`(a: A).`:sym:`toByte`:sign:`: Byte`
| :sign:`(a: A).`:sym:`toShort`:sign:`: Short`
| :sign:`(a: A).`:sym:`toInt`:sign:`: Int`
| :sign:`(a: A).`:sym:`toLong`:sign:`: Long`
| :sign:`(a: A).`:sym:`toFloat`:sign:`: Float`
| :sign:`(a: A).`:sym:`toDouble`:sign:`: Double`

  These methods convert a numeric value to other desired numeric type. If the result type is less general/precise
  than the original type, a conversion may be lossy.

| :sign:`(a: A).`:sym:`toChar`:sign:`: Char`

  Converts this numeric value to a character value, treating the numeric value as Unicode code point for some
  character.

| :sign:`(a: A).`:sym:`toString`:sign:`: String`

  Returns a textual representation of given numeric value.