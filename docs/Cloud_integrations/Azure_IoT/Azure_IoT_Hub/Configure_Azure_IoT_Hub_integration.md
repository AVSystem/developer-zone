# Connect integration

To enable communication and data flow between the Azure IoT Hub and {{ coiote_short_name }} platforms, you first need to integrate them using the Hyperscaler Integration Center in {{ coiote_short_name }}. Follow the instructions below to learn how to do it.

## Prerequisites

  - An active IoT Hub with hub owner access permissions. [Check here](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal) how to create a hub.
  - A {{ coiote_short_name }} user account with permissions to use the Hyperscaler Integration Center.
  - An active Azure Blob Storage account (creating a new dedicated account for the integration is required).

## Get the IoT Hub connection string

The Azure IoT Hub connection string is required in the integration process. Here is how to obtain it:

1. In your IoT Hub general view, go to **Shared access policies**:

       ![IoT Hub Shared access policies](images/azure_hub_credentials.png "IoT Hub Shared access policies")

2. From the list of policies, click the `iothubowner` policy.
3. From the keys section, click the copy icon for the *Primary connection string* and paste it into Notepad or any other safe place to keep it for later.

       ![IoT Hub Connection string](images/connection_string.png "IoT Hub Connection string")

    !!! info
        For detailed information about the IoT Hub permissions, please visit the [Control access to IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-security#access-control-and-permissions) section of the Azure IoT Hub documentation.

## Get the Azure Blob storage connection string

!!! important
    For the integration to work properly, it is required to have an empty Azure Blob storage account dedicated exclusively for the integration.

An Azure Blob storage connection string is required in the integration process. Here is how to obtain it:

0. In your Azure Blob storage account, go to **Access keys**.
   ![Azure Blob Storage](images/blob_storage.png "Getting Azure Blob Storage connection string")
0. Click **Show keys**, click the copy icon next to the **connection string** and paste it into Notepad or any other safe place to keep it for later.

## Set up the **Azure IoT Hub integration**

Use the obtained credentials to establish the integration between {{ coiote_short_name }} and your Azure IoT hub:

0. In your {{ coiote_short_name }} user account, go to **Integrations** → **Hyperscaler Integration Center**
  ![Hyperscaler Integration Center menu link](images/azure-integration.png "Hyperscaler Integration Center menu link")
0. In the **Integrations** tab, find the **Azure IoT Hub** tile and click **Connect**.
0. In the dialog window, paste the previously copied IoT Hub connection string and Azure Blob storage connection string into the relevant fields.
  ![Setting up the integration](images/connect_hub.png "Setting up the Azure integration"){:style="float: left;margin-right: 1177px;margin-top: 17px;"}
      - click **Save** to keep the setting.

Your integration should now be established. To get the integration up and running, try [synchronizing devices with Azure IoT Hub](Device_operations/Synchronize_devices_with_Azure_IoT_Hub.md)
