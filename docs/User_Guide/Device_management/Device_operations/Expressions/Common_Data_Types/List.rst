.. _List API:

.. role:: sign
.. role:: sym

``List``
========

``List`` is a collection which keeps its elements as a linear sequence.

Lists can be created using the ``list`` function, for example:

  ``list(1,2,3,4,5)``

or by converting some other collection to a list:

  ``someSet.toList``

Also, lists of textual values are also often created by splitting some textual value using some separator:

  ``'a,b,c'.splitBy(',')``

List elements can be accessed by index using parentheses, for example:

  ``someList(3)``

obtains *fourth* element of ``someList`` (elements are indexed starting from 0).

API reference
-------------

Lists expose :ref:`Universal API` and API of :ref:`Collection API` plus operations listed below.

``A`` denotes a type of list elements (which can be of any type).

| :sign:`(l: List[A]).`:sym:`apply`:sign:`(index: Int): A`

  Returns an element at a given index in this list ``l``. The first element has index 0. Fails if index is out of range
  This method can be invoked using shorter syntax, for example, ``someList(1)`` instead of ``someList.apply(1)``.

| :sign:`(l: List[A]).`:sym:`drop`:sign:`(amount: Int): List[A]`

  Returns a new list with dropped specified ``amount`` of elements from the beginning of a list ``l``.
  Returns an empty list if the list ``l`` has less elements than the specified ``amount``.

| :sign:`(l: List[A]).`:sym:`dropRight`:sign:`(amount: Int): List[A]`

  Returns a new list with dropped specified ``amount`` of elements from the end of a list ``l``.
  Returns an empty list if the list ``l`` has less elements than the specified ``amount``.

| :sign:`(l: List[A]).`:sym:`dropWhile`:sign:`(p: A => Boolean): List[A]`

  Returns a new list with dropped the longest prefix of elements of the list ``l`` which satisfies a given predicate.

| :sign:`(l: List[A]).`:sym:`foldLeft`:sign:`(start: B)(f: (B, A) => B): B` - for arbitrary type ``B``

  Applies a binary operator to a ``start`` value and every element of the list ``l``, going left to right. Returns a final value.

| :sign:`(l: List[A]).`:sym:`foldRight`:sign:`(start: B)(f: (A, B) => B): B` - for arbitrary type ``B``

  Applies a binary operator to a ``start`` value and every element of the list ``l``, going right to left. Returns a final value.

| :sign:`(l: List[A]).`:sym:`get`:sign:`(index: Int): A`

  Returns an element at a given ``index`` in the list ``l``. The first element has index 0. Fails if index is out of range.

| :sign:`(l: List[A]).`:sym:`reverse`:sign:`: List[A]`

  Returns a new list which is the reversed list ``l``.

| :sign:`(l: List[A]).`:sym:`slice`:sign:`(from: Int, until: Int): List[A]`

  Returns a sublist of the list ``l`` with elements at indices starting at ``from`` and ending at ``until-1``.
  The ``from`` argument will be adjusted to 0 if it is negative and ``until will be adjusted to ``size-1``
  if it is larger than the size of the list ``l``.

| :sign:`(l: List[A]).`:sym:`sortBy`:sign:`(f: A => B): List[A]` - for any type ``B`` that has natural ordering

  Returns the list ``l`` sorted using natural ordering on values returned by a given function ``f``.

| :sign:`(l: List[A]).`:sym:`sorted`:sign:`: List[A]`

  Returns the list ``l`` sorted using natural ordering.

| :sign:`(l: List[A]).`:sym:`take`:sign:`(length: Int): List[A]`

  Returns prefix of the list ``l`` with a specified ``length``. Returns the same list if it is too short.

| :sign:`(l: List[A]).`:sym:`takeRight`:sign:`(length: Int): List[A]`

  Returns suffix of the list ``l`` with a specified ``length``. Returns the same list if it is too short.

| :sign:`(l: List[A]).`:sym:`takeWhile`:sign:`(p: A => Boolean): List[A]`

  Returns the longest prefix of the list ``l`` which satisfies a given predicate ``p``.

