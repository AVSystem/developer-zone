# B-L475E-IOT01A

Integrate your B-L475E-IOT01A Discovery kit board.

## Prerequisites

- The B-L475E-IOT01A board with a USB cable.
- Installed **minicom** (for Linux) or RealTerm or PuTTy (for Windows) or other serial communication program.
- Installed **ST-Link** or **OpenOCD** debugger.
- A user with access to the Coiote IoT Device Management platform and appropriate permissions.

## Prepare binaries
### Use an already built binary

To get the latest binaries, navigate to [Anjay-zephyr-client](https://github.com/AVSystem/Anjay-zephyr-client/releases).

To flash the board, open **Windows Explorer**, drag the .bin file to B-L475E-IOT01A device which you can find in **devices and drives** part in **This PC**. You will see the blinking diode on your board. As soon as the diode stops blinking, the flashing has finished.

Now you can go to the [Connecting to the LwM2M Server part ](#connecting-to-the-lwm2m-server)


### Start developement using samples
!!! Note
    This part is optional, if you go through the [use an already built binary](#use-an-already-built-binary) part you can go to the [Connecting to the LwM2M Server](#connecting-to-the-lwm2m-server).

#### Step 1: Getting Zephyr and Python dependencies

To get the Zephyr SDK and dependencies follow the first 4 steps of the instruction provided by [the Zephyr Project](https://docs.zephyrproject.org/latest/getting_started/index.html).

#### Step 2: Cloning the Anjay zephyr repository

Enter the command line interface on your machine, then paste and run the following command:

   ```
   git clone https://github.com/AVSystem/Anjay-zephyr-client
   ```

#### Step 3: Compiling the board

0. Connect the B-L475E-IOT01A board to a USB port of your machine.
0. Set West manifest path to `Anjay-zephyr-client/demo`, and manifest file to `west.yml` and do `west update`:

    ```
    west config manifest.path Anjay-zephyr-client/demo
    west config manifest.file west.yml
    west update
    ```

0. Compile the project for **B-L475E-IOT01A** using `west build -b disco_l475_iot1` in the demo directory.
0. Flash the board using `west flash`.

## Connecting to the LwM2M Server

To connect to Coiote IoT Device Management LwM2M Server, please register at https://eu.iot.avsystem.cloud/.

To connect the board:

1. Log in to Coiote DM and from the left side menu, select **Device Inventory**.
2. In **Device Inventory**, click **Add device**.
3. Select the **Connect your LwM2M device directly via the Management server** tile.
       ![Add via Mgmt](images/mgmt_tile.png "Add via Mgmt")
    3. In the **Device credentials** step:
         - In the **Device ID** enter your board endpoint name, e.g. `test_device`.
             ![Device credentials step](images/add_mgmt_quick.png "Device credentials step")
         - In the **Security mode** section, select the **PSK (Pre-Shared Key)** mode:
              - In the **Key identity** field, type the same name as in the `Endpoint name` field.
              - In the **Key** field, type the shared secret used in the device-server authentication.
    4. Click the **Add device** button and **Confirm** in the confirmation pop-up.
    5. In the **Connect your device** step, wait for the board to connect.
    6. Click **Go to device** to see your added device dashboard.


## Configuring the Client

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
0. After changing credentials go to Coiote DM and refresh data:
    ![Registered device](images/registered_device.png "Registered device")
