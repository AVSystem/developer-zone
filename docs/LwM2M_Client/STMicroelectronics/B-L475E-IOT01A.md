# B-L475E-IOT01A

Integrate your B-L475E-IOT01A Discovery kit board.

## Prerequisites

- The B-L475E-IOT01A board with a USB cable.
- Installed **minicom** (for Linux) or RealTerm or PuTTy (for Windows) or other serial communication program.
- Installed **ST-Link** or **OpenOCD** debugger.
- A user with access to the {{ coiote_long_name }}.

## Prepare Anjay client application
### Use an already built binary

To get the latest binary file and flash it to the board:

0. Go to [Anjay-zephyr-client](https://github.com/AVSystem/Anjay-zephyr-client/releases).
0. Download the `demo_B-L475E-IOT01A1_merged.bin` file.
0. To flash the board, open your **File manager** and drag the downloaded `.bin` file to your **DIS_L4IOT** external device.
0. You will see a blinking diode on your board. The diode will stop blinking as soon as the flashing is finished.

### Start development using samples
!!! Note
    This step is optional. If you've gone through the [Use an already built binary](#use-an-already-built-binary) step, you can jump to [Connect to the LwM2M Server](#connect-to-the-lwm2m-server).

#### Part 1: Get Zephyr and Python dependencies

To get the Zephyr SDK and dependencies follow the first 4 steps of the instruction provided by [the Zephyr Project](https://docs.zephyrproject.org/latest/getting_started/index.html).

#### Part 2: Clone the Anjay zephyr repository

Enter the command line interface on your machine, then paste and run the following command:

   ```
   git clone https://github.com/AVSystem/Anjay-zephyr-client
   ```

#### Part 3: Build binary and flash the board

0. Connect the B-L475E-IOT01A board to a USB port of your machine.
0. Set West manifest path to `Anjay-zephyr-client/demo`, and manifest file to `west.yml` and do `west update`:

    ```
    west config manifest.path Anjay-zephyr-client/demo
    west config manifest.file west.yml
    west update
    ```

0. Compile the project for **B-L475E-IOT01A** using `west build -b disco_l475_iot1 --sysbuild` in the demo directory.
0. Flash the board using `west flash`.

## Connect to the LwM2M Server

To connect to {{ coiote_long_name }}, please register at [{{ coiote_site_link }}]({{ coiote_site_link }}).

To connect the board, log in to the platform and follow [onboarding guide]({{ coiote_device_onboarding_link }}).

## Configure the Client

0. With the board still connected to a serial port interface, open your serial communication program.
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

0. Check your default credentials by following the instructions in the program:
    ![Anjay configuration](images/anjay_config.png "Anjay configuration"){:style="float: left;margin-right: 1177px; margin-top: 7px; margin-bottom: 17px;"}

    !!! note
        Use the `anjay stop` command to stop LwM2M Client and change credentials.

    If your default credentials are different from device credentials provided in {{ coiote_short_name }}, change them using the `anjay config set <possible_option> <value>` command.
    <br/>
    ![Anjay set configuration](images/anjay_config_set.PNG "Anjay set configuration"){:style="float: left;margin-right: 1177px;margin-top: 7px; margin-bottom: 17px;"}

0. Use the `anjay start` command to run the Client.
0. Go to {{ coiote_short_name }} to check if your device is connected. Click **Next**, then **Go to Summary**, then **Finish**. You will see your Device Center view:

![Registered device](images/registered_device.png "Registered device")

!!! tip
    LwM2M Server URI, endpoint name and other information can be found in the **Configuration** tab.

## Next steps

If you want to develop your own LwM2M-enabled application based on STM32 B-L475E-IOT01A, check [Anjay-zephyr-client](https://github.com/AVSystem/Anjay-zephyr-client) and start prototyping!
