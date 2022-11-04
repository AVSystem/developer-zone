# STM32L496G-DISCO/BG96

Integrate your P-L496G-CELL02 Discovery kit board along with the default-provided Quectel BG96 modem.

## Prerequisites

- The STM32L496G-DISCO/BG96 board with a USB cable.
- Installed **STM32CubeIDE**.
- Installed **minicom** (for Linux) or RealTerm or PuTTy (for Windows) or other serial communication program.
- A user with access to the Coiote IoT Device Management platform.

## Prepare binaries
### Use an already built binary

To get the latest binary file and flash the board:

0. Go to [Anjay-freertos-client](https://github.com/AVSystem/Anjay-freertos-client/releases/).
0. Download the `Anjay-freertos-client-STM32L496G-BG96.bin` file.
0. To flash the board, open your **File manager** and drag the downloaded `.bin` file to your **DIS_L496ZG** external device.
0. You will see a blinking diode on your board. The diode will stop blinking as soon as the flashing is finished.

The board is now flashed: you can go to the [Connecting to the LwM2M Server](#connecting-to-the-lwm2m-server) step.

### Start development using samples
!!! Note
    This step is optional. If you've gone through the [Use an already built binary](#use-an-already-built-binary) step, you can go to [Connecting to the LwM2M Server](#connecting-to-the-lwm2m-server) right away.

#### Part 1: Cloning the Anjay freeRTOS client repository

Enter the command line interface on your machine and paste the following command:

   ```
   git clone --recursive https://github.com/AVSystem/Anjay-freertos-client
   ```

#### Part 2: Compiling the board

0. Connect the STM32L496G-DISCO board to a USB port of your machine.
0. Go to the STM32CubeIDE.
0. Import the project cloned in the previous step to your workspace:
    - From the navigation bar, select **File** and click **Import**.
    - From the **General** list, select **Existing Projects into Workspace** and click **Next**.
    - In **Select root directory**, indicate the catalog containing the cloned Anjay freeRTOS client repository.
    - In the **Projects** field, select **Anjay-freertos-client-STM32L496G-BG96** and click **Finish**.
    ![Import project](images/import.PNG "Import project")
0. In the Project Explorer, navigate to the **Anjay-freertos-client-STM32L496G-BG96** project:
    - Right-click on the project name and select **Build Project**. The build should take less than one minute to complete.
    - After the build is finished, right-click on the project name, select **Run As** and click the **1 STM32 Cortex-M C/C++ Application** option.
        - In the **Lauch Configuration Selection**, choose the **Anjay-freertos-client-STM32L496G-BG96** option and click **OK**.
0. After the build and run are complete, the board is now compiled.

## Connecting to the LwM2M Server

To connect to Coiote IoT Device Management LwM2M Server, please register at [https://eu.iot.avsystem.cloud](https://eu.iot.avsystem.cloud).

!!! note
    If you use BG96-based configuration, you must upgrade the firmware of the modem to at least the `BG96MAR02A08M1G` revision. Older versions may cause unexpected loss of connection.

!!! note
     To upgrade this firmware please download these .zip files:
     <br />
     - [Pack_BG96MAR02A08M1G_01.012.01.012](resources/Pack_BG96MAR02A08M1G_01.012.01.012.zip "Pack_BG96MAR02A08M1G_01.012.01.012"),
     <br />
     - [Quectel_LTE_Windows_USB_Driver_V2.0](resources/Quectel_LTE_Windows_USB_Driver_V2.0.zip "Quectel_LTE_Windows_USB_Driver_V2.10"),
     <br />
     - [QFlash_V4.10](resources/QFlash_V4.10.zip "QFlash_V4.10").
     <br />
     In Pack_BG96MAR02A08M1G_01.012.01.012 you will find step-by-step instruction. Step 2 and step 4 in this instruction doesn't work. For that reason you will need to download Quectel_LTE_Windows_USB_Driver_V2.0 file, as a required file for step 2, and QFlash_V4.10 file, as a required file for step 4.

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
    5. In the **Connect your device** step, follow the next [section](#configuring-the-client) to run the client and connect it to the server.

## Configuring the Client

0. With the board still connected to a serial port interface, open a serial communication program.
0. Press the reset button located on the board. This should trigger the following prompt:

    ``Press any key in 3 seconds to enter config menu...``

0. Press any key and in the configuration menu, change the default credentials to your data by following the instructions presented in the program and save it.
   ![Client configuration](images/config_menu1.png "Client configuration"){:style="float: left;margin-right: 1177px;margin-top: 17px;margin-bottom: 17px;"}

    !!! important
        APN (Access Point Name) is the name of a gateway between a GSM, GPRS, 3G and 4G mobile network and another computer network. If you use built-in eSIM card truphone then change APN to **iot.truphone.com**.

    !!! Note
        If you use external eSIM card you have to check APN used by SIM card's provider.

0. Go to Coiote DM to check if your device connected. Click **Next**, then **Go to Summary**, then **Finish**. You will see your Device Center view:

![Registered device](images/registered_device.png "Registered device")

!!! tip
    LwM2M Server URI, endpoint name and other information can be found in the **Configuration** tab.
