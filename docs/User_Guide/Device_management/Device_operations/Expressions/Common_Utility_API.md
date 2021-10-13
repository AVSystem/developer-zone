# Common utility API

This section describes the expression API exposed by every expression context.

## API reference

The following global objects are available in every expression:

| `date`

  Contains utility functions for manipulating :ref:`Date API` objects.

| `format`

  Contains miscellaneous conversion utilities.

| `math`

  Contains various mathematical functions.

| `net`

  Contains utility functions for manipulating MAC addresses, IP addresses, etc.

| `string`

  Contains utility functions for manipulating textual values.

Following global functions are available in every expression:

| `list``(elements: A*): List[A]`

  Creates a :ref:`List API`

| `set``(elements: A*): Set[A]`

  Creates a :ref:`Set API`

| `map``(elements: (K,V)*): Map[K,V]`

  Creates a :ref:`Map API`

| `bytes``(bytes: Byte*): Bytes`

  Creates literal byte sequences.

## ``date`` object

Contains utility functions for manipulating :ref:`Date API` objects.

Most of these functions should already be available as a part of :ref:`Date API` native API, thus making the ``date``
object a legacy API.

### API reference

| `date.``addDays``(date: Date, days: Int): Date`

  Returns a new date with incremented days in ``date``.

| `date.``addHours``(date: Date, hours: Int): Date`

  Returns a new date with incremented hours in ``date``.

| `date.``addMilliseconds``(date: Date, milliseconds: Int): Date`

  Returns a new date with incremented milliseconds in ``date``.

| `date.``addMinutes``(date: Date, minutes: Int): Date`

  Returns a new date with incremented minutes in ``date``.

| `date.``addMonths``(date: Date, months: Int): Date`

  Returns a new date with incremented months in ``date``.

| `date.``addSeconds``(date: Date, seconds: Int): Date`

  Returns a new date with incremented seconds in ``date``.

| `date.``addWeeks``(date: Date, weeks: Int): Date`

  Returns a new date with incremented weeks in ``date``.

| `date.``addYears``(date: Date, years: Int): Date`

  Returns a new date with incremented years in ``date``.

| `date.``format``(date: Date, format: String): String`

  Returns a formatted ``date`` with a given ``format``.

| `date.``formatTimeRange``(from: Date, to: Date): String`

  Returns a formatted time range between a ``from`` date and a ``to`` date.

| `date.``formatTimeRange``(from: Long, to: Long): String`

  Returns a formatted time range between a ``from`` date and a ``to`` date. ``from`` and ``to`` are treated as values given in milliseconds.
  For example, if ``from`` is 100 and ``to`` is 1000, a result is ``0.1-1s``.

| `date.``formatTimeRange``(from: Double, to: Double): String`

  Returns a formatted time range between a ``from`` date and a ``to`` date. ``from`` and ``to`` are treated as values given in milliseconds.
  For example, if ``from`` is 100 and ``to`` is 1000, a result is ``0.1-1s``.

| `date.``isAfter``(date1: Date, date2: Date): Boolean`

  Returns true if ``date1`` is after ``date2``. Returns false otherwise.

| `date.``isBefore``(date1: Date, date2: Date): Boolean`

  Returns true if ``date1`` is before ``date2``. Returns false otherwise.

| `date.``isEqual``(date1: Date, date2: Date): Boolean`

  Returns true if ``date1`` equals ``date2``. Returns false otherwise.

| `date.``now``: Date`

  Returns a current date.

| `date.``roundToDay``(date: Date): Date`

  Returns a new date which is ``date`` rounded to days.

| `date.``roundToHours``(date: Date): Date`

  Returns a new date which is ``date`` rounded to hours.

| `date.``roundToMinutes``(date: Date): Date`

  Returns a new date which is ``date`` rounded to minutes.

| `date.``roundToMonth``(date: Date): Date`

  Returns a new date which is ``date`` rounded to months.

| `date.``roundToSeconds``(date: Date): Date`

  Returns a new date which is ``date`` rounded to seconds.

| `date.``roundToYear``(date: Date): Date`

  Returns a new date which is ``date`` rounded to years.

| `date.``setDays``(date: Date, days: Int): Date`

  Returns a new date which is ``date`` with a new value for ``days``.

| `date.``setHours``(date: Date, hours: Int): Date`

  Returns a new date which is ``date`` with a new value for ``hours``.

| `date.``setMilliseconds``(date: Date, milliseconds: Int): Date`

  Returns a new date which is ``date`` with a new value for ``milliseconds``.

| `date.``setMinutes``(date: Date, minutes: Int): Date`

  Returns a new date which is ``date`` with a new value for ``minutes``.

| `date.``setMonths``(date: Date, months: Int): Date`

  Returns a new date which is ``date`` with a new value for ``months``.

| `date.``setSeconds``(date: Date, seconds: Int): Date`

  Returns a new date which is ``date`` with a new value for ``seconds``.

| `date.``setYears``(date: Date, years: Int): Date`

  Returns a new date which is ``date`` with a new value for ``years``.

| `date.``truncateByDay``(date: Date): Date`

  Returns a truncated date ``date`` leaving a days field untouched.

| `date.``truncateByHours``(date: Date): Date`

  Returns a truncated date ``date`` leaving an hours field untouched.

| `date.``truncateByMinutes``(date: Date): Date`

  Returns a truncated date ``date`` leaving a minutes field untouched.

| `date.``truncateByMonth``(date: Date): Date`

  Returns a truncated date ``date`` leaving a months field untouched.

| `date.``truncateBySeconds``(date: Date): Date`

  Returns a truncated date ``date`` leaving a seconds field untouched.

| `date.``truncateByYear``(date: Date): Date`

  Returns a truncated date ``date`` leaving a years field untouched.

## ``format`` object

Contains miscellaneous conversion utilities.

### API reference

.. This API is from: com.avsystem.ump.util.expr.function.FormatUtil

| `format.``asNumber``(value: String): Number`

  Returns a number for ``value`` string. If ``value`` is "", 0 is returned. If the format of ``value`` is not correct,
  the method fails.

| `format.``isNumeric``(value: String): Boolean`

  Returns true if ``value`` is numeric.

| `format.``join``(collection: Collection[String], delimiter: String): String`

  Returns joined ``collection`` where ``delimiter`` is used as a separator.

| `format.``join``(collection: Collection[String]): String`

  Returns joined ``collection`` where "" is used as a separator.

| `format.``normalizeBytes``(bytes: Long): String`

  Returns the string of normalized value for ``bytes``.

| `format.``normalizeValue``(value: Long, inputUnitIndex: Int, siCompliance: Boolean, unitName: String): String`

  Returns the string of normalized ``value``.
  If ``siCompliance`` is false, the binary base will be used, otherwise decimal.
  ``unitName`` is the string which will be added to the end of the returned value.


| `format.``normalizeValue``(value: Long, siCompliance: Boolean, unitName: String): String`

  Returns the string of normalized ``value``.
  If ``siCompliance`` is false, the binary base will be used, otherwise decimal.
  ``unitName`` is the string which will be added to the end of the returned value.

| `format.``secondsToPeriod``(seconds: Long): String`
  Returns the string representation of ``seconds``.
  For example, for value of ``1000`` a result will be ``16m 40s``.

## ``math`` object

Contains various mathematical functions.

### API reference

| `math.``E``: Double`

  Returns the double value that is closer than any other to ``e``, the base of the natural logarithms.

| `math.``IEEEremainder``(x: Double, y: Double): Double`

  Returns the remainder resulting from the division of a specified number ``x`` by another specified number ``y``.

| `math.``Pi``: Double`

  Returns the double value that is closer than any other to ``pi``, the ratio of the circumference of a circle to its diameter.

| `math.``abs``(x: Double): Double`
| `math.``abs``(x: Float): Float`
| `math.``abs``(x: Long): Long`
| `math.``abs``(x: Int): Int`

  Above functions returns an absolute value of ``x``.

| `math.``acos``(x: Double): Double`

  Returns arccos of ``x``.

| `math.``asin``(x: Double): Double`

  Returns arcsin of ``x``.

| `math.``atan``(x: Double): Double`

  Returns arctan of ``x``.

| `math.``atan2``(y: Double, x: Double): Double`

  Returns converted rectangular coordinates (``x``, ``y``) to polar (r, theta).

| `math.``cbrt``(x: Double): Double`

  Returns the cube root of the given value ``x``.

| `math.``ceil``(x: Double): Double`

  Returns the smallest integer value greater than or equal to the given ``x``.

| `math.``cos``(x: Double): Double`

  Returns cosine value of ``x``.

| `math.``cosh``(x: Double): Double`

  Returns the hyperbolic cosine of the given value ``x``.

| `math.``exp``(x: Double): Double`

  Returns Euler's number e raised to the power of value ``x``.

| `math.``expm1``(x: Double): Double`

  Returns exp(``x``) - 1.

| `math.``floor``(x: Double): Double`

  Returns the greatest integer value smaller than or equal to the given ``x``.

| `math.``hypot``(x: Double, y: Double): Double`

  Returns the square root of the sum of the squares of both given values ``x`` and ``y`` without intermediate underflow or overflow.

| `math.``log``(x: Double): Double`

  Returns a value of the natural logarithm of a ``x``.

| `math.``log10``(x: Double): Double`

  Returns the value of base-10 logarithm of a ``x``.

| `math.``log1p``(x: Double): Double`

  Returns the natural logarithm of the sum of the given ``x`` and 1.

| `math.``max``(x: Double, y: Double): Double`
| `math.``max``(x: Float, y: Float): Float`
| `math.``max``(x: Long, y: Long): Long`
| `math.``max``(x: Int, y: Int): Int`

  Returns the greatest value of the given ``x`` and ``y``.

| `math.``min``(x: Double, y: Double): Double`
| `math.``min``(x: Float, y: Float): Float`
| `math.``min``(x: Long, y: Long): Long`
| `math.``min``(x: Int, y: Int): Int`

  Returns the smallest value of the given ``x`` and ``y``.

| `math.``pow``(x: Double, y: Double): Double`

  Returns the value of the ``x`` argument raised to the power of the ``y`` argument.

| `math.``random``: Double`

  Returns a value with a positive sign, greater than or equal to 0.0 and less than 1.0.

| `math.``rint``(x: Double): Double`

  Returns the value that is closest in a value to the ``x`` and is equal to a mathematical integer.

| `math.``round``(x: Double): Long`
| `math.``round``(x: Float): Int`
| `math.``round``(x: Long): Long`

  Returns the value that is nearest to ``x``, with halfway cases rounded away from zero.

| `math.``signum``(x: Double): Double`
| `math.``signum``(x: Float): Float`
| `math.``signum``(x: Long): Long`
| `math.``signum``(x: Int): Int`

  Returns:

  * 0 if ``x`` equals 0
  * 1 if ``x`` is greater than 0
  * -1 if ``x`` is less than 0.

| `math.``sin``(x: Double): Double`

  Returns a sine value of ``x``.

| `math.``sinh``(x: Double): Double`

  Returns a hyperbolic sine of the given value ``x``.

| `math.``sqrt``(x: Double): Double`

  Returns a square root of the value ``x``.

| `math.``tan``(x: Double): Double`

  Returns the tangent of the given value ``x``.

| `math.``tanh``(x: Double): Double`

  Returns a hyperbolic tangent of the given value ``x``.

| `math.``toDegrees``(x: Double): Double`

  Returns an angle measured in radians of ``x`` to an approximately equivalent angle measured in degrees.

| `math.``toRadians``(x: Double): Double`

  Returns an angle measured in degrees of ``x`` to an approximately equivalent angle measured in radians.

| `math.``ulp``(x: Float): Float`
| `math.``ulp``(x: Double): Double`

  Above methods returns the size of an ulp (unit in the last place) of the given value ``x``.

## ``string`` object

Contains utility functions for manipulating textual values.

Most of these functions should be already available as part of a native API of :ref:`String API`, thus making the
``string`` object a legacy API.

### API reference

| `string.``concat``(parts: String*): String`

  Returns a new string which is concatenation of the given ``parts``.

| `string.``contains``(list: String, item: String): Boolean`

  Returns true if ``list`` (comma-separated values) contains ``item``. Returns false otherwise.

| `string.``extract``(string: String): Double`

  Returns a double value of the first extracted number. If ``string`` is null or there is no number, returns 0.

| `string.``join``(list: java.util.Collection[String], separator: String): String`

  Returns a new string which is concatenation of ``list`` of strings with the given ``separator``.

| `string.``leftPad``(str: String, length: Int, padStr: String): String`

  Prepends the ``str`` string with the given ``padStr`` (repeated or trimmed if needed) so that a resulting string has desired ``length``.

| `string.``random``(length: Int): String`

  Returns a random string with the given ``length``.

| `string.``regexFind``(value: String, pattern: String): String`

  Returns a string which matches the given ``pattern`` or null if there is no match.

| `string.``regexMatches``(value: String, pattern: String): Boolean`

  Returns true if the string ``value`` matches the given ``pattern``. Returns false otherwise.

| `string.``regexReplace``(value: String, pattern: String, replacement: String): String`

  Returns a new string with a replaced first part of ``value`` which ``replacement`` which match to the given ``pattern``.

| `string.``regexReplaceAll``(value: String, pattern: String, replacement: String): String`

  Returns a new string with a replaced parts of ``value`` which ``replacement`` which match to the given ``pattern``.

| `string.``removeEnd``(source: String, end: String): String`

  Returns a new string with a removed ``end`` from a ``source`` string.

| `string.``removeStart``(source: String, start: String): String`

  Returns a new string with a removed ``start`` from a ``source`` string.

| `string.``removeTRRoot``(source: String): String`

  Returns a new string with a removed ``InternetGatewayDevice.`` or ``Device.`` from a ``source``.

| `string.``replace``(str: String, find: String, replacement: String): String`

  Returns a new string from ``str`` with a replaced ``find`` parts with ``replacement``.

| `string.``rightPad``(str: String, length: Int, padStr: String): String`

  Appends to ``str`` with a given ``padStr`` (repeated or trimmed if needed) so that a resulting string has desired ``length``.

| `string.``slice``(item: String, from: Int, to: Int, dot: Boolean): String`

  Returns a new string which contains parts from ``item`` between ``from`` and ``to`` bounds. The part is not a single
  character but a string between ``.``.
  If ``dot`` is true, the ``.`` will be added to an end of a result.
  For example, ``string.slice("a.b.c.d", 1, 2, true)`` will return ``"b.c."``.

| `string.``slice``(item: String, from: Int): String`

  Returns a new string which contains parts from ``item`` omitting parts before ``from``. The part is not a single
  character but a string between ``.``.
  If ``item`` ends with ``.``, the ``.`` will be added to a result.
  For example, ``string.slice("a.b.c.d.", 2)`` will return ``"c.d."``.

| `string.``split``(str: String, separator: String): Array[String]`

  Returns an array of strings split from ``str`` with the given ``separator``.

| `string.``stringContains``(source: String, item: String): Boolean`

  Returns true if ``source`` contains ``item``.

| `string.``stripToAlphanumeric``(source: String, replacement: String): String`

  Returns a new string with replaced alphanumeric characters with ``replacement`` from ``source`` string.

| `string.``subString``(str: String, from: Int, to: Int): String`

  Returns a substring of ``str`` within ``from`` and ``to`` bounds.

| `string.``trimToEmpty``(str: String): String`

  Returns a string with a removed white spaces from ``str``. If ``str`` is null, returns an empty string.
