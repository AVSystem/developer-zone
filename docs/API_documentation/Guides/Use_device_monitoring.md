# How to use Device monitoring to get data from Coiote

**Prerequisites:**

- An active {{coiote_short_name}} user account
- Permission *monitoring.manageMonitoring*
- Devices already connected to {{coiote_short_name}}

**Endpoints used:**

- `GET /deviceMonitoring/data/{deviceId}/alias/{alias}`
- `GET /deviceMonitoring/data/{deviceId}/resourceUrl/{lwm2mUrl}`

<br>

## Overview

You can retrieve monitoring data from a device resource identified by its alias or LwM2M URL.

## Retrieving monitoring data from a device using its resource alias

Send a GET request to the endpoint `/deviceMonitoring/data/{deviceId}/alias/{alias}`. You have to provide the path parameters `deviceId` and `alias`, and the query parameter `timeRangeStart`. You can also use two additional parameters: `timeRangeEnd` and `limit`. To provide `timeRangeStart` and `timeRangeEnd` use ISO format (for example, 2022-12-01T08:05:35Z). If you don’t provide the `timeRangeEnd` parameter the current time is assumed to be the range end. The default and max value for the `limit` parameter is 2048 records.

!!! Note
    The value of `timeRangeStart` is exclusive and the value of `timeRangeEnd` is inclusive. 

The following is an example of the request, where you want to get monitoring data of the device with id “device123” about the temperature sensor (alias temperature), gathered in the time period starting from 2022-12-01T08:05:35Z.

=== "cURL"

    ```
    curl -X GET \
    -H "Authorization: Bearer #TOKEN" \
    "https://#HOSTNAME/api/coiotedm/v3/deviceMonitoring/data/device123/alias/temperature?timeRangeStart=2022-12-01T08:05:35Z"
    ```

=== "Coiote Python"

    ``` py
    from coiote.client import Coiote
    from datetime import datetime

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    print(
        client.device_monitoring.get_data_batch(
            device_id="device123",
            alias="temperature",
            start_time=datetime.now()
        )
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

## Retrieving monitoring data from the device using its resource LwM2M URL

Send a `GET` request to the endpoint `/deviceMonitoring/data/{deviceId}/resourceUrl/{lwm2mUrl}`. You have to provide the path parameters `deviceId` and `lwm2mUrl`, and the query parameter `timeRangeStart`. You can also use two additional parameters: `timeRangeEnd` and `limit`. To provide the `lwm2mUrl` parameter use the format “/x/y/”' with numeric values. 

The following is an example of the request, where you want to get monitoring data of the device with id “device123” about the temperature sensor (path /3303/0/5700), gathered in the time period starting from 2022-12-01T08:05:35Z.

=== "cURL"

    ```
    curl -X GET \
    -H "Authorization: Bearer #TOKEN" \
    "https://#HOSTNAME/api/coiotedm/v3/deviceMonitoring/data/device123/resourceUrl//3303/0/5700?timeRangeStart=2022-12-01T08:05:35Z"
    ```

=== "Coiote Python"

    ``` py
    from coiote.client import Coiote
    from datetime import datetime

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    print(
        client.device_monitoring.get_data_batch(
            device_id="device123",
            lwm2m_url="/3303/0/5700",
            start_time=datetime.now()
        )
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.
