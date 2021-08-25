.. _root object:

.. role:: sign
.. role:: sym
.. role:: dyn

``root`` object
===============

Allows to define a *live data model query*. Such a query may be supplied to :ref:`XmlTask_find` and
:ref:`XmlTask_foreach` in :ref:`XmlTask` to traverse a device data model in a desired pattern.

The live data model query is an object that specifies how to traverse the (some part of) device data model during a provisioning
session and extract some data from it. When executed, the live data model query evaluates to list of string values which
are usually data model keys or values of data model parameters. This is why it can be used in ``foreach`` tag.

The live data model query is built using a chain of calls that starts with the ``root`` object. The ``root`` object
represents a live data model query that would evaluate to just the root object key of the device. We can then
descend into some subtrees of the data model, select particular branches and go back up the tree.

API reference
-------------

.. This API is from: com.avsystem.ump.core.api.LiveDMQueryApi

| :sign:`(q: LiveDMQueryApi).`:sym:`any`:sign:`: LiveDMQueryApi`

  Descends the data model tree one level down, into all children nodes of nodes that the query is currently at.

| :sign:`(q: LiveDMQueryApi).`:sym:`get`:sign:`(fragment: String): LiveDMQueryApi`

  "Appends" given data model key fragment to keys of all nodes that the query is currently at. This effectively
  descends the data model tree one or more levels down.

| :sign:`(q: LiveDMQueryApi).`:sym:`filter`:sign:`(predicate: String => Boolean): LiveDMQueryApi`

  Narrows the query to only these nodes whose keys satisfy given predicate (expressed as lambda).

| :sign:`(q: LiveDMQueryApi).`:sym:`in`:sign:`(suffixes: String*): LiveDMQueryApi`
| :sign:`(q: LiveDMQueryApi).`:sym:`in`:sign:`(suffixes: List[String]): LiveDMQueryApi`

  "Appends" all suffixes to keys of all nodes that the query is currently at. This effectively
  descends the data model tree one or more levels down. The descend uses multiple branches if there is more than one
  suffix specified.

| :sign:`(q: LiveDMQueryApi).`:sym:`moveUp`:sign:`: LiveDMQueryApi`

  Ascends one level up in the data model tree.

| :sign:`(q: LiveDMQueryApi).`:sym:`parameterValue`:sign:`(parameterName: String, expectedValue: String): LiveDMQueryApi`

  Narrows the query to only these nodes which have a parameter named ``parameterName`` with a value ``expectedValue``.
  This is equivalent to ``valueOf(parameterName).is(expectedValue)``.

| :sign:`(q: LiveDMQueryApi).`:dyn:`<dmKeyPart>`:sign:`: LiveDMQueryApi`

  This is an alternative syntax for ``get(property: String)``. For example, you can write ``root.ManagementServer.URL``
  instead of ``root.get('ManagementServer.URL')``. If the data model object/parameter name contains non-alphanumerical
  characters or is an instance number, you can still use this syntax, but with additional backticks, for example,
  ``root.Services.VoiceService.`1`.VoiceProfile.`3`.Enable``.

| :sign:`(q: LiveDMQueryApi).`:sym:`valueOf`:sign:`(parameterName: String).`:sym:`satisfies`:sign:`(predicate: String => Boolean): LiveDMQueryApi`

  Narrows the query to only these nodes which have a parameter ``parameterName`` whose value satisfies given predicate
  (expressed as lambda).

| :sign:`(q: LiveDMQueryApi).`:sym:`valueOf`:sign:`(parameterName: String).`:sym:`contains`:sign:`(substring: String): LiveDMQueryApi`
| :sign:`(q: LiveDMQueryApi).`:sym:`valueOf`:sign:`(parameterName: String).`:sym:`contains`:sign:`(substring: String, ignoreCase: Boolean): LiveDMQueryApi`

  Narrows the query to only these nodes which have a parameter ``parameterName`` whose value contains a given substring.

| :sign:`(q: LiveDMQueryApi).`:sym:`valueOf`:sign:`(parameterName: String).`:sym:`endsWith`:sign:`(suffix: String): LiveDMQueryApi`
| :sign:`(q: LiveDMQueryApi).`:sym:`valueOf`:sign:`(parameterName: String).`:sym:`endsWith`:sign:`(suffix: String, ignoreCase: Boolean): LiveDMQueryApi`

  Narrows the query to only these nodes which have a parameter ``parameterName`` whose value ends with a given suffix.

| :sign:`(q: LiveDMQueryApi).`:sym:`valueOf`:sign:`(parameterName: String).`:sym:`is`:sign:`(value: String): LiveDMQueryApi`
| :sign:`(q: LiveDMQueryApi).`:sym:`valueOf`:sign:`(parameterName: String).`:sym:`is`:sign:`(value: String, ignoreCase: Boolean): LiveDMQueryApi`

  Narrows the query to only these nodes which have a parameter ``parameterName`` whose value is ``value``.

| :sign:`(q: LiveDMQueryApi).`:sym:`valueOf`:sign:`(parameterName: String).`:sym:`startsWith`:sign:`(prefix: String): LiveDMQueryApi`
| :sign:`(q: LiveDMQueryApi).`:sym:`valueOf`:sign:`(parameterName: String).`:sym:`startsWith`:sign:`(prefix: String, ignoreCase: Boolean): LiveDMQueryApi`

  Narrows the query to only these nodes which have a parameter ``parameterName`` whose value starts with a given prefix.
