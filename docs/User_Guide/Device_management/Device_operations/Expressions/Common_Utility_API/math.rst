.. _UG_E_CUA_math_object:

.. role:: sign
.. role:: sym

``math`` object
===============

Contains various mathematical functions.

API reference
-------------

| :sign:`math.`:sym:`E`:sign:`: Double`

  Returns the double value that is closer than any other to ``e``, the base of the natural logarithms.

| :sign:`math.`:sym:`IEEEremainder`:sign:`(x: Double, y: Double): Double`

  Returns the remainder resulting from the division of a specified number ``x`` by another specified number ``y``.

| :sign:`math.`:sym:`Pi`:sign:`: Double`

  Returns the double value that is closer than any other to ``pi``, the ratio of the circumference of a circle to its diameter.

| :sign:`math.`:sym:`abs`:sign:`(x: Double): Double`
| :sign:`math.`:sym:`abs`:sign:`(x: Float): Float`
| :sign:`math.`:sym:`abs`:sign:`(x: Long): Long`
| :sign:`math.`:sym:`abs`:sign:`(x: Int): Int`

  Above functions returns an absolute value of ``x``.

| :sign:`math.`:sym:`acos`:sign:`(x: Double): Double`

  Returns arccos of ``x``.

| :sign:`math.`:sym:`asin`:sign:`(x: Double): Double`

  Returns arcsin of ``x``.

| :sign:`math.`:sym:`atan`:sign:`(x: Double): Double`

  Returns arctan of ``x``.

| :sign:`math.`:sym:`atan2`:sign:`(y: Double, x: Double): Double`

  Returns converted rectangular coordinates (``x``, ``y``) to polar (r, theta).

| :sign:`math.`:sym:`cbrt`:sign:`(x: Double): Double`

  Returns the cube root of the given value ``x``.

| :sign:`math.`:sym:`ceil`:sign:`(x: Double): Double`

  Returns the smallest integer value greater than or equal to the given ``x``.

| :sign:`math.`:sym:`cos`:sign:`(x: Double): Double`

  Returns cosine value of ``x``.

| :sign:`math.`:sym:`cosh`:sign:`(x: Double): Double`

  Returns the hyperbolic cosine of the given value ``x``.

| :sign:`math.`:sym:`exp`:sign:`(x: Double): Double`

  Returns Euler's number e raised to the power of value ``x``.

| :sign:`math.`:sym:`expm1`:sign:`(x: Double): Double`

  Returns exp(``x``) - 1.

| :sign:`math.`:sym:`floor`:sign:`(x: Double): Double`

  Returns the greatest integer value smaller than or equal to the given ``x``.

| :sign:`math.`:sym:`hypot`:sign:`(x: Double, y: Double): Double`

  Returns the square root of the sum of the squares of both given values ``x`` and ``y`` without intermediate underflow or overflow.

| :sign:`math.`:sym:`log`:sign:`(x: Double): Double`

  Returns a value of the natural logarithm of a ``x``.

| :sign:`math.`:sym:`log10`:sign:`(x: Double): Double`

  Returns the value of base-10 logarithm of a ``x``.

| :sign:`math.`:sym:`log1p`:sign:`(x: Double): Double`

  Returns the natural logarithm of the sum of the given ``x`` and 1.

| :sign:`math.`:sym:`max`:sign:`(x: Double, y: Double): Double`
| :sign:`math.`:sym:`max`:sign:`(x: Float, y: Float): Float`
| :sign:`math.`:sym:`max`:sign:`(x: Long, y: Long): Long`
| :sign:`math.`:sym:`max`:sign:`(x: Int, y: Int): Int`

  Returns the greatest value of the given ``x`` and ``y``.

| :sign:`math.`:sym:`min`:sign:`(x: Double, y: Double): Double`
| :sign:`math.`:sym:`min`:sign:`(x: Float, y: Float): Float`
| :sign:`math.`:sym:`min`:sign:`(x: Long, y: Long): Long`
| :sign:`math.`:sym:`min`:sign:`(x: Int, y: Int): Int`

  Returns the smallest value of the given ``x`` and ``y``.

| :sign:`math.`:sym:`pow`:sign:`(x: Double, y: Double): Double`

  Returns the value of the ``x`` argument raised to the power of the ``y`` argument.

| :sign:`math.`:sym:`random`:sign:`: Double`

  Returns a value with a positive sign, greater than or equal to 0.0 and less than 1.0.

| :sign:`math.`:sym:`rint`:sign:`(x: Double): Double`

  Returns the value that is closest in a value to the ``x`` and is equal to a mathematical integer.

| :sign:`math.`:sym:`round`:sign:`(x: Double): Long`
| :sign:`math.`:sym:`round`:sign:`(x: Float): Int`
| :sign:`math.`:sym:`round`:sign:`(x: Long): Long`

  Returns the value that is nearest to ``x``, with halfway cases rounded away from zero.

| :sign:`math.`:sym:`signum`:sign:`(x: Double): Double`
| :sign:`math.`:sym:`signum`:sign:`(x: Float): Float`
| :sign:`math.`:sym:`signum`:sign:`(x: Long): Long`
| :sign:`math.`:sym:`signum`:sign:`(x: Int): Int`

  Returns:

  * 0 if ``x`` equals 0
  * 1 if ``x`` is greater than 0
  * -1 if ``x`` is less than 0.

| :sign:`math.`:sym:`sin`:sign:`(x: Double): Double`

  Returns a sine value of ``x``.

| :sign:`math.`:sym:`sinh`:sign:`(x: Double): Double`

  Returns a hyperbolic sine of the given value ``x``.

| :sign:`math.`:sym:`sqrt`:sign:`(x: Double): Double`

  Returns a square root of the value ``x``.

| :sign:`math.`:sym:`tan`:sign:`(x: Double): Double`

  Returns the tangent of the given value ``x``.

| :sign:`math.`:sym:`tanh`:sign:`(x: Double): Double`

  Returns a hyperbolic tangent of the given value ``x``.

| :sign:`math.`:sym:`toDegrees`:sign:`(x: Double): Double`

  Returns an angle measured in radians of ``x`` to an approximately equivalent angle measured in degrees.

| :sign:`math.`:sym:`toRadians`:sign:`(x: Double): Double`

  Returns an angle measured in degrees of ``x`` to an approximately equivalent angle measured in radians.

| :sign:`math.`:sym:`ulp`:sign:`(x: Float): Float`
| :sign:`math.`:sym:`ulp`:sign:`(x: Double): Double`

  Above methods returns the size of an ulp (unit in the last place) of the given value ``x``.