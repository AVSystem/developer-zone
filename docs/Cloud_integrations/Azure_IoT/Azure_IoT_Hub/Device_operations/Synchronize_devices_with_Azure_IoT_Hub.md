# Synchronize devices with Azure IoT Hub

Importing devices to {{ short_name }} and synchronizing them with Azure IoT Hub is a quick way to start using your {{ short_name }} - Azure IoT Hub integration. The import operation will do two basic operations automatically:

- Create device entities in {{ short_name }} with the credentials that you specified,
- Create the devices' "counterparts" within Azure IoT Hub and synchronize them with {{ short_name }}.

## Prerequisites

 - A connected Azure IoT Hub integration in the Hyperscaler Integration Center.
 ____________________

## Option 1: Syncronize devices one by one

In {{ short_name }}, go to the **Device inventory** and search for the device you want to connect to Azure.

Click on the three dots and select the option **Connect to Azure**.

Select the minimal or the rich LwM2M schema (unless you created a custom LwM2M template).

![Azure Connect](images/azure-connect.png "Importing devices")

## Option 2: Import devices from CSV using a default integration template

In the import process, you will need a list of devices that you want to import along with an integration template to be used by the Azure IoT Hub. To learn more about Azure integration templates, see the [Configure integration templates](https://iotdevzone.avsystem.com/docs/Azure_IoT_Integration_Guide/Configure_integration_templates/Azure_integration_templates/) section.

0. In {{ short_name }}, go to **Administration** -> **Hyperscaler Integration Center**.
0. Make sure you have an integration connected in the **Integration** tab.
0. Go to the **Device list** tab and click **Import devices**.
0. In the **Import devices** wizard:
    - From the **Select template** field, select one of two default integration templates:
        - Default minimal LwM2M schema - a pre-defined template implementing a basic device data model.
        - Default rich LwM2M schema - a pre-defined template implementing an extended device data model.
    !!! note
        Integration templates are crucial in the device import process. Optionally, you can create your custom device template and use it in importing. Check the instructions in the [Configure integration templates](https://iotdevzone.avsystem.com/docs/Azure_IoT_Integration_Guide/Configure_integration_templates/Azure_integration_templates/) section.
    - In the **Import devices from a CSV file** section:
        ![Importing devices](images/import_view.png "Importing devices")
        - If you already have a CSV file with devices for import, click **Browse** and select the file.
        - If you don't have a CSV with devices for import yet, click the **device template** link to download an empty template that you can fill in with your data:
            - **DeviceId**	- provide your device ID. For LwM2M-enabled devices, device ID usually equals the endpoint name.
            - **IMSI** - provide a random but unique number for each entry (or provide IMSI number if your device has one).
              ![CSV device template](images/device_template_csv.png "CSV device template")
            - **PSK_Identity_Key** - provide a unique plain-text PSK identity key used for secure communication between the device and {{ short_name }}.
            - **PSK_Key** -  provide a unique HEX-encoded PSK key used for secure communication between the device and {{ short_name }}.
            - Save the template and upload it using the **Browse** button and dialog window.
    -  Click **Sync with Azure**.
0. After a moment, the import operation should finish successfully.
![Synchronization successful](images/sync_successful.png "Sync successful")
0. Now you can connect your physical devices to {{ short_name }} using their credentials and the dedicated URL displayed after the successful device import.

### What the import operation does

Once the devices from the CSV template are imported into {{ short_name }}, the following actions are performed:

- In {{ short_name }}, device entities are created based on the credentials provided in the template. All such entities are visible in the **Device list** tab.
- In {{ short_name }}, a dedicated integration group is automatically created (with the name built up by the `hyperscalercenter` prefix and the template ID, e.g. `618238c8bcafcb43b2911262`).
- In your Azure IoT hub, devices are created and ready for operation.

### Check device error logs

Logs may come helpful for diagnosing and troubleshooting issues with the communication between the three actors in the integration: the device, {{ short_name }}, and Azure IoT Hub.

To see logs for your integrated devices:

0. Go to the single device view in {{ short_name }}, from the left menu, select the **Logs** tile.

    !!! info
        The logs are only available in the previous version of Coiote. Select **Go to previous version** in the top-right corner.

        ![previous version](images/previous-version.png "previous version")

0. In the **Logs** panel, expand the view by clicking on **More** and configure the following:

    - **Store from level** - select **Use custom** and set log level to **DEBUG** for 1 hour.
    - **Tags** - select **HYPERSCALERS**

![Integration logs](images/hic_logs.png "Integration logs")

The communication logs will be displayed, allowing you to check, diagnose, or debug any issues.
