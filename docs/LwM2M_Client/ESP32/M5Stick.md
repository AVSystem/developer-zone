# M5StickC

Integrate your ESP32-based device to manage it via {{ coiote_short_name }}.

## Prerequisites

- An M5StickC device.
- Installed ESP-IDF and dependencies (installation steps 1-4 from [ESP32 official documentation](https://docs.espressif.com/projects/esp-idf/en/v4.4/esp32/get-started/index.html)). Supported ESP-IDF version is v4.4.
- A user with access to the {{ coiote_long_name }}.

## Step 1: Download the Anjay ESP32 client files

0. Create a project directory for the integration.
0. Go to [https://github.com/AVSystem/Anjay-esp32-client/releases](https://github.com/AVSystem/Anjay-esp32-client/releases) and download `m5stickc-plus.bin` and `nvs_partition_gen.py` to your project directory.

## Step 2: Configure the client using an NVS partition

0. Create a `nvs_config.csv` file and save it in your project directory. In the file, provide your credentials in [wifi_ssid], [wifi_password], [endpoint_name], [identity], [psk], [lwm2m_server_uri] (without the `[]` brackets). Use the following snippet as a template:

    ```
    key,type,encoding,value
    config,namespace,,
    wifi_ssid,data,string,[wifi_ssid]
    wifi_pswd,data,string,[wifi_password]
    wifi_inter_en,data,u8,1
    endpoint_name,data,string,[endpoint_name]
    identity,data,string,[identity]
    psk,data,string,[psk]
    uri,data,string,[lwm2m_server_uri]
    writable_wifi,namespace,,
    wifi_ssid,data,string,[wifi_ssid]
    wifi_pswd,data,string,[wifi_password]
    wifi_inter_en,data,u8,0
    ```

    !!! Note
        The additional parameters under the **writable_wifi** namespace are used to provide a secondary Wi-Fi configuration (it is not obligatory). This allows for switching between Wi-Fi configurations while the device is running.

    !!! Note
        The nvs_config.csv file can also be downloaded from [https://github.com/AVSystem/Anjay-esp32-client/releases](https://github.com/AVSystem/Anjay-esp32-client/releases)

0. Open a command line interface, go to your project directory, and generate the NVS partition:

=== "Linux"
    ``` linux
    pip3 install future cryptography
    python3 nvs_partition_gen.py generate nvs_config.csv nvs_config.bin 0x4000
    ```
=== "Windows"
    ``` windows
    pip3 install future cryptography
    python nvs_partition_gen.py generate nvs_config.csv nvs_config.bin 0x4000
    ```

![Client configuration](images/nvs_config.png "Client configuration"){: style="float: left;margin-right: 1177px;margin-top: 17px;"}

## Step 3: Add device to {{ coiote_short_name }}

To connect your M5StickC to the {{ coiote_long_name }}, use your access to a {{ coiote_short_name }} installation, or register at {{ coiote_site_link }}/ to get access.

To connect the board, log in to the platform and follow [onboarding guide]({{ coiote_device_onboarding_link }}).

## Step 4: Flash the board and run device

Connect the M5Stick board to a USB port of your machine and open ESP-IDF command line application.

Use pre-built binaries to flash the board and provide credentials by flashing the NVS partition binary.

0. Install the `esptool.py`:
```
pip install esptool
```

0. Flash the board:

    !!! tip
            Before flashing the device you should erase the flash first to make sure you have correct settings:
            === "Linux"
                ``` linux
                esptool.py erase_flash
                ```
            === "Windows"
                ``` windows
                esptool erase_flash
                ```


    === "Linux"
        ``` linux
        esptool.py -b 750000 --chip esp32 write_flash 0x0000 m5stickc-plus.bin
        ```
    === "Windows"
        ``` windows
        esptool -b 750000 --chip esp32 write_flash 0x0000 m5stickc-plus.bin
        ```


0. Flash the NVS partition binary:

    === "Linux"
        ``` linux
        esptool.py -b 750000 --chip esp32 write_flash 0x9000 nvs_config.bin
        ```
    === "Windows"
        ``` windows
        esptool -b 750000 --chip esp32 write_flash 0x9000 nvs_config.bin
        ```

Once executed, the device will be reset and run with the configuration you provided.

   ![Registered device](images/registered_device.png "Registered device")

## M5StickC LwM2M objects

After successful connection to {{ coiote_short_name }}, you can explore the available device objects.

| Target         | Objects
|----------------|---------------------------------------------
| ESP32 common   | Security (/0)<br>Server (/1)<br>Device (/3)<br>Firmware Update (/5)<br>WLAN connectivity (/12)
| M5StickC-Plus  | Push button (/3347)<br>Light control (/3311)<br>Temperature sensor (/3303)<br>Accelerometer (/3313)<br>Gyroscope (/3343)


## Upgrade device firmware over the air

To perform a FOTA upgrade, you need an established connection between the M5StickC and {{ coiote_short_name }} (see instructions above).

### Build new firmware version

0. Open a command line interface and run `git clone https://github.com/AVSystem/Anjay-esp32-client`.
0. Go to the directory of the cloned repository and run `idf.py set-target esp32`.
0. Run `git submodule update --recursive --init`.
0. Run `idf.py menuconfig`, navigate to `Component config/anjay-esp32-client`, and from the supported boards, select **M5StickC**. Press `s` and `enter` to save.
0. Run `idf.py build`.
0. Once executed, check if the binary file has been built in the following path `$PROJECT_DIR/build/anjay-esp32-client/build`.

### Schedule upgrade in {{ coiote_short_name }}

0. In your {{ coiote_short_name }} account, select your device in **Device inventory** and click the **LwM2M Firmware** tab.

    ![LwM2M firmware tab](images/lwm2m_firmware.png "LwM2M firmware tab")

0. Click **Schedule new firmware upgrade**.
0. Click **Upload** to select the binary file from your local drive, select **COAP** in the **Image delivery protocol**, and click **Upgrade**.

    !!! tip
        The **COAPS** option is also supported. To use it, you may need to additionally provide the **Base URI** parameter (depending on your server settings).

    ![Scheduling FOTA](images/schedule_fota.png "Scheduling FOTA")

0. The FOTA upgrade is now scheduled. Note that it might take a few minutes to complete.

0. Once the upgrade is finished, you can check the new version of the firmware under **Current firmware**.
    ![Current firware](images/current_firmware.png "Current firware")


## Next steps

If you want to develop your own LwM2M-enabled application based on M5Stick, check [Anjay-esp32-client](https://github.com/AVSystem/Anjay-esp32-client) and start prototyping!
