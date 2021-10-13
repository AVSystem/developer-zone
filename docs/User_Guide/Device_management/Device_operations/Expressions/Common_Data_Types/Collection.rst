.. _Collection API:

.. role:: sign
.. role:: sym

``Collection``
==============

``Collection`` is a common supertype of :ref:`List API` and :ref:`Set API`, which means that both ``List`` and ``Set``
expose API from ``Collection``.

API reference
-------------

Collections expose :ref:`Universal API` plus operations listed below.

``Coll`` can be any of: ``Collection``, ``List`` or ``Set``.
``A`` denotes type of collection elements (which can be of any type).

| :sign:`(coll: Coll[A])` :sym:`++` :sign:`(other: Coll[A]): Coll[A]`

  Returns a new collection which is composed of collection ``coll`` and ``other``.

| :sign:`(coll: Coll[A]).`:sym:`anyElement`:sign:`: A`

  Returns any element from a collection ``coll``. Fails for an empty collection.

| :sign:`(coll: Coll[A]).`:sym:`contains`:sign:`(o: A): Boolean`

  Returns true if a collection ``coll`` contains an element `o`. Returns false otherwise.

| :sign:`(coll: Coll[A]).`:sym:`containsAll`:sign:`(c: Coll[A]): Boolean`

  Returns true if a collection ``coll`` contains all of elements provided in a collection ``c``. Returns false otherwise.

| :sign:`(coll: Coll[A]).`:sym:`containsAny`:sign:`(other: Coll[A]): Boolean`

  Returns true if a collection ``coll`` contains at least one of elements provided in a collection ``other``. Returns false otherwise.

| :sign:`(coll: Coll[A]).`:sym:`count`:sign:`(p: A => Boolean): Int`

  Returns a number of elements from a collection ``coll`` which satisfies a given predicate ``p``.

| :sign:`(coll: Coll[A]).`:sym:`empty`:sign:`: Boolean`

  Returns true if a collection ``coll`` is empty. Returns false otherwise.

| :sign:`(coll: Coll[A]).`:sym:`exists`:sign:`(p: A => Boolean): Boolean`

  Returns true if in a collection ``coll`` exists an element which satisfies a given predicate ``p``.

| :sign:`(coll: Coll[A]).`:sym:`filter`:sign:`(p: A => Boolean): Coll[A]`

  Returns a new collection leaving elements from a collection ``coll`` which satisfy a given predicate ``p``.

| :sign:`(coll: Coll[A]).`:sym:`find`:sign:`(p: A => Boolean): A`

  Returns the first element which satisfies a given predicate ``p``. Fails for an empty collection.

| :sign:`(coll: Coll[A]).`:sym:`fold`:sign:`(z: B)(f: (B, A) => B): B` - for an arbitrary type ``B``

  Returns folded elements of a collection ``coll`` using the specified associative binary operator ``f`` with a start value ``z``.

| :sign:`(coll: Coll[A]).`:sym:`forall`:sign:`(p: A => Boolean): Boolean`

  Returns true if all elements from a collection ``coll`` satisfy a given predicate ``p``. Returns false otherwise.

| :sign:`(coll: Coll[A]).`:sym:`isEmpty`:sign:`: Boolean`

  Returns true if a collection ``coll`` is empty. Returns false otherwise.

| :sign:`(coll: Coll[String]).`:sym:`join`:sign:`: String`

  Returns a joined collection of a string ``coll``.

| :sign:`(coll: Coll[String]).`:sym:`join`:sign:`(sep: String): String`

  Returns a joined collection of a string ``coll`` with a separator ``sep``.

| :sign:`(coll: Coll[A]).`:sym:`map`:sign:`(f: A => B): Coll[B]` - for arbitrary type ``B``

  Returns a new collection with elements from a collection ``coll`` mapped with a supplied function ``f``.

| :sign:`(coll: Coll[A]).`:sym:`max`:sign:`: A`

  Returns the largest element from a collection ``coll``. Fails for empty collection.

| :sign:`(coll: Coll[A]).`:sym:`maxBy`:sign:`(f: A => B): A` - for any type ``B`` that has natural ordering

  Returns an element from a collection ``coll`` for which a given function  ``f`` returns the largest value. Fails for an empty collection.

| :sign:`(coll: Coll[A]).`:sym:`mean`:sign:`: Double`

  Returns a computed mean of elements of a collection ``coll``. Fails for an empty collection.

| :sign:`(coll: Coll[A]).`:sym:`min`:sign:`: A`

  Returns the smallest element from a collection ``coll``. Fails for an empty collection.

| :sign:`(coll: Coll[A]).`:sym:`minBy`:sign:`(f: A => B): A` - for any type ``B`` that has natural ordering

  Returns an element from a collection ``coll`` for which a given function ``f`` returns the smallest value. Fails for an empty collection.

| :sign:`(coll: Coll[A]).`:sym:`nonEmpty`:sign:`: Boolean`

  Returns true if a collection ``coll`` is not empty. Returns false otherwise.

| :sign:`(coll: Coll[A]).`:sym:`size`:sign:`: Int`

  Returns a number of elements in a collection ``coll``.

| :sign:`(coll: Coll[A]).`:sym:`sum`:sign:`: A`

  Returns a computed sum of elements in a collection ``coll``. Returns zero for an empty collection.

| :sign:`(coll: Coll[A]).`:sym:`toList`:sign:`: List[A]`

  Returns a list created from a collection ``coll``.

| :sign:`(coll: Coll[A]).`:sym:`toSet`:sign:`: Set[A]`

  Returns a set created from a collection ``coll``.
