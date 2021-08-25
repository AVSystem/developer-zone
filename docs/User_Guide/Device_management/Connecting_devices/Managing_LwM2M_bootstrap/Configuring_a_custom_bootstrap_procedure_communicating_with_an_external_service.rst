.. _UG_MLB_Configuring_a_custom_bootstrap_procedure_with_communication_with_an_external_service:

Configuring a custom bootstrap procedure communicating with an external service
===============================================================================

Read this chapter to learn how to configure a bootstrap procedure that communicates with external services. In this case a task must be used.

.. figure:: images/External_service.*
   :align: center

   *Fig. Configuring a custom bootstrap procedure communicating with an external service*

To configure a bootstrap procedure that communicates with external services:

1. Go to :menuselection:`Administration --> LwM2M servers`.
2. Click the :guilabel:`Add` button.
3. Configure a Management server. To learn more about particular fields, read the :ref:`UIR_A_LwM2M_servers` chapter.
4. Click the :guilabel:`Save` button.
5. Go to :guilabel:`Device groups` and from the list of groups, select the group.
6. Go to the :guilabel:`Group tasks` tab, and click the :guilabel:`Add task` link.
7. In the :guilabel:`Task settings` pane, click :guilabel:`Once and repeat` and select the :guilabel:`Automatic restart` check box.
8. In the :guilabel:`Task specific configuration` pane, enter a code similar to the following:

 .. code-block:: xml

     <config>
       <rest url="http://external-service.example/serverFor/${device.id}">
         <out from="serverId" to="serverId" />
       </rest>
       <lwm2mBootstrapCleanse />
       <lwm2mBootstrapConfiguration serverId="${#serverId}" />
       <lwm2mBootstrap performBootstrapFinish="true" />
     </config>

 * The below fragment makes a rest call to *http://external-service.example/serverFor/${device.id}*, note that *${device.id}* will be substituted for an actual device ID. The external service will respond with JSON like on the following example *{"serverId": 4}*. It will save the *"serverId"* value from JSON and make it accessible under the *#serverId* variable in the rest of the task. In this particular example the external service is aware of this Id, but the service response could be also translated to ID within the task. The ID of the server can be checked in :menuselection:`Administration --> LwM2M servers`:

 .. code-block:: xml

     <rest url="http://external-service.example/serverFor/${device.id}">
         <out from="serverId" to="serverId" />
     </rest>

 * The below fragment deletes any previous configuration of Bootstrap or Management servers on a device:

 .. code-block:: xml

      <lwm2mBootstrapCleanse />

 * The below fragment provides connections details to a previously configured server selected by ID returned by the rest service:

 .. code-block:: xml

     <lwm2mBootstrapConfiguration serverId="${#serverId}" />

 * The below fragment notifies the device that the bootstrap procedure is finished:

 .. code-block:: xml

     <lwm2mBootstrap performBootstrapFinish="true" />

9. Click the :guilabel:`Add new task` button. Now each time the device sends the bootstrap request, this task will be executed. You can check its status in the :guilabel:`Group tasks` tab.
