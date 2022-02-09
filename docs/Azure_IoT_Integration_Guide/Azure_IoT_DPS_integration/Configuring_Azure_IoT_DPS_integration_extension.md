# Configure integration

Azure IoT Hub Device Provisioning Service (DPS) is a helper service for Azure IoT Hub that allows registering large numbers of devices without any human intervention. Azure DPS ensures high availability by providing load balancing across multiple hubs and supporting reprovisioning based on a change in the device. For more information about Azure DPS, refer to the [official documentation](https://docs.microsoft.com/en-us/azure/iot-dps/about-iot-dps).

To enable communication and data flow between Azure DPS and the Coiote DM platform, you first need to integrate them using the dedicated extension module in Coiote DM. Follow the instruction below to learn how to do it.


## Prerequisites

* An active DPS account [with linked IoT hubs](https://docs.microsoft.com/en-us/azure/iot-dps/quick-setup-auto-provision#create-a-new-iot-hub-device-provisioning-service).
* An active IoT Hub with hub owner access permissions. [Read here](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal) how to create a hub.
* A Coiote DM user account with permissions to use the integration extension.


## Create an Enrollment group

This step describes how to create an Enrollment group. If you already have one, proceed to the [Get the credentials](#get-the-credentials) section.

A device can be enrolled in Azure DPS either [individually or as a group of devices](https://docs.microsoft.com/en-us/azure/iot-dps/tutorial-provision-device-to-hub#enroll-the-device) that share a specific attestation mechanism. For the integration with Coiote DM, you need to choose the Enrollment group option.

To create an Enrollment group:

1. Log in to the [Azure portal](https://portal.azure.com) and click on your **Device Provisioning Service**.
2. Go to **Manage enrollments** from the left pane.
3. Click **+ Add enrollment group**.

    ![Click Add enrollment group in the Manage enrollments panel](images/dps-1.png "Click Add enrollment group in the Manage enrollments panel")

4. Provide the group name and select the **Symmetric key** option from the Attestation Type. Make sure that the **Auto-generate keys** checkbox is ticked. Click **Save**.

![Provide the group name and select the Symmetric key option](images/dps-2.png "Provide the group name and select the Symmetric key option")

You’ve just created your enrollment group. The generated Symmetric Key will be used in the next step.

!!! info
    On the Enrollment Group Details page you can also select to which hub the enrollment group will be assigned. The list of hubs that are connected to this DPS is displayed in the drop-down menu under **Select the IoT hubs this group can be assigned to**. To add more hubs to this list, click **Link a new IoT hub** or go to the Linked IoT hubs page from the left pane.

## Get the credentials

This step explains where you can get the credentials for setting up the Azure DPS extension in Coiote DM.

### ID Scope

The ID Scope is used to identify the specific provisioning service for the device registration. The ID Scope is automatically generated and unique.

1. Log in to the [Azure portal](https://portal.azure.com) and click on your **Device Provisioning Service**.
2. On the Overview page, locate the **ID Scope** under the Essentials section. Copy it into Notepad or another place to keep it for later.

![Copy the ID Scope from the Overview panel](images/dps-4.png "Copy the ID Scope from the Overview panel")

### Enrollment group key

1. Select **Manage enrollments** from the left pane of your Azure DPS.
2. Under the **Enrollment Groups** tab, click on the group that you want to use.

    ![Click on the Enrollment group you want to use](images/dps-5.png "Click on the Enrollment group you want to use")

3. In the **Settings** tab, under Attestation Type, copy **Primary Key.**

![Copy the Primary key](images/dps-6.png "Copy the Primary key")

## Set up the Azure DPS extension

1. In your Coiote DM account, go to **Administration —> Hyperscaler Integration Center**.
2. In the **Integration** tab, locate the Azure DPS tale and click **Connect**.

    ![Click on the Azure DPS tab](images/dps-7.png "Click on the Azure DPS tab")

3. In the dialog that appears, provide the credentials for your Azure DPS integration:
    * **ID Scope**: paste the ID Scope copied from the Overview page.
    * **Enrollment group key:** paste the Primary Key copied from the Enrollment group.
    * **Device Provisioning Service hostname** can be left as it is: `global.azure-devices-provisioning.net`

![Enter ID Scope, Enrollment group key and click Save](images/dps-8.png "Enter ID Scope, Enrollment group key and click Save")

## What happens next

After you set up Azure DPS and configure your Azure DPS extension in Coiote DM, device provisioning and reprovisioning are automated. You aren’t required to make any changes in Coiote DM.

Importing and exporting devices, upgrading device firmware, and setting observations — all these operations happen at the level of individual hubs. The detailed instructions are provided in our [Azure IoT Hub documentation](https://iotdevzone.avsystem.com/docs/Azure_IoT_Integration_Guide/Azure_IoT_Hub_integration/Device_operations/Overview/).

## Next steps

* [Device operations on Azure IoT Hub](https://iotdevzone.avsystem.com/docs/Azure_IoT_Integration_Guide/Azure_IoT_Hub_integration/Device_operations/Overview/)
* [Azure DPS documentation](https://docs.microsoft.com/en-us/azure/iot-dps/)
