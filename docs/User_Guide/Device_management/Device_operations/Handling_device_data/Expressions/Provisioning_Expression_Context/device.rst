.. _UG_E_PEC_device_object:

.. role:: sign
.. role:: sym
.. role:: dyn

``device`` object
=================

Provides information about a device.

API reference
-------------

.. This API is from: com.avsystem.ump.core.db.entities.Device

| :sign:`device.`:sym:`acsPassword`:sign:`: String`

  Returns an ACS password for a ``device``.

| :sign:`device.`:sym:`alert`:sign:`(monitoringName: String, alertName: String): Alert`

  Returns a monitoring alert for a given ``monitoringName`` and ``alertName``.

| :sign:`device.`:sym:`alerts`:sign:`: List[Alert]`

  Returns monitoring alerts for a ``device``, including group alerts.

| :sign:`device.`:sym:`blacklisted`:sign:`: Boolean`

  Returns true if ``device`` is currently blacklisted. Returns false otherwise.

| :sign:`device.`:sym:`creationTime`:sign:`: Date`

  Returns a creation date of a ``device``.

| :sign:`device.`:sym:`currentWanIP`:sign:`: String`

  Returns a current WAN IP address for a ``device``.

| :sign:`device.`:sym:`description`:sign:`: String`

  Returns a description for a ``device``.

| :sign:`device.`:sym:`deviceTypeGroup`:sign:`: String`

  Returns a device type group for a ``device``.

| :sign:`device.`:sym:`directGroups`:sign:`: Set[String]`

  Returns a set of a direct group to which a ``device`` is assigned.

| :sign:`device.`:sym:`domain`:sign:`: String`

  Returns a multitenancy domain for a ``device``.

| :sign:`device.`:sym:`expectedSessionTime`:sign:`: Date`

  Returns calculated expectedSessionTime based on a ``device`` periodic value.

| :sign:`device.`:sym:`getMonitoringAlert`:sign:`(monitoringName: String, alertName: String): AlertStatus`

  Returns a status of a monitoring alert for a given monitoring ``monitoringName`` and ``alertName``.

| :sign:`device.`:sym:`getMonitoringAlertByName`:sign:`(monitoringName: String, alertName: String): AlertStatus`

  Returns a status of a monitoring alert for a given monitoring ``monitoringName`` and ``alertName``.

| :sign:`device.`:sym:`getMonitoringProperty`:sign:`(monitoringName: String, monitoringProperty: String): String`

  Returns a value of ``monitoringProperty`` for a monitoring with a given ``monitoringName``.

| :sign:`device.`:sym:`getProperty`:sign:`(property: String, defaultValue: String): String`

  Returns a value of a device ``property`` with a fallback to ``defaultValue``.

| :sign:`device.`:sym:`getProperty`:sign:`(property: String): String`

  Returns a value of a device ``property``. If no property exists, null is returned.

| :sign:`device.`:sym:`groups`:sign:`: Set[String]`

  Returns all groups to which a ``device`` is assigned.

| :sign:`device.`:sym:`hardwareVersion`:sign:`: String`

  Return a hardware version for a ``device``.

| :sign:`device.`:sym:`hasProperty`:sign:`(property: String): Boolean`

  Returns true if a ``device`` has a value for ``property``.

| :sign:`device.`:sym:`id`:sign:`: String`

  Returns a ``device`` id.

| :sign:`device.`:sym:`isInDirectGroup`:sign:`(groupId: String): Boolean`

  Returns true if a ``device`` is assigned to a direct group with a given `groupId``. Returns false otherwise.

| :sign:`device.`:sym:`isInGroup`:sign:`(groupId: String): Boolean`

  Returns true if a ``device`` is assigned to a group with a given `groupId``. Returns false otherwise.

| :sign:`device.`:sym:`lastBootstrapTime`:sign:`: Date`

  Returns a value of last bootstrap time for a ``device``.

| :sign:`device.`:sym:`lastVisitTime`:sign:`: Date`

  Returns a value of last visit time for a ``device``.

| :sign:`device.`:sym:`manufacturer`:sign:`: String`

  Returns a value of manufacturer time for a ``device``.

| :sign:`device.`:sym:`modelName`:sign:`: String`

  Returns a value of a last model name for a ``device``.

| :sign:`device.`:sym:`monitoringAlerts`:sign:`: Map[String,AlertStatus]`

  Returns a map of monitoring alert statuses. The key is monitoring definition name.

| :sign:`device.`:sym:`monitoringProperties`:sign:`: Map[String,String]`

  Returns a map of monitoring properties. The key is the tuple of a monitoring definition name and a monitoring property
  separated with ``_``.

| :sign:`device.`:sym:`oui`:sign:`: String`

  Returns a value of OUI for a ``device``.

| :sign:`device.`:sym:`productClass`:sign:`: String`

  Returns a value of a product class for a ``device``.

| :sign:`device.`:sym:`properties`:sign:`: Map[String,String]`

  Returns a map of ``device`` properties. The key is a property name.

| :sign:`device.`:sym:`property.`:dyn:`<propName>`:sign:`: String`

  Returns a value of a device property with a given name. This is the same as ``getProperty(property: String)`` but has
  a nicer syntax (for example, ``device.property.someProperty`` instead of ``device.getProperty('someProperty')``).
  If the property name contains non-alphanumerical characters, you can still use this syntax, but the property name
  needs to be enclosed in backticks: ``device.property.`complex.property.name```.

| :sign:`device.`:sym:`provisioningEnabled`:sign:`: Boolean`

  Returns true if provisioning is enabled for a ``device``.

| :sign:`device.`:sym:`rootObject`:sign:`: String`

  Returns a root object of a data model for a ``device``.

| :sign:`device.`:sym:`secure`:sign:`: Boolean`

  Returns true if authentication is turned on for a ``device``.

| :sign:`device.`:sym:`serialNumber`:sign:`: String`

  Returns a value of a serial number for a ``device``.

| :sign:`device.`:sym:`softwareVersion`:sign:`: String`

  Returns a value of a software version for a ``device``.
