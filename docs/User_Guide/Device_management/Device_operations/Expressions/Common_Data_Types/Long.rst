.. _Long API:

.. role:: sign
.. role:: sym

``Long``
========

Integral values ranging from -2\ :sup:`63` to 2\ :sup:`63`\ -1.

API reference
-------------

``Long`` values expose :ref:`Universal API` and :ref:`Numeric types API` plus operations listed below.

| :sign:`(l: Long).`:sym:`toBinaryString`:sign:`: String`

  Returns a string representation of the ``l`` argument as an unsigned integer in base 2.

| :sign:`(l: Long).`:sym:`toOctalString`:sign:`: String`

  Returns a string representation of the ``l`` argument as an unsigned integer in base 8.

| :sign:`(l: Long).`:sym:`toHexString`:sign:`: String`

  Returns a string representation of the ``l`` argument as an unsigned integer in base 16.
