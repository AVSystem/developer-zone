.. _date object:

.. role:: sign
.. role:: sym

``date`` object
===============

Contains utility functions for manipulating :ref:`Date API` objects.

Most of these functions should already be available as a part of :ref:`Date API` native API, thus making the ``date``
object a legacy API.

API reference
-------------

| :sign:`date.`:sym:`addDays`:sign:`(date: Date, days: Int): Date`

  Returns a new date with incremented days in ``date``.

| :sign:`date.`:sym:`addHours`:sign:`(date: Date, hours: Int): Date`

  Returns a new date with incremented hours in ``date``.

| :sign:`date.`:sym:`addMilliseconds`:sign:`(date: Date, milliseconds: Int): Date`

  Returns a new date with incremented milliseconds in ``date``.

| :sign:`date.`:sym:`addMinutes`:sign:`(date: Date, minutes: Int): Date`

  Returns a new date with incremented minutes in ``date``.

| :sign:`date.`:sym:`addMonths`:sign:`(date: Date, months: Int): Date`

  Returns a new date with incremented months in ``date``.

| :sign:`date.`:sym:`addSeconds`:sign:`(date: Date, seconds: Int): Date`

  Returns a new date with incremented seconds in ``date``.

| :sign:`date.`:sym:`addWeeks`:sign:`(date: Date, weeks: Int): Date`

  Returns a new date with incremented weeks in ``date``.

| :sign:`date.`:sym:`addYears`:sign:`(date: Date, years: Int): Date`

  Returns a new date with incremented years in ``date``.

| :sign:`date.`:sym:`format`:sign:`(date: Date, format: String): String`

  Returns a formatted ``date`` with a given ``format``.

| :sign:`date.`:sym:`formatTimeRange`:sign:`(from: Date, to: Date): String`

  Returns a formatted time range between a ``from`` date and a ``to`` date.

| :sign:`date.`:sym:`formatTimeRange`:sign:`(from: Long, to: Long): String`

  Returns a formatted time range between a ``from`` date and a ``to`` date. ``from`` and ``to`` are treated as values given in milliseconds.
  For example, if ``from`` is 100 and ``to`` is 1000, a result is ``0.1-1s``.

| :sign:`date.`:sym:`formatTimeRange`:sign:`(from: Double, to: Double): String`

  Returns a formatted time range between a ``from`` date and a ``to`` date. ``from`` and ``to`` are treated as values given in milliseconds.
  For example, if ``from`` is 100 and ``to`` is 1000, a result is ``0.1-1s``.

| :sign:`date.`:sym:`isAfter`:sign:`(date1: Date, date2: Date): Boolean`

  Returns true if ``date1`` is after ``date2``. Returns false otherwise.

| :sign:`date.`:sym:`isBefore`:sign:`(date1: Date, date2: Date): Boolean`

  Returns true if ``date1`` is before ``date2``. Returns false otherwise.

| :sign:`date.`:sym:`isEqual`:sign:`(date1: Date, date2: Date): Boolean`

  Returns true if ``date1`` equals ``date2``. Returns false otherwise.

| :sign:`date.`:sym:`now`:sign:`: Date`

  Returns a current date.

| :sign:`date.`:sym:`roundToDay`:sign:`(date: Date): Date`

  Returns a new date which is ``date`` rounded to days.

| :sign:`date.`:sym:`roundToHours`:sign:`(date: Date): Date`

  Returns a new date which is ``date`` rounded to hours.

| :sign:`date.`:sym:`roundToMinutes`:sign:`(date: Date): Date`

  Returns a new date which is ``date`` rounded to minutes.

| :sign:`date.`:sym:`roundToMonth`:sign:`(date: Date): Date`

  Returns a new date which is ``date`` rounded to months.

| :sign:`date.`:sym:`roundToSeconds`:sign:`(date: Date): Date`

  Returns a new date which is ``date`` rounded to seconds.

| :sign:`date.`:sym:`roundToYear`:sign:`(date: Date): Date`

  Returns a new date which is ``date`` rounded to years.

| :sign:`date.`:sym:`setDays`:sign:`(date: Date, days: Int): Date`

  Returns a new date which is ``date`` with a new value for ``days``.

| :sign:`date.`:sym:`setHours`:sign:`(date: Date, hours: Int): Date`
  
  Returns a new date which is ``date`` with a new value for ``hours``.

| :sign:`date.`:sym:`setMilliseconds`:sign:`(date: Date, milliseconds: Int): Date`

  Returns a new date which is ``date`` with a new value for ``milliseconds``.

| :sign:`date.`:sym:`setMinutes`:sign:`(date: Date, minutes: Int): Date`

  Returns a new date which is ``date`` with a new value for ``minutes``.

| :sign:`date.`:sym:`setMonths`:sign:`(date: Date, months: Int): Date`

  Returns a new date which is ``date`` with a new value for ``months``.

| :sign:`date.`:sym:`setSeconds`:sign:`(date: Date, seconds: Int): Date`

  Returns a new date which is ``date`` with a new value for ``seconds``.

| :sign:`date.`:sym:`setYears`:sign:`(date: Date, years: Int): Date`

  Returns a new date which is ``date`` with a new value for ``years``.

| :sign:`date.`:sym:`truncateByDay`:sign:`(date: Date): Date`
  
  Returns a truncated date ``date`` leaving a days field untouched.

| :sign:`date.`:sym:`truncateByHours`:sign:`(date: Date): Date`

  Returns a truncated date ``date`` leaving an hours field untouched.

| :sign:`date.`:sym:`truncateByMinutes`:sign:`(date: Date): Date`

  Returns a truncated date ``date`` leaving a minutes field untouched.

| :sign:`date.`:sym:`truncateByMonth`:sign:`(date: Date): Date`

  Returns a truncated date ``date`` leaving a months field untouched.

| :sign:`date.`:sym:`truncateBySeconds`:sign:`(date: Date): Date`

  Returns a truncated date ``date`` leaving a seconds field untouched.

| :sign:`date.`:sym:`truncateByYear`:sign:`(date: Date): Date`
        
  Returns a truncated date ``date`` leaving a years field untouched.
