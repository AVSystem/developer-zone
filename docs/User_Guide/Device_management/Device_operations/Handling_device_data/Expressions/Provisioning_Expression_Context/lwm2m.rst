.. _lwm2m object:

.. role:: sign
.. role:: sym
.. role:: dyn

``lwm2m`` object
=================

Provides access to data about a LwM2M session. This works only for LwM2M provisioned devices.

API reference
-------------

.. This API is from: com.avsystem.ump.core.api.Lwm2mProvisioningContextApi

| :sign:`lwm2m.`:sym:`isClientBootstrapState`:sign:`: Boolean`

  Returns true if a client is in a bootstrap state.

| :sign:`lwm2m.`:sym:`isRegisteredState`:sign:`: Boolean`

  Returns true if a client is registered.

| :sign:`lwm2m.`:sym:`updateEvent`:sign:`: Boolean`

  Returns true if the session was started by an update request.

| :sign:`lwm2m.`:sym:`registerEvent`:sign:`: Boolean`

  Returns true if the session was started by a register request.

| :sign:`lwm2m.`:sym:`notifyEvent`:sign:`: Boolean`

  Returns true if the session was started by a notification.

| :sign:`lwm2m.`:sym:`sendEvent`:sign:`: Boolean`

  Returns true if the session was started by a `Send` request.

| :sign:`lwm2m.`:sym:`bootstrapEvent`:sign:`: Boolean`

  Returns true if the session was started by a bootstrap request.

| :sign:`lwm2m.`:sym:`notificationsPaths`:sign:`: Set[String]`

  Returns a set of LwM2M paths for which notifications arrived.

| :sign:`lwm2m.`:sym:`sendPaths`:sign:`: Set[String]`

  Returns a set of LwM2M paths for which a `Send` request arrived.

| :sign:`lwm2m.`:sym:`messageBuilder.`:sign:`: Lwm2mMessageBuilderApi`

  See :ref:`API reference <lwm2m_message_builder_api>`.

.. _lwm2m_message_builder_api:

``messageBuilder`` object
=========================

Provides access to API for CoAP message construction.

API reference
-------------

| :sign:`lwm2m.`:sign:`messageBuilder.`:sym:`updateTrigger`:sign:`(serverObjectInstance: Int)`:sign:`: Lwm2mMessageBuilderApi`

  Constructs a CoAP message containing
  a **LwM2M Execute** request for the :samp:`LwM2M Server.X.Registration Update Trigger` resource.
  Example usage (XML Task):

  .. code-block:: xml

      <config>
        <sms to="123456789" binary="true" text="${lwm2m.messageBuilder.updateTrigger(1).toBytes.hex}" />
      </config>

| :sign:`lwm2m.`:sign:`messageBuilder.`:sym:`updateTrigger`:sign:`: Lwm2mMessageBuilderApi`

  Similar to previous method but without explicitly specified object instance number.
  The used instance number is the instance number of the Coiote server for the device executing the task.
  In other words, if the :samp:`LwM2M Server.7.` object instance for the **my-device** device refers to the
  Coiote server, then an `updateTrigger` call for **my-device** is equivalent to an `updateTrigger(7)` call.
