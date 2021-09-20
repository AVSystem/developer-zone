.. _query object:

.. role:: sign
.. role:: sym
.. role:: dyn

``query`` object
================

:sym:`query`:sign:`(prefix: String)` allows to define a live data model query (same as :ref:`root object`).
The difference is that the ``query`` object represents a query that begins with a specified `prefix` key, not just with a root
key of the device.

Example
-------

``${root.InternetGatewayDevice.WANDevice.any()}``
with `query` syntax which is equivalent to:
``${query('InternetGatewayDevice.WANDevice.').any}``
