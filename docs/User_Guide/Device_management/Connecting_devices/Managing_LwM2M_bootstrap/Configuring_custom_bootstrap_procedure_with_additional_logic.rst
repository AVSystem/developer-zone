.. _UG_MLB_Configuring_custom_bootstrap_procedure_with_additional_logic:

Configuring a custom bootstrap procedure with additional logic
==============================================================

Read this chapter to learn how to configure a server and add custom settings to it. In this case a task must be used.

.. figure:: images/Additional_logic.*
   :align: center

   *Fig. Configuring a custom bootstrap procedure with additional logic*

To configure a custom bootstrap procedure with additional logic:

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
       <lwm2mBootstrapCleanse />
       <lwm2mBootstrapConfiguration serverId="8" />
       <set key="Device.Connectivity Statistics.0.Collection Period" value="60" />
       <execute key="Device.Connectivity Statistics.0.Start" />
       <lwm2mBootstrap performBootstrapFinish="true" />
     </config>

 **Explanation of the configuration**:

 * The below fragment deletes any previous configuration of Bootstrap or Management servers on a device

 .. code-block:: xml

     <lwm2mBootstrapCleanse />

 * The below fragment provides connections details to one of previously configured servers selected by their IDs. Each server configuration has an ID assigned by the system. The ID of the server can be checked in :menuselection:`Administration --> LwM2M servers`:

 .. code-block:: xml

     <lwm2mBootstrapConfiguration serverId="8" />

 * The below fragment is a custom setting, in this particular case it starts a connection monitoring but any piece of an XML code can be placed here:

 .. code-block:: xml

     <set key="Device.Connectivity Statistics.0.Collection Period" value="60" />
     <execute key="Device.Connectivity Statistics.0.Start" />

 * The below fragment notifies the device that the bootstrap procedure is finished:

 .. code-block:: xml

     <lwm2mBootstrap performBootstrapFinish="true" />

9. Click the :guilabel:`Add new task` button.
