.. _UG_MLB_Configuring_a_custom_bootstrap_procedure_using_low_level_mechanisms:

Configuring a custom bootstrap procedure using low level mechanisms
===================================================================

This approach involves writing raw LwM2M resources to a device. It is generally not recommended but it might be useful to deal with some more sophisticated scenario or the faulty device. This approach does not use LwM2M bootstrap profiles or LwM2M servers.

To configure a custom bootstrap procedure using low level mechanisms:

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
       <store target="id" value="${sv.managementId}" />
      <store target="psk" value="${sv.password}" />
      <lwm2mBootstrap performBootstrapFinish="true">
        <write key="LwM2M Security.2.LwM2M Server URI" value="coaps://uri.example:5684" type="string" />
        <write key="LwM2M Security.2.Bootstrap-Server" value="false" type="boolean" />
        <write key="LwM2M Security.2.Security Mode" value="0" type="integer" />
        <write key="LwM2M Security.2.Short Server ID" value="2" type="integer" />
        <write key="LwM2M Security.2.Public Key or Identity" type="opaque" value="${#id.encodeHex}" />
        <write key="LwM2M Security.2.Secret Key" type="opaque" value="${#psk.encodeHex}" />
        <write key="LwM2M Security.2.Server Public Key" value="${''}" type="opaque" />
        <write key="LwM2M Server.0.Short Server ID" value="2" type="integer" />
        <write key="LwM2M Server.0.Lifetime" value="60" type="integer" />
        <write key="LwM2M Server.0.Notification Storing When Disabled or Offline" value="false" type="boolean" />
        <write key="LwM2M Server.0.Binding" value="U" type="string" />
      </lwm2mBootstrap>
     </config>

 * The below fragment creates a variable that keeps a device identity within the *sv.managementId* value:

 .. code-block:: xml

     <store target="id" value="${sv.managementId}" />

 * The below fragment creates a variable that keeps a psk password within the *sv.password* value:

 .. code-block:: xml

     <store target="psk" value="${sv.password}" />

 * The below fragment shows that within this tag raw bootstrap operations can be done:

 .. code-block:: xml

     <lwm2mBootstrap performBootstrapFinish="true">

 * The below fragment means that after this tag is completed, the device will receive the Bootstrap Finish message:

 .. code-block:: xml

     performBootstrapFinish="true"

 * The below fragment sets a server address (note that schema *coap* or *coaps* depends on *Security Mode*, the same could be applied to a port):

 .. code-block:: xml

     <write key="LwM2M Security.2.LwM2M Server URI" value="coaps://uri.example:5684" type="string" />

 * The below fragment informs if a connection is to a LwM2M server:

 .. code-block:: xml

     <write key="LwM2M Security.2.Bootstrap-Server" value="false" type="boolean" />

 * The below fragment sets a security mode. *0* means Pre-Shared-Key:

 .. code-block:: xml

     <write key="LwM2M Security.2.Security Mode" value="0" type="integer" />

 * The below fragment informs about a server configuration ID from the device perspective. It allows to bind security settings with server settings:

 .. code-block:: xml

     <write key="LwM2M Security.2.Short Server ID" value="2" type="integer" />

 * The below fragment shows Hex encoded device identity:

 .. code-block:: xml

     <write key="LwM2M Security.2.Public Key or Identity" type="opaque" value="${#id.encodeHex}" />

 * The below fragment shows Hex encoded PSK password:

 .. code-block:: xml

     <write key="LwM2M Security.2.Secret Key" type="opaque" value="${#psk.encodeHex}" />

 * The below fragment shows that in this security mode (0 PSK) Server Public Key is not used, nevertheless it is a mandatory resource thus it is set to an empty value:

 .. code-block:: xml

     <write key="LwM2M Security.2.Server Public Key" value="${''}" type="opaque" />

 * The below fragment informs about a server configuration ID from the device perspective. It allows to bind security settings with server settings:

 .. code-block:: xml

     <write key="LwM2M Server.0.Short Server ID" value="2" type="integer" />

 * The below fragment informs about lifetime - in this case a number of seconds that the device will be accessible after registration:

 .. code-block:: xml

     <write key="LwM2M Server.0.Lifetime" value="60" type="integer" />

 * The below fragment sets if the device should store notifications for the LwM2M server when its in the **Deregister** phase, and then send them after new registration or discard them. In this case notifications would be discarded:

 .. code-block:: xml

     <write key="LwM2M Server.0.Notification Storing When Disabled or Offline" value="false" type="boolean" />

 * The below fragment sets a binding type, in this example it is U = UDP:

 .. code-block:: xml

     <write key="LwM2M Server.0.Binding" value="U" type="string" />

9. Click the :guilabel:`Add new task` button. Now each time the device sends the bootstrap request, this task will be executed. You can check its status in the :guilabel:`Group tasks` tab.

**See also:** :ref:`UIR_A_LwM2M_servers`