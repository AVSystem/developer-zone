# Exercise 2A: Analyze the Mandatory Objects

In this exercise, we will look into the implementation of the mandatory LwM2M Objects using the Anjay LwM2M Client. To connect the Raspberry Pi to a LwM2M Server and handle incoming packets, three objects need to be implemented:

* [LwM2M Security](https://devtoolkit.openmobilealliance.org/OEditor/LWMOView?url=https%3A%2F%2Fraw.githubusercontent.com%2FOpenMobileAlliance%2Flwm2m-registry%2Fprod%2Fversion_history%2F0-1_1.xml) (Object `/0`)
* [LwM2M Server](https://devtoolkit.openmobilealliance.org/OEditor/LWMOView?url=https%3A%2F%2Fraw.githubusercontent.com%2FOpenMobileAlliance%2Flwm2m-registry%2Fprod%2Fversion_history%2F1-1_1.xml) (Object `/1`)
* [LwM2M Device](https://devtoolkit.openmobilealliance.org/OEditor/LWMOView?url=https%3A%2F%2Fraw.githubusercontent.com%2FOpenMobileAlliance%2Flwm2m-registry%2Fprod%2Fversion_history%2F3-1_1.xml) (Object `/3`)

Fortunately, Anjay provides these Objects in the form of pre-implemented modules which can be easily used.

---

In this exercise, we analyze the application “[Mandatory Objects](https://github.com/AVSystem/Anjay-pico-client/tree/master/mandatory_objects)” which we built in the exercise of **module 1**. This application registers the device to the {{ coiote_long_name }} and periodically sends status messages.

This exercise describes the functionalities of the application that uses the NoSec security mode. In the next exercise we will implement a security mode.

## Prerequisites

* A Raspberry Pi Pico W board with a USB cable.
* Completed [exercise 1](../academy/exercise1.md) from module 1.
* An active [{{ coiote_short_name }}]({{ coiote_site_link }}/) user account.


## Introduction to Mandatory Objects

!!! note
    This exercise only describes functions from the **Anjay-pico-client/mandatory_objects** application necessary to run LwM2M Client. To create the Security Object with a different secure mode go to exercise 2B.

Go to your local **Anjay-pico-client/mandatory_objects** directory and open the **main.c** file in a text editor (e.g. VS Code).

### Security Object /0
In the `setup_security_object()` function the security configurations are defined.


The Resources which are configured for the Security Object are:

- **Resource `/0/x/10`**: **Server Short ID** (ssid). This Resource explicitly identifies the LwM2M Server. By default, this is set to 1. Additional values can be added when more LwM2M Security Objects are configured.
- **Resource `/0/x/0`**: **LwM2M Server URI**. This Resource defines the address of the LwM2M Server.
- **Resource `/0/x/2`**: **Security Mode**. This Resource defines the security mode. In this application, the NoSec (no security) mode is used. By changing this parameter, other security modes can be used, including Pre-Shared Key mode and Certificate mode.

<p style="text-align: center;">main.c</p>
```
// Installs Security Object and adds an instance of it.
// An instance of Security Object provides information needed to connect // to LwM2M server.
static int setup_security_object() {
    if (anjay_security_object_install(g_anjay)) {
        return -1;
    }
    const anjay_security_instance_t security_instance = {
        .ssid = 1,
        .server_uri = "coap://eu.iot.avsystem.cloud:5683",
        .security_mode = ANJAY_SECURITY_NOSEC
    };
    // Anjay will assign Instance ID automatically
    anjay_iid_t security_instance_id = ANJAY_ID_INVALID;
    if (anjay_security_object_add_instance(g_anjay, &security_instance,
                                        &security_instance_id)) {
        return -1;
    }
    return 0;
}
```


### Server Object /1
The Server Object is defined in the `setup_server_object()` function which can be found in the **main.c** file. Within this function, the required credentials for connecting to a LwM2M Server are defined.

!!! Note
    The Security and Server configurations are linked by the Short Server ID Resource. That is why we need to ensure the SSIDs in both the `setup_server_object()` and `setup_security_object()` match.

The Resources which are configured for the Server Object are:

- **Resource `/1/x/0`**: **Short Server ID** (ssid). This Resource explicitly identifies the LwM2M Server. By default, this is set to 1. Additional values can be added when more LwM2M Server are configured.
- **Resource `/1/x/1`**: **Lifetime** - This Resource shows the time for how long the server deems the registration valid which means that the Client (our device) should send an Update message to the server before Lifetime expires. In this application, the Client sends an update message at least every 50 seconds.
- **Resource `/1/x/2`**: **Default Min Period** (pmin) - If this Resource is set, notifications will never be sent more than once every pmin seconds, if this parameter isn't configured on a particular Observation. In this application, we use “-1” which means the Default Minimum Period is disabled.
- **Resource `/1/x/3`**: **Default Max Period** (pmax) -  If this Resource is set, notifications will always be sent at least once every pmax seconds, if this parameter isn't configured on a particular Observation, even if the value did not change. In this application, we use “-1” which means the Default Maximum Period is disabled.

!!! Note
    **Resource `/1/x/2`**: **Default Min Period** and **Resource `/1/x/3`**: **Default Max Period** show usage of LwM2M Notifications which will be described in the next module: **Module 3 - Building a LwM2M application/device firmware**.

- **Resource `/1/x/5`**: **Disable Timeout** - This Resource controls the time period after which, the LwM2M Client will re-register to the server. In this application, we use “-1” which means the Disable Timeout is disabled. When this Resource is not set, the default timeout value of 86400 seconds (1 day) is used.
- **Resource `/1/x/7`**: **Binding** - This Resource sets the preferred transport method. In this application, it is set to UDP. The LwM2M standard provides the option to set the binding to TCP, SMS, LoRaWAN, CIoT, or WebSockets.

<p style="text-align: center;">main.c</p>
```
// Installs Server Object and adds an instance of it.
// An instance of Server Object provides the data related to a LwM2M
// Server.
static int setup_server_object() {
    if (anjay_server_object_install(g_anjay)) {
        return -1;
    }
    const anjay_server_instance_t server_instance = {
        .ssid = 1,
        .lifetime = 50,
        .default_min_period = -1,
        .default_max_period = -1,
        .disable_timeout = -1,
        .binding = "U"
    };
    // Anjay will assign Instance ID automatically
    anjay_iid_t server_instance_id = ANJAY_ID_INVALID;
    if (anjay_server_object_add_instance(g_anjay, &server_instance,
                                        &server_instance_id)) {
        return -1;
    }
    return 0;
}
```


## Device Object /3

The LwM2M Object can be used to define device-related details such as:

- **Resource `/3/x/0`**: **Manufacturer**
- **Resource `/3/x/1`**: **Model Number**
- **Resource `/3/x/2`**: **Serial Number**
- **Resource `/3/x/3`**: **Firmware Version**

It is also used for invoking a device **Resource `/3/x/4`**: **Reboot** or **Resource `/3/x/5`**: **Factory Reset** .

!!! Note
    Although the LwM2M specifications define the Device Object as mandatory, the {{ coiote_long_name }} works without creating this Object. In module 3 (client-side operations) we are covering the creation of the Device Object.

## Initiate Objects


After the `setup_server_object()` and the `setup_security_object()` have been added to the **main.c** file, these Objects need to be initiated using `anjay_task()`. This is done using the code below.

<p style="text-align: center;">main.c</p>
```

void anjay_task(__unused void *params) {
    init_wifi();

    anjay_configuration_t config = {
        .endpoint_name = ENDPOINT_NAME,
        .in_buffer_size = 2048,
        .out_buffer_size = 2048,
        .msg_cache_size = 2048,
    };

    if (!(g_anjay = anjay_new(&config))) {
        avs_log(main, ERROR, "Could not create Anjay object");
        exit(1);
    }

    // Server and Security Objects are initiated here:
    if (setup_security_object() || setup_server_object()) {
        avs_log(main, ERROR, "Failed to initialize basic objects");
        exit(1);
    }

    main_loop();
    anjay_delete(g_anjay);
}
```

Did you review all of the code snippets in the Mandatory Objects application? **Nice work! You now understand the basics of building an LwM2M application.** 🎉

!!! important "Provide your feedback"

    We're constantly working on improving the LwM2M Academy. Please share with us your feedback about this module so we can create an even better learning experience.

    [Feedback form](https://forms.gle/UAFLJs9LJocAeger9){: .md-button .md-button--big }
