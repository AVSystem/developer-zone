# Thingy:91

Integrate your Nordic Thingy:91 board.

## Prerequisites

- The Thingy:91 board with a USB cable.
- Installed **minicom** (for Linux) or RealTerm or PuTTy (for Windows) or other serial communication program.
- A user with access to the Coiote IoT Device Management platform and appropriate permissions.

## Prepare binaries
### Use an already built binary

To get the latest binaries, navigate to [Anjay-zephyr-client releases](https://github.com/AVSystem/Anjay-zephyr-client/releases)
and download one of the attached .hex files.

In this case we are going to use the `demo` application, so find the `demo_thingy91_app_signed.hex` file and go to the [flashing part](#flash-the-binaries) of the tutorial.

### Start developement using samples
!!! Note
    This steps are optional, if you go through the [use an already built binary](#use-an-already-built-binary) part, you can jump to the [flashing part](#flash-the-binaries) of the tutorial.


#### Step 1: Get Zephyr and Python dependencies

To get the Zephyr SDK and dependencies follow the first 4 steps of the instruction provided by [the Zephyr Project](https://docs.zephyrproject.org/latest/getting_started/index.html).

#### Step 2: Clone the Anjay Zephyr repository

Enter the command line interface on your machine, then paste and run the following command:

   ```
   git clone https://github.com/AVSystem/Anjay-zephyr-client
   ```

#### Step 3: Compile the example

0. Connect the Thingy:91 board to a USB port of your machine.
0. Set West manifest path to `Anjay-zephyr-client/demo`, manifest file to `west-nrf.yml`, and do `west update`:

    ```
    west config manifest.path Anjay-zephyr-client/demo
    west config manifest.file west-nrf.yml
    west update
    ```

0. Compile the project for **Thingy:91** using `west build -b thingy91_nrf9160ns` in the demo directory.
0. Find the `app_signed.hex` file under the `build/zephyr` directory in the project folder.

## Flash the binaries
To program the board, go through the process of **flashing Thingy:91**. Use the nRF Connect Programmer with the downloaded `.hex` file and follow the [program the nRF9160 SiP application](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/ug_thingy91_gsg.html#program-the-nrf9160-sip-application) section.


After successful flashing, reset the board and go to the next step.

## Connect to the LwM2M Server

To connect to Coiote IoT Device Management LwM2M Server, please register at [https://eu.iot.avsystem.cloud](https://eu.iot.avsystem.cloud/).

To connect the board:

0. Log in to Coiote DM and from the left side menu, select **Device Inventory**.
0. In **Device Inventory**, click **Add device**.
0. Select the **Connect your LwM2M device directly via the Management server** tile.
    ![Add via Mgmt](images/mgmt_tile.png "Add via Mgmt")
0. In the **Device credentials** step:
     - In the **Endpoint name** field, enter your board endpoint name e.g. `test_device` (remember to set the same name in the [next section](#configure-the-client)).
         ![Device credentials step](images/add_mgmt_quick.png "Device credentials step")
     - In the **Security mode** section, select the **Pre-Shared Key** mode:
         - In the **Key identity** field, type the same name as in the `Endpoint name` field.
         - In the **Key** field, type the shared secret used in the device-server authentication.

        !!! Note
            This is your own password which you will need in the next steps.

0. Click the **Add device** button and **Confirm** in the confirmation pop-up.
0. While in the **Connect your device** step, follow the [next section](#configure-the-client) to run the client and connect it to the server.

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

0. Optionally, change the default credentials by following the instructions in the program.
    ![Anjay configuration](images/anjay_config.png "Anjay configuration")
0. Use the `anjay start` command to run the Client.
0. In Coiote DM, click **Go to device** to see if your device connected successfully.
    ![Registered device](images/registered_device.png "Registered device")
