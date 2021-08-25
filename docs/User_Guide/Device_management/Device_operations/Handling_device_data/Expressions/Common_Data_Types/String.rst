.. _String API:

.. role:: sign
.. role:: sym

``String``
==========

Textual values.

API reference
-------------

``String`` values expose :ref:`Universal API` plus operations listed below.

| :sign:`(s: String)` :sym:`<` :sign:`(that: String): Boolean`
| :sign:`(s: String)` :sym:`<=` :sign:`(that: String): Boolean`
| :sign:`(s: String)` :sym:`>` :sign:`(that: String): Boolean`
| :sign:`(s: String)` :sym:`>=` :sign:`(that: String): Boolean`

  An ordered comparison of textual values. The comparison is done using lexicographical order and two characters are compared
  using their Unicode code points which is the same as alphabetical order, if only English characters are used.
  
| :sign:`(s: String).`:sym:`ancestorKey`:sign:`(depth: Int): String`

  Returns an ancestor key with a given depth for this data model key.
  For example, ``A.B.C.parentKey(2)`` returns ``A.B.``

| :sign:`(s: String).`:sym:`capitalize`:sign:`: String`

  Converts the first character in ``s`` string to its uppercase counterpart.

| :sign:`(s: String).`:sym:`changeRoot`:sign:`(newRoot: String): String`

  Treats the ``s`` string as a data model key and replaces its root object with the specified one.

| :sign:`(s: String).`:sym:`charAt`:sign:`(index: Int): Char`

  Returns a character at a given index in the ``s`` string. The first character has index 0. Fails if index is out of bounds.

| :sign:`(s: String).`:sym:`compare`:sign:`(other: String): Int`

  Compares the ``s`` value to some ``other`` value using natural ordering. Returns a negative number when the ``s`` value is
  less than the ``other`` value, a positive number when the ``s`` value is greater than the ``other`` value and zero when the two values are equal.

| :sign:`(s: String).`:sym:`compareAsIpTo`:sign:`(ip: String): Integer`

  Compares the ``s`` value to some ``other`` value treating them as IP addresses. Returns a negative number when the ``s`` value is
  less than the ``ip`` value, a positive number when the ``s`` value is greater than the ``ip`` value and zero when the two values are equal.
  **If** ``s`` **or** ``ip`` **are not valid IP addresses, returns null.**

| :sign:`(s: String).`:sym:`compareTo`:sign:`(anotherString: String): Int`

  Compares the ``s`` value to some ``anotherString`` value using natural ordering. Returns a negative number when the ``s`` value is
  less than the ``anotherString`` value, a positive number when the ``s`` value is greater than the ``anotherString`` value and zero when the two values are equal.

| :sign:`(s: String).`:sym:`compareToIgnoreCase`:sign:`(anotherString: String): Int`

  Compares the ``s`` value to some ``anotherString`` value using natural ordering ignoring cases. Returns a negative number when the ``s`` value is
  less than the ``anotherString`` value, a positive number when the ``s`` value is greater than the ``anotherString`` value and zero when the two values are equal.

| :sign:`(s: String).`:sym:`concat`:sign:`(str: String): String`

  Returns a new string which is concatenation of ``s`` and ``str``.

| :sign:`(s: String).`:sym:`contains`:sign:`(s: CharSequence): Boolean`

  Returns true if the ``s`` string contains another string as its substring, otherwise returns false.

| :sign:`(s: String).`:sym:`decodeBase64String`:sign:`: String`

  Treats the ``s`` string as BASE64 encoding of some other string and decodes it using UTF-8.

| :sign:`(s: String).`:sym:`decodeHexString`:sign:`: String`

  Decodes the ``s`` string assuming it contains hexadecimal encoding of UTF-8 bytes of some other string.

| :sign:`(s: String).`:sym:`dmRoot`:sign:`: String`

  Treats the ``s`` string as a data model key and returns its root object.

| :sign:`(s: String).`:sym:`drop`:sign:`(n: Int): String`

  Returns the ``s`` string with a given number of the first characters dropped.

| :sign:`(s: String).`:sym:`dropRight`:sign:`(n: Int): String`

  Returns the ``s`` string with a given number of the last characters dropped.

| :sign:`(s: String).`:sym:`dropWhile`:sign:`(p: Char => Boolean): String`

  Returns the ``s`` string without longest prefix of characters that satisfy a given predicate ``p``.

| :sign:`(s: String).`:sym:`empty`:sign:`: Boolean`

  Returns true if the sequence ``s`` is empty, otherwise returns false.

| :sign:`(s: String).`:sym:`encodeBase64`:sign:`: String`

  Encodes ``s`` string as BASE64 using UTF-8.

| :sign:`(s: String).`:sym:`encodeHex`:sign:`: String`

  Encodes the ``s`` string as hexadecimal using UTF-8.

| :sign:`(s: String).`:sym:`endsWith`:sign:`(suffix: String): Boolean`

  Checks if the ``s`` string has some ``suffix`` string at its end.

| :sign:`(s: String).`:sym:`ensureEnd`:sign:`(postfix: String): String`

  Ensures that the ``s`` string ends with a given ``postfix`` by appending it to this string if needed.

| :sign:`(s: String).`:sym:`ensureStart`:sign:`(prefix: String): String`

  Ensures that the ``s`` string starts with a given ``prefix`` by prepending it to this string if needed.

| :sign:`(s: String).`:sym:`equalsIgnoreCase`:sign:`(anotherString: String): Boolean`

  Compares the ``s`` string with ``anotherString`` string for equality, ignoring case differences.

| :sign:`(s: String).`:sym:`filter`:sign:`(p: Char => Boolean): String`

  Filters the ``s`` string by leaving only characters satisfying a given predicate ``p``.

| :sign:`(s: String).`:sym:`indexOf`:sign:`(str: String): Int`

  Returns the index within the ``s`` string of the first occurrence of the specified substring ``str`` or -1 when there is none.

| :sign:`(s: String).`:sym:`indexOf`:sign:`(str: String, fromIndex: Int): Int`

  Returns the index within ``s`` string of the first occurrence of the specified substring ``str``,
  starting from ``fromIndex`` index or -1 when there is none.

| :sign:`(s: String).`:sym:`isAncestorOf`:sign:`(otherKey: String): Boolean`

  Checks if the ``s`` data model key is an ancestor of ``otherKey`` data model key. Key A is an ancestor of key B
  when A is an object key and A is a prefix of B. Note that this means that every object key is its own ancestor.

| :sign:`(s: String).`:sym:`isEmpty`:sign:`: Boolean`

  Returns true if the sequence ``s`` is empty, otherwise returns false.

| :sign:`(s: String).`:sym:`isIp`:sign:`: Boolean`

  Returns true if ``s`` is a valid IP address.

| :sign:`(s: String).`:sym:`isIpInSubnet`:sign:`(subnetWithMask: String): Boolean`

  Returns true if ``s`` is a valid IP address subnet.

| :sign:`(s: String).`:sym:`isIpInSubnetWithMask`:sign:`(subnet: String, mask: String): Boolean`

  Returns true if ``s`` is a valid IP in ``subnet`` with a provided ``mask``.

| :sign:`(s: String).`:sym:`isIps`:sign:`: Boolean`

  Returns true if ``s`` is a valid list of comma-separated IP addresses.

| :sign:`(s: String).`:sym:`isMac`:sign:`: Boolean`

  Returns true if ``s`` is a valid MAC address.

| :sign:`(s: String).`:sym:`isObjectKey`:sign:`: Boolean`

  Returns true if ``s`` represents a data model key for an object (ends with a dot).

| :sign:`(s: String).`:sym:`isParameterKey`:sign:`: Boolean`

  Returns true if ``s`` represents a data model key for a parameter (does not end with a dot).

| :sign:`(s: String).`:sym:`keyDepth`:sign:`: Int`

  Returns a number of segments in a data model key for ``s``.

| :sign:`(s: String).`:sym:`keyName`:sign:`: String`

  Returns the last segment of a data model key for ``s``, i.e. the name of data model object or parameter.

| :sign:`(s: String).`:sym:`keySegment`:sign:`(level: Int): String`

  Returns a segment of a data model key for ``s`` at a given depth ``level``.
  For example, ``A.B.C.level(2)`` returns ``'B'``
  When a level is negative, it is computed relative to total key depth, e.g. -1 represents ``keyDepth`` -1.

| :sign:`(s: String).`:sym:`keySlice`:sign:`(start: Int, end: Int): String`

  Returns a portion of the ``s`` data model key represented by segments with a depth between ``start`` and ``end``, inclusively.
  When ``start`` or ``end`` is negative, it represents a depth relative to an original key depth.

| :sign:`(s: String).`:sym:`lastIndexOf`:sign:`(str: String): Int`

  Returns the index within the ``s`` string of the last occurrence of the specified substring ``str`` or -1 when there is none.

| :sign:`(s: String).`:sym:`lastIndexOf`:sign:`(str: String, fromIndex: Int): Int`

  Returns the index within the ``s`` string of the last occurrence of the specified substring ``str``, searching backward
  starting at the specified ``fromIndex``. Returns -1 when there is no occurrence of specified substring.

| :sign:`(s: String).`:sym:`leftPad`:sign:`(desiredLength: Int, padding: String): String`

  Prepends the ``s`` string with a given ``padding`` (repeated or trimmed if needed) so that a resulting string has a desired length.

| :sign:`(s: String).`:sym:`length`:sign:`: Int`

  Returns a number of characters in ``s``.

| :sign:`(s: String).`:sym:`matches`:sign:`(regex: String): Boolean`

  Tells whether or not the ``s`` string matches the given regular expression ``regex``.

| :sign:`(s: String).`:sym:`md5Hex`:sign:`: String`

  Calculates MD5 digest from contents of ``s`` encoded using UTF-8 and returns a result as a 32 character hex string.

| :sign:`(s: String).`:sym:`nonEmpty`:sign:`: Boolean`

  Returns true if a sequence ``s`` is not empty, otherwise returns false.

| :sign:`(s: String).`:sym:`parentKey`:sign:`: String`

  Returns a parent key for the ``s`` data model key. The parent key is always an object key (ends with a dot).
  If the given key has no real parent (e.g. ``Device.``), an empty string is returned.

| :sign:`(s: String).`:sym:`parseHex`:sign:`: Long`

  Parses the ``s`` string as hexadecimal number.

| :sign:`(s: String).`:sym:`replace`:sign:`(target: CharSequence, replacement: CharSequence): String`

  Replaces all occurrences of a sequence ``target`` in the ``s`` string with a given ``replacement``.

| :sign:`(s: String).`:sym:`replace`:sign:`(oldChar: Char, newChar: Char): String`

  Replaces all occurrences of a char ``target`` with ``replacement`` in the ``s`` string.

| :sign:`(s: String).`:sym:`replaceAll`:sign:`(regex: String, replacement: String): String`

  Replaces all substrings in the ``s`` string that match a given regular expression ``regex`` with a given ``replacement``.

| :sign:`(s: String).`:sym:`replaceAllLiterally`:sign:`(literal: String, replacement: String): String`

  Replace all literal occurrences of ``literal`` with the string ``replacement``.
  This is equivalent to ``replaceAll`` except that both arguments are appropriately quoted to avoid being interpreted as metacharacters.

| :sign:`(s: String).`:sym:`replaceFirst`:sign:`(regex: String, replacement: String): String`

  Replaces the first substring in the ``s`` string that matches a given regular expression ``regex`` with a given ``replacement``.

| :sign:`(s: String).`:sym:`reverse`:sign:`: String`

  Returns reversed string ``s``.

| :sign:`(s: String).`:sym:`reversedLines`:sign:`(omitEmptyLines: boolean): String`

  Returns the ``s`` string with reversed lines order. Omits empty lines if ``omitEmptyLines`` is true.

| :sign:`(s: String).`:sym:`rightPad`:sign:`(desiredLength: Int, padding: String): String`

  Appends a given ``padding`` (repeated or trimmed if needed) to the ``s`` string so that a resulting string has a desired length.

| :sign:`(s: String).`:sym:`split`:sign:`(regex: String): Array[String]`

  Splits the ``s`` string around matches of a given regular expression ``regex``.

| :sign:`(s: String).`:sym:`split`:sign:`(regex: String, limit: Int): Array[String]`

  Splits the ``s`` string around matches of a given regular expression ``regex``, ensuring than no more than a given ``limit``
  of parts is returned. Therefore, the last part may still contain a substring that matches the given regular expression.

| :sign:`(s: String).`:sym:`splitBy`:sign:`(separator: String): List[String]`

  Splits the ``s`` string into a list of strings using given ``separator``.
  Resulting parts are not whitespace-trimmed and blank parts are not filtered out.

| :sign:`(s: String).`:sym:`splitByTrim`:sign:`(separator: String): List[String]`

  Splits the ``s`` string into a list of strings using given ``separator``.
  Resulting parts are whitespace-trimmed and blank parts are returned as empty strings.

| :sign:`(s: String).`:sym:`startsWith`:sign:`(prefix: String): Boolean`

  Returns true if the ``s`` string starts with specified ``prefix``.

| :sign:`(s: String).`:sym:`stripInstanceNumbers`:sign:`: String`

  Returns a new string with replaced every table instance number in the ``s`` data model key with a placeholder ``{i}``.

| :sign:`(s: String).`:sym:`stripLineEnd`:sign:`: String`

  Returns a new string with stripped trailing line end character from the ``s`` string if it has one.

| :sign:`(s: String).`:sym:`stripMac`:sign:`: String`

  Returns a new string with stripped all occurrences of a MAC address in the ``s`` string.

| :sign:`(s: String).`:sym:`stripPrefix`:sign:`(prefix: String): String`

  Returns a new string with stripped given ``prefix`` from the beginning of the ``s`` string.

| :sign:`(s: String).`:sym:`stripSuffix`:sign:`(suffix: String): String`

  Returns a new string with stripped given ``suffix`` from the end of the ``s`` string.

| :sign:`(s: String).`:sym:`substring`:sign:`(beginIndex: Int, endIndex: Int): String`

  Returns a substring of the ``s`` string that starts at a specified ``beginIndex`` and ends **just before** a specified ``endIndex``.
  The index of the first character is 0.

| :sign:`(s: String).`:sym:`substring`:sign:`(beginIndex: Int): String`

  Returns a substring of the ``s`` string that starts at a specified index ``beginIndex`` and ends at the end of this string.
  The index of the first character is 0.

| :sign:`(s: String).`:sym:`take`:sign:`(n: Int): String`

  Returns a prefix of the ``s`` string with a specified length ``n``.

| :sign:`(s: String).`:sym:`takeRight`:sign:`(n: Int): String`

  Returns suffix of the ``s`` string with a specified length ``n``.

| :sign:`(s: String).`:sym:`takeWhile`:sign:`(p: Char => Boolean): String`

  Returns the longest prefix of the ``s`` string for which every character satisfies a given predicate ``p``.

| :sign:`(s: String).`:sym:`toBoolean`:sign:`: Boolean`

  Returns true of 'true' value of ``s``, false for 'false' value of ``s``. Otherwise exception is thrown.

| :sign:`(s: String).`:sym:`toByte`:sign:`: Byte`

  Returns a parsed ``Byte`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| :sign:`(s: String).`:sym:`toDate`:sign:`: Date`

  Returns a parsed ``Date`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| :sign:`(s: String).`:sym:`toDouble`:sign:`: Double`

  Returns a parsed ``Double`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| :sign:`(s: String).`:sym:`toFloat`:sign:`: Float`

  Returns a parsed ``Float`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| :sign:`(s: String).`:sym:`toInt`:sign:`: Int`

  Returns a parsed ``Int`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| :sign:`(s: String).`:sym:`toLong`:sign:`: Long`

  Returns a parsed ``Long`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| :sign:`(s: String).`:sym:`toLowerCase`:sign:`: String`

  Returns a lower-case ``s`` string using rules for a system locale.

| :sign:`(s: String).`:sym:`toLowerCaseEnglish`:sign:`: String`

  Returns a lower-case ``s`` string using rules for an English locale.

| :sign:`(s: String).`:sym:`toObjectKey`:sign:`: String`

  Returns a converted ``s`` data model key to an object key by appending a trailing dot if necessary.

| :sign:`(s: String).`:sym:`toParameterKey`:sign:`: String`

  Returns a converted ``s`` data model key to a parameter key by stripping a trailing dot if necessary.

| :sign:`(s: String).`:sym:`toShort`:sign:`: Short`

  Returns a parsed ``Short`` value of ``s``. If ``s`` has a wrong format, exception is thrown.

| :sign:`(s: String).`:sym:`toUpperCase`:sign:`: String`

  Returns upper-case ``s`` with using rules for the system locale.

| :sign:`(s: String).`:sym:`toUpperCaseEnglish`:sign:`: String`

  Returns upper-case ``s`` with using rules for the English locale.

| :sign:`(s: String).`:sym:`trim`:sign:`: String`

  Returns ``s`` with removed any whitespace characters at the beginning and end.

| :sign:`(s: String).`:sym:`withNativeRoot`:sign:`(nativeRoot: String): String`

  If a given key ``s`` starts with ``Root``, this method changes it to specified ``nativeRoot``.
  If a given key does NOT start with ``Root``, it is returned unchanged.

| :sign:`def decodeBase64: Bytes`

  Decodes this string assuming it contains BASE64 encoding of some arbitrary bytes.

| :sign:`def decodeEscapedBytes: Bytes`

  Decodes this string assuming it contains escaped arbitrary bytes (backslash and non-ASCII bytes are escaped).

| :sign:`def decodeHex: Bytes`

  Decodes this string assuming it contains hexadecimal encoding of some arbitrary bytes.

| :sign:`def encode(charset: String): Bytes`

  Encodes this string into bytes using a given charset.

| :sign:`def encodeUTF8: Bytes`

  Encodes this string into bytes using UTF-8.

