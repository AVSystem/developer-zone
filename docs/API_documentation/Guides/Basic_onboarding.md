# How to make basic onboarding


**Prerequisites:**

- An active [{{coiote_short_name}}]({{coiote_site_link}}) user account
  
**Endpoints used:**

- `POST /devices`
- `POST /devices/batch`
- `POST /observations/device/{deviceId}/{path}`
- `POST /devices/{id}`

## Overview

Basic onboarding includes adding single device or device batch, setting observations and getting data about devices.

## Step 1: Add a single device or multiple devices 

### Add a single device

Send a `POST` request to the endpoint `/devices`. In the request body provide the device object. The information that you have to provide is domain, security, and connector type. If you don’t provide device identity, you have to set *properties.endpointName* instead. 

!!! Note
    It is recommended to use *properties.endpointName* instead of *id* in `POST` requests. 
    
You can include the following data in the device object:

| Name              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                | The form and scope of a device ID may differ depending on an installation. It is recommended to use properties.endpointName instead of ID.                                                                                                                                                                                                                                                                                                                                                                                             |
| connectorType     | Possible values: bootstrap: the device supports bootstrap and has extended management options management: the device doesn’t support bootstrap and has basic management options                                                                                                                                                                                                                                                                                                                                                        |
| directGroups      | Array of groups to which the created device will belong                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| properties        | Additional properties, for example, endpointName                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| blacklisted       | Determines whether the device is blacklisted after creation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| managementEnabled | Determines whether the device has the management enabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| lastSessionTime   | Execution time of the last session on a device. The provisioning session can be started not only by an uplink request but also by a quick fix, session trigger, or API request.                                                                                                                                                                                                                                                                                                                                                        |
| lastContactTime   | The time of the last successful network communication with the device                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| lastRegisterTime  | The time of the last successful register request from a device.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| firstRegisterTime | The time of the first successful register request from a device.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| creationTime      | The time of adding the device to the system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ipAddress         | Device IP address                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| serialNumber      | Device serial number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| oui               | Device OUI                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| modelName         | Device model name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| hardwareVersion   | The version of the device hardware                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| softwareVersion   | The version of the device software                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| productClass      | Identifier of the class of product for which the serial number applies. The value must be the same as the value of the Devicelnfo.ProductClass parameter. It must remain fixed over the lifetime of the device, including across firmware updates. Any change would indicate that it is a new device and would therefore require a BOOTSTRAP Inform.                                                                                                                                                                                   |
| manufacturer      | IP address of the device                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| description       | Device description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| friendlyName      | Device friendly name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| domain            | Domain to which you want your device to belong. A domain must start and end with / sign. You need to have access to the domain.                                                                                                                                                                                                                                                                                                                                                                                                        |
| securityMode      | If connectorType is bootstrap, the bootstrap security method will be used. If connectorType is management, in this field you determine how the device will be authenticated during connection. Used for both DTLS and TLS settings. Possible values: psk: pre-shared key cert: certificate rpk: raw public key (for more info read the specification) nosec: device can use unencrypted connection unknown notset: no value. The device will not be able to connect. The value can be set later manually or during a specific process. |
| dtlsIdentity      | Identity used for the DTLS authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| dtlsPsk           | The parameter allows setting PSK in Plain text, Hexadecimal, and Raw binary format. For psk stored externally use the format: {"ExternalPsk": {}}. For psk stored globally use the format: {"GlobalPsk": {}}.                                                                                                                                                                                                                                                                                                                          |

The following is an example of the request:

=== "cURL"

    ```
    curl -X POST \
    -H "Authorization: Bearer #TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"connectorType":"management","directGroups":["root.mt.exampleGroup"],"properties":{"endpointName":"exampleUniqueEndpointName","exampleAdditionalProperty":"exampleAdditionalValue"},"domain":"/exampleDomain/","securityMode":"psk","dtlsIdentity":"exampleUniqueEndpointName",
    "dtlsPsk":{"HexadecimalPsk":"4444"}}' \
    https://#HOSTNAME/api/coiotedm/v3/devices
    ```

=== "Coiote Python"

    ``` py
    from coiote.client import Coiote
    from coiote.v3.model.devices import ConnectorType, Device, HexStringPsk

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    device = Device(
        connectorType=ConnectorType.management,
        directGroups=["root.mt.exampleGroup"],
        properties={
            "endpointName": "exampleUniqueEndpointName",
            "exampleAdditionalProperty": "exampleAdditionalValue"
        },
        domain="/exampleDomain/",
        securityMode="psk",
        dtlsIdentity="exampleUniqueEndpointName",
        dtlsPsk=HexStringPsk("4444")
    )
    print(
        client.devices.create_one(device)
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

### Add multiple devices in a batch

Send a `POST` request to the endpoint `/devices/batch` with an array of device objects in the request body. You can add up to 100 devices. 
The following is an example of the request creating two devices:


=== "cURL"

    ```
    curl -X POST \
    -H "Authorization: Bearer #TOKEN" \
    -H "Content-Type: application/json" \
    -d '[{"connectorType": "management","directGroups": ["root.mt.exampleGroup"],"properties": {"endpointName": "exampleUniqueEndpointName1", "exampleAdditionalProperty": "exampleAdditionalValue"},"domain": "/exampleDomain/","securityMode": "psk","dtlsIdentity":"exampleUniqueEndpointName1", "dtlsPsk": {"HexadecimalPsk": "4444"}},{"connectorType": "management","directGroups": ["root.mt.exampleGroup"],"properties":{"endpointName":"exampleUniqueEndpointName2","exampleAdditionalProperty": "exampleAdditionalValue"},"domain": "/exampleDomain/", "securityMode": "psk","dtlsIdentity": "exampleUniqueEndpointName2","dtlsPsk": {"HexadecimalPsk": "4444"}}]' \
    https://#HOSTNAME/api/coiotedm/v3/devices/batch
    ```

=== "Coiote Python"

    ``` py
    from coiote.client import Coiote
    from coiote.v3.model.devices import ConnectorType, Device, HexStringPsk

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    devices = [
        Device(
            connectorType=ConnectorType.management,
            directGroups=["root.mt.exampleGroup"],
            properties={
                "endpointName": "exampleUniqueEndpointName1",
                "exampleAdditionalProperty": "exampleAdditionalValue"
            },
            domain="/exampleDomain/",
            securityMode="psk",
            dtlsIdentity="exampleUniqueEndpointName1",
            dtlsPsk=HexStringPsk("4444")
        ),
        Device(
            connectorType=ConnectorType.management,
            directGroups=["root.mt.exampleGroup"],
            properties={
                "endpointName": "exampleUniqueEndpointName2",
                "exampleAdditionalProperty": "exampleAdditionalValue"
            },
            domain="/exampleDomain/",
            securityMode="psk",
            dtlsIdentity="exampleUniqueEndpointName2",
            dtlsPsk=HexStringPsk("4444")
        ),
    ]
    print(
        client.devices.create_batch(devices)
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

## Step 2: Create observations

To create observations for a device, send a `POST` request to the endpoint `/observations/device/{deviceId}/{path}`. Provide the ID of the device to which you want to add the observation and the path to the device resource you want to use. Use the Human readable path format (for example, “Device.0.Battery Level”). The path can point to Object, Object Instance, or Resource. 

!!! Note
    To learn more about standard LwM2M Object and Resource Registry, see [the OMA LwM2M specification](https://technical.openmobilealliance.org/OMNA/LwM2M/LwM2MRegistry.html). 

In the request body provide observation attributes (name and value pair) and specify if you want to create ensureObservationTask. Use one of the valid observation attributes: 'pmin', 'pmax', 'gt', 'lt', and 'st'. 

!!! Note
    To learn more about observation attributes, see [Attributes](https://avsystem.github.io/Anjay-doc/LwM2M.html#attributes).

If you create ensureObservationTask, the system automatically checks if the observations are enabled on the device, during every provisioning session. 

The following is an example of the request, where you want to get a notification about the level of battery power every two minutes:

=== "cURL"

    ```
    curl -X POST \
    -H "Authorization: Bearer #TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"attributes": [{"name": "pmax","value": "120"}],"createEnsureObserveIfNotExists": false}' \
    https://#HOSTNAME/api/coiotedm/v3/observations/device/api-test-device/Device.0.Battery%20Level
    ```

=== "Coiote Python"

    ``` py
    from coiote.client import Coiote
    from coiote.v3.model.observations import ObservationAttribute, SetObservationRequest

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    observation = SetObservationRequest(
        attributes=[ObservationAttribute("pmax", "120")]
        )
    print(
        client.observations.set_observation_on_device(
            device_id="api-test-device",
            path="Device.0.Battery Level",
            data=observation
        )
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

## Step 3: Get data about devices

### Retrieve all data about a specific device

Send a `GET` request to the endpoint `/devices/{id}` using the device ID as the path parameter. 

The following is an example of the request:

=== "cURL"

    ```
    curl -X GET \
    -H "Authorization: Bearer #TOKEN" \
    https://#HOSTNAME/api/coiotedm/v3/devices/api-test-device
    ```

=== "Coiote Python"

    ``` py
    from coiote.client import Coiote
    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    print(
        client.devices.get_one(device_id="api-test-device")
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

### Retrieve specific data about all devices

Send a `GET` request to the endpoint `/devices/find/details`. 
Use query parameters to adjust your request: 

- *searchCriteria* - conditions for retrieving the data. Use the form 'fieldName operator value', where the fieldName refers to the field in the device object. For example, id startswith '123', or managementEnabled eq true. You can find the list of possible fieldNames with allowed operators in the API reference for this endpoint.
- *fieldSelection* - fields from the device object that you want to retrieve. For example *domain*, *serialNumber*.
- *limit* - how many records are to be retrieved. The minimum value is 0, the maximum is 1000. If you leave it empty, 100 is set as default.
- *pageBookmark* -  if you leave this parameter empty, you will get the first page. To get the next page, use the bookmark value returned in the previous request.

The following is an example of the request, where you want to get domains of devices that have enabled management and limit the result to 10:

=== "cURL"

    ```
    curl -X GET \
    -H "accept: application/json" \
    -H "Authorization: Bearer #TOKEN" \
    "https://#HOSTNAME/api/coiotedm/v3/devices/find/details?searchCriteria=managementEnabled%20eq%20true&fieldSelection=domain&limit=10" 
    ```

=== "Coiote Python"

    ``` py
    from coiote.client import Coiote

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    print(
        client.devices.get_device_details(
            search_criteria="managementEnabled eq true",
            fields=["domain"],
            limit=10
        )
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.
