# Creating an air quality monitoring - Coiote DM and Azure IoT Hub integration use case

The Coiote DM and Azure IoT Hub integration lets you create

## Prerequisites

- An active Azure subscription.
- An active Coiote DM account.

## Creating and configuring an Azure IoT hub and storage account

First you need to add a new IoT hub and a storage account in Azure. Here's how to do it:

### Creating an IoT hub

1. In your Azure portal home view, go to **IoT Hub** and select **Add**.

    - In the **Basics** tab:
        - select your subscription and resource group,
        - pick your region,
        - provide a name for your IoT hub.
    - In the **Management** tab:
        - in **Pricing and scale tier** select,
        - optionally, turn off **Defender for IoT**.
    - In the **Review + create** tab, click **Create**.

### Creating a storage account

While your new IoT hub is deploying, you can add a new storage account:

1. In the Azure portal, go to **Storage accounts** and select **Add**.

   - In the **Basics** tab:
       - select your subscription and resource group,
       - provide a name for your storage account,
       - pick your location.
   - In the **Review + create** tab, click **Create**.

## Configuring the Azure IoT Hub integration extension

Once the deployments are complete, go to Coiote DM to set up the Azure IoT Hub extension.
If you haven't done this yet, please follow the [instruction for the Azure IoT Hub integration configuration](../Configuring_Azure_IoT_Hub_integration_extension).

## Adding and connecting LwM2M air quality meter simulators to Coiote DM and Azure IoT Hub
1. Go to your Azure IoT Hub and add new devices:
    - Under **Explorers**, select **IoT Devices** and click **+ New**.
    - Provide the name for your first device: ``air-quality-meter-example-0``.
    - Click **Save**.
    - Repeat the procedure for the other 5 devices (increase the number included in the device name).
2. Go to Coiote DM and sync the previously added devices:
    - In **Device inventory**, select **Sync with IoT platform -> Azure IoT Hub**.
    - In the pop-up, click **Sync devices**.
    - Devices should then be visible in **Device inventory**   
3. Go to your command interpreter and register the device simulators:
    - Paste and run the following command to create a container group:
        ```
         az container create -g coiote-dm-experiments --name air-quality-meter-example-0 --image avsystemcom/air-quality-meter-example --environment-variables DEVICEID-air-quality-meter-example-0 SERVER_ADDRESS=lwm2m-test.avsystem.io OPEN_WEATHER_API_TOKEN=exampletoken

        ```

        !!! note
            Remember to change the command parameters accordingly so that they are in line with your naming and credentials.

     - once the command is executed, you should see a JSON payload that describes the content of the container instance.

4. Go back to Coiote DM and in **Device inventory**, check if the devices have registered to the platform and if their data model has been updated.

    - Click the **Refresh data** icon if needed.
    - Click on a device and in the **Device Management Center**, select the **Actions** panel.
    - Select the **Refresh data model from device** link and confirm by clicking **Yes, execute task now**.
    - Go to the **Objects** panel to see if the data model for the device has been updated. You should be able to see objects such as ``3 Device`` (along with the ``Model number`` resource which shows the name of the city of the temperature reading), ``3303 Temperature``, and ``3428 Air quality``.
## Bidirectional communication using Device Twin

### From Coiote DM to Azure IoT Hub

1. In your Coiote DM account, go to **Device inventory**, select a device.
2. In the **Device Management Center**, go to the **Objects** panel.
3. In the ``1 LwM2M Server`` object, find the ``Lifetime`` resource.
4. Click the **pen** icon next to it, change the lifetime value and click the **Apply** link.
5. Go to your Azure IoT hub, select **IoT devices**, click your device and select the **Device Twin** panel.
6. Click **Refresh** and check in the JSON payload if the reported property for the ``1/0/1`` (Lifetime) resource has changed.   

### From Azure IoT Hub to Coiote DM

!!! note
    To read more about how the Device Twins work in the Coiote DM - Azure IoT Hub integration, please refer to [the LwM2M Mappings section](/Concepts/LwM2M_mappings/#lwm2m-readable-and-writable-resources).

1. In your Azure IoT hub, select **IoT devices**, click one of your added devices and select the **Device Twin** panel.
2. To change the ``Lifetime`` resource in Coiote DM, you need to modify the relevant Device Twin desired property.

    - under the ``properties`` tag in the Device Twin JSON payload, paste the following nested structure:

      ```
       "reported": {
         "lwm2m": {
           "1": {
             "0": {
               "0": {},
               "1": {
                 "value": 45
               }
             }
           }
         }
       },
      ```  
      - Click **Save** and **Refresh**.

3. The value of the resource should now be changed in the Device Twin reported properties as well as in the Coiote DM Objects panel, in the ``Lifetime`` resource of the ``1 LwM2M Server`` object.

## Passing telemetry to Azure IoT Hub



## Data visualization using Power BI
