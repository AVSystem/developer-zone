---
title: Asset Tracking using Thingy:91 and Power BI
date: 2023-05-02
og_title: AVSystem IoT Developer Zone
---

# Building a tracking application using the Thingy:91, Azure IoT Hub and Power BI

## Introduction
Build a tracking application using the **Thingy:91** devkit, while leveraging the benefits of the LwM2M protocol and visualizing its data on **Microsoft Power BI**.

## Prerequisites

- [Thingy:91](https://www.nordicsemi.com/Products/Development-hardware/Nordic-Thingy-91) with SIM with access to LTE-M or NB-IoT networks
- [{{ coiote_short_name }}]({{ coiote_site_link }}/) account (premium)
- [nRF Cloud](https://nrfcloud.com/) account
- [nRF Connect for Desktop](https://www.nordicsemi.com/Products/Development-tools/nrf-connect-for-desktop)
- [Microsoft Azure account](https://azure.microsoft.com/en-us/free/)
- [Microsoft Power BI account](https://powerbi.microsoft.com/)
- Serial communication program e.g. minicom or RealTerm (for Linux or Mac) or PuTTy (for Windows)

## Architecture

![Architecture tracking app](images/Architecture-tracking-demo.jpg "Anjay menuconfig")

This tutorial uses the **Thingy:91** prototyping platform in combination with the **{{ coiote_long_name }}** to build a cellular-connected tracking application. The integration with **nRF Cloud Locator** enables cell-based localization and optimizes the usage of the onboard GNSS. The location data, in combination with additional telemetry data is sent to **Azure IoT Hub** and visualized using **Microsoft Power BI**.

<iframe width="640" height="360" src="https://www.youtube.com/embed/FvW2WQDMaSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
*See also a tutorial on how to <a href="https://www.youtube.com/watch?v=dn5JAlIokA4/" target="_blank">Connect {{ coiote_short_name }} to Azure IoT Hub and visualize data on Power Bi</a> on our YouTube channel.*


## Part 1 - Connect the Thingy:91 to {{ coiote_short_name }} using the LwM2M Anjay client

### Program the device

Follow guide for [programming Thingy:91 with already built binaries](https://iotdevzone.avsystem.com/docs/LwM2M_Client/Nordic/Thingy91/#use-an-already-built-binary) to get an application running Anjay LwM2M Client
on your device.

### Connect the Thingy:91 to {{ coiote_long_name }}

To connect the board:

1. [Log in]({{ coiote_site_link }}/) to {{ coiote_short_name }} and from the left side menu, select **Device Inventory**.
1. In **Device Inventory**, select **Add device**.
1. Select the **Connect your LwM2M device directly via the Management server** tile.

    ![Add via Management server](images/mgmt_tile.png)

1. In the **Device credentials** step:
    - Think of a unique **Endpoint name**.
    - **Key Identity** is the same as the Endpoint name.
    - Create a **Key** and store it somewhere to retrieve later when configuring your device.
    - Click the **Add device** button and click **Confirm** in the confirmation pop-up.


### Configure the Client

0. With the Thingy:91 still connected to a serial port interface, connect to your device using a serial communication program (e.g. Minicom, RealTerm or PuTTY).

0. Use the `anjay` command to list possible options:

    ```
    uart:~$ anjay
    anjay - Anjay commands
    Subcommands:
    start   :Save config and start Anjay
    stop    :Stop Anjay
    config  :Configure Anjay params
    ```

    !!! tip
        To show available subcommands, press **Tab**.

0. Check your default credentials by following the instructions in the program:

    ```
    anjay config show
    ```

    ![Anjay configuration](images/anjay_config.png "Anjay configuration")

0. Update your device credentials by running the following commands:
    * To make any changes to the configuration, stop the client:

        ```
        anjay stop
        ```

    * To update the **endpoint name**, enter the endpoint name you created in {{ coiote_short_name }}:

        ```
        anjay config set endpoint <endpoint name>
        ```

    * To update the **Pre-Shared Key**, enter the key you created in {{ coiote_short_name }}:

         ```
         anjay config set psk <key>
         ```

0. Start the client using the new configurations:

    ```
    anjay start
    ```

0. Go to the {{ coiote_short_name }}. If your device is connected successfully its status will change to **Registered**.

    ![nrf - coiote dashboard.png](images/connected_device.png)


## Part 2 - Enable nRF Cloud integration

Follow [**the instructions listed here**](../../Cloud_integrations/nRF_Cloud_Location_services/Configure_nRF_Cloud_integration/) to enable the nRF Location Service integration.

If the connection to nRF Cloud Locator was successful, you will see the device location as a widget in the {{ coiote_short_name }} Device Center.

![nrf - location.png](images/location.png)


## Part 3 - Connect {{ coiote_short_name }} to Microsoft Azure

1. Start by logging into your Azure account. [Create a new **IoT Hub**](https://learn.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal) and a new **storage account**.

1. Get the **IoT Hub connection** string and **Azure Blob storage** string from your Azure account. For information on how to retrieve these details, see [Get the IoT hub connection string](../../Cloud_integrations/Azure_IoT/Azure_IoT_Hub/Configure_Azure_IoT_Hub_integration/#get-the-iot-hub-connection-string).

1. In {{ coiote_short_name }}, click **Integrations** from the left-side menu and select **Hyperscaler Integration Center**.

    Go to the Azure IoT Hub section and click **Connect**.

    ![Start Azure Integration](images/start-integration.jpg)

1. In the dialog window, paste the **IoT Hub connection string** and **Azure Blob storage** string into the relevant fields.

### Create a new LwM2M template

1. In {{ coiote_short_name }}, go to **Integrations**, open the tab **Templates** and create a new template by clicking the green button **+ Add new**.

    ![new template](images/new-template.png)

1. Name your template and click the button **+ Add missing objects**

    ![add missing objects](images/add-objects.png)

1. Select all of the following objects:

    - `0` - LwM2M Security
    - `1` - LwM2M Server
    - `3` - Device
    - `4` - Connectivity Monitoring
    - `5` - Firmware Update
    - `6` - Location
    - `3303` - Temperature
    - `3304` - Humidity
    - `3313` - Accelerometer
    - `3315` - Barometer
    - `3347` - Push button
    - `3420` - LED color light
    - `10256` - ECID-Signal Measurement information
    - `50001` - Location Assistance


1. Set the CAPABILITY TYPE to **Telemetry** for the resources:

    - `3303` - Temperature
        - `/5601` - Min Measured Value
        - `/5602` - Max Measured Value
        - `/5700` - Sensor Value
    - `3304` - Humidity
        - `/5601` - Min Measured Value
        - `/5602` - Max Measured Value
        - `/5700` - Sensor Value
    - `3313` - Accelerometer
        - `/5702` - X Value
        - `/5703` - Y Value
        - `/5704` - Z Value
    - `3315` - Barometer
        - `/5601` - Min Measured Value
        - `/5602` - Max Measured Value
        - `/5700` - Sensor Value
    - `3347` - LED color light
        - `/5500` - Digital Input State
        - `/5501` - Digital Input Counter

!!! note
    Although the **Location** object `6` sends telemetry data, all location resources need to be configured as **Property**.


![new template](images/new-template2.png)


### Connect your device to Azure

In {{ coiote_short_name }}, visit your **Device inventory**. Find the device you want to connect to Azure, click the three dots icon and select **Connect to Azure**.

![azure connect](images/azure-connect.png)

If the connection was successful, your device is now added to your **Azure IoT Hub**. You can find your device under: **Device management** > **Devices**.

![azure device](images/azure-device.png)


### Set group value tracking on resources in {{ coiote_short_name }}

1. In {{ coiote_short_name }}, go to **Device Groups**.
1. Open up the folder **hyperscalercenter** and open the subfolder which contains your device which is connected to Azure.
1. Go to the **Value tracking** panel and click **Add new**. In the pop-up:
    - Provide the resource path: `Temperature.0.Sensor Value`.
    - In the **Notification frequency** section, provide the following values:
        - **At least once every** - set it to 1 hour.
        - **Not more often than once every** - set it to 10 minutes.
    - Click **Add new**.
1. Go through the same process for the resources: `Humidity.0.Sensor Value`, `Barometer.0.Sensor Value`, `Location.0.Latitude` and `Location.0.Longitude`.

![azure device](images/value-tracking.png)


## Part 4 - Connect Microsoft Azure to Power BI

### Configuring message routing for sending telemetry data in Azure IoT Hub

#### Set up message routing

1. Go to your Azure IoT hub and add message routing:
    - In the left-side menu, under **Hub settings**, select **Message routing** and click **+ Add**.
    ![azure message routing](images/azure-message-routing-click.png)
    - Provide a name for your event, e.g. `EventRoute`.
    - From the **Endpoint** drop-down list, select **events**.
    - From the **Data source** drop-down list, select **Device Telemetry Messages**.
    - In the **Routing query**, paste the following:

    ```
    IS_DEFINED($body.lwm2m.6.0.0.value) OR IS_DEFINED($body.lwm2m.6.0.1.value) OR IS_DEFINED($body.lwm2m.3303.0.5700.value) OR IS_DEFINED($body.lwm2m.3304.0.5700.value) OR IS_DEFINED($body.lwm2m.3315.0.5700.value)
    ```

    - Click **Save**.

    ![Message Route](images/azure-message-routing2.png)

1. While in the **Message routing** panel, go to the **Enrich messages** tab to set up location tracking:
    - For latitude:
        - Name - type `lat`
        - Value - copy and paste `$twin.properties.reported.lwm2m.6.0.0.value`
        - Endpoint(s) - select `events`
    - For longitude:
        - Name - type `lon`
        - Value - copy and paste `$twin.properties.reported.lwm2m.6.0.1.value`
        - Endpoint(s) - select `events`

    ![azure enrich message](images/azure-enrich-message.png)

### Set up a Stream Analytics Job

1. Use search to go to **Stream analytics jobs** and create a job for transferring the gathered data to Power BI.
    - Click **+ Create** and provide the following:

        ![stream-analytics-click.png](images/stream-analytics-click.png)

        - **Resource group** - pick your resource group.
        - **Instance Name** - e.g. `lwm2m-to-powerbi`.
        - **Region** - select the region closest to your device’s location
        - Click **Review + Create**.
    - Once your deployment is complete, click **Go to resource**.

2. While in your Stream Analytics job panel, add a stream **input** and **output** and write a **query**:
    - Under **Job topology**, select **Inputs**.
        - From the **+ Add stream input** drop-down list, select **IoT Hub** and provide the following:
            - Input alias - e.g. `thingy91-input`.
            - Consumer group - pick the `$Default` group.
            - Click **Save**.
    - Under **Job topology**, select **Outputs**.
        - From the **+ Add** drop-down list, select **Power BI**
        - In the **Power BI** right-hand side panel, provide the following:
            - Output alias - e.g. `thingy91-output`
            - Select - Provide Power BI settings manually
            - Group workspace - The ID can be found in the powerBI URL for the workspace.
            - Authentication mode - User token
            - Dataset name - e.g. `AVSystemIoTHubDataSet`
            - Table name - e.g. `Data`
            - Click the button **Authorize** and login to your Power BI account
        - Click **Save**.
    - Under **Job topology**, select **Query**.
        - Paste the following query into the query input field (remember to adjust your naming inside the query if needed):

        ```
        SELECT
            CAST("lwm2m"."3303"."0"."5700".value  as float) as temperature,
            CAST("lwm2m"."3304"."0"."5700".value as float) as humidity,
            CAST("lwm2m"."3315"."0"."5700".value as float) as barometer,
            CAST("lwm2m"."3313"."0"."5702".value as float) as xValue,
            CAST("lwm2m"."3313"."0"."5703".value as float) as yValue,
            CAST("lwm2m"."3313"."0"."5704".value as float) as zValue,
            GetMetadataPropertyValue("thingy91-input", '[User].[lat]') as lat,
            GetMetadataPropertyValue("thingy91-input", '[User].[lon]') as lon,
            EventProcessedUtcTime as processedTimestamp,
            IoTHub.EnqueuedTime as iotHubTimestamp,
            IoTHub.ConnectionDeviceId as deviceId
        INTO
            "thingy91-output"
        FROM
            "thingy91-input"
        ```

        - Click **Save query**.
    - Click **Test query** to validate if the query works as expected.

        ![Stream Analytics Test](images/stream-analytics-final.png)

    - In your Stream analytics job, go to **Overview** and click **Start**. Confirm by clicking **Start** again in the right-wide window to run the created query.

        ![Start Stream Analytics Test](images/start-job-click.png)

## Data visualization using Power BI

Once the query is finished, you can go to Power BI to create a visualization for the data you have gathered.

1. Go to [https://powerbi.microsoft.com/](https://powerbi.microsoft.com/) and sign in to your account.
1. Go to the workspace you connected via Stream Analytics Jobs and find your recently created dataset.
1. Click the **more options** icon and select **Create report**.

    ![Powerbi dataset.png](images/powerbi-dataset-click.png)

1. Now start building some nice visualizations, such as a map for your location and line charts for your temperature, humidity and barometer values.

    Eventually, it may look something like this:

![Powerbi Visualization.png](images/PowerBI-visual.png)


!!! info

    Did you manage to setup the integration and display data in Power BI? Congratulations! If not, don't worry, there are many engineers ready to support you. Join our [**AVSystem Discord**](https://discord.avsystem.com/) to get in touch with our experts.

    [![Join Discord.png](images/discord.png)](https://discord.avsystem.com/)

