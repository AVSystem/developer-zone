.. _Common utility API:

.. role:: sign
.. role:: sym

Common utility API
==================

This section describes expression API exposed by every expression context.

API reference
-------------

Following global objects are available in every expression:

| :sym:`date`

  Contains utility functions for manipulating :ref:`Date API` objects.

| :sym:`format`

  Contains miscellaneous conversion utilities.

| :sym:`math`

  Contains various mathematical functions.

| :sym:`net`

  Contains utility functions for manipulating MAC addresses, IP addresses, etc.

| :sym:`string`

  Contains utility functions for manipulating textual values.

Following global functions are available in every expression:

| :sym:`list`:sign:`(elements: A*): List[A]`

  Creates a :ref:`List API`

| :sym:`set`:sign:`(elements: A*): Set[A]`

  Creates a :ref:`Set API`

| :sym:`map`:sign:`(elements: (K,V)*): Map[K,V]`

  Creates a :ref:`Map API`

| :sym:`bytes`:sign:`(bytes: Byte*): Bytes`

  Creates literal byte sequences.

**See also:**

.. toctree::
   :maxdepth: 1

   Common_Utility_API/date
   Common_Utility_API/format
   Common_Utility_API/math
   Common_Utility_API/net
   Common_Utility_API/string
   Additional_Expression_Context/resource
   Additional_Expression_Context/node
