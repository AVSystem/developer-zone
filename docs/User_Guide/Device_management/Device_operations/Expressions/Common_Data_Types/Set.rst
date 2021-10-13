.. _Set API:

.. role:: sign
.. role:: sym

``Set``
=======

``Set`` is a collection which guarantees that no element is duplicated but also does not guarantee
any particular order of elements.

A set can be created using the ``set`` function, for example:

  ``set(1,2,3)``

or by converting some other collection to a set:

  ``list(1,2,3).toSet``

API reference
-------------

Sets expose :ref:`Universal API` and API from :ref:`Collection API` plus operations listed below.

``A`` denotes a type of list elements (which can be of any type).

| :sign:`(s: Set[A]).`:sym:`diff`:sign:`(other: Set[A]): Set[A]`

  Returns a new set which is a difference of set ``s`` and set ``other``.
  The returned set will contain all elements of set ``s`` which are not in the set ``other``.

| :sign:`(s: Set[A]).`:sym:`intersect`:sign:`(other: Set[A]): Set[A]`

  Returns a new set which is an intersection of the set ``s`` and set ``other``.
  The returned set will contain all elements of the set ``s`` which are in the set ``other``.

| :sign:`(s: Set[A]).`:sym:`union`:sign:`(other: Set[A]): Set[A]`

  Returns a new set which is an union of the set ``s`` and set ``other``.
  The returned set will contain all elements of the set ``s`` and all elements of the set ``other``.
