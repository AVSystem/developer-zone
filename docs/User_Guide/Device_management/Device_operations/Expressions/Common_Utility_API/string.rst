.. _UG_E_CUA_string_object:

.. role:: sign
.. role:: sym

``string`` object
=================

Contains utility functions for manipulating textual values.

Most of these functions should be already available as part of a native API of :ref:`String API`, thus making the
``string`` object a legacy API.

API reference
-------------

.. This API is from: com.avsystem.ump.util.expr.function.StringUtil

| :sign:`string.`:sym:`concat`:sign:`(parts: String*): String`

  Returns a new string which is concatenation of the given ``parts``.

| :sign:`string.`:sym:`contains`:sign:`(list: String, item: String): Boolean`

  Returns true if ``list`` (comma-separated values) contains ``item``. Returns false otherwise.

| :sign:`string.`:sym:`extract`:sign:`(string: String): Double`

  Returns a double value of the first extracted number. If ``string`` is null or there is no number, returns 0.

| :sign:`string.`:sym:`join`:sign:`(list: java.util.Collection[String], separator: String): String`

  Returns a new string which is concatenation of ``list`` of strings with the given ``separator``.

| :sign:`string.`:sym:`leftPad`:sign:`(str: String, length: Int, padStr: String): String`

  Prepends the ``str`` string with the given ``padStr`` (repeated or trimmed if needed) so that a resulting string has desired ``length``.

| :sign:`string.`:sym:`random`:sign:`(length: Int): String`

  Returns a random string with the given ``length``.

| :sign:`string.`:sym:`regexFind`:sign:`(value: String, pattern: String): String`

  Returns a string which matches the given ``pattern`` or null if there is no match.

| :sign:`string.`:sym:`regexMatches`:sign:`(value: String, pattern: String): Boolean`

  Returns true if the string ``value`` matches the given ``pattern``. Returns false otherwise.

| :sign:`string.`:sym:`regexReplace`:sign:`(value: String, pattern: String, replacement: String): String`

  Returns a new string with a replaced first part of ``value`` which ``replacement`` which match to the given ``pattern``.

| :sign:`string.`:sym:`regexReplaceAll`:sign:`(value: String, pattern: String, replacement: String): String`

  Returns a new string with a replaced parts of ``value`` which ``replacement`` which match to the given ``pattern``.

| :sign:`string.`:sym:`removeEnd`:sign:`(source: String, end: String): String`

  Returns a new string with a removed ``end`` from a ``source`` string.

| :sign:`string.`:sym:`removeStart`:sign:`(source: String, start: String): String`

  Returns a new string with a removed ``start`` from a ``source`` string.

| :sign:`string.`:sym:`removeTRRoot`:sign:`(source: String): String`

  Returns a new string with a removed ``InternetGatewayDevice.`` or ``Device.`` from a ``source``.

| :sign:`string.`:sym:`replace`:sign:`(str: String, find: String, replacement: String): String`

  Returns a new string from ``str`` with a replaced ``find`` parts with ``replacement``.

| :sign:`string.`:sym:`rightPad`:sign:`(str: String, length: Int, padStr: String): String`

  Appends to ``str`` with a given ``padStr`` (repeated or trimmed if needed) so that a resulting string has desired ``length``.

| :sign:`string.`:sym:`slice`:sign:`(item: String, from: Int, to: Int, dot: Boolean): String`

  Returns a new string which contains parts from ``item`` between ``from`` and ``to`` bounds. The part is not a single
  character but a string between ``.``.
  If ``dot`` is true, the ``.`` will be added to an end of a result.
  For example, ``string.slice("a.b.c.d", 1, 2, true)`` will return ``"b.c."``.

| :sign:`string.`:sym:`slice`:sign:`(item: String, from: Int): String`

  Returns a new string which contains parts from ``item`` omitting parts before ``from``. The part is not a single
  character but a string between ``.``.
  If ``item`` ends with ``.``, the ``.`` will be added to a result.
  For example, ``string.slice("a.b.c.d.", 2)`` will return ``"c.d."``.

| :sign:`string.`:sym:`split`:sign:`(str: String, separator: String): Array[String]`

  Returns an array of strings split from ``str`` with the given ``separator``.

| :sign:`string.`:sym:`stringContains`:sign:`(source: String, item: String): Boolean`

  Returns true if ``source`` contains ``item``.

| :sign:`string.`:sym:`stripToAlphanumeric`:sign:`(source: String, replacement: String): String`

  Returns a new string with replaced alphanumeric characters with ``replacement`` from ``source`` string.

| :sign:`string.`:sym:`subString`:sign:`(str: String, from: Int, to: Int): String`

  Returns a substring of ``str`` within ``from`` and ``to`` bounds.

| :sign:`string.`:sym:`trimToEmpty`:sign:`(str: String): String`

  Returns a string with a removed white spaces from ``str``. If ``str`` is null, returns an empty string.
