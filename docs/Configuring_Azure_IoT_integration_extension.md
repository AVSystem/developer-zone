---
hide:
  - toc        # Hide table of contents
---

# Configuring the Azure IoT integration extension

=== "Azure IoT Hub"

    ## Configure the Azure IoT Hub extension

    ### Prerequisites:

      - An active IoT Hub with hub owner access permissions.
      - A Coiote DM user account with permissions to use the integration extension.
    __________________
    ### Get the IoT Hub connection string

    1. In your IoT Hub general view, go to **Shared access policies**:

        ![IoT Hub Shared access policies](images/azure_hub_credentials.png "IoT Hub Shared access policies")

    2. From the list of policies, select the `iothubowner` policy.
    3. Under **Shared access keys**, click the copy icon for the *Connection string -- primary key* to save the value.

        ![IoT Hub Connection string](images/connection_string.png "IoT Hub Connection string")

    !!! info
        For detailed information about the IoT Hub permissions, please visit the [Control access to IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-security#access-control-and-permissions) section of the Azure IoT Hub documentation.
    Now you need to use the credential in the Coiote DM platform.

    ### Set up the **Azure IoT Hub Extension** using credentials.  

    1. In your Coiote DM user account, go to **Administration --> Extensions**.
    2. Find the **Azure IoT Hub** tab and click `Setup`.

        ![Azure IoT Hub extension](images/azure_extension.png "Azure IoT Hub extension")

    3. In the tab, paste the previously copied IoT Hub connection string.

        ![Setting up the extension](images/extension_setup.png "Setting up the extension")

        - use `Test connection` to see if the connection can be established correctly.

        - click `Save` to keep the setting.

=== "Azure IoT Central"

    ##  Configure the Azure IoT Central extension

    ### Prerequisites:

     - An active IoT Central with hub owner access permissions.
     - A Coiote DM user account with permissions to use the integration extension.
    _______________
    ### Get the Azure IoT Central integration credentials

     1. In your Azure IoT Central account view, go to **Administration**:
     2. Under **Your application**, copy the full *Application URL* (along with '.azureiotcentral.com') into Notepad or other place to keep it for later.

         ![IoT Central Administration](images/azure_central_admin.png "IoT Hub Administration")

     3. From the **Administration** menu, select **API tokens** and click *generate token*.

         ![Azure IoT central API token generation](images/api_token.png "Azure IoT central API token generation")

     4. In the pop-up window that appears, click the copy icon for the newly generated token.

         ![token generated](images/generated_token.png "Generate token pop-up")

     Now you need to use the obtained credentials in the Coiote DM platform.

    ### Set up the **Azure IoT Hub Extension** using credentials.  

     1. In your Coiote DM user account, go to **Administration --> Extensions**.
     2. Find the **Azure IoT Central** tab and click `Setup`.

        ![Azure IoT Central extension](images/azure_central_extension.png "Azure IoT Central extension")

     3. Inside the tab:
          - paste the previously copied Azure IoT Central *Application URL*,
          - provide the API token and,
          - if needed, enter your *Device Provisioning Service hostname* (however, the default address provided is  sufficient in most cases).

        ![Setting up the Azure IoT Central extension](images/central_extension_setup.png "Setting up IoT Central extension")

          - use `Test connection` to see if the connection can be established correctly.

          - click `Save` to keep the setting.



