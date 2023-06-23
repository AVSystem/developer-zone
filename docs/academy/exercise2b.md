#Exercise 2B: Implement Pre-Shared Key Security Mode

In this exercise, we will change the security mode from **No-Sec** to **Pre-Shared Key** (PSK). In this mode, communication is symmetrically encrypted and authenticated using the same secret key (password), shared between the server and the client.

## Prerequisites

* A Raspberry Pi Pico W board with a USB cable.
* Completed [exercise 1](../academy/exercise1.md) from module 1.
* Completed [exercise 2A](../academy/exercise2a.md) from module 2.
* Installed minicom (for Linux), RealTerm, PuTTy (for Windows), or another serial communication program.
* An active [Coiote IoT DM](https://eu.iot.avsystem.cloud/) user account.

## Connect to the LwM2M Server

For LwM2M Servers like [Coiote IoT DM](https://www.avsystem.com/coiote-iot-device-management-platform/), you must change the server-side configuration if you previously used NoSec connectivity for the same endpoint name.

The simplest solution is to edit the Connection parameters on the Configuration page. Follow the next steps to change the parameters and set them to Pre-Shared Key mode.

### Change connection parameters for the Raspberry Pico W in Coiote DM

0. Log in to Coiote DM: [https://eu.iot.avsystem.cloud](https://eu.iot.avsystem.cloud).
0. Select **Device Inventory** from the left-side menu.
0. In Device Inventory, go to your created device. Right now you are on the Overview page. Go to the Configuration page and click the right pencil icon on the Connection parameters panel.

    ![Device Inventory](images/device_no_sec.png)

0. In the **Connection parameters** step:

    ![Connection parameters](images/parameters_configuration.png)

    - In the **Security mode** section, select the **Pre-Shared Key** mode:
        - In the **Key identity** field, it’s recommended to provide the same value as in the **Endpoint name** field. During the compilation step, you will provide the *PSK_IDENTITY* which must have the same value as **Key identity**.
        - In the **Key field**, type the shared secret used in the device-server authentication. During the compilation step, you will provide the *PSK_KEY* which must have the same value as the **Key**.

!!! Note
    Nowadays it’s easy to guess simple human-generated passwords. Generating a password using a combination of alphanumeric characters and special symbols ensures its security. Avoid putting your personal information and generate a combination of keys to help you maximize safety and security.

Click the **Save** button and confirm the changes.

## Configure credentials in application sources
Let’s get started by going to the **Anjay-pico-client** directory and creating a new directory called **lwm2m_academy_secure_communication**.

!!! Important
    Copy and paste the ***main.c*** and ***CMakeLists.txt*** files from the **Anjay-pico-client/mandatory_objects** directory into the **Anjay-pico-client/lwm2m_academy_secure_communication** directory.

Open the **main.c** file in a code editor (e.g. VS Code).

In this file, we need to modify the *setup_security_object()* function to change Anjay’s security settings and add the configuration of PSK-based encryption. This can be done using the code below - the highlighted part indicates what changes were made to enable PSK mode.

```
    static int setup_security_object(anjay_t *anjay) {
        if (anjay_security_object_install(anjay)) {
            return -1;
        }

        static const char psk_identity[] = PSK_IDENTITY;
        static const char psk_key[] = PSK_KEY;

        const anjay_security_instance_t security_instance = {
            .ssid = 1,
            .server_uri = "coaps://eu.iot.avsystem.cloud:5684",
            .security_mode = ANJAY_SECURITY_PSK,
            .public_cert_or_psk_identity = (const uint8_t *) psk_identity,
            .public_cert_or_psk_identity_size = strlen(psk_identity),
            .private_cert_or_psk_key = (const uint8_t *) psk_key,
            .private_cert_or_psk_key_size = strlen(psk_key)
        };

        anjay_iid_t security_instance_id = ANJAY_ID_INVALID;
        if (anjay_security_object_add_instance(anjay, &security_instance,
                                            &security_instance_id)) {
            return -1;
        }
        return 0;
    }
```

## Configure PSK Identity and Pre-Shared Key
After updating the *setup_security_object()* function in the **main.c** file, it is time to describe the most important variables to configure the **PSK** mode.

- **PSK Identity** (*PSK_IDENTITY*) is the name by which the device identifies itself during the DTLS handshake. It is recommended to use the endpoint name as the Key identity.
- **PSK Key** (*PSK_KEY*) is the shared secret (password) the device uses for server connections in PSK mode. You must enter this PSK Key in plain text.
- **Server URI** (*server_uri*) points to the LwM2M Server. Note that the URI port has changed from 5683 to 5684.


!!! Note
    The complete code for a similar example targeting desktop platforms can be found in the secure_communication subdirectory of the Anjay-pico-client project repository.

## Recompile the application and flash the board
To recompile the application, go to the **Anjay-pico-client/build** directory.

If you’re using **Linux** or **Mac**, run the following command:
```
    cmake -DCMAKE_BUILD_TYPE=Debug -DWIFI_SSID="<ssid>" -DWIFI_PASSWORD="<pass>" -DENDPOINT_NAME="<endpoint_name>" -DPSK_IDENTITY="<identity>" -DPSK_KEY="<psk>" ..
```

If you’re using ***Windows***, run the following command:
```
    cmake -DCMAKE_BUILD_TYPE=Debug -DWIFI_SSID="<ssid>" -DWIFI_PASSWORD="<pass>" -DENDPOINT_NAME="<endpoint_name>" -DPSK_IDENTITY="<identity>" -DPSK_KEY="<psk>" .. -G "MinGW Makefiles"
```
Run the following command in the build directory
```
    cmake --build . -j
```

Program your board using the bootloader. Press and hold the **BOOTSEL** button while connecting the device through a USB cable - it should be recognized as a Mass Storage device.

In the **build/mandatory_objects** directory, you will find the *.uf2* file which has our added changes.

Copy the *mandatory_objects.uf2* file to the Mass Storage device directory, and wait until the process finishes - copying the firmware image may take a while

## Check the logs
With the board still connected to your PC, open a serial communication program. This will help you to check if everything is working correctly.
!!! Note
    To open the serial port interface you need to check the name of the connected device and choose the proper baud rate value:

    - Linux usually uses **/dev/ttyACM<number>** or **/dev/ttyUSB<number>** for a serial port device name.
    - Windows uses **COM<number>** for a serial port device name.
    - macOS uses **/dev/tty.usbmodem<number>** for a serial port device name.


It’s important to set the correct baud rate, too. The baud rate is the number of symbols transferred in a communication channel per second and must be the same both on the serial communication program and on the board. The most common baud rates for serial ports are 9600 and 115200.

!!! Example
    In the serial port context, "115200 baud" means the serial port sends data at 115200 bits per second.

In exercises throughout the academy, we use 115200 baud, since it’s the default value used by Raspberry Pi Pico W.

![Check the logs in serial communication program](images/logs.PNG)

!!! Note
    Those logs may help figure out why the device didn't connect to the server (e.g. because of the mistake in writing the Wi-Fi password in the `cmake` command).


If all went well and logs show **registration successfully updated**, you can go to Coiote where the Registration status should show **Registered**.

![Device in Pre-Shared Key mode Registered](images/pre-shared.png)


Can you see **Registered** in registration status and the tag **Pre-Shared Key** in the bottom-left corner, under Security mode?
If yes, well done!  👏 👏

