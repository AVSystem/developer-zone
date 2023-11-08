# How to make firmware upgrade (FOTA)

**Prerequisites:**

- An active {{coiote_short_name}} user account with proper permissions
- A device which supports Firmware Update Object /5

**Endpoints used:**

- `GET /devices/{id}`
- `POST /tasks/configure/{deviceId}`
- `GET /taskReports/{taskId}/{deviceId}`
- `POST /resources`
- `PUT /resources/{id}/data`
- `POST /tasksFromTemplates/group/{groupId}`
- `POST /tasks/upgrade/{deviceId}/{fileResourceId}`
- `GET /taskReports/summary`

<br>

## Step 1: Check if the device firmware needs to be upgraded

### Option 1: Check the device firmware version in the device entity, using `GET /devices/{id}` 

!!! NOTE
    `GET /devices/{id}` sends a request to the {{coiote_short_name}} database, which could be out of date if the device has not been connected to the platform for a long time. In that case, use an alternative - `POST /tasks/configure/{deviceId}` - described in Option 2. This way you will schedule a new LwM2M READ message to a device and get a specified value when the device connects to the system.

Send a `GET` request to the endpoint `/devices/{id}` with your device ID as the path parameter to get the device entity from the database. The whole device entity will be returned in the Response body:

```json
{
  "id": "api-test-device",
  "connectorType": "management",
  "bootstrap": false,
  "directGroups": [
    "root.monitoring",
    "root.incoming",
    "root.mt.demo",
    "root.mt.demo.lwm2m.management",
    "root.mt.demo.lwm2m",
    "root.lwm2m.management",
    "root.mt.demo.devicetypes.avsystem.svetovid.0_2",
    "root.mt.demo.api-test",
    "root.lwm2m",
    "root.devicetypes.avsystem.svetovid.0_2"
  ],
  "properties": {
    "registeredObjects": "/1/0,/3,/3/0,/5/0,/16",
    "lwm2mLastDownOpTime": "1663253893715",
    "registeredMode": "U",
    "detectedTransport": "U",
    "lastKnownIp": "81.18.220.16",
    "lwm2mUri": "coaps://81.18.220.16:36645",
    "lwm2mVersion": "1.1.0",
    "lwm2mServerObjectInstance": "0",
    "endpointName": "api-test-device",
    "lwm2mLastUpOp": "Deregister",
    "lwm2mLastUpOpTime": "1663253896587",
    "rootPath": "",
    "lwm2mUdpMode": "DIRECT",
    "registeredQueueMode": "false",
    "lwm2mAdditionalOptions": "",
    "lwm2mTransportPreference": "udp",
    "sendViaNode": "0",
    "lwm2mLastDownOp": "Read",
    "objectVersions": "1:1.1,3:1.0,5:1.0,16:1.0",
    "lastRegisterUpdate": "2022-09-15 14:58:10.811"
  },
  "blacklisted": false,
  "managementEnabled": true,
  "lastSessionTime": "2022-09-15T14:58:16.571Z",
  "lastContactTime": "2022-09-15T14:58:16.569Z",
  "lastRegisterTime": "2022-09-15T14:58:10.808Z",
  "firstRegisterTime": "2022-09-14T09:49:25.213Z",
  "creationTime": "2022-09-13T11:26:43.444Z",
  "ipAddress": "81.18.220.16",
  "serialNumber": "322da45aa528\n",
  "oui": null,
  "modelName": "Svetovid",
  "hardwareVersion": null,
  "softwareVersion": "0.2",
  "productClass": null,
  "manufacturer": "AVSystem",
  "description": null,
  "friendlyName": "api-test-device",
  "domain": "/demo/",
  "securityMode": "psk",
  "dtlsIdentity": "api-test-device",
  "dtlsPsk": {
    "HexadecimalPsk": "0123456789ABCDEF"
  }
}
```

You need to look for the property *softwareVersion* that stores the firmware version:

```
"softwareVersion": "0.2"
```

### Option 2: Get updated firmware version when the device connects to the system

Send a `POST` request to the endpoint `/tasks/configure/{deviceId}` with your device ID as the path parameter to configure a new device task. In the request body provide the task definition, where you specify the value to be “Device.0.Firmware Version”. 

The following is an example of the request body and the complete request:

```json
{
  "taskDefinition": {
    "operations": [
      {
        "read": {
          "key": "Device.0.Firmware Version"
        }
      }
    ],
    "name": "api-demo-task",
    "batchRequests": false,
    "executeImmediately": false
  }
}
```

=== "cURL"

    ```
    curl -X POST \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    -H 'Content-Type: application/json' \
    -d '{"taskDefinition":{"operations":[{"read":{"key":"Device.0.Firmware Version"}}],"name":"api-demo-task","batchRequests":false,"executeImmediately":false}}' \
    'https://YOUR_HOSTNAME/api/coiotedm/v3/tasks/configure/api-test-device'

    ```

=== "Coiote Python"

    ``` python
    from coiote.client import Coiote
    from coiote.v3.model.tasks import ConfigurationTaskDefinition, DeviceOperation, ReadOperation


    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    task_id = client.tasks.run_device_config_task(
        device_id="api-test-device",
        task_definition=ConfigurationTaskDefinition(
            name="api-demo-task",
            batchRequests=False,
            executeImmediately=False,
            operations=[
                ReadOperation.create("Device.0.Firmware Version")
            ]
        )
    )
    print(task_id)
    ```
Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

In the response body you will get the task ID, for example: `d:yV3cYCNpbGpNuVWpFo9eHlQHJZIghQ8emN5z9g:1`

Next, send a `GET` request to the endpoint `/taskReports/{taskId}/{deviceId}` to get the task report. Include the ID of the task you’ve created in the previous step and the ID of your device as the path parameters.

!!! Note
    The task performing FOTA might not have started or might still be in progress when you send this request, so the report for this task might not have been generated yet. In that case, the request will respond with a custom version of 404: Not found, and the message in the response body, for example:
    
    ```
    {
    "message": "Task has not been executed yet.",
    "code": 4041
    }
    ```

The following is an example of the request:

=== "cURL"

    ```
    curl -X GET  \
    -H "Authorization: Bearer #TOKEN" \
    -H "accept: application/json" \
    'https://#HOSTNAME/api/coiotedm/v3/taskReports/d%3AyV3cYCNpbGpNuVWpFo9eHlQHJZIghQ8emN5z9g%3A1/api-test-device' 
    ```

=== "Coiote Python"

    ``` python
    from coiote.client import Coiote
    from coiote.v3.model.tasks import ConfigurationTaskDefinition, DeviceOperation, ReadOperation


    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    print(
        client.task_reports.get_task_summary(
            task_id="d:yV3cYCNpbGpNuVWpFo9eHlQHJZIghQ8emN5z9g:1")
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

You will get the firmware version in the response body in the *properties* array, for example: 

```json
{
  "taskId": "d:yV3cYCNpbGpNuVWpFo9eHlQHJZIghQ8emN5z9g:1",
  "deviceId": "api-test-device",
  "startTime": "2022-09-14T13:55:53.292Z",
  "finishTime": "2022-09-14T13:55:53.480Z",
  "lastUpdateTime": "2022-09-14T13:55:53.480Z",
  "status": "Success",
  "summary": null,
  "blocking": false,
  "properties": [
    {
      "name": "Device.0.Firmware Version",
      "value": "0.2"
    },
    {
      "name": "lastSuccessfulOperation",
      "value": "{\"read\":{\"key\":\"Device.0.Firmware Version\"}}"
    }
  ]
}
```
## Step 2: Perform a firmware upgrade

### Create a resource

To upload a firmware file image to the {{coiote_short_name}} DM you must first create a resource that will store this file. Send a `POST` request to the endpoint `/resources` to create such a resource. The following is an example of the request body and the complete request with the required parameters only:

```json
{
  "name": "demo-file-resource",
  "location": {"InternalLocation": {"fileName": "file-name"}},
  "category": "FIRMWARE",
  "domain": "/demo/",
  "expirationTime": "ONE_DAY"
}
```

=== "cURL"

    ```
    curl -X POST \ 
    -H "Authorization: Bearer #TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"name":"demo-file-resource","location":{"InternalLocation":{"fileName":"file-name"}},"category":"FIRMWARE","domain":"/demo/","expirationTime":"ONE_DAY"}' \
    "https://#HOSTNAME/api/coiotedm/v3/resources"
    ```

=== "Coiote Python"

    ``` python
    from coiote.client import Coiote
    from coiote.v3.model.resources import InternalLocation, Resource, ResourceCategory, ResourceExpirationTime

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    resource = Resource(
        id="demo-file-resource-id",
        name="demo-file-resource",
        location=InternalLocation.create("file-name"),
        category=ResourceCategory.FIRMWARE,
        domain="/demo/",
        expirationTime=ResourceExpirationTime.ONE_DAY
    )
    print(
        client.resources.create_resource(resource)
    )
    ```
Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

In the response body you will get the resource ID necessary for the next steps, for example `demo-file-resource-id`.

The example above creates the required resource, but it is recommended to assign it to a group. It makes upgrading a device through Coiote GUI easier because this file resource will appear in the “Available files” domain of the group.

The following is an example of the request body and the request with the optional settings added:

```json
{
  "id": "demo-file-resource-id",
  "name": "demo-file-resource",
  "description": "resource description",
  "location": {"InternalLocation": {"fileName": "file-name"}},
  "category": "FIRMWARE",
  "device": "api-test-device",
  "domain": "/demo/",
  "directGroups": [
    {
      "DeviceDirectGroup": {
        "manufacturer": "AVSystem",
        "model": "modelName",
        "version": "0.2"
      }
    }
  ],
  "expirationTime": "ONE_DAY",
  "visibleForSubtenants": false
}
```
=== "cURL"

    ```
    curl -X POST \
    -H "accept: application/json" \
    -H "Authorization: Bearer #TOKEN" \
    -H "Content-Type: application/json" \
    -d `{"id":"demo-file-resource-id","name":"demo-file-resource","description":"resource description","location":{"InternalLocation":{"fileName":"file-name"}},"category":"FIRMWARE","device":"api-test-device","domain":"/demo/","directGroups":[{"DeviceDirectGroup":{"manufacturer":"AVSystem","model":"modelName","version":"0.2"}}],"expirationTime":"ONE_DAY","visibleForSubtenants":false}` \
    "https://#HOSTNAME/api/coiotedm/v3/resources" 
    ```

=== "Coiote Python"

    ``` python
    from coiote.client import Coiote
    from coiote.v3.model.resources import DeviceDirectGroup, InternalLocation, Resource, ResourceCategory, ResourceExpirationTime

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    resource = Resource(
        id="demo-file-resource-id",
        name="demo-file-resource",
        description="resource description",
        location=InternalLocation.create("file-name"),
        category=ResourceCategory.FIRMWARE,
        device="api-test-device",
        domain="/demo/",
        directGroups=[DeviceDirectGroup.create(
            manufacturer="AVSystem", model="modelName", version="0.2")],
        expirationTime=ResourceExpirationTime.ONE_DAY,
        visibleForSubtenants=False
    )
    print(
        client.resources.create_resource(resource)
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

You can find all the request body parameters with possible values in the API reference for this endpoint.

### Upload the upgrade file to the resource

To upload the upgrade file, send a `PUT` request to the endpoint `/resources/{id}/data` with the id of the resource you created as the path parameter. In the request body include the file with the upgrade image. 

!!! Note
    When using cURL from the example below, make sure you are in the same directory as the firmware file that you want to upload.

Specify the content type header "Content-Type: application/octet-stream". The following is an example of the request:

=== "cURL"

    ```
    curl -X PUT \
    -H "Authorization: Bearer #TOKEN" \
    -H "accept: application/json" \
    -H "Content-Type: application/octet-stream" \
    --data-binary @{filename}` \
    "https://#HOSTNAME/api/coiotedm/v3/resources/demo-file-resource-id/data"
    ```

=== "Coiote Python"

    ``` python
    import base64
    from coiote.client import Coiote
    from coiote.v3.model.resources import Base64FileData

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    with open("firmware.bin", "rb") as firmware_file:
        encoded_string = base64.b64encode(firmware_file.read())
        print(
            client.resources.upload_resource_data(
                resource_id="demo-file-resource-id",
                file=Base64FileData(encoded_string)
            )
        )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

### Create the FOTA task

- **FOTA task for a single device**
  
To create an upgrade task for a single device send a `POST` request to the endpoint `/tasks/upgrade/{deviceId}/{fileResourceId}` with your device id and the id of the created resource as the path parameters. Use default values for the query parameters or adjust them if needed. You can find the description of additional parameters in the API reference for this endpoint. The following is an example of the request with default parameters:

=== "cURL"

    ```
    curl -X POST  \
    -H "accept: application/json" \
    -H "Authorization: Bearer TOKEN” \
    "https://#HOSTNAME/api/coiotedm/v3/tasks/upgrade/api-test-device/demo-file-resource-id?transferMethod=Pull&transferProtocol=HTTP&timeout=20m&useQuota=true&upgradeStrategy=WithoutObservations&blocking=true&useCacheForInitialStateRead=false&checkDeliveryAndProtocol=true&resumeAfterDownlinkFailure=false&useObservation=false&extendLifetime=true&executeImmediately=false"
    ```

=== "Coiote Python"

    ``` python
    from coiote.client import Coiote
    from coiote.v3.model.tasks import TransferMethod, TransferProtocol, UpgradeStrategy

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    print(
        client.tasks.run_device_fota_task(
            device_id="api-test-device",
            firmware_resource_id="demo-file-resource-id",
            transfer_method=TransferMethod.Pull,
            transferProtocol=TransferProtocol.HTTP,
            timeout="20m",
            use_quota=True,
            upgrade_strategy=UpgradeStrategy.WithoutObservations,
            blocking=True,
            use_cache_for_initial_state_read=False,
            check_delivery_and_protocol=True,
            resume_after_downlink_failure=False,
            extend_lifetime=True,
            use_observation=False,
            execute_immediately=False
        )
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

The Response body will contain the ID of the created task necessary for the next steps, for example `d:yV3cYCNpbGpNuVWpFo9eHlQHJZIghQ8emN5z9g:2`.

- **FOTA task for a group of devices**

To create a firmware upgrade task for all devices from a particular group, you need to use a task template. You can use a default “Lwm2mFirmwareUpdate” template. 
Send a `POST` request to the endpoint  `/tasksFromTemplates/group/{groupId}` with your group ID as the path parameter. In the request body provide the name of the task template and parameters needed to perform the task. The following is an example of the request body and the complete request:

```json
{
  "templateName": "Lwm2mFirmwareUpdate",
  "config": {
    "taskName": "FOTA",
    "parameters": [
      {
        "name": "resourceId",
        "value": "demo-file-resource-id"
      },
      {
        "name": "transferProtocol",
        "value": "HTTP"
      },
      {
        "name": "transferMethod",
        "value": "Pull"
      },
      {
        "name": "transferProtocol",
      "value": "HTTP"
      },
      {
        "name": "timeout",
        "value": "20m"
      },
      {
        "name": "useQuota",
        "value": "true"
      },
      {
        "name": "upgradeStrategy",
        "value": "WithoutObservations"
      },
      {
        "name": "blocking",
        "value": "true"
      },
      {
        "name": "useCacheForInitialStateRead",
        "value": "false"
      },
      {
        "name": "checkDeliveryAndProtocol",
        "value": "true"
      },
      {
        "name": "resumeAfterDownlinkFailure",
        "value": "false"
      },
      {
        "name": "executeImmediately",
        "value": "false"
      }
      ],
    "isActive": true
  }
}
```

=== "cURL"

    ```
    curl -X POST \
    -H "Authorization: Bearer TOKEN” \
    -H "accept: application/json" \
    -H "Content-Type: application/json" \
    -d "{"templateName":"Lwm2mFirmwareUpdate","config":{"taskName":"FOTA","parameters":[{"name":"resourceID","value":"demo-file-resource-id"},{"name":"transferProtocol","value":"HTTP"},{"name":"transferMethod","value":"Pull"},{"name":"transferProtocol","value":"HTTP"},{"name":"timeout","value":"20m"},{"name":"useQuota","value":"true"},{"name":"upgradeStrategy","value":"WithoutObservations"},{"name":"blocking","value":"true"},{"name":"useCacheForInitialStateRead","value":"false"},{"name":"checkDeliveryAndProtocol","value":"true"},{"name":"resumeAfterDownlinkFailure","value":"false"},{"name":"executeImmediately","value":"false"}],"isActive":true}}" \
    "https://#HOSTNAME/api/coiotedm/v3/tasksFromTemplates/group/root.mt.demo.api-test"
    ```

=== "Coiote Python"

    ``` python
    from coiote.client import Coiote
    from coiote.v3.model.task_templates import TaskTemplateConfig, TaskTemplateInvocation

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    task_configuration = TaskTemplateInvocation(
        templateName="Lwm2mFirmwareUpdate",
        config=TaskTemplateConfig(
            taskName="FOTA",
            parameters=[
                {
                    "name": "resourceId",
                    "value": "demo-file-resource-id"
                },
                {
                    "name": "transferProtocol",
                    "value": "HTTP"
                },
                {
                    "name": "transferMethod",
                    "value": "Pull"
                },
                {
                    "name": "transferProtocol",
                    "value": "HTTP"
                },
                {
                    "name": "timeout",
                    "value": "20m"
                },
                {
                    "name": "useQuota",
                    "value": "true"
                },
                {
                    "name": "upgradeStrategy",
                    "value": "WithoutObservations"
                },
                {
                    "name": "blocking",
                    "value": "true"
                },
                {
                    "name": "useCacheForInitialStateRead",
                    "value": "false"
                },
                {
                    "name": "checkDeliveryAndProtocol",
                    "value": "true"
                },
                {
                    "name": "resumeAfterDownlinkFailure",
                    "value": "false"
                },
                {
                    "name": "executeImmediately",
                    "value": "false"
                }
            ],
            isActive=True
        )
    )
    print(
        client.task_templates.run_on_group(
            group_id="root.mt.demo.api-test",
            config=task_configuration
        )
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

In the response body, you will get the task ID that will be used in the next steps, for example `g:root.mt.demo.api-test:1`.

## Step 3: Check if the firmware upgrade was successful

### Firmware upgrade status for a single device

To check the firmware upgrade status for a single device send a `GET` request to the endpoint `/taskReports/{taskId}/{deviceId}` to get the task report.
Provide the task and device IDs as the path parameters. The following is an example of the request:

=== "cURL"

    ```
    curl -X GET \
    -H "Authorization: Bearer TOKEN” \
    -H "accept: application/json" \
    "https://#HOSTNAME/api/coiotedm/v3/taskReports/d%3AyV3cYCNpbGpNuVWpFo9eHlQHJZIghQ8emN5z9g%3A2/api-test-device"
    ```

=== "Coiote Python"

    ``` python
    from coiote.client import Coiote

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    print(
        client.task_reports.get_report_for_device_task(
            task_id="d:yV3cYCNpbGpNuVWpFo9eHlQHJZIghQ8emN5z9g:2",
            device_id="api-test-device"
        )
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

!!! Note
    The task performing FOTA might not have started or might still be in progress when you send this request, so the report for this task might not have been generated yet. In that case, the request will respond with a custom version of 404: Not found, and the message in the response body, for example: 

    ```
    {
    "message": "Task has not been executed yet.",
    "code": 4041
    }
    ```

The report will be returned in the response body. If FOTA is successful, the response body will look like the following example:

```json
{
  "taskId": "d:yV3cYCNpbGpNuVWpFo9eHlQHJZIghQ8emN5z9g:2",
  "deviceId": "api-test-device",
  "startTime": "2022-09-14T09:49:28.280Z",
  "finishTime": "2022-09-14T09:49:35.300Z",
  "lastUpdateTime": "2022-09-14T09:49:35.300Z",
  "status": "Success",
  "summary": "Firmware update successful",
  "blocking": false,
  "properties": [
    {
      // Uploaded firmware version
      "name": "newFirmwareVersion",
      "value": "0.2"
    },
    {
      // Previous firmware version
      "name": "oldFirmwareVersion",
      "value": "0.2"
    },
    {
      // Task execution result
      "name": "result",
      "value": "SUCCESS"
    },
    {
      //Task detailed result
      "name": "resultDetails",
      "value": "Firmware update successful"
    }
  ]
}
```

If the FOTA task raises an error, the report will look like the following example:

```json
{
  "taskId": "d:yV3cYCNpbGpNuVWpFo9eHlQHJZIghQ8emN5z9g:2",
  "deviceId": "api-test-device",
  "startTime": "2022-09-15T08:19:38.805Z",
  "finishTime": "2022-09-15T08:19:38.807Z",
  "lastUpdateTime": "2022-09-15T08:19:38.807Z",
  "status": "Error",
  "summary": "Unknown protocol: ${sv.transferProtocol}",
  "blocking": false,
  "properties": []
}
```

### Task report statistics for a group

To get the overall task report statistics for a group send a `GET` request to the endpoint `/taskReports/summary`. Provide the ID of the task you created in the previous steps as the query parameter `taskId`. The following is an example of the request:

=== "cURL"

    ```
    curl -X GET \
    -H "Authorization: Bearer TOKEN” \
    -H "accept: application/json" \
    "https://#HOSTNAME/api/coiotedm/v3/taskReports/summary?taskId=g%3Aroot.mt.demo.api-test%3A1"
    ```

=== "Coiote Python"

    ``` python
    from coiote.client import Coiote


    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    print(  client.task_reports.get_task_summary(task_id="g:root.mt.demo.api-test:1")
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

In the response body, you will get:

- totalScheduled - the number of devices on which the task was scheduled
- inProgress - the number of devices on which the task is still in progress
- completed - the number of devices on which the task was completed
- successes - the number of devices on which the task completed successfully
- failures - the number of devices on which the task failed
- notCompleted - the number of devices on which the task has not been completed (includes in progress and not started)
- completionRate - total completion rate number (ratio of completed/total number of devices, where completed includes both success and failure)
- successRate - success rate
- failureRate - failure rate

The following is an example of the response body:

```json
{
  "totalScheduled": 3,
  "inProgress": 0,
  "completed": 3,
  "successes": 3,
  "failures": 0,
  "notCompleted": 0,
  "completionRate": 1,
  "successRate": 1,
  "failureRate": 0
}
```

