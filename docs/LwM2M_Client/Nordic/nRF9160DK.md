# nRF9160 DK

Integrate your Nordic nRF9160 DK board.

## Prerequisites

- The nRF9160 DK board with a USB cable.
- Installed **minicom** (for Linux) or RealTerm or PuTTy (for Windows) or other serial communication program.
- Installed **nRF Connect** from [Nordic Semiconductor page](https://www.nordicsemi.com/Products/Development-tools/nrf-connect-for-desktop).
- A user with access to the {{ coiote_long_name }}.


## Prepare binaries
### Use an already built binary

To get the latest binary file and flash the board:

{{ zephyr_repository_step }}
{{ nRF9160DK_binary_step }}
{{ nRF9160DK_updating_dk_firmware_step}}
{{ nRF9160DK_flash_downloaded_binary_step }}

Go to the [Connect to the LwM2M Server](#connect-to-the-lwm2m-server).

### Start development using samples
!!! Note
    This step is optional. If you've gone through the [Use an already built binary](#use-an-already-built-binary) step, you can jump to [Connect to the LwM2M Server](#connect-to-the-lwm2m-server).


#### Part 1: Getting Zephyr and Python dependencies

To get the Zephyr SDK and dependencies follow the first 4 steps of the instruction provided by [the Zephyr Project](https://docs.zephyrproject.org/latest/getting_started/index.html) (from the set up the OS to installing the Zephyr SDK).

#### Part 2: Cloning the Anjay zephyr repository

Enter the command line interface on your machine and change the directory to the one where you set up the Zephyr project (usually, it's `~/zephyrproject`), then paste and run the following command:

   ```
   git clone https://github.com/AVSystem/Anjay-zephyr-client
   ```

#### Part 3: Compiling the example

0. Connect the nRF9160 DK board to a USB port of your machine.
0. Set West manifest path to `Anjay-zephyr-client/demo`, manifest file to `west-nrf.yml`, and do `west update`:

    ```
    west config manifest.path Anjay-zephyr-client/demo
    west config manifest.file west-nrf.yml
    west update
    ```

0. Compile and flash the project for **nRF9160 DK**:


    ```
    cd Anjay-zephyr-client/demo
    west build -b nrf9160dk/nrf9160/ns
    west flash
    ```

## Connect to the LwM2M Server

To connect to {{ coiote_long_name }}, please register at [{{ coiote_site_link }}]({{ coiote_site_link }}).

To connect the board, log in to the platform and follow [onboarding guide]({{ coiote_device_onboarding_link }}).

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

0. Check your default credentials by following the instructions in the program:
    ![Anjay configuration](images/anjay_config.png "Anjay configuration"){:style="float: left;margin-right: 1177px; margin-top: 7px; margin-bottom: 17px;"}

    !!! note
        Use the `anjay stop` command to stop LwM2M Client if you are going to change credentials.

    If your default credentials are different from device credentials provided in {{ coiote_short_name }}, change them using the `anjay config set <possible_option> <value>` command.
    <br/>
    ![Anjay set configuration](images/anjay_config_set.PNG "Anjay set configuration"){:style="float: left;margin-right: 1177px;margin-top: 7px; margin-bottom: 17px;"}


0. Use the `anjay start` command to run the Client.
0. Go to {{ coiote_short_name }} to check if your device is connected. Click **Next**, then **Go to Summary**, then **Finish**. You will see your Device Center view:
    ![Registered device](images/registered_device.png "Registered device")

!!! note
    **nRF9160 DK** uses the same radio for GPS and LTE connectivity. GPS signal is
    caught between LTE transmissions and in case GPS "cold" fix acquisition takes
    too much time, Anjay turns off LTE transmissions for the time of fix acquisition.
    It can be seen by the following warning: `gps_nrf: GPS was interrupted multiple
    times by the LTE modem when producing a fix`. Anjay is notified by it, enters
    offline mode and reconnects when the first fix is acquired and LTE is enabled back.


## Next steps

If you want to develop your own LwM2M-enabled application based on Nordic nRF9160 DK, check [Anjay-zephyr-client](https://github.com/AVSystem/Anjay-zephyr-client) and start prototyping!
