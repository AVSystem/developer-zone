# Tracking application

## Introduction
Build a tracking application using the Thingy:91 devkit, while leveraging the benefits of the LwM2M protocol and visualizing its data on Microsoft Power BI.

## Prerequisites

- [Thingy:91](https://www.nordicsemi.com/Products/Development-hardware/Nordic-Thingy-91) with SIM with access to LTE-M or NB-IoT networks
- (Premium) account on [Coiote IoT DM](https://eu.iot.avsystem.cloud/)
- [nRF Cloud](https://nrfcloud.com/) account
- [nRF Connect for Desktop](https://www.nordicsemi.com/Products/Development-tools/nrf-connect-for-desktop)
- [Microsoft Azure account](https://azure.microsoft.com/en-us/free/)
- [Microsoft Power BI account](https://powerbi.microsoft.com/)

## Architecture

![Architecture tracking app](images/Architecture-tracking-demo.jpg "Anjay menuconfig")

This tutorial uses the **Thingy:91** prototyping platform in combination with the **Coiote IoT Device Management** platform to build a cellular-based tracking application. A data integration with **nRF Cloud Locator** enables cell-based localization and optimizes the usage of the onboard GNSS. The location data, in combination with additional telemetry data is sent to **Azure IoT Hub** and visualized using **Microsoft Power BI**.

## Part 1 - Connect the Thingy:91 to Coiote using the Anjay client


#### Get Zephyr and Python dependencies

To get the Zephyr SDK and dependencies follow the first 4 steps of the instruction provided by [the Zephyr Project](https://docs.zephyrproject.org/latest/getting_started/index.html).

0. [Select and Update OS](https://docs.zephyrproject.org/latest/develop/getting_started/index.html#select-and-update-os)
0. [Install dependencies](https://docs.zephyrproject.org/latest/develop/getting_started/index.html#install-dependencies)
0. [Get Zephyr and install Python dependencies](https://docs.zephyrproject.org/latest/develop/getting_started/index.html#get-zephyr-and-install-python-dependencies)
0. [Install Zephyr SDK](https://docs.zephyrproject.org/latest/develop/getting_started/index.html#install-zephyr-sdk)


#### Clone the Anjay Zephyr repository

Open the command line interface on your machine, then paste and run the following command:

   ```
   git clone https://github.com/AVSystem/Anjay-zephyr-client
   ```

#### Compile the demo project

0. Connect the Thingy:91 board to a USB port of your machine.
0. Set West manifest path to `Anjay-zephyr-client/demo`, manifest file to `west-nrf.yml`, and run `west update`:

    ```
    west config manifest.path Anjay-zephyr-client/demo
    west config manifest.file west-nrf.yml
    west update
    ```

0. Go to the directory `Anjay-zephyr-client/demo` and configure the client using **menuconfig**.

    **Menuconfig** allows for, among others, enabling the **GPS** and **cell-based location services**. To open the configuration menu, run the command:

    ```
    west build -b thingy91_nrf9160ns -p -t menuconfig
    ``` 
    
    A config screen will open:

    - Open the folder: `anjay-zephyr-client --->`
        - Select: `Enable manual requests for cell-based location`
        - Open the folder: `Enable GPS on nRF9160-based devices --->`
            - Select `Enable A-GPS using Nordic Location Services over LwM2M`
        

    ![menuconfig](images/menuconfig1.png "Anjay menuconfig")

    After making the configuration changes, close the config menu by pressing `Q` and save it by pressing the key `Y`.

    To build the project using the updated configuration, run:
    ```
    west build
    ```

0. Find the `app_signed.hex` file under the `build/zephyr` directory in the project folder.

### Flash the binaries
To program the board, go through the process of **flashing Thingy:91**. Use the nRF Connect Programmer with the downloaded `.hex` file and follow the [program the nRF9160 SiP application](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/ug_thingy91_gsg.html#program-the-nrf9160-sip-application) section.

After successful flashing, reboot the board and go to the next step.

### **Write the firmware to the Thingy:91**

- When using the Thingy:91, use the `app_signed.hex` file which you can find in the `build/zephyr` directory.
- Flash it using **Programmer** in **nRF Cloud for Desktop** via **MCUboot**. 

    *For more information on flashing the Thingy:91 using MCU Boot, see [link](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/ug_thingy91_gsg.html#program-the-nrf9160-sip-application)*

![nrf - write.png](images/nrf-write_done.png)

- Powercycle the Thingy:91 to activate the application.


## **Register your device in AVSystem**

To connect to Coiote IoT Device Management LwM2M Server, please register at [https://eu.iot.avsystem.cloud](https://eu.iot.avsystem.cloud/).

To connect the board:

1. Log in to Coiote DM and from the left side menu, select **Device Inventory**.
1. In **Device Inventory**, click **Add device**.
1. Select the **Connect your LwM2M device directly via the Management server** tile.
    
    ![Add via Management server](https://iotdevzone.avsystem.com/docs/LwM2M_Client/Nordic/images/mgmt_tile.png)
    

1. In the **Device credentials** step:
    - Think of an unique **Endpoint name**.
    
    ![Add Management quick](https://iotdevzone.avsystem.com/docs/LwM2M_Client/Nordic/images/add_mgmt_quick.png)
    
    - **Key Identity** is the same as the device ID
    - Create a **Key** and store this somewhere to retrieve later when configuring your device.
1. Click the **Add device** button and **Confirm** in the confirmation pop-up.

## Configure the Client

0. With the board still connected to a serial port interface, open a serial communication program. 

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
        To show available subcommands, use the **Tab** key.

0. Check your default credentials by following the instructions in the program:

    ```
    anjay config show
    ```

    ![Anjay configuration](images/anjay_config.png "Anjay configuration")

0. Update your device credentials:
    * To make any changes to the configuration, stop the client:

        ```
        anjay stop
        ```
    
    * To update the **endpoint name** run the following command, Use the endpoint name you create in Coiote. 

        ```
        anjay config set endpoint <endpoint name>
        ```

    * To update the **Pre-Shared Key**, run the following command and enter the key you used in Coiote.

         ```
         anjay config set psk <key>
         ```

0. Start the client using the new configurations:

    ```
    anjay start
    ```

0. Go to the Coiote DM. If your device is connected successfully, Coiote will whos the device as Registered.

    ![nrf - coiote dashboard.png](images/connected_device.png)


## Part 2 - Enable nRF Cloud integration

Follow [**the instructions listed here**](../../Cloud_integrations/nRF_Cloud_Location_services/Configure_nRF_Cloud_integration/) to enable the nRF Location Service integration.

If the connection to nRF Cloud Locator was successful, you will see the device location as a widget in the Coiote Device Center.

![nrf - location.png](images/location.png)


## Part 3 - Connect Coiote to Microsoft Azure

In Coiote DM, go to **Integrations**, open the tab **Templates** and create a new template by clicking the green button **+ Add new**.

![new template](images/new-template.png)

Name your template and click the button **+ Add missing objects**

![add missing objects](images/add-objects.png)

Select all of the following objects:

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

Set the CAPABILITY TYPE to **Telemetry** for the resources:

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
    Although the object **`6` - Location** sends telemetry data, all location resources need to be configured as **Property**.


![new template](images/new-template2.png)


### Connect your device to Azure

Visit your **Device inventory** in Coiote. Find the device you want to connect to Azure, click the three dots and select **Connect to Azure**.

![azure connect](images/azure-connect.png)

If the the connection was successful, your device is now added to your **Azure IoT Hub**. You can find your device under: **Device management** > **Devices**.

![azure device](images/azure-device.png)


### Set group value tracking on resources in Coiote DM

![azure device](images/value-tracking.png)


## Part 4 - Connect Microsoft Azure to Power BI

### Configuring message routing for sending telemetry data in Azure IoT Hub

**Set up message routing**

1. Go to your Azure IoT hub and add message routing:
    - Under **Hub settings**, select **Message routing** and click **+ Add**.
    ![azure message routing](images/azure-message-routing-click.png)
    - Provide a name for your event, for example `EventRoute`.
    - From the **Endpoint** drop-down list, select **events**.
    - From the **Data source** drop-down list, select **Device Telemetry Messages**.
    - In the **Routing query**, paste the following:
    
    ```
    IS_DEFINED($body.lwm2m.6.0.0.value) OR IS_DEFINED($body.lwm2m.6.0.1.value) OR IS_DEFINED($body.lwm2m.3303.0.5700.value) OR IS_DEFINED($body.lwm2m.3304.0.5700.value) OR IS_DEFINED($body.lwm2m.3315.0.5700.value)
    ```
    
    - Click **Save**.
2. While in the **Message routing** panel, go to the **Enrich messages** tab to set up location tracking:
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
    - Click **+ Add** and provide the following:
        
        ![stream-analytics-click.png](images/stream-analytics-click.png)
        
        - Resource group - pick your resource group.
        - Instance Name - e.g. `lwm2m-to-powerbi`.
        - Region - select the region closest to your device’s location
        - Click **Review + Create**.
    - Once your deployment is complete, click **Go to resource**.

2. While in your Stream Analytics job panel, add a stream **input** and **output** and write a **query**:
    - Under **Job topology**, select **Inputs**.
        - From the **+ Add stream input** drop-down list, select **IoT Hub** and provide the following:
            - Input alias - e.g. `avsystem-iot-hub-input`.
            - Consumer group - pick the `$Default` group.
            - Click **Save**.
    - Under **Job topology**, select **Outputs**.
        - From the **+ Add** drop-down list, select **Power BI**
        - In the **Power BI** right-hand side panel, provide the following:
            - Output alias - e.g. `avsystem-iot-hub-output`
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
            GetMetadataPropertyValue("avsystem-iot-hub-input", '[User].[lat]') as lat,
            GetMetadataPropertyValue("avsystem-iot-hub-input", '[User].[lon]') as lon,
            EventProcessedUtcTime as processedTimestamp,
            IoTHub.EnqueuedTime as iotHubTimestamp,
            IoTHub.ConnectionDeviceId as deviceId
        INTO
            "avsystem-iot-hub-output"
        FROM
            "avsystem-iot-hub-input"
        ```

        - Click **Save query**.
    - Click **Test query** to validate if the query works as expected.
    - In your Stream analytics job, go to **Overview** and click **Start** and confirm by clicking **Start** in the **Start job** window to run the created query.



## Data visualization using Power BI

Once the query is finished, you can go to Power BI to create a visualization for the data you have gathered.

1. Go to [https://powerbi.microsoft.com/](https://powerbi.microsoft.com/) and sign in to your account.
1. Go to the workspace you connected via Stream Analytics Jobs and find your recently created dataset.
1. Click the **more options** icon and select **Create report**
    ![Powerbi dataset.png](images/powerbi-dataset-click.png)
1. Now start building some nice visualizations, such as a map for your location and line charts for your temperature, humidity and barometer values.

    Eventually, it may look something like this:
    
![Powerbi Visualization.png](images/PowerBI-visual.png)