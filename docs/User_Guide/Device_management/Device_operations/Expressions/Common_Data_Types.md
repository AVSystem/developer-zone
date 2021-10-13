# Common data types

API exposed by common data types.

## Universal API

Operators and methods available on all data types.

### API reference

`(a1: A)` `==` `(a2: A): Boolean` - for arbitrary type `A`

  Compares two values for equality.

`(a1: A)` `!=` `(a2: A): Boolean` - for arbitrary type `A`

  Compares two values for inequality.

`(a: A)` `+` `(str: String)`

  Concatenates a textual representation of ``a`` with the string ``str``. This operator works only when
  type ``A`` has the textual representation (``toString`` method available).

`(a: A)` `->` `(b: B): (A, B)` - for arbitrary types `A` and `B`

  Creates a tuple out of two values. It is used primarily to create maps:

    ``map('one' -> 1, 'two' -> 2)``

`(a: A).``useAs``(f: A => B): B` - for arbitrary types `A` and `B`

  Applies a function ``f`` on ``a`` and returns a result of that function. ``useAs`` can be used to give a short
  identifier ("local variable") to some longer expression, for example:

    ``sv.someLongSvName.useAs(s => if(s.endsWith('.')) s else s + '.')``

## ``Boolean``

The ``Boolean`` type represents boolean values, i.e. ``true`` or ``false``.

### API reference

``Boolean`` values expose [Universal API](#universal-api) plus operations listed below.

`!``(b: Boolean)`

  An unary operator for a logical negation.

| `(b1: Boolean)` `&&` `(b2: Boolean): Boolean`
| `(b1: Boolean)` `and` `(b2: Boolean): Boolean`

  A logical conjunction (AND) of two boolean values.

| `(b1: Boolean)` `||` `(b2: Boolean): Boolean`
| `(b1: Boolean)` `or` `(b2: Boolean): Boolean`

  A logical alternative (OR) of two boolean values.

| `(b1: Boolean)` `<` `(b2: Boolean): Boolean`
| `(b1: Boolean)` `<=` `(b2: Boolean): Boolean`
| `(b1: Boolean)` `>` `(b2: Boolean): Boolean`
| `(b1: Boolean)` `>=` `(b2: Boolean): Boolean`

  Ordered comparison operators for boolean values. ``true`` is defined to be "greater" than ``false``.

`(b: Boolean).``toString``: String`

  Returns a textual representation of the boolean value, i.e. "true" or "false".

## ``Byte``

Integral values ranging from -128 to 127.

### API reference

``Byte`` values expose [Universal API](#universal-api) and [Numeric types API](#numeric-types-api).

## ``Bytes``

``Bytes`` creates literal byte sequences.

**Signature:**

| `def bytes(bs: Byte*): Bytes`

**Example usage:**

| `bytes(5, 3, 2, 0x7c)`

### API reference

| `def escaped: String`

  Encodes this sequence of bytes as a string with non-ASCII bytes and backslash escaped, for example, *hsg\x7c\x0dfoo\\bar*.

| `def hex: String`

  Encodes this sequence of bytes as a hexadecimal string.

| `def base64: String`

  Encodes this sequence of bytes as a BASE64 string.

| `def decodeUTF8: String`

  Decodes this sequence of bytes as a UTF-8 string.

| `def decode(charset: String): String`

  Decodes this sequence of bytes as a string using a given charset.

| `def asList: JList[Byte]`

  Decodes this sequence of bytes as a list.

## ``Char``

Single character values.

There are no character literals in an expression language but sometimes you may encounter character values when
working with strings. For example, here is an expression which filters a textual value leaving only digit characters:

  ``'abc0123cde45'.filter(_.isDigit)``

The ``_.isDigit`` part (``c => c.isDigit`` in a full form) is an anonymous function which works on a character value ``c``.

### API reference

``Char`` values expose [Universal API](#universal-api) plus operations listed below.

| `(c: Char)` `<` `(x: Char): Boolean`
| `(c: Char)` `<=` `(x: Char): Boolean`
| `(c: Char)` `>` `(x: Char): Boolean`
| `(c: Char)` `>=` `(x: Char): Boolean`

  An ordered comparison of two character values. The actual values compared are Unicode code points of the two
  characters which match an alphabetical order of English, if only English characters are used.

| `(c: Char)` `<` `(x: N): Boolean`
| `(c: Char)` `<=` `(x: N): Boolean`
| `(c: Char)` `>` `(x: N): Boolean`
| `(c: Char)` `>=` `(x: N): Boolean`

  Ordered comparisons of a character value with some value of arbitrary numeric type ``N``. Before comparing,
  a character ``c`` is converted to ``N`` by using its Unicode code point.

| `(c: Char).``toDouble``: Double`
| `(c: Char).``toFloat``: Float`
| `(c: Char).``toLong``: Long`
| `(c: Char).``toInt``: Int`
| `(c: Char).``toShort``: Short`
| `(c: Char).``toByte``: Byte`

  Converts a character value to one of numeric values by using character's Unicode code point.

| `(c: Char).``min``(that: Char): Char`

  Minimum of two character values.

| `(c: Char).``max``(that: Char): Char`

  Maximum of two character values.

| `(c: Char).``getNumericValue``: Int`

  Returns the numeric value that the specified Unicode character represents. For example, the character '\u216C'
  (the roman numeral fifty) will return an int with a value of 50. The letters A-Z in their uppercase, lowercase,
  have numeric values from 10 through 35. If the character does not have a numeric value, then -1 is returned.
  If the character has a numeric value that cannot be represented as a nonnegative integer (for example, a fractional
  value), then -2 is returned.

| `(c: Char).``toUpper``: Char`

  Converts a character to its uppercase equivalent. If the character does not have an uppercase version, it is returned
  unchanged.

| `(c: Char).``toLower``: Char`

  Converts a character to its lowercase equivalent. If the character does not have a lowercase version, it is returned
  unchanged.

| `(c: Char).``isUpper``: Boolean`

  Determines if the specified character is an uppercase character.

| `(c: Char).``isLower``: Boolean`

  Determines if the specified character is a lowercase character.

| `(c: Char).``isSpaceChar``: Boolean`

  Determines if the specified character is a Unicode space character, as defined by the Unicode standard.

| `(c: Char).``isWhitespace``: Boolean`

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

| `(c: Char).``isLetterOrDigit``: Boolean`

  Determines if the specified character is either a letter or digit.

| `(c: Char).``isLetter``: Boolean`

  Determines if the specified character is a letter.

| `(c: Char).``isDigit``: Boolean`

  Determines if the specified character is a digit.

| `(c: Char).``isHexDigit``: Boolean`

  Returns ``true`` if this characters is a hexadecimal digit (0-9, A-F, a-f).

| `(c: Char).``isControl``: Boolean`

  Determines if the specified character is a control character.

| `(c: Char).``asDigit``: Int`

  Returns a numeric value of the specified character treated as a digit, i.e. 0 for character ``0`` and 35 for
  character ``z``/``Z``.

| `(c: Char).``toString``: String`

  Returns a textual representation of this character, i.e. a string made of this character only.

## ``Collection``

``Collection`` is a common supertype of :ref:`List API` and :ref:`Set API`, which means that both ``List`` and ``Set``
expose API from ``Collection``.

### API reference

Collections expose [Universal API](#universal-api) plus operations listed below.

``Coll`` can be any of: ``Collection``, ``List`` or ``Set``.
``A`` denotes type of collection elements (which can be of any type).

| `(coll: Coll[A])` `++` `(other: Coll[A]): Coll[A]`

  Returns a new collection which is composed of collection ``coll`` and ``other``.

| `(coll: Coll[A]).``anyElement``: A`

  Returns any element from a collection ``coll``. Fails for an empty collection.

| `(coll: Coll[A]).``contains``(o: A): Boolean`

  Returns true if a collection ``coll`` contains an element `o`. Returns false otherwise.

| `(coll: Coll[A]).``containsAll``(c: Coll[A]): Boolean`

  Returns true if a collection ``coll`` contains all of elements provided in a collection ``c``. Returns false otherwise.

| `(coll: Coll[A]).``containsAny``(other: Coll[A]): Boolean`

  Returns true if a collection ``coll`` contains at least one of elements provided in a collection ``other``. Returns false otherwise.

| `(coll: Coll[A]).``count``(p: A => Boolean): Int`

  Returns a number of elements from a collection ``coll`` which satisfies a given predicate ``p``.

| `(coll: Coll[A]).``empty``: Boolean`

  Returns true if a collection ``coll`` is empty. Returns false otherwise.

| `(coll: Coll[A]).``exists``(p: A => Boolean): Boolean`

  Returns true if in a collection ``coll`` exists an element which satisfies a given predicate ``p``.

| `(coll: Coll[A]).``filter``(p: A => Boolean): Coll[A]`

  Returns a new collection leaving elements from a collection ``coll`` which satisfy a given predicate ``p``.

| `(coll: Coll[A]).``find``(p: A => Boolean): A`

  Returns the first element which satisfies a given predicate ``p``. Fails for an empty collection.

| `(coll: Coll[A]).``fold``(z: B)(f: (B, A) => B): B` - for an arbitrary type ``B``

  Returns folded elements of a collection ``coll`` using the specified associative binary operator ``f`` with a start value ``z``.

| `(coll: Coll[A]).``forall``(p: A => Boolean): Boolean`

  Returns true if all elements from a collection ``coll`` satisfy a given predicate ``p``. Returns false otherwise.

| `(coll: Coll[A]).``isEmpty``: Boolean`

  Returns true if a collection ``coll`` is empty. Returns false otherwise.

| `(coll: Coll[String]).``join``: String`

  Returns a joined collection of a string ``coll``.

| `(coll: Coll[String]).``join``(sep: String): String`

  Returns a joined collection of a string ``coll`` with a separator ``sep``.

| `(coll: Coll[A]).``map``(f: A => B): Coll[B]` - for arbitrary type ``B``

  Returns a new collection with elements from a collection ``coll`` mapped with a supplied function ``f``.

| `(coll: Coll[A]).``max``: A`

  Returns the largest element from a collection ``coll``. Fails for empty collection.

| `(coll: Coll[A]).``maxBy``(f: A => B): A` - for any type ``B`` that has natural ordering

  Returns an element from a collection ``coll`` for which a given function  ``f`` returns the largest value. Fails for an empty collection.

| `(coll: Coll[A]).``mean``: Double`

  Returns a computed mean of elements of a collection ``coll``. Fails for an empty collection.

| `(coll: Coll[A]).``min``: A`

  Returns the smallest element from a collection ``coll``. Fails for an empty collection.

| `(coll: Coll[A]).``minBy``(f: A => B): A` - for any type ``B`` that has natural ordering

  Returns an element from a collection ``coll`` for which a given function ``f`` returns the smallest value. Fails for an empty collection.

| `(coll: Coll[A]).``nonEmpty``: Boolean`

  Returns true if a collection ``coll`` is not empty. Returns false otherwise.

| `(coll: Coll[A]).``size``: Int`

  Returns a number of elements in a collection ``coll``.

| `(coll: Coll[A]).``sum``: A`

  Returns a computed sum of elements in a collection ``coll``. Returns zero for an empty collection.

| `(coll: Coll[A]).``toList``: List[A]`

  Returns a list created from a collection ``coll``.

| `(coll: Coll[A]).``toSet``: Set[A]`

  Returns a set created from a collection ``coll``.

## ``Date``

A data type for values representing date-time instants with millisecond precision. Current date-time can be obtained using ``date.now`` (see :ref:`date object`).

### API reference

``Date`` values expose [Universal API](#universal-api) plus operations defined below.

| `(d: Date)` `<` `(that: Date): Boolean`
| `(d: Date)` `<=` `(that: Date): Boolean`
| `(d: Date)` `>` `(that: Date): Boolean`
| `(d: Date)` `>=` `(that: Date): Boolean`

  Ordered comparison operators.

| `(d: Date).``addDays``(amount: Int): Date`

  Returns a new date with increased days of a date ``d``.

| `(d: Date).``addHours``(amount: Int): Date`

  Returns a new date with increased hours of a date ``d``.

| `(d: Date).``addMilliseconds``(amount: Int): Date`

  Returns a new date with increased milliseconds of a date ``d``.

| `(d: Date).``addMinutes``(amount: Int): Date`

  Returns a new date with increased minutes of a date ``d``.

| `(d: Date).``addMonths``(amount: Int): Date`

  Returns a new date with increased months of a date ``d``.

| `(d: Date).``addSeconds``(amount: Int): Date`

  Returns a new date with increased seconds of a date ``d``.

| `(d: Date).``addWeeks``(amount: Int): Date`

  Returns a new date with increased weeks of a date ``d``.

| `(d: Date).``addYears``(amount: Int): Date`

  Returns a new date with increased years of a date ``d``.

| `(d: Date).``after``(when: Date): Boolean`

  Returns true if the ``s`` date is after the ``when`` date, otherwise returns false.

| `(d: Date).``before``(when: Date): Boolean`

  Returns true if the ``s`` date is before the ``when`` date, otherwise returns false.

| `(d: Date).``dayOfMonth``: Int`

  Returns a day of a month for a date ``d``. 1 - January, 12 - December.

| `(d: Date).``dayOfWeek``: Int`

  Returns a day of a week for a date ``d``. 1 - Monday, 7 - Sunday.

| `(d: Date).``dayOfYear``: Int`

  Returns a day of a year for a date ``d``.

| `(d: Date).``format``: String`

  Returns a formatted date ``d`` using a default date format ``yyyy.MM.dd HH:mm:ss``.

| `(d: Date).``format``(dateFormat: String): String`

  Returns a formatted date ``d`` using a format of ``dateFormat``.

| `(d: Date).``hourOfDay``: Int`

  Returns an hour of a day for a date ``d``.

| `(d: Date).``millis``: Long`

  Returns a number of millis of a date ``d`` since 1970.01.01 00:00:00.

| `(d: Date).``millisOfSecond``: Int`

  Returns millis of a second field for a date ``d``.

| `(d: Date).``minuteOfDay``: Int`

  Returns minutes of a day field for a date ``d``.

| `(d: Date).``minuteOfHour``: Int`

  Returns minutes of an hour field for a date ``d``.

| `(d: Date).``monthOfYear``: Int`

  Returns a month of a year field for a date ``d``.

| `(d: Date).``secondOfDay``: Int`

  Returns a second of a day field for a date ``d``.

| `(d: Date).``secondOfMinute``: Int`

  Returns a second of a minute field for a date ``d``.

| `(d: Date).``truncateToDays``: Date`

  Returns a truncated date ``d`` leaving a days field untouched.

| `(d: Date).``truncateToHours``: Date`

  Returns a truncated date ``d`` leaving an hours field untouched.

| `(d: Date).``truncateToMinutes``: Date`

  Returns a truncated date ``d`` leaving a minutes field untouched.

| `(d: Date).``truncateToMonths``: Date`

  Returns a truncated date ``d`` leaving a months field untouched.

| `(d: Date).``truncateToSeconds``: Date`

  Returns a truncated date ``d`` leaving a seconds field untouched.

| `(d: Date).``truncateToYears``: Date`

  Returns a truncated date ``d`` leaving a years field untouched.

## ``Double``

64bit decimal values.

### API reference

``Double`` values expose [Universal API](#universal-api) and [Numeric types API](#numeric-types-api) plus operations listed below.

| `(d: Double).``abs``: Double`

  Returns the absolute value of ``d``.

| `(d: Double).``ceil``: Double`

  Returns the smallest integer value greater than or equal to the given ``d``.

| `(d: Double).``floor``: Double`

  Returns the greatest integer value smaller than or equal to the given ``d``.

| `(d: Double).``isInfinity``: Boolean`

  Returns true if ``d`` is infinity value, false otherwise.

| `(d: Double).``isNegInfinity``: Boolean`

  Returns true if ``d`` is negative infinity value, otherwise returns false.

| `(d: Double).``isPosInfinity``: Boolean`

  Returns true if ``d`` is positive infinity value, otherwise returns false.

| `(d: Double).``isValidByte``: Boolean`

  Returns true if ``d`` has a zero fractional part, and is within the range of min and max value of Byte, otherwise returns false.

| `(d: Double).``isValidChar``: Boolean`

  Returns true if ``d`` has a zero fractional part, and is within the range of min and max value of Char, otherwise returns false.

| `(d: Double).``isValidInt``: Boolean`

  Returns true if ``d`` has a zero fractional part, and is within the range of min and max value of Int, otherwise returns false.

| `(d: Double).``isValidShort``: Boolean`

  Returns true if ``d`` has a zero fractional part, and is within the range of min and max value of Short, otherwise returns false.

| `(d: Double).``isWhole``: Boolean`

  Returns true if ``d`` has no decimal component, otherwise returns false.

| `(d: Double).``round``: Long`

  Returns the value that is nearest to ``d``, with halfway cases rounded away from zero.

| `(d: Double).``signum``: Int`

  Returns:

  * 0 if ``d`` equals to 0
  * 1 if ``d`` is greater than 0
  * -1 if ``d`` is less than 0.

| `(d: Double).``toDegrees``: Double`

  Returns an angle measured in radians of ``d`` to an approximately equivalent angle measured in degrees.

| `(d: Double).``toRadians``: Double`

  Returns an angle measured in degrees of ``d`` to an approximately equivalent angle measured in radians.

## ``Entry``

Represents a key-value association that can be obtained from :ref:`Map API`.

### API reference

Map entries expose [Universal API](#universal-api) plus operations defined below.

| `(e: Entry[K,V]).``key``: K`

  Returns a key of this key-value entry.

| `(e: Entry[K,V]).``value``: V`

  Returns a value of this key-value entry.

| `(e: Entry[K,V]).``withKey``(newKey: NK): Entry[NK,V]` - for arbitrary type ``NK``

  Creates a new key-value entry by replacing a key with other key.

| `(e: Entry[K,V]).``withValue``(newValue: NV): Entry[K,NV]` - for arbitrary type ``NV``

  Creates a new key-value entry by replacing a value with other value.

## ``Float``

32bit decimal values.

### API reference

``Float`` values expose [Universal API](#universal-api) and [Numeric types API](#numeric-types-api).

## ``Int``

Integral values ranging from -2\ :sup:`31` to 2\ :sup:`31`\ -1.

### API reference

``Int`` values expose [Universal API](#universal-api) and [Numeric types API](#numeric-types-api).

## ``List``

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

### API reference

Lists expose [Universal API](#universal-api) and API of :ref:`Collection API` plus operations listed below.

``A`` denotes a type of list elements (which can be of any type).

| `(l: List[A]).``apply``(index: Int): A`

  Returns an element at a given index in this list ``l``. The first element has index 0. Fails if index is out of range
  This method can be invoked using shorter syntax, for example, ``someList(1)`` instead of ``someList.apply(1)``.

| `(l: List[A]).``drop``(amount: Int): List[A]`

  Returns a new list with dropped specified ``amount`` of elements from the beginning of a list ``l``.
  Returns an empty list if the list ``l`` has less elements than the specified ``amount``.

| `(l: List[A]).``dropRight``(amount: Int): List[A]`

  Returns a new list with dropped specified ``amount`` of elements from the end of a list ``l``.
  Returns an empty list if the list ``l`` has less elements than the specified ``amount``.

| `(l: List[A]).``dropWhile``(p: A => Boolean): List[A]`

  Returns a new list with dropped the longest prefix of elements of the list ``l`` which satisfies a given predicate.

| `(l: List[A]).``foldLeft``(start: B)(f: (B, A) => B): B` - for arbitrary type ``B``

  Applies a binary operator to a ``start`` value and every element of the list ``l``, going left to right. Returns a final value.

| `(l: List[A]).``foldRight``(start: B)(f: (A, B) => B): B` - for arbitrary type ``B``

  Applies a binary operator to a ``start`` value and every element of the list ``l``, going right to left. Returns a final value.

| `(l: List[A]).``get``(index: Int): A`

  Returns an element at a given ``index`` in the list ``l``. The first element has index 0. Fails if index is out of range.

| `(l: List[A]).``reverse``: List[A]`

  Returns a new list which is the reversed list ``l``.

| `(l: List[A]).``slice``(from: Int, until: Int): List[A]`

  Returns a sublist of the list ``l`` with elements at indices starting at ``from`` and ending at ``until-1``.
  The ``from`` argument will be adjusted to 0 if it is negative and ``until will be adjusted to ``size-1``
  if it is larger than the size of the list ``l``.

| `(l: List[A]).``sortBy``(f: A => B): List[A]` - for any type ``B`` that has natural ordering

  Returns the list ``l`` sorted using natural ordering on values returned by a given function ``f``.

| `(l: List[A]).``sorted``: List[A]`

  Returns the list ``l`` sorted using natural ordering.

| `(l: List[A]).``take``(length: Int): List[A]`

  Returns prefix of the list ``l`` with a specified ``length``. Returns the same list if it is too short.

| `(l: List[A]).``takeRight``(length: Int): List[A]`

  Returns suffix of the list ``l`` with a specified ``length``. Returns the same list if it is too short.

| `(l: List[A]).``takeWhile``(p: A => Boolean): List[A]`

  Returns the longest prefix of the list ``l`` which satisfies a given predicate ``p``.

## ``Long``


Integral values ranging from -2\ :sup:`63` to 2\ :sup:`63`\ -1.

### API reference

``Long`` values expose [Universal API](#universal-api) and [Numeric types API](#numeric-types-api) plus operations listed below.

| `(l: Long).``toBinaryString``: String`

  Returns a string representation of the ``l`` argument as an unsigned integer in base 2.

| `(l: Long).``toOctalString``: String`

  Returns a string representation of the ``l`` argument as an unsigned integer in base 8.

| `(l: Long).``toHexString``: String`

  Returns a string representation of the ``l`` argument as an unsigned integer in base 16.

## ``Map``

Maps are unordered key-value associations, where every key may have only one value associated with it.

Maps can be created using the ``map`` function, which takes a sequence of key-value pairs. Each pair is created using
the ``->`` operator:

  ``map('one' -> 1, 'two' -> 2)``

A value associated with a given key can be obtained using parentheses, for example:

  ``someMap('one')``

obtains a value associated with a textual key ``'one'``.

### API reference

Maps expose [Universal API](#universal-api) plus operations defined below.

``K`` denotes an arbitrary key type and ``V`` denotes an arbitrary value type.
:ref:`Entry API` represents a single key-value association.

| `(m: Map[K,V])` `++` `(other: Map[K,V]): Map[K,V]`

  Merges a map ``m`` with ``other`` map. If the two maps contain mappings with the same key, mappings from the ``other``
  map will override mappings from this map.

| `(m: Map[K,V]).``apply``(key: K): V`

  Returns a value to which a specified key is mapped or ``null`` if there is no mapping for the given key.
  This method can be used with a shorter syntax, for example, ``someMap('key')`` instead of ``someMap.apply('key')``.

| `(m: Map[K,V]).``containsKey``(key: K): Boolean`

  Returns true if the map ``m`` contains the value for ``key``. Returns false otherwise.

| `(m: Map[K,V]).``containsValue``(value: V): Boolean`

  Returns true if the map ``m`` contains the ``value``. Returns false otherwise.

| `(m: Map[K,V]).``entries``: Collection[Entry[K,V]]`

  Returns a collection of key-value mappings in the map ``m``.

| `(m: Map[K,V]).``filter``(p: Entry[K,V] => Boolean): Map[K,V]`

  Returns a new map leaving the entries which satisfy a given predicate ``p``.

| `(m: Map[K,V]).``get``(key: K): V`

  Returns a value to which a specified key is mapped or ``null`` if there is no mapping for the given key.

| `(m: Map[K,V]).``isEmpty``: Boolean`

  Returns true if a map does not contain any entries. Returns false otherwise.

| `(m: Map[K,V]).``keySet``: Set[K]`

  Returns a set of keys which exists in a map ``m``.

| `(m: Map[K,V]).``map``(f: Entry[K,V] => Entry[NK,NV]): Map[NK,NV]` - for arbitrary types ``NK`` and ``NV``

  Returns a new map where entries were mapped with a given function ``f``.

| `(m: Map[K,V]).``nonEmpty``: Boolean`

  Returns true if a map is not empty. Returns false otherwise.

| `(m: Map[K,V]).``size``: Int`

  Returns a number of entries in a map ``m``.

| `(m: Map[K,V]).``values``: Collection[V]`

  Returns a collection of values which exists in a map ``m``.

## Numeric types API

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

### API reference

All numeric types expose [Universal API](#universal-api) plus operations listed below.

In definitions below, types ``A`` and ``B`` denote arbitrary numeric types while the type ``C`` denotes the "more general"
type out of ``A`` and ``B`` (for example, if ``A`` is ``Double`` and ``B`` is ``Int`` then ``C`` is ``Double``).

| `(a: A)` `==` `(b: B): Boolean`
| `(a: A)` `!=` `(b: B): Boolean`

  An equality and inequality comparison of two numeric values.

| `(a: A)` `<` `(b: B): Boolean`
| `(a: A)` `<=` `(b: B): Boolean`
| `(a: A)` `>` `(b: B): Boolean`
| `(a: A)` `>=` `(b: B): Boolean`

  An ordered comparison of two numeric values.

| `(a: A)` `+` `(b: B): C`
| `(a: A)` `-` `(b: B): C`
| `(a: A)` `*` `(b: B): C`
| `(a: A)` `/` `(b: B): C`
| `(a: A)` `%` `(b: B): C`

  Arithmetic operations on two numeric values. Remember that if both values are integral (neither ``Float`` nor ``Double``),
  then a result of division will also be integral (any decimal part will be lost).

| `(a: A).``max``(b: B): C`

  Minimum of two numeric values.

| `(a: A).``min``(b: B): C`

  Minimum of two numeric values.

| `(a: A).``toByte``: Byte`
| `(a: A).``toShort``: Short`
| `(a: A).``toInt``: Int`
| `(a: A).``toLong``: Long`
| `(a: A).``toFloat``: Float`
| `(a: A).``toDouble``: Double`

  These methods convert a numeric value to other desired numeric type. If the result type is less general/precise
  than the original type, a conversion may be lossy.

| `(a: A).``toChar``: Char`

  Converts this numeric value to a character value, treating the numeric value as Unicode code point for some
  character.

| `(a: A).``toString``: String`

  Returns a textual representation of given numeric value.

## ``Set``

``Set`` is a collection which guarantees that no element is duplicated but also does not guarantee
any particular order of elements.

A set can be created using the ``set`` function, for example:

  ``set(1,2,3)``

or by converting some other collection to a set:

  ``list(1,2,3).toSet``

### API reference

Sets expose [Universal API](#universal-api) and API from :ref:`Collection API` plus operations listed below.

``A`` denotes a type of list elements (which can be of any type).

| `(s: Set[A]).``diff``(other: Set[A]): Set[A]`

  Returns a new set which is a difference of set ``s`` and set ``other``.
  The returned set will contain all elements of set ``s`` which are not in the set ``other``.

| `(s: Set[A]).``intersect``(other: Set[A]): Set[A]`

  Returns a new set which is an intersection of the set ``s`` and set ``other``.
  The returned set will contain all elements of the set ``s`` which are in the set ``other``.

| `(s: Set[A]).``union``(other: Set[A]): Set[A]`

  Returns a new set which is an union of the set ``s`` and set ``other``.
  The returned set will contain all elements of the set ``s`` and all elements of the set ``other``.

## ``Short``

Integral values ranging from -65536 to 65535.

### API reference

``Short`` values expose [Universal API](#universal-api) and [Numeric types API](#numeric-types-api).

## ``String``

Textual values.

### API reference

``String`` values expose [Universal API](#universal-api) plus operations listed below.

| `(s: String)` `<` `(that: String): Boolean`
| `(s: String)` `<=` `(that: String): Boolean`
| `(s: String)` `>` `(that: String): Boolean`
| `(s: String)` `>=` `(that: String): Boolean`

  An ordered comparison of textual values. The comparison is done using lexicographical order and two characters are compared
  using their Unicode code points which is the same as alphabetical order, if only English characters are used.

| `(s: String).``ancestorKey``(depth: Int): String`

  Returns an ancestor key with a given depth for this data model key.
  For example, ``A.B.C.parentKey(2)`` returns ``A.B.``

| `(s: String).``capitalize``: String`

  Converts the first character in ``s`` string to its uppercase counterpart.

| `(s: String).``changeRoot``(newRoot: String): String`

  Treats the ``s`` string as a data model key and replaces its root object with the specified one.

| `(s: String).``charAt``(index: Int): Char`

  Returns a character at a given index in the ``s`` string. The first character has index 0. Fails if index is out of bounds.

| `(s: String).``compare``(other: String): Int`

  Compares the ``s`` value to some ``other`` value using natural ordering. Returns a negative number when the ``s`` value is
  less than the ``other`` value, a positive number when the ``s`` value is greater than the ``other`` value and zero when the two values are equal.

| `(s: String).``compareAsIpTo``(ip: String): Integer`

  Compares the ``s`` value to some ``other`` value treating them as IP addresses. Returns a negative number when the ``s`` value is
  less than the ``ip`` value, a positive number when the ``s`` value is greater than the ``ip`` value and zero when the two values are equal.
  **If** ``s`` **or** ``ip`` **are not valid IP addresses, returns null.**

| `(s: String).``compareTo``(anotherString: String): Int`

  Compares the ``s`` value to some ``anotherString`` value using natural ordering. Returns a negative number when the ``s`` value is
  less than the ``anotherString`` value, a positive number when the ``s`` value is greater than the ``anotherString`` value and zero when the two values are equal.

| `(s: String).``compareToIgnoreCase``(anotherString: String): Int`

  Compares the ``s`` value to some ``anotherString`` value using natural ordering ignoring cases. Returns a negative number when the ``s`` value is
  less than the ``anotherString`` value, a positive number when the ``s`` value is greater than the ``anotherString`` value and zero when the two values are equal.

| `(s: String).``concat``(str: String): String`

  Returns a new string which is concatenation of ``s`` and ``str``.

| `(s: String).``contains``(s: CharSequence): Boolean`

  Returns true if the ``s`` string contains another string as its substring, otherwise returns false.

| `(s: String).``decodeBase64String``: String`

  Treats the ``s`` string as BASE64 encoding of some other string and decodes it using UTF-8.

| `(s: String).``decodeHexString``: String`

  Decodes the ``s`` string assuming it contains hexadecimal encoding of UTF-8 bytes of some other string.

| `(s: String).``dmRoot``: String`

  Treats the ``s`` string as a data model key and returns its root object.

| `(s: String).``drop``(n: Int): String`

  Returns the ``s`` string with a given number of the first characters dropped.

| `(s: String).``dropRight``(n: Int): String`

  Returns the ``s`` string with a given number of the last characters dropped.

| `(s: String).``dropWhile``(p: Char => Boolean): String`

  Returns the ``s`` string without longest prefix of characters that satisfy a given predicate ``p``.

| `(s: String).``empty``: Boolean`

  Returns true if the sequence ``s`` is empty, otherwise returns false.

| `(s: String).``encodeBase64``: String`

  Encodes ``s`` string as BASE64 using UTF-8.

| `(s: String).``encodeHex``: String`

  Encodes the ``s`` string as hexadecimal using UTF-8.

| `(s: String).``endsWith``(suffix: String): Boolean`

  Checks if the ``s`` string has some ``suffix`` string at its end.

| `(s: String).``ensureEnd``(postfix: String): String`

  Ensures that the ``s`` string ends with a given ``postfix`` by appending it to this string if needed.

| `(s: String).``ensureStart``(prefix: String): String`

  Ensures that the ``s`` string starts with a given ``prefix`` by prepending it to this string if needed.

| `(s: String).``equalsIgnoreCase``(anotherString: String): Boolean`

  Compares the ``s`` string with ``anotherString`` string for equality, ignoring case differences.

| `(s: String).``filter``(p: Char => Boolean): String`

  Filters the ``s`` string by leaving only characters satisfying a given predicate ``p``.

| `(s: String).``indexOf``(str: String): Int`

  Returns the index within the ``s`` string of the first occurrence of the specified substring ``str`` or -1 when there is none.

| `(s: String).``indexOf``(str: String, fromIndex: Int): Int`

  Returns the index within ``s`` string of the first occurrence of the specified substring ``str``,
  starting from ``fromIndex`` index or -1 when there is none.

| `(s: String).``isAncestorOf``(otherKey: String): Boolean`

  Checks if the ``s`` data model key is an ancestor of ``otherKey`` data model key. Key A is an ancestor of key B
  when A is an object key and A is a prefix of B. Note that this means that every object key is its own ancestor.

| `(s: String).``isEmpty``: Boolean`

  Returns true if the sequence ``s`` is empty, otherwise returns false.

| `(s: String).``isIp``: Boolean`

  Returns true if ``s`` is a valid IP address.

| `(s: String).``isIpInSubnet``(subnetWithMask: String): Boolean`

  Returns true if ``s`` is a valid IP address subnet.

| `(s: String).``isIpInSubnetWithMask``(subnet: String, mask: String): Boolean`

  Returns true if ``s`` is a valid IP in ``subnet`` with a provided ``mask``.

| `(s: String).``isIps``: Boolean`

  Returns true if ``s`` is a valid list of comma-separated IP addresses.

| `(s: String).``isMac``: Boolean`

  Returns true if ``s`` is a valid MAC address.

| `(s: String).``isObjectKey``: Boolean`

  Returns true if ``s`` represents a data model key for an object (ends with a dot).

| `(s: String).``isParameterKey``: Boolean`

  Returns true if ``s`` represents a data model key for a parameter (does not end with a dot).

| `(s: String).``keyDepth``: Int`

  Returns a number of segments in a data model key for ``s``.

| `(s: String).``keyName``: String`

  Returns the last segment of a data model key for ``s``, i.e. the name of data model object or parameter.

| `(s: String).``keySegment``(level: Int): String`

  Returns a segment of a data model key for ``s`` at a given depth ``level``.
  For example, ``A.B.C.level(2)`` returns ``'B'``
  When a level is negative, it is computed relative to total key depth, e.g. -1 represents ``keyDepth`` -1.

| `(s: String).``keySlice``(start: Int, end: Int): String`

  Returns a portion of the ``s`` data model key represented by segments with a depth between ``start`` and ``end``, inclusively.
  When ``start`` or ``end`` is negative, it represents a depth relative to an original key depth.

| `(s: String).``lastIndexOf``(str: String): Int`

  Returns the index within the ``s`` string of the last occurrence of the specified substring ``str`` or -1 when there is none.

| `(s: String).``lastIndexOf``(str: String, fromIndex: Int): Int`

  Returns the index within the ``s`` string of the last occurrence of the specified substring ``str``, searching backward
  starting at the specified ``fromIndex``. Returns -1 when there is no occurrence of specified substring.

| `(s: String).``leftPad``(desiredLength: Int, padding: String): String`

  Prepends the ``s`` string with a given ``padding`` (repeated or trimmed if needed) so that a resulting string has a desired length.

| `(s: String).``length``: Int`

  Returns a number of characters in ``s``.

| `(s: String).``matches``(regex: String): Boolean`

  Tells whether or not the ``s`` string matches the given regular expression ``regex``.

| `(s: String).``md5Hex``: String`

  Calculates MD5 digest from contents of ``s`` encoded using UTF-8 and returns a result as a 32 character hex string.

| `(s: String).``nonEmpty``: Boolean`

  Returns true if a sequence ``s`` is not empty, otherwise returns false.

| `(s: String).``parentKey``: String`

  Returns a parent key for the ``s`` data model key. The parent key is always an object key (ends with a dot).
  If the given key has no real parent (e.g. ``Device.``), an empty string is returned.

| `(s: String).``parseHex``: Long`

  Parses the ``s`` string as hexadecimal number.

| `(s: String).``replace``(target: CharSequence, replacement: CharSequence): String`

  Replaces all occurrences of a sequence ``target`` in the ``s`` string with a given ``replacement``.

| `(s: String).``replace``(oldChar: Char, newChar: Char): String`

  Replaces all occurrences of a char ``target`` with ``replacement`` in the ``s`` string.

| `(s: String).``replaceAll``(regex: String, replacement: String): String`

  Replaces all substrings in the ``s`` string that match a given regular expression ``regex`` with a given ``replacement``.

| `(s: String).``replaceAllLiterally``(literal: String, replacement: String): String`

  Replace all literal occurrences of ``literal`` with the string ``replacement``.
  This is equivalent to ``replaceAll`` except that both arguments are appropriately quoted to avoid being interpreted as metacharacters.

| `(s: String).``replaceFirst``(regex: String, replacement: String): String`

  Replaces the first substring in the ``s`` string that matches a given regular expression ``regex`` with a given ``replacement``.

| `(s: String).``reverse``: String`

  Returns reversed string ``s``.

| `(s: String).``reversedLines``(omitEmptyLines: boolean): String`

  Returns the ``s`` string with reversed lines order. Omits empty lines if ``omitEmptyLines`` is true.

| `(s: String).``rightPad``(desiredLength: Int, padding: String): String`

  Appends a given ``padding`` (repeated or trimmed if needed) to the ``s`` string so that a resulting string has a desired length.

| `(s: String).``split``(regex: String): Array[String]`

  Splits the ``s`` string around matches of a given regular expression ``regex``.

| `(s: String).``split``(regex: String, limit: Int): Array[String]`

  Splits the ``s`` string around matches of a given regular expression ``regex``, ensuring than no more than a given ``limit``
  of parts is returned. Therefore, the last part may still contain a substring that matches the given regular expression.

| `(s: String).``splitBy``(separator: String): List[String]`

  Splits the ``s`` string into a list of strings using given ``separator``.
  Resulting parts are not whitespace-trimmed and blank parts are not filtered out.

| `(s: String).``splitByTrim``(separator: String): List[String]`

  Splits the ``s`` string into a list of strings using given ``separator``.
  Resulting parts are whitespace-trimmed and blank parts are returned as empty strings.

| `(s: String).``startsWith``(prefix: String): Boolean`

  Returns true if the ``s`` string starts with specified ``prefix``.

| `(s: String).``stripInstanceNumbers``: String`

  Returns a new string with replaced every table instance number in the ``s`` data model key with a placeholder ``{i}``.

| `(s: String).``stripLineEnd``: String`

  Returns a new string with stripped trailing line end character from the ``s`` string if it has one.

| `(s: String).``stripMac``: String`

  Returns a new string with stripped all occurrences of a MAC address in the ``s`` string.

| `(s: String).``stripPrefix``(prefix: String): String`

  Returns a new string with stripped given ``prefix`` from the beginning of the ``s`` string.

| `(s: String).``stripSuffix``(suffix: String): String`

  Returns a new string with stripped given ``suffix`` from the end of the ``s`` string.

| `(s: String).``substring``(beginIndex: Int, endIndex: Int): String`

  Returns a substring of the ``s`` string that starts at a specified ``beginIndex`` and ends **just before** a specified ``endIndex``.
  The index of the first character is 0.

| `(s: String).``substring``(beginIndex: Int): String`

  Returns a substring of the ``s`` string that starts at a specified index ``beginIndex`` and ends at the end of this string.
  The index of the first character is 0.

| `(s: String).``take``(n: Int): String`

  Returns a prefix of the ``s`` string with a specified length ``n``.

| `(s: String).``takeRight``(n: Int): String`

  Returns suffix of the ``s`` string with a specified length ``n``.

| `(s: String).``takeWhile``(p: Char => Boolean): String`

  Returns the longest prefix of the ``s`` string for which every character satisfies a given predicate ``p``.

| `(s: String).``toBoolean``: Boolean`

  Returns true of 'true' value of ``s``, false for 'false' value of ``s``. Otherwise exception is thrown.

| `(s: String).``toByte``: Byte`

  Returns a parsed ``Byte`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| `(s: String).``toDate``: Date`

  Returns a parsed ``Date`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| `(s: String).``toDouble``: Double`

  Returns a parsed ``Double`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| `(s: String).``toFloat``: Float`

  Returns a parsed ``Float`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| `(s: String).``toInt``: Int`

  Returns a parsed ``Int`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| `(s: String).``toLong``: Long`

  Returns a parsed ``Long`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| `(s: String).``toLowerCase``: String`

  Returns a lower-case ``s`` string using rules for a system locale.

| `(s: String).``toLowerCaseEnglish``: String`

  Returns a lower-case ``s`` string using rules for an English locale.

| `(s: String).``toObjectKey``: String`

  Returns a converted ``s`` data model key to an object key by appending a trailing dot if necessary.

| `(s: String).``toParameterKey``: String`

  Returns a converted ``s`` data model key to a parameter key by stripping a trailing dot if necessary.

| `(s: String).``toShort``: Short`

  Returns a parsed ``Short`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| `(s: String).``toUpperCase``: String`

  Returns upper-case ``s`` with using rules for the system locale.

| `(s: String).``toUpperCaseEnglish``: String`

  Returns upper-case ``s`` with using rules for the English locale.

| `(s: String).``trim``: String`

  Returns ``s`` with removed any whitespace characters at the beginning and end.

| `(s: String).``withNativeRoot``(nativeRoot: String): String`

  If a given key ``s`` starts with ``Root``, this method changes it to specified ``nativeRoot``.
  If a given key does NOT start with ``Root``, it is returned unchanged.

| `def decodeBase64: Bytes`

  Decodes this string assuming it contains BASE64 encoding of some arbitrary bytes.

| `def decodeEscapedBytes: Bytes`

  Decodes this string assuming it contains escaped arbitrary bytes (backslash and non-ASCII bytes are escaped).

| `def decodeHex: Bytes`

  Decodes this string assuming it contains hexadecimal encoding of some arbitrary bytes.

| `def encode(charset: String): Bytes`

  Encodes this string into bytes using a given charset.

| `def encodeUTF8: Bytes`

  Encodes this string into bytes using UTF-8.
