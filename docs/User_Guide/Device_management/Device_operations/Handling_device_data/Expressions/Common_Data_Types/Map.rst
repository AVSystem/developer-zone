.. _Map API:

.. role:: sign
.. role:: sym

``Map``
=======

Maps are unordered key-value associations, where every key may have only one value associated with it.

Maps can be created using the ``map`` function, which takes a sequence of key-value pairs. Each pair is created using
the ``->`` operator:

  ``map('one' -> 1, 'two' -> 2)``

A value associated with a given key can be obtained using parentheses, for example:

  ``someMap('one')``

obtains a value associated with a textual key ``'one'``.

API reference
-------------

Maps expose :ref:`Universal API` plus operations defined below.

``K`` denotes an arbitrary key type and ``V`` denotes an arbitrary value type.
:ref:`Entry API` represents a single key-value association.

| :sign:`(m: Map[K,V])` :sym:`++` :sign:`(other: Map[K,V]): Map[K,V]`

  Merges a map ``m`` with ``other`` map. If the two maps contain mappings with the same key, mappings from the ``other``
  map will override mappings from this map.

| :sign:`(m: Map[K,V]).`:sym:`apply`:sign:`(key: K): V`

  Returns a value to which a specified key is mapped or ``null`` if there is no mapping for the given key.
  This method can be used with a shorter syntax, for example, ``someMap('key')`` instead of ``someMap.apply('key')``.

| :sign:`(m: Map[K,V]).`:sym:`containsKey`:sign:`(key: K): Boolean`

  Returns true if the map ``m`` contains the value for ``key``. Returns false otherwise.

| :sign:`(m: Map[K,V]).`:sym:`containsValue`:sign:`(value: V): Boolean`

  Returns true if the map ``m`` contains the ``value``. Returns false otherwise.

| :sign:`(m: Map[K,V]).`:sym:`entries`:sign:`: Collection[Entry[K,V]]`

  Returns a collection of key-value mappings in the map ``m``.

| :sign:`(m: Map[K,V]).`:sym:`filter`:sign:`(p: Entry[K,V] => Boolean): Map[K,V]`

  Returns a new map leaving the entries which satisfy a given predicate ``p``.

| :sign:`(m: Map[K,V]).`:sym:`get`:sign:`(key: K): V`

  Returns a value to which a specified key is mapped or ``null`` if there is no mapping for the given key.

| :sign:`(m: Map[K,V]).`:sym:`isEmpty`:sign:`: Boolean`

  Returns true if a map does not contain any entries. Returns false otherwise.

| :sign:`(m: Map[K,V]).`:sym:`keySet`:sign:`: Set[K]`

  Returns a set of keys which exists in a map ``m``.

| :sign:`(m: Map[K,V]).`:sym:`map`:sign:`(f: Entry[K,V] => Entry[NK,NV]): Map[NK,NV]` - for arbitrary types ``NK`` and ``NV``

  Returns a new map where entries were mapped with a given function ``f``.

| :sign:`(m: Map[K,V]).`:sym:`nonEmpty`:sign:`: Boolean`

  Returns true if a map is not empty. Returns false otherwise.

| :sign:`(m: Map[K,V]).`:sym:`size`:sign:`: Int`

  Returns a number of entries in a map ``m``.

| :sign:`(m: Map[K,V]).`:sym:`values`:sign:`: Collection[V]`

  Returns a collection of values which exists in a map ``m``.