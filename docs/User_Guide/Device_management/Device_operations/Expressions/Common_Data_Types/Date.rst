.. _Date API:

.. role:: sign
.. role:: sym

``Date``
========

A data type for values representing date-time instants with millisecond precision. Current date-time can be obtained using ``date.now`` (see :ref:`date object`).

API reference
-------------

``Date`` values expose :ref:`Universal API` plus operations defined below.

| :sign:`(d: Date)` :sym:`<` :sign:`(that: Date): Boolean`
| :sign:`(d: Date)` :sym:`<=` :sign:`(that: Date): Boolean`
| :sign:`(d: Date)` :sym:`>` :sign:`(that: Date): Boolean`
| :sign:`(d: Date)` :sym:`>=` :sign:`(that: Date): Boolean`

  Ordered comparison operators.

| :sign:`(d: Date).`:sym:`addDays`:sign:`(amount: Int): Date`

  Returns a new date with increased days of a date ``d``.

| :sign:`(d: Date).`:sym:`addHours`:sign:`(amount: Int): Date`

  Returns a new date with increased hours of a date ``d``.

| :sign:`(d: Date).`:sym:`addMilliseconds`:sign:`(amount: Int): Date`

  Returns a new date with increased milliseconds of a date ``d``.

| :sign:`(d: Date).`:sym:`addMinutes`:sign:`(amount: Int): Date`

  Returns a new date with increased minutes of a date ``d``.

| :sign:`(d: Date).`:sym:`addMonths`:sign:`(amount: Int): Date`

  Returns a new date with increased months of a date ``d``.

| :sign:`(d: Date).`:sym:`addSeconds`:sign:`(amount: Int): Date`

  Returns a new date with increased seconds of a date ``d``.

| :sign:`(d: Date).`:sym:`addWeeks`:sign:`(amount: Int): Date`

  Returns a new date with increased weeks of a date ``d``.

| :sign:`(d: Date).`:sym:`addYears`:sign:`(amount: Int): Date`

  Returns a new date with increased years of a date ``d``.

| :sign:`(d: Date).`:sym:`after`:sign:`(when: Date): Boolean`

  Returns true if the ``s`` date is after the ``when`` date, otherwise returns false.

| :sign:`(d: Date).`:sym:`before`:sign:`(when: Date): Boolean`

  Returns true if the ``s`` date is before the ``when`` date, otherwise returns false.

| :sign:`(d: Date).`:sym:`dayOfMonth`:sign:`: Int`

  Returns a day of a month for a date ``d``. 1 - January, 12 - December.

| :sign:`(d: Date).`:sym:`dayOfWeek`:sign:`: Int`

  Returns a day of a week for a date ``d``. 1 - Monday, 7 - Sunday.

| :sign:`(d: Date).`:sym:`dayOfYear`:sign:`: Int`

  Returns a day of a year for a date ``d``.

| :sign:`(d: Date).`:sym:`format`:sign:`: String`

  Returns a formatted date ``d`` using a default date format ``yyyy.MM.dd HH:mm:ss``.

| :sign:`(d: Date).`:sym:`format`:sign:`(dateFormat: String): String`

  Returns a formatted date ``d`` using a format of ``dateFormat``.

| :sign:`(d: Date).`:sym:`hourOfDay`:sign:`: Int`

  Returns an hour of a day for a date ``d``.

| :sign:`(d: Date).`:sym:`millis`:sign:`: Long`

  Returns a number of millis of a date ``d`` since 1970.01.01 00:00:00.

| :sign:`(d: Date).`:sym:`millisOfSecond`:sign:`: Int`

  Returns millis of a second field for a date ``d``.

| :sign:`(d: Date).`:sym:`minuteOfDay`:sign:`: Int`

  Returns minutes of a day field for a date ``d``.

| :sign:`(d: Date).`:sym:`minuteOfHour`:sign:`: Int`

  Returns minutes of an hour field for a date ``d``.

| :sign:`(d: Date).`:sym:`monthOfYear`:sign:`: Int`

  Returns a month of a year field for a date ``d``.

| :sign:`(d: Date).`:sym:`secondOfDay`:sign:`: Int`

  Returns a second of a day field for a date ``d``.

| :sign:`(d: Date).`:sym:`secondOfMinute`:sign:`: Int`

  Returns a second of a minute field for a date ``d``.

| :sign:`(d: Date).`:sym:`truncateToDays`:sign:`: Date`

  Returns a truncated date ``d`` leaving a days field untouched.

| :sign:`(d: Date).`:sym:`truncateToHours`:sign:`: Date`

  Returns a truncated date ``d`` leaving an hours field untouched.

| :sign:`(d: Date).`:sym:`truncateToMinutes`:sign:`: Date`

  Returns a truncated date ``d`` leaving a minutes field untouched.

| :sign:`(d: Date).`:sym:`truncateToMonths`:sign:`: Date`

  Returns a truncated date ``d`` leaving a months field untouched.

| :sign:`(d: Date).`:sym:`truncateToSeconds`:sign:`: Date`

  Returns a truncated date ``d`` leaving a seconds field untouched.

| :sign:`(d: Date).`:sym:`truncateToYears`:sign:`: Date`

  Returns a truncated date ``d`` leaving a years field untouched.
