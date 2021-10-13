.. _Char API:

.. role:: sign
.. role:: sym

``Char``
========

Single character values.

There are no character literals in an expression language but sometimes you may encounter character values when
working with strings. For example, here is an expression which filters a textual value leaving only digit characters:

  ``'abc0123cde45'.filter(_.isDigit)``

The ``_.isDigit`` part (``c => c.isDigit`` in a full form) is an anonymous function which works on a character value ``c``.

API reference
-------------

``Char`` values expose :ref:`Universal API` plus operations listed below.

| :sign:`(c: Char)` :sym:`<` :sign:`(x: Char): Boolean`
| :sign:`(c: Char)` :sym:`<=` :sign:`(x: Char): Boolean`
| :sign:`(c: Char)` :sym:`>` :sign:`(x: Char): Boolean`
| :sign:`(c: Char)` :sym:`>=` :sign:`(x: Char): Boolean`

  An ordered comparison of two character values. The actual values compared are Unicode code points of the two
  characters which match an alphabetical order of English, if only English characters are used.

| :sign:`(c: Char)` :sym:`<` :sign:`(x: N): Boolean`
| :sign:`(c: Char)` :sym:`<=` :sign:`(x: N): Boolean`
| :sign:`(c: Char)` :sym:`>` :sign:`(x: N): Boolean`
| :sign:`(c: Char)` :sym:`>=` :sign:`(x: N): Boolean`

  Ordered comparisons of a character value with some value of arbitrary numeric type ``N``. Before comparing,
  a character ``c`` is converted to ``N`` by using its Unicode code point.

| :sign:`(c: Char).`:sym:`toDouble`:sign:`: Double`
| :sign:`(c: Char).`:sym:`toFloat`:sign:`: Float`
| :sign:`(c: Char).`:sym:`toLong`:sign:`: Long`
| :sign:`(c: Char).`:sym:`toInt`:sign:`: Int`
| :sign:`(c: Char).`:sym:`toShort`:sign:`: Short`
| :sign:`(c: Char).`:sym:`toByte`:sign:`: Byte`

  Converts a character value to one of numeric values by using character's Unicode code point.

| :sign:`(c: Char).`:sym:`min`:sign:`(that: Char): Char`

  Minimum of two character values.

| :sign:`(c: Char).`:sym:`max`:sign:`(that: Char): Char`

  Maximum of two character values.

| :sign:`(c: Char).`:sym:`getNumericValue`:sign:`: Int`

  Returns the numeric value that the specified Unicode character represents. For example, the character '\u216C'
  (the roman numeral fifty) will return an int with a value of 50. The letters A-Z in their uppercase, lowercase,
  have numeric values from 10 through 35. If the character does not have a numeric value, then -1 is returned.
  If the character has a numeric value that cannot be represented as a nonnegative integer (for example, a fractional
  value), then -2 is returned.

| :sign:`(c: Char).`:sym:`toUpper`:sign:`: Char`

  Converts a character to its uppercase equivalent. If the character does not have an uppercase version, it is returned
  unchanged.

| :sign:`(c: Char).`:sym:`toLower`:sign:`: Char`

  Converts a character to its lowercase equivalent. If the character does not have a lowercase version, it is returned
  unchanged.

| :sign:`(c: Char).`:sym:`isUpper`:sign:`: Boolean`

  Determines if the specified character is an uppercase character.

| :sign:`(c: Char).`:sym:`isLower`:sign:`: Boolean`

  Determines if the specified character is a lowercase character.

| :sign:`(c: Char).`:sym:`isSpaceChar`:sign:`: Boolean`

  Determines if the specified character is a Unicode space character, as defined by the Unicode standard.

| :sign:`(c: Char).`:sym:`isWhitespace`:sign:`: Boolean`

  Determines if the specified character is white space. White space characters include:

   * Common space
   * Unicode space characters which are also not non-breaking spaces
   * Line feed
   * Form feed
   * Carriage return
   * Horizontal tabulation
   * Vertical tabulation
   * File separator
   * Group separator
   * Record separator
   * Unit separator

| :sign:`(c: Char).`:sym:`isLetterOrDigit`:sign:`: Boolean`

  Determines if the specified character is either a letter or digit.

| :sign:`(c: Char).`:sym:`isLetter`:sign:`: Boolean`

  Determines if the specified character is a letter.

| :sign:`(c: Char).`:sym:`isDigit`:sign:`: Boolean`

  Determines if the specified character is a digit.

| :sign:`(c: Char).`:sym:`isHexDigit`:sign:`: Boolean`

  Returns ``true`` if this characters is a hexadecimal digit (0-9, A-F, a-f).

| :sign:`(c: Char).`:sym:`isControl`:sign:`: Boolean`

  Determines if the specified character is a control character.

| :sign:`(c: Char).`:sym:`asDigit`:sign:`: Int`

  Returns a numeric value of the specified character treated as a digit, i.e. 0 for character ``0`` and 35 for
  character ``z``/``Z``.

| :sign:`(c: Char).`:sym:`toString`:sign:`: String`

  Returns a textual representation of this character, i.e. a string made of this character only.