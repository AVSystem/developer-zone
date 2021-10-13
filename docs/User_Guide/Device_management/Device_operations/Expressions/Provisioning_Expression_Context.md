# Provisioning expression context

When using an expression in provisioning (for example, in task configurations), expression API exposes all of the
[Common utility API](Common_Utility_API.md), but also exposes additional objects that give access to data associated with a particular
device and a provisioning session.

Provisioning expression context also uses some additional, specialized data types. Most of them are enumeration types.
These are:

   * ``TaskReport.Status`` - represents a task execution status. Possible values are
     ``IN_PROGRESS``, ``SUCCESS``, ``WARNING`` and ``ERROR``.
   * ``LogLevel`` - represents a logging level (used for example, in ``log`` tag in XML task) - possible
     values are ``TRACE``, ``DEBUG``, ``INFO``, ``WARN``, ``ERROR``, ``OFF``.
   * ``AlertStatus`` - represents a monitoring alert status. Possible values are ``IS_RAISED`` or ``IS_HIDDEN``.
   * ``FileType`` - represents a type of a resource being downloaded by a device from Coiote DM or uploaded by the device to UMP.
     See :ref:`transfer object` for more information.
   * ``ProtocolType`` - represents a protocol used for file transfer. See :ref:`transfer object` for more information.

## API reference

| `device`

  Provides access to device data.

| `dm`

  Provides access to a device data model saved in the Coiote DM database. Usage of ``dm`` object is discouraged - it may cause
  performance problems.

| `root`

  Allows to define a live data model query. Such a query may be supplied to :ref:`find <XmlTask_find>` and
  :ref:`foreach <XmlTask_foreach>` tags in :ref:`XmlTask` to traverse a device data model in a desired pattern.

| `query`

   Allows to define a live data model query - similar to :ref:`root object`.

| `prefix`

  Similar to :ref:`query object`.

| `sv`

  Provides access to a SV profile of a device.

| `task`

  Provides access to information about a currently executed task.

| `taskReport`

  Provides access to data in a report of a currently executed task.

| `transfer`

  Utilities for file transfer between devices and Coiote DM resources.

| `res`

  Provides access to CSV resources.

| `lwm2m`

  Provides access to data about LwM2M Session. This works only for LwM2M provisioned devices.

## ``device`` object

Provides information about a device.

### API reference

| `device.``acsPassword``: String`

  Returns an ACS password for a ``device``.

| `device.``alert``(monitoringName: String, alertName: String): Alert`

  Returns a monitoring alert for a given ``monitoringName`` and ``alertName``.

| `device.``alerts``: List[Alert]`

  Returns monitoring alerts for a ``device``, including group alerts.

| `device.``blacklisted``: Boolean`

  Returns true if ``device`` is currently blacklisted. Returns false otherwise.

| `device.``creationTime``: Date`

  Returns a creation date of a ``device``.

| `device.``currentWanIP``: String`

  Returns a current WAN IP address for a ``device``.

| `device.``description``: String`

  Returns a description for a ``device``.

| `device.``deviceTypeGroup``: String`

  Returns a device type group for a ``device``.

| `device.``directGroups``: Set[String]`

  Returns a set of a direct group to which a ``device`` is assigned.

| `device.``domain``: String`

  Returns a multitenancy domain for a ``device``.

| `device.``expectedSessionTime``: Date`

  Returns calculated expectedSessionTime based on a ``device`` periodic value.

| `device.``getMonitoringAlert``(monitoringName: String, alertName: String): AlertStatus`

  Returns a status of a monitoring alert for a given monitoring ``monitoringName`` and ``alertName``.

| `device.``getMonitoringAlertByName``(monitoringName: String, alertName: String): AlertStatus`

  Returns a status of a monitoring alert for a given monitoring ``monitoringName`` and ``alertName``.

| `device.``getMonitoringProperty``(monitoringName: String, monitoringProperty: String): String`

  Returns a value of ``monitoringProperty`` for a monitoring with a given ``monitoringName``.

| `device.``getProperty``(property: String, defaultValue: String): String`

  Returns a value of a device ``property`` with a fallback to ``defaultValue``.

| `device.``getProperty``(property: String): String`

  Returns a value of a device ``property``. If no property exists, null is returned.

| `device.``groups``: Set[String]`

  Returns all groups to which a ``device`` is assigned.

| `device.``hardwareVersion``: String`

  Return a hardware version for a ``device``.

| `device.``hasProperty``(property: String): Boolean`

  Returns true if a ``device`` has a value for ``property``.

| `device.``id``: String`

  Returns a ``device`` id.

| `device.``isInDirectGroup``(groupId: String): Boolean`

  Returns true if a ``device`` is assigned to a direct group with a given `groupId``. Returns false otherwise.

| `device.``isInGroup``(groupId: String): Boolean`

  Returns true if a ``device`` is assigned to a group with a given `groupId``. Returns false otherwise.

| `device.``lastBootstrapTime``: Date`

  Returns a value of last bootstrap time for a ``device``.

| `device.``lastVisitTime``: Date`

  Returns a value of last visit time for a ``device``.

| `device.``manufacturer``: String`

  Returns a value of manufacturer time for a ``device``.

| `device.``modelName``: String`

  Returns a value of a last model name for a ``device``.

| `device.``monitoringAlerts``: Map[String,AlertStatus]`

  Returns a map of monitoring alert statuses. The key is monitoring definition name.

| `device.``monitoringProperties``: Map[String,String]`

  Returns a map of monitoring properties. The key is the tuple of a monitoring definition name and a monitoring property
  separated with ``_``.

| `device.``oui``: String`

  Returns a value of OUI for a ``device``.

| `device.``productClass``: String`

  Returns a value of a product class for a ``device``.

| `device.``properties``: Map[String,String]`

  Returns a map of ``device`` properties. The key is a property name.

| `device.``property.``<propName>``: String`

  Returns a value of a device property with a given name. This is the same as ``getProperty(property: String)`` but has
  a nicer syntax (for example, ``device.property.someProperty`` instead of ``device.getProperty('someProperty')``).
  If the property name contains non-alphanumerical characters, you can still use this syntax, but the property name
  needs to be enclosed in backticks: ``device.property.`complex.property.name```.

| `device.``provisioningEnabled``: Boolean`

  Returns true if provisioning is enabled for a ``device``.

| `device.``rootObject``: String`

  Returns a root object of a data model for a ``device``.

| `device.``secure``: Boolean`

  Returns true if authentication is turned on for a ``device``.

| `device.``serialNumber``: String`

  Returns a value of a serial number for a ``device``.

| `device.``softwareVersion``: String`

  Returns a value of a software version for a ``device``.

## ``dm`` object

Provides access to a device data model saved in the Coiote DM database. Usage of ``dm`` object is discouraged - it may cause
performance problems.

### API reference

| `(q: DMNodeQuery).``any``: q: DMNodeQuery`
| `(q: DMNodeQuery).``anyOf``(names: String*): q: DMNodeQuery`
| `(q: DMNodeQuery).``get``(property: String): q: DMNodeQuery`
| `(q: DMNodeQuery).``key``(depth: Int): String`
| `(q: DMNodeQuery).``key``: String`
| `(q: DMNodeQuery).``keys``: List[String]`
| `(q: DMNodeQuery).``keys``(depth: Int): List[String]`
| `(q: DMNodeQuery).``orderedArrayInstances``: q: DMNodeQuery`
| `(q: DMNodeQuery).``parent``: q: DMNodeQuery`
| `(q: DMNodeQuery).``<dmKeyPart>``(property: String): q: DMNodeQuery`

  This is an alternative syntax for ``get(property: String)``. For example, you can write ``dm.ManagementServer.URL``
  instead of ``dm.get('ManagementServer.URL')``. If the data model object/parameter name contains non-alphanumerical
  characters or is an instance number, you can still use this syntax, but with additional backticks, for example,
  ``dm.Services.VoiceService.`1`.VoiceProfile.`3`.Enable``.

| `(q: DMNodeQuery).``value``: String`
| `(q: DMNodeQuery).``whereValueIs``(expectedValue: String): q: DMNodeQuery`
| `(q: DMNodeQuery).``whereValueIsIgnoreCase``(expectedValue: String): DMNodeQuery`

## ``lwm2m`` object

Provides access to data about a LwM2M session. This works only for LwM2M provisioned devices.

### API reference

| `lwm2m.``isClientBootstrapState``: Boolean`

  Returns true if a client is in a bootstrap state.

| `lwm2m.``isRegisteredState``: Boolean`

  Returns true if a client is registered.

| `lwm2m.``updateEvent``: Boolean`

  Returns true if the session was started by an update request.

| `lwm2m.``registerEvent``: Boolean`

  Returns true if the session was started by a register request.

| `lwm2m.``notifyEvent``: Boolean`

  Returns true if the session was started by a notification.

| `lwm2m.``sendEvent``: Boolean`

  Returns true if the session was started by a `Send` request.

| `lwm2m.``bootstrapEvent``: Boolean`

  Returns true if the session was started by a bootstrap request.

| `lwm2m.``notificationsPaths``: Set[String]`

  Returns a set of LwM2M paths for which notifications arrived.

| `lwm2m.``sendPaths``: Set[String]`

  Returns a set of LwM2M paths for which a `Send` request arrived.

| `lwm2m.``messageBuilder.``: Lwm2mMessageBuilderApi`

  See :ref:`API reference <lwm2m_message_builder_api>`.


## ``messageBuilder`` object

Provides access to API for CoAP message construction.

### API reference

| `lwm2m.``messageBuilder.``updateTrigger``(serverObjectInstance: Int)``: Lwm2mMessageBuilderApi`

  Constructs a CoAP message containing
  a **LwM2M Execute** request for the :samp:`LwM2M Server.X.Registration Update Trigger` resource.
  Example usage (XML Task):

      <config>
        <sms to="123456789" binary="true" text="${lwm2m.messageBuilder.updateTrigger(1).toBytes.hex}" />
      </config>

| `lwm2m.``messageBuilder.``updateTrigger``: Lwm2mMessageBuilderApi`

  Similar to previous method but without explicitly specified object instance number.
  The used instance number is the instance number of the Coiote server for the device executing the task.
  In other words, if the :samp:`LwM2M Server.7.` object instance for the **my-device** device refers to the
  Coiote server, then an `updateTrigger` call for **my-device** is equivalent to an `updateTrigger(7)` call.

## ``prefix`` object

Allows to define a live data model query with a key prefix (same as :ref:`query object`). The difference is that the prefix
is not specified by a user but it is fetched from an :ref:`XmlTask` context (for example, when using the **in** parameter in the :ref:`foreach <XmlTask_foreach>` tag).
This syntax may be useful to build a nested **foreach**:

    <foreach query="${root.WANDevice.any}" in="true">
      <get key="Name" />
      <foreach query="${prefix.WANConnectionDevice.any}" iterator="j" in="true">
        <get key="WANIPConnectionNumberOfEntries" />
      </foreach>
    </foreach>

## ``query`` object

`query``(prefix: String)` allows to define a live data model query (same as :ref:`root object`).
The difference is that the ``query`` object represents a query that begins with a specified `prefix` key, not just with a root
key of the device.

### Example

``${root.InternetGatewayDevice.WANDevice.any()}``
with `query` syntax which is equivalent to:
``${query('InternetGatewayDevice.WANDevice.').any}``

## ``res`` object

It provides access to CSV resources. For any resource in the system the **expressionAlias** field can be set. Only CSV resources
with non-null expression alias are visible from expressions. Moreover, it is possible to access some static CSV files
that are allowed by system configuration.

### CSV format

A file format should follow a standard CSV specification. A delimiter character is ``/,`` and a quote character is ``/"``.
If a cell contains any leading or trailing spaces, it requires explicit quoting in order to make them a part of a cell value,
otherwise they will be trimmed.

### Example

Suppose there is a CSV resource (with **expressionAlias** set to *alias*) that contains some simple static mapping, that is,
from OUI to manufacturer:

    OUI,manufacturer
    000000,xerox
    000001,xerox
    000002,xerox
    fcfbfb,cisco

It is possible to write an expression that:

 * Accesses some particular value, for example, retrieves a manufacturer for the *fcfbfb* OUI:

  ``${res.alias.by('OUI').get('fcfbfb').manufacturer}``

  or using column indexes if a file does not contain column names:

  ``${res.alias.by(0).get('test')(1)}``

 * Accesses directly, for example, the 3 :sup:`rd` record from the file (indexing starts with zero):

  ``${res.alias.row(2)}``

 * Retrieves all records matching a given key, for example, all records for the `xerox` manufacturer:

  ``${res.alias.by('manufacturer').getAll('xerox')}``

### API reference

| `res.``<expressionAlias>``: CsvResource`

  It returns a resource with a given expression alias. It is possible to have two CSV resources with the same expression alias.
  It is undefined which one will be visible from expressions. ``NoSuchElementException`` is thrown when there is no resource
  with the given alias.

| `(r: CsvResource).``by``(columnIndex: Int): CsvResourceByIndex`

  It chooses which column should be used as a key in the static mapping. ``null`` is returned when ``columnIndex`` is greater
  than the number of columns in the CSV file.

| `(r: CsvResource).``by``(columnName: String): CsvResourceByName`

  It chooses which column should be used as a key in the static mapping. Values from the first CSV row are interpreted as column
  names. If there are any duplicates, it is undefined which one will be used. ``NoSuchElementException`` is thrown when
  the resource is empty. ``null`` is returned when there is no column named ``columnName`` in the CSV file.

| `(r: CsvResource).``row``(rowNumber: Int): List[String]`

   It directly returns a record specified by ``rowNumber``. ``null`` is returned when ``rowNumber`` is greater than the number
   of records in the CSV file.

| `(r: CsvResource).``columnNames``: Set[String]`

   It returns a set of values from the first CSV row. An empty set is returned when the resource is empty.

| `(r: CsvResourceByIndex).``get``(key: String): List[String]`
| `(r: CsvResourceByName).``get``(key: String): List[CsvRecord]`

   It selects some particular record from the mapping by the key. ``null`` is returned when there is no record matching a given
   key. If there are duplicates in the column, it is undefined which one will be used. It is possible to access all records
   matching the given key using ``getAll(key)``.

| `(r: CsvResourceByIndex).``getAll``(key: String): List[List[String]]`
| `(r: CsvResourceByName).``getAll``(key: String): List[List[CsvRecord]]`

   It allows to select all records matching a given key. An empty list is returned when there is no such a record.

| `(r: CsvRecord).``asMap``: Map[String, String]`

   It transforms a record to a string map keyed by column names.

| `(r: CsvRecord).``<columnName>``: String`

   It returns a value located at a given column. ``null`` is returned when there is no column named ``columnName`` in the CSV file.

## ``root`` object

Allows to define a *live data model query*. Such a query may be supplied to :ref:`XmlTask_find` and
:ref:`XmlTask_foreach` in :ref:`XmlTask` to traverse a device data model in a desired pattern.

The live data model query is an object that specifies how to traverse the (some part of) device data model during a provisioning
session and extract some data from it. When executed, the live data model query evaluates to list of string values which
are usually data model keys or values of data model parameters. This is why it can be used in ``foreach`` tag.

The live data model query is built using a chain of calls that starts with the ``root`` object. The ``root`` object
represents a live data model query that would evaluate to just the root object key of the device. We can then
descend into some subtrees of the data model, select particular branches and go back up the tree.

### API reference

| `(q: LiveDMQueryApi).``any``: LiveDMQueryApi`

  Descends the data model tree one level down, into all children nodes of nodes that the query is currently at.

| `(q: LiveDMQueryApi).``get``(fragment: String): LiveDMQueryApi`

  "Appends" given data model key fragment to keys of all nodes that the query is currently at. This effectively
  descends the data model tree one or more levels down.

| `(q: LiveDMQueryApi).``filter``(predicate: String => Boolean): LiveDMQueryApi`

  Narrows the query to only these nodes whose keys satisfy given predicate (expressed as lambda).

| `(q: LiveDMQueryApi).``in``(suffixes: String*): LiveDMQueryApi`
| `(q: LiveDMQueryApi).``in``(suffixes: List[String]): LiveDMQueryApi`

  "Appends" all suffixes to keys of all nodes that the query is currently at. This effectively
  descends the data model tree one or more levels down. The descend uses multiple branches if there is more than one
  suffix specified.

| `(q: LiveDMQueryApi).``moveUp``: LiveDMQueryApi`

  Ascends one level up in the data model tree.

| `(q: LiveDMQueryApi).``parameterValue``(parameterName: String, expectedValue: String): LiveDMQueryApi`

  Narrows the query to only these nodes which have a parameter named ``parameterName`` with a value ``expectedValue``.
  This is equivalent to ``valueOf(parameterName).is(expectedValue)``.

| `(q: LiveDMQueryApi).``<dmKeyPart>``: LiveDMQueryApi`

  This is an alternative syntax for ``get(property: String)``. For example, you can write ``root.ManagementServer.URL``
  instead of ``root.get('ManagementServer.URL')``. If the data model object/parameter name contains non-alphanumerical
  characters or is an instance number, you can still use this syntax, but with additional backticks, for example,
  ``root.Services.VoiceService.`1`.VoiceProfile.`3`.Enable``.

| `(q: LiveDMQueryApi).``valueOf``(parameterName: String).``satisfies``(predicate: String => Boolean): LiveDMQueryApi`

  Narrows the query to only these nodes which have a parameter ``parameterName`` whose value satisfies given predicate
  (expressed as lambda).

| `(q: LiveDMQueryApi).``valueOf``(parameterName: String).``contains``(substring: String): LiveDMQueryApi`
| `(q: LiveDMQueryApi).``valueOf``(parameterName: String).``contains``(substring: String, ignoreCase: Boolean): LiveDMQueryApi`

  Narrows the query to only these nodes which have a parameter ``parameterName`` whose value contains a given substring.

| `(q: LiveDMQueryApi).``valueOf``(parameterName: String).``endsWith``(suffix: String): LiveDMQueryApi`
| `(q: LiveDMQueryApi).``valueOf``(parameterName: String).``endsWith``(suffix: String, ignoreCase: Boolean): LiveDMQueryApi`

  Narrows the query to only these nodes which have a parameter ``parameterName`` whose value ends with a given suffix.

| `(q: LiveDMQueryApi).``valueOf``(parameterName: String).``is``(value: String): LiveDMQueryApi`
| `(q: LiveDMQueryApi).``valueOf``(parameterName: String).``is``(value: String, ignoreCase: Boolean): LiveDMQueryApi`

  Narrows the query to only these nodes which have a parameter ``parameterName`` whose value is ``value``.

| `(q: LiveDMQueryApi).``valueOf``(parameterName: String).``startsWith``(prefix: String): LiveDMQueryApi`
| `(q: LiveDMQueryApi).``valueOf``(parameterName: String).``startsWith``(prefix: String, ignoreCase: Boolean): LiveDMQueryApi`

  Narrows the query to only these nodes which have a parameter ``parameterName`` whose value starts with a given prefix.

## ``sv`` object

Provides access to a device Setting Value profile.

### API reference

| `sv.``get``(svName: String): String`

  Returns a value of SV with a given name. ``null`` is returned when there is no value, but you can provide a fallback
  value with ``?`` operator, for example, ``sv.get('someSv') ? 'defaultValue'``.

| `sv.``<svName>``: String`

  This is an alternative syntax for ``get(svName: String)``. For example, you can write ``sv.someSv`` instead of
  ``sv.get('someSv')``. If a name of SV contains non-alphanumerical characters, you can still use this syntax but with
  additional backticks, for example, ``sv.`some.complex.sv.name```.

  ## ``task`` object

Provides access to information about a currently executed task.

### API reference

| `task.``active``: Boolean`

  Returns true if a ``task`` is active.

| `task.``appliesToSubgroups``: Boolean`

  Returns true if a group ``task`` will be invoked on subgroups.

| `task.``creationTime``: Date`

  Returns a creation date of a ``task``.

| `task.``device``: String`

  Returns an id of a device if a ``task`` is a device task. Returns null if it is not the device task.

| `task.``domain``: String`

  Returns a multitenancy domain of a ``task``.

| `task.``group``: String`

  Returns an id of a group if a ``task`` is a group task.  Returns null if it is not the group task.

| `task.``id``: String`

  Returns an id of a ``task``.

| `task.``idSuffix``: String`

  Returns the suffix of ``task``\ 's id.

| `task.``isActive``: Boolean`

  Returns true if a ``task`` is active (will be executed during a session).

| `task.``isAppliesToSubgroups``: Boolean`

  Returns true if a group ``task`` will be invoked on subgroups.

| `task.``lastFailedRestartTime``: Date`

  Returns the last time of failed restart for a ``task``.

| `task.``lastRestartTime``: Date`

  Returns the last time restart for a ``task``.

| `task.``name``: String`

  Returns a name of a ``task``.

| `task.``parent``: String`

  Returns a parent task id of a ``task``.

| `task.``properties``: Map[String,String]`

  Returns ``task`` properties. The key is a property name.

| `task.``property.``<propertyName>``: String`

  Returns a value of a property for a given ``propertyName``.
  For example, you can write ``task.property.myProperty``.

## ``task`` object

Provides access to information about a currently executed task.

### API reference

| `task.``active``: Boolean`

  Returns true if a ``task`` is active.

| `task.``appliesToSubgroups``: Boolean`

  Returns true if a group ``task`` will be invoked on subgroups.

| `task.``creationTime``: Date`

  Returns a creation date of a ``task``.

| `task.``device``: String`

  Returns an id of a device if a ``task`` is a device task. Returns null if it is not the device task.

| `task.``domain``: String`

  Returns a multitenancy domain of a ``task``.

| `task.``group``: String`

  Returns an id of a group if a ``task`` is a group task.  Returns null if it is not the group task.

| `task.``id``: String`

  Returns an id of a ``task``.

| `task.``idSuffix``: String`

  Returns the suffix of ``task``\ 's id.

| `task.``isActive``: Boolean`

  Returns true if a ``task`` is active (will be executed during a session).

| `task.``isAppliesToSubgroups``: Boolean`

  Returns true if a group ``task`` will be invoked on subgroups.

| `task.``lastFailedRestartTime``: Date`

  Returns the last time of failed restart for a ``task``.

| `task.``lastRestartTime``: Date`

  Returns the last time restart for a ``task``.

| `task.``name``: String`

  Returns a name of a ``task``.

| `task.``parent``: String`

  Returns a parent task id of a ``task``.

| `task.``properties``: Map[String,String]`

  Returns ``task`` properties. The key is a property name.

| `task.``property.``<propertyName>``: String`

  Returns a value of a property for a given ``propertyName``.
  For example, you can write ``task.property.myProperty``.

## ``transfer`` object

Utilities for file transfer between devices and Coiote DM resources.

### API reference

| `transfer.``fileType.notSpecified``: FileType`
| `transfer.``fileType.vendorConfig``(instance: Int): FileType`
| `transfer.``fileType.vendorConfig``: FileType`
| `transfer.``fileType.vendorLogFile``(instance: Int): FileType`
| `transfer.``fileType.vendorLogFile``: FileType`
| `transfer.``generateDownloadUrl``(protocol: ProtocolType, resourceId: String): String`
| `transfer.``generateUploadUrl``(protocol: ProtocolType, fileType: FileType, resourceId: String, deviceIdentity: String): String`
| `transfer.``newResourceId``: String`
| `transfer.``protocol.anonymousFtp``: ProtocolType`
| `transfer.``protocol.emptyFtp``: ProtocolType`
| `transfer.``protocol.ftp``: ProtocolType`
| `transfer.``protocol.http``: ProtocolType`
| `transfer.``protocol.httpWithAuth``: ProtocolType`
| `transfer.``protocol.https``: ProtocolType`
| `transfer.``protocol.httpsWithAuth``: ProtocolType`
