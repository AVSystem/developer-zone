.. _prefix object:

.. role:: sign
.. role:: sym
.. role:: dyn

``prefix`` object
=================

Allows to define a live data model query with a key prefix (same as :ref:`query object`). The difference is that the prefix
is not specified by a user but it is fetched from an :ref:`XmlTask` context (for example, when using the **in** parameter in the :ref:`foreach <XmlTask_foreach>` tag).
This syntax may be useful to build a nested **foreach**:

::

    <foreach query="${root.WANDevice.any}" in="true">
      <get key="Name" />
      <foreach query="${prefix.WANConnectionDevice.any}" iterator="j" in="true">
        <get key="WANIPConnectionNumberOfEntries" />
      </foreach>
    </foreach>

