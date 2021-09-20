.. _UG_E_CUA_format_object:

.. role:: sign
.. role:: sym

``format`` object
=================

Contains miscellaneous conversion utilities.

API reference
-------------

.. This API is from: com.avsystem.ump.util.expr.function.FormatUtil

| :sign:`format.`:sym:`asNumber`:sign:`(value: String): Number`

  Returns a number for ``value`` string. If ``value`` is "", 0 is returned. If the format of ``value`` is not correct,
  the method fails.

| :sign:`format.`:sym:`isNumeric`:sign:`(value: String): Boolean`

  Returns true if ``value`` is numeric.

| :sign:`format.`:sym:`join`:sign:`(collection: Collection[String], delimiter: String): String`

  Returns joined ``collection`` where ``delimiter`` is used as a separator.

| :sign:`format.`:sym:`join`:sign:`(collection: Collection[String]): String`

  Returns joined ``collection`` where "" is used as a separator.

| :sign:`format.`:sym:`normalizeBytes`:sign:`(bytes: Long): String`

  Returns the string of normalized value for ``bytes``.

| :sign:`format.`:sym:`normalizeValue`:sign:`(value: Long, inputUnitIndex: Int, siCompliance: Boolean, unitName: String): String`

  Returns the string of normalized ``value``.
  If ``siCompliance`` is false, the binary base will be used, otherwise decimal.
  ``unitName`` is the string which will be added to the end of the returned value.


| :sign:`format.`:sym:`normalizeValue`:sign:`(value: Long, siCompliance: Boolean, unitName: String): String`

  Returns the string of normalized ``value``.
  If ``siCompliance`` is false, the binary base will be used, otherwise decimal.
  ``unitName`` is the string which will be added to the end of the returned value.

| :sign:`format.`:sym:`secondsToPeriod`:sign:`(seconds: Long): String`
  Returns the string representation of ``seconds``.
  For example, for value of ``1000`` a result will be ``16m 40s``.
