.. _Universal API:

.. role:: sign
.. role:: sym

Universal API
=============

Operators and methods available on all data types.

API reference
-------------

:sign:`(a1: A)` :sym:`==` :sign:`(a2: A): Boolean` - for arbitrary type :sign:`A`

  Compares two values for equality.

:sign:`(a1: A)` :sym:`!=` :sign:`(a2: A): Boolean` - for arbitrary type :sign:`A`

  Compares two values for inequality.

:sign:`(a: A)` :sym:`+` :sign:`(str: String)`

  Concatenates a textual representation of ``a`` with the string ``str``. This operator works only when
  type ``A`` has the textual representation (``toString`` method available).

:sign:`(a: A)` :sym:`->` :sign:`(b: B): (A, B)` - for arbitrary types :sign:`A` and :sign:`B`

  Creates a tuple out of two values. It is used primarily to create maps:

    ``map('one' -> 1, 'two' -> 2)``

:sign:`(a: A).`:sym:`useAs`:sign:`(f: A => B): B` - for arbitrary types :sign:`A` and :sign:`B`

  Applies a function ``f`` on ``a`` and returns a result of that function. ``useAs`` can be used to give a short
  identifier ("local variable") to some longer expression, for example:

    ``sv.someLongSvName.useAs(s => if(s.endsWith('.')) s else s + '.')``
