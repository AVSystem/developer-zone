# Importing devices to Azure IoT Central

If you have device entities in Coiote DM that you would like to manage via the Azure IoT Hub, you may use the import functionality. Follow the instruction below to learn how to do it.

## Prerequisites

 - Added at least one device entity in Coiote DM.
 - An active Azure Blob Storage account.
____________________
## Create a group of devices for import

First, you need to insert all the devices to be imported into a common group for ease of configuration.

1. In Coiote DM, go to **Device inventory**, select the devices you would like to import and use the **Add to group** action.
2. In the pop-up window that appears, select a group

## Get the Azure Blob storage connection string

Azure Blob storage connection string will be important in the last step of the import operation. Here is how to obtain it:

1. In your Azure Blob Storage account, go to **Access keys**.
 ![Azure Blob Storage](images/blob_storage.png "Getting Azure Blob Storage connection string")
2. Click **Show keys** and copy the *connection string* to your clipboard.

## Import your devices

Now you are ready to import your devices.

1. In the **Device groups** panel, select your group of devices ready for import and click **Actions**.
2. Under **Management**, select the **Import devices to Azure IoT**.
3. In the pop-up window, paste the Azure Blob Storage connection string and select/deselect the following options:

    ![Importing devices](images/importing_devices.png "Importing devices action")

    - **Add all devices to the Azure IoT Hub group** - select it to add your devices to a group dedicated for devices integrated with the Azure IoT Hub. Note that this group has the 'Azure dialect' set as the default.
    - **Add the Azure dialect to this group** - select it if you want to set the 'Azure dialect' to your current group. This setting is useful in case you deselect the first option.  
    - **Omit devices already tagged as Azure devices** - select this option if you have devices in your current group that have been previously imported to Azure IoT Hub and you do not want to include them in the import action.
