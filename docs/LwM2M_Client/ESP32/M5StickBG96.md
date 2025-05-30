# M5StickC with BG96

Integrate your ESP32-based device with Quectel BG96 module to manage it via {{ coiote_short_name }}.

## Prerequisites
- An M5StickC device.
- A BG96 module with internet connection (it is strongly recommended to have a BG96 with firmware version BG96MAR03A06M1G).
- Installed ESP-IDF and dependencies (installation steps 1-4 from [ESP32 official documentation](https://docs.espressif.com/projects/esp-idf/en/v4.4/esp32/get-started/index.html)). Supported ESP-IDF version is v4.4.
- A user with access to the [{{ coiote_long_name }}]({{ coiote_site_link }}).

## Step 1: Prepare project
0. Create a project directory for the integration.
0. Open a command line interface and run `git clone https://github.com/AVSystem/Anjay-esp32-client --recursive`.
0. Run `. $HOME/esp/esp-idf/export.sh` and `idf.py set-target esp32`.
0. Open the **menuconfig** with the `idf.py menuconfig` command, navigate to **Component config -> anjay-esp32-client**.
    - In **Choose targeted development board**, select ``M5StickC`` from the list of supported boards.
    - In **Choose an interface**, select `External BG96 module`.
    - In **BG96 module configuration**, specify the UART port, Tx pin and Rx pin for the BG96 module. Example port and pin numbers are provided in the screenshot below.
      ![BG96 UART example configuration](images/BG96_uart_config.png "BG96 UART example configuration")
    - In **Client options**, provide device credentials and Server URI:
        - **Endpoint name** - your device endpoint name
        - **Server URI** - the address and port of your {{ coiote_short_name }} installation, e.g. ``{{ coaps_uri }}``
        - **Security mode** - the PSK security mode
        - **PSK configuration** - the PSK identity and PSK key
    - In the `Connection configuration`, set **APN name** to `internet` for the sake of this tutorial. However, **APN name** depends on your SIM card operator.
    - Press `s` on the keyboard to Save the configuration.

## Step 2: Connect BG96 module to a M5StickC

Connect the Tx, Rx and GND pins, respectively, to the M5StickC pins selected in the previous step on the basis of the following example connection:

  ![M5StickC and BG96 pinout](images/esp32_bg96.png "M5StickC and BG96 pinout")

- M5Stick GND > BG96 6 GND
- M5Stick G26 > BG96 10 UART Rx
- M5Stick G0 > BG96 8 UART Tx



## Step 3: Add device to {{ coiote_short_name }}
To connect your M5StickC to the {{ coiote_long_name }}, use your access to a {{ coiote_short_name }} installation, or register at {{ coiote_site_link }}/ to get access.

To connect the board, log in to the platform and follow [onboarding guide]({{ coiote_device_onboarding_link }}).

## Step 4: Flash M5StickC

0. Connect the M5Stick board to a USB port of your machine.
0. Open the command line interface, go to your project directory, and run `idf.py -b 750000 flash monitor`.


## Next steps

If you want to develop your own LwM2M-enabled application based on M5Stick, check [Anjay-esp32-client](https://github.com/AVSystem/Anjay-esp32-client) and start prototyping!
