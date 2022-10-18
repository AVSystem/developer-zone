# B-U585I-IOT02A/BG96

Integrate your **B-U585I-IOT02A** Discovery kit board along with the default-provided **Quectel BG96** modem.

## Prerequisites

- The **STM32U585I-IOT02A/BG96** board with a USB cable.
- Installed **minicom** (for Linux) or RealTerm or PuTTy (for Windows) or other serial communication program.
- A user with access to the Coiote IoT Device Management platform.
- Optional: installed **STM32CubeIDE**.

## Prepare binaries
### Use an already built binary

To get the latest binary file and flash the board:

0. Go to [Anjay-freertos-client](https://github.com/AVSystem/Anjay-freertos-client/releases/).
0. Download the `Anjay-freertos-client-B-U585I-IOT02A-BG96.bin` file.
0. To flash the board, drag the downloaded `.bin` file to your **B-U585I-IOT02A** device which can be found in the **Devices and drives** section of **This PC** (if Windows is used).
0. You will see a blinking diode on your board. As soon as the diode stops blinking, the flashing is finished.

The board is now flashed: you can go to the [Connecting to the LwM2M Server](#connecting-to-the-lwm2m-server) step.

### Start developement using samples

!!! Note
    This step is optional. If you've gone through the [Use an already built binary](#use-an-already-built-binary) step, you can go to [Connecting to the LwM2M Server](#connecting-to-the-lwm2m-server) right away.

#### Step 1: Cloning the Anjay FreeRTOS client repository

Enter the command line interface on your machine and paste the following command:

   ```
   git clone --recursive https://github.com/AVSystem/Anjay-freertos-client
   ```

#### Step 2: Compiling the board

0. Connect the **STM32U585I-IOT02A** board to a USB port of your machine.
0. Go to the **STM32CubeIDE**.
0. Import the project cloned in the previous step to your workspace:
    - From the navigation bar, select **File** and click **Import**.
    - From the **General** list, select **Existing Projects into Workspace** and click **Next**.
    - In **Select root directory**, indicate the catalog containing the cloned Anjay freeRTOS client repository.
    - In the **Projects** field, select **Anjay-freertos-client-B-U585I-IOT02A-BG96** and click **Finish**.
    ![Import project](images/import.PNG "Import project")
0. In the Project Explorer, navigate to the **Anjay-freertos-client-B-U585I-IOT02A-BG96** project:
    - Right-click on the project name and select **Build Project**. The build should take less than one minute to complete.
    - After the build is finished, right-click on the project name, select **Run As** and click the **1 STM32 Cortex-M C/C++ Application** option.
        - In the **Launch Configuration Selection**, choose the **Anjay-freertos-client-B-U585I-IOT02A-BG96** option and click **OK**.
0. After the build and run steps are done, the board is now flashed and ready for next steps.

## Connecting to the LwM2M Server

To connect to Coiote IoT Device Management LwM2M Server, please register [here](https://eu.iot.avsystem.cloud).

!!! note
    If you use BG96-based configuration, you need to upgrade the modem firmware to at least the `BG96MAR02A08M1G` revision. Older versions may cause unexpected loss of connection.

To connect the board:

1. Log in to Coiote DM and from the left side menu, select **Device Inventory**.
2. In **Device Inventory**, click **Add device**.
3. Select the **Connect your LwM2M device directly via the Management server** tile.
       ![Add via Mgmt](images/mgmt_tile.png "Add via Mgmt")
    3. In the **Device credentials** step:
         - In the **Device ID** enter your board endpoint name, e.g. `test_device`.
             ![Device credentials step](images/add_mgmt_quick.png "Device credentials step")
         - In the **Security mode** section, select the **PSK (Pre-Shared Key)** mode:
              - In the **Key identity** field, type the same name as in the `Endpoint name` field
              - In the **Key** field, type the shared secret used in the device-server authentication.
    4. Click the **Add device** button and **Confirm** in the confirmation pop-up.
    5. In the **Connect your device** step, follow the next [section](#configuring-the-client) to run the client and connect it to the server.

## Configuring the Client

1. With the board still connected to a serial port interface, open a serial communication program.
2. Press the reset button located on the board. This should trigger the following prompt:

    ``Press any key in 3 seconds to enter config menu...``

3. Press any key, and in the configuration menu, change the default credentials to your data by following the instructions presented in the program, then save it.

    !!! tip
        LwM2M Server URI, endpoint name and other information you can be found in the **configuration** tab.

    ![Client configuration](images/config_menu1.png "Client configuration"){:style="float: left;margin-right: 1177px;margin-top: 17px;margin-bottom: 17px;"}

    !!! important
        APN (Access Point Name) is the name of a gateway between a GSM, GPRS, 3G and 4G mobile network and another computer network. If you use a built-in truphone eSIM card, change the APN to **iot.truphone.com**.

    !!! Note
        If you use an external eSIM card, you need to verify the APN used by your SIM card provider.

4. Go to Coiote DM to check if your device connected. Click **Next**, then **Go to Summary**, then **Finish**. You will see your Device Center view:

    ![Registered device](images/registered_device.png "Registered device")
