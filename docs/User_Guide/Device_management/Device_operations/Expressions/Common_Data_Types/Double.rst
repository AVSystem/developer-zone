.. _Double API:

.. role:: sign
.. role:: sym

``Double``
==========

64bit decimal values.

API reference
-------------

``Double`` values expose :ref:`Universal API` and :ref:`Numeric types API` plus operations listed below.

| :sign:`(d: Double).`:sym:`abs`:sign:`: Double`

  Returns the absolute value of ``d``.

| :sign:`(d: Double).`:sym:`ceil`:sign:`: Double`

  Returns the smallest integer value greater than or equal to the given ``d``.

| :sign:`(d: Double).`:sym:`floor`:sign:`: Double`

  Returns the greatest integer value smaller than or equal to the given ``d``.

| :sign:`(d: Double).`:sym:`isInfinity`:sign:`: Boolean`

  Returns true if ``d`` is infinity value, false otherwise.

| :sign:`(d: Double).`:sym:`isNegInfinity`:sign:`: Boolean`

  Returns true if ``d`` is negative infinity value, otherwise returns false.

| :sign:`(d: Double).`:sym:`isPosInfinity`:sign:`: Boolean`

  Returns true if ``d`` is positive infinity value, otherwise returns false.

| :sign:`(d: Double).`:sym:`isValidByte`:sign:`: Boolean`

  Returns true if ``d`` has a zero fractional part, and is within the range of min and max value of Byte, otherwise returns false.

| :sign:`(d: Double).`:sym:`isValidChar`:sign:`: Boolean`

  Returns true if ``d`` has a zero fractional part, and is within the range of min and max value of Char, otherwise returns false.

| :sign:`(d: Double).`:sym:`isValidInt`:sign:`: Boolean`

  Returns true if ``d`` has a zero fractional part, and is within the range of min and max value of Int, otherwise returns false.

| :sign:`(d: Double).`:sym:`isValidShort`:sign:`: Boolean`

  Returns true if ``d`` has a zero fractional part, and is within the range of min and max value of Short, otherwise returns false.

| :sign:`(d: Double).`:sym:`isWhole`:sign:`: Boolean`

  Returns true if ``d`` has no decimal component, otherwise returns false.

| :sign:`(d: Double).`:sym:`round`:sign:`: Long`

  Returns the value that is nearest to ``d``, with halfway cases rounded away from zero.

| :sign:`(d: Double).`:sym:`signum`:sign:`: Int`

  Returns:

  * 0 if ``d`` equals to 0
  * 1 if ``d`` is greater than 0
  * -1 if ``d`` is less than 0.

| :sign:`(d: Double).`:sym:`toDegrees`:sign:`: Double`

  Returns an angle measured in radians of ``d`` to an approximately equivalent angle measured in degrees.

| :sign:`(d: Double).`:sym:`toRadians`:sign:`: Double`

  Returns an angle measured in degrees of ``d`` to an approximately equivalent angle measured in radians.
