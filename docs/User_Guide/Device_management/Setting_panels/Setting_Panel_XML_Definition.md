# Setting panel XML definition

Panel content is rendered using its definition, which is stored in human readable XML format. Its schema is designed to be easy to understand, by reflecting a parameter tree structure.

!!! note
    Available tags and their attributes description can be found in [Setting Panel Content](Setting_Panel_Content.md).

Sample definition:


  	<panel priority="310" caption="deviceManager.panel.ntp" icon="WAIT" readPermission="dmc.settings.ntp" writePermission="dmc.settings.ntp.write">
  	    <group key="Time">
  		<group caption="General">
  		    <field key="CurrentLocalTime" readOnly="true" showIfEmpty="true">
  		        <appearance width="100%" bold="true" />
  		    </field>
  		    <field key="Status" readOnly="true">
  		        <appearance width="100%" />
  		    </field>
  		    <field key="Enable" capabilities="1,0">
  		        <appearance width="100%" />
  		    </field>
  		    <appearance width="180px" icon="BRAND" />
  		</group>
  		<group caption="Servers">
  		    <field key="NTPServer1" capabilities="${sv.get('panels.ntp.servers')}" showIfEmpty="true">
  		        <appearance width="100%" bold="true" />
  		    </field>
  		    <field key="NTPServer2" capabilities="${sv.get('panels.ntp.servers')}">
  		        <appearance width="100%" />
  		    </field>
  		    <appearance width="180px" icon="DIAGNOSTICS" />
  		</group>
  		<group caption="Daylight savings" hideExpression="${dm.getFieldByPath(device.getRootObject()+'Time.DaylightSavingsUsed')==null}">
  		    <field key="DaylightSavingsStart" showIfEmpty="true">
  		        <appearance width="100%" />
  		    </field>
  		    <field key="DaylightSavingsUsed" showIfEmpty="true" />
  		    <appearance width="180px" icon="HIDE" />
  		</group>
  		<appearance horizontal="true" noborder="true" nomargin="true" />
  	    </group>
  	</panel>

Used tags discussion:

* **panel** - a root tag of a panel definition, specifies general properties
* **group** - provides mean for grouping components
* **field** - reflects a single parameter in a data model
* **appearance** - allows customization of components look.

## Structure

As it was previously mentioned, the XML structure reflects the parameter tree structure. Tags attribute key should be filled with a parameter key, relative to its parent key. Besides parameters, also setting values can be edited using the panel.

### Key attribute use

  	<panel parentKey="InternetGatewayDevice">
  	    <group caption="DeviceInfo" key="DeviceInfo">
  		<field caption="UpTime" key="UpTime" />
  	    </group>
  	</panel>

This results in:

| Element | Compound key                            |
|---------|-----------------------------------------|
| panel   | InternetGatewayDevice                   |
| group   | InternetGatewayDevice.DeviceInfo        |
| field   | InternetGatewayDevice.DeviceInfo.UpTime |


### Multi-part Key, Grouping, Setting Values

Used key can cover multiple levels in a hierarchy as well as be empty, in case of groups, only to provide grouping of elements (visible in the generated panel). It can be leveraged in order to provide logical grouping and change existing hierarchy. In that case, the **key** attribute has a different meaning, it is simply SV name, without connection with the parameter tree hierarchy.


  	<panel priority="0" caption="Basic settings" parentKey="InternetGatewayDevice">
  	    <group caption="Device status">
  		<field caption="UpTime" key="DeviceInfo.UpTime" />                        <!--fields from different subtrees grouped together -->
  		<field caption="CurrentLocalTime" key="Time.CurrentLocalTime" />
  	    </group>
  	    <group caption="WiFi configuration">
  		<sv key="dotGpv" />                                                       <!--setting values-->
  		<sv key="gpnTraversal" />
  		<field caption="SSID" key="LANDevice.1.WLANConfiguration.1.SSID" />       <!--full parameter key-->
  	    </group>
  	    <group caption="Management server configuration" key="ManagementServer">
  		<field caption="Username" key="Username" />
  		<field caption="Password" key="Password" />
  	    </group>
  	</panel>

Which gives:

| Element                                 | Compound key                                               |
|-----------------------------------------|------------------------------------------------------------|
| panel                                   | InternetGatewayDevice                                      |
| group (Device status)                   | InternetGatewayDevice                                      |
| field                                   | InternetGatewayDevice.DeviceInfo.UpTime                    |
| field                                   | InternetGatewayDevice.Time.CurrentLocalTime                |
| group (Wi-Fi configuration)             | InternetGatewayDevice                                      |
| sv                                      | dotGpv                                                     |
| sv                                      | gpnTraversal                                               |
| field                                   | InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.SSID |
| group (Management server configuration) | InternetGatewayDevice.ManagementServer                     |
| field                                   | InternetGatewayDevice.ManagementServer.Username            |
| field                                   | InternetGatewayDevice.ManagementServer.Password            |

### Managing object instances

Handling data model instances requires a special tag, **instances**, its key should point object parent key, for example:

  	<panel priority="0" caption="Bridging" parentKey="InternetGatewayDevice">
  	    <group>
  		<instances caption="Layer2Bridging.Bridge" key="Layer2Bridging.Bridge">
  		    <group>
  		        <field caption="BridgeEnable" key="BridgeEnable" />
  		        <field caption="BridgeKey" key="BridgeKey" />
  		        <field caption="BridgeName" key="BridgeName" />
  		        <field caption="BridgeStatus" key="BridgeStatus" />
  		    </group>
  		</instances>
  	    </group>
  	</panel>
