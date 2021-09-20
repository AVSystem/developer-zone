.. _Bytes:

.. role:: sign
.. role:: sym

``Bytes``
=========

``Bytes`` creates literal byte sequences.

**Signature:**

| :sign:`def bytes(bs: Byte*): Bytes`

**Example usage:**

| :sign:`bytes(5, 3, 2, 0x7c)`

API reference
-------------

| :sign:`def escaped: String`

  Encodes this sequence of bytes as a string with non-ASCII bytes and backslash escaped, for example, *hsg\x7c\x0dfoo\\bar*.

| :sign:`def hex: String`

  Encodes this sequence of bytes as a hexadecimal string.

| :sign:`def base64: String`

  Encodes this sequence of bytes as a BASE64 string.

| :sign:`def decodeUTF8: String`

  Decodes this sequence of bytes as a UTF-8 string.

| :sign:`def decode(charset: String): String`

  Decodes this sequence of bytes as a string using a given charset.

| :sign:`def asList: JList[Byte]`

  Decodes this sequence of bytes as a list.