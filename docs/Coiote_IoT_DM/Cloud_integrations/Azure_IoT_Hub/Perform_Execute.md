# Perform LwM2M Execute

This section describes how to perform a LwM2M EXECUTE operation in your Azure IoT Hub.

An EXECUTE operation lets you perform operations on IoT devices such as a reboot or a firmware upgrade, only on individual resources.

In this section, you learn how to:

  * Perform a LwM2M EXECUTE operation on a resource

## Prerequisites

1. An active Azure IoT Hub with hub owner access permissions.
2. A {{ coiote_short_name }} user account with permissions to use the integration extension.
3. A device group created in {{ coiote_short_name }}.
4. [A configured extension between {{ coiote_short_name }} and Azure Iot Hub](https://{{coiote_server}}/doc/user/integrations/how-to-guides/hyperscaler-integrations/azure-iot-hub/integrate-with-azure-iot-hub/).
5. [A configured integration template in {{ coiote_short_name }}, assigned to the device group](https://{{coiote_server}}/doc/user/integrations/how-to-guides/hyperscaler-integrations/configure-integration-templates/).
5. [A connected device](https://{{coiote_server}}/doc/user/getting-started/onboard-your-first-device/).

## Perform EXECUTE

Let’s perform an EXECUTE operation on the **Factory Reset** resource with ID **3/0/5**.

!!! note
    From the Azure IoT integration standpoint, **Factory Reset** is interpreted as a *Command*. Read more about how LwM2M data model is mapped to Azure IoT Hub mechanisms in [LwM2M mappings - Azure IoT Hub](https://{{coiote_server}}/doc/user/integrations/topic-guides/lwm2m-mappings-azure-iot-hub/) in the Coiote DM User Documentation.

1. In your Azure IoT Hub account, go to **Devices** from the left pane.

2. Click on the device and then go to **Direct method**.

    ![Direct method in Azure IoT Hub](images/dirmethod_azure.png "Direct method tab")

3. As **Method name**, type `execute`.

4. In **Payload**, paste the following snippet and click **Invoke method**:

      ```
      {
         "path": "3.0.5"
      }
      ```

    ![Direct method in Azure IoT Hub](images/execute_azure.png "Direct method - execute")

    !!! note
    The exact LwM2M path of the **Factory reset** resource depends on the LwM2M client used and may vary slightly, e.g. in the object instance number: **3/1/5**. For the purpose of this tutorial, the Anjay LwM2M Client is used. If needed, modify the snippet according to your case.

## See value changes in Azure IoT Hub

The result of the EXECUTE operation is displayed in the same **Direct method** tab. Scroll down to the **Result** field and check the HTTP code. The following result means that the device has executed the resource successfully:

```
{"status":200,"payload":"Executed `3.0.5` successfully"}
```
