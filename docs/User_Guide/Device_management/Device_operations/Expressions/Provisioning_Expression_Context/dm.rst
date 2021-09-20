.. _UG_E_PEC_dm_object:

.. role:: sign
.. role:: sym
.. role:: dyn

``dm`` object
=============

Provides access to a device data model saved in the Coiote DM database. Usage of ``dm`` object is discouraged - it may cause
performance problems.

API reference
-------------

.. This API is from: com.avsystem.ump.core.db.dm.query.DMNodeQuery

| :sign:`(q: DMNodeQuery).`:sym:`any`:sign:`: q: DMNodeQuery`
| :sign:`(q: DMNodeQuery).`:sym:`anyOf`:sign:`(names: String*): q: DMNodeQuery`
| :sign:`(q: DMNodeQuery).`:sym:`get`:sign:`(property: String): q: DMNodeQuery`
| :sign:`(q: DMNodeQuery).`:sym:`key`:sign:`(depth: Int): String`
| :sign:`(q: DMNodeQuery).`:sym:`key`:sign:`: String`
| :sign:`(q: DMNodeQuery).`:sym:`keys`:sign:`: List[String]`
| :sign:`(q: DMNodeQuery).`:sym:`keys`:sign:`(depth: Int): List[String]`
| :sign:`(q: DMNodeQuery).`:sym:`orderedArrayInstances`:sign:`: q: DMNodeQuery`
| :sign:`(q: DMNodeQuery).`:sym:`parent`:sign:`: q: DMNodeQuery`
| :sign:`(q: DMNodeQuery).`:dyn:`<dmKeyPart>`:sign:`(property: String): q: DMNodeQuery`

  This is an alternative syntax for ``get(property: String)``. For example, you can write ``dm.ManagementServer.URL``
  instead of ``dm.get('ManagementServer.URL')``. If the data model object/parameter name contains non-alphanumerical
  characters or is an instance number, you can still use this syntax, but with additional backticks, for example,
  ``dm.Services.VoiceService.`1`.VoiceProfile.`3`.Enable``.

| :sign:`(q: DMNodeQuery).`:sym:`value`:sign:`: String`
| :sign:`(q: DMNodeQuery).`:sym:`whereValueIs`:sign:`(expectedValue: String): q: DMNodeQuery`
| :sign:`(q: DMNodeQuery).`:sym:`whereValueIsIgnoreCase`:sign:`(expectedValue: String): DMNodeQuery`
