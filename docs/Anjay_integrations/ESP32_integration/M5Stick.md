# M5Stick

Integrate your ESP32-based device to manage it via Coiote DM.

## Prerequisites

- An M5Stick device.
- Installed ESP-IDF and dependencies (steps 1-4 from https://docs.espressif.com/projects/esp-idf/en/v4.4/esp32/get-started/index.html)
- A user with access to the Coiote IoT Device Management platform.

## Step 1: Clone Anjay ESP32 client repository

Enter the command line interface on your machine and paste the following command:

   ```
   git clone --recursive https://github.com/AVSystem/Anjay-esp32-client
   ```

## Step 2:  

0. Run `idf.py set-target esp32` in your project directory.
0. Run `idf.py menuconfig`.
    - navigate to Component config/anjay-esp32-client:
        - select one of supported boards or manually configure the board in Board options menu.
        - configure Anjay in Client options menu.
        - configure WiFi in Connection configuration menu.
0. Run `idf.py build` to compile.
0. Run `idf.py flash` to flash.

    !!! note
        M5StickC-Plus does not support default baud rate, run `idf.py -b 750000 flash` to flash it.

0. The logs will be on the same `/dev/ttyUSB<n>` port that the above used for flashing, 115200 8N1
    - You can use `idf.py monitor` to see logs on serial output from a connected device, or even more conveniently `idf.py flash monitor` as one command to see logs right after the device is flashed

## Step 3: Configure the client using an NVS partition

0. Create a `nvs_config.csv` file and provide your credentials in [wifi_ssid], [wifi_password], [identity], [psk], [lwm2m_server_uri] (without the `[]` brackets). You can use the following snippet as a template:

```
key,type,encoding,value
config,namespace,,
wifi_ssid,data,string,[wifi_ssid]
wifi_pswd,data,string,[wifi_password]
identity,data,string,[identity]
psk,data,string,[psk]
uri,data,string,[lwm2m_server_uri]
```
!!! important
    The **Identity** parameter stands for both the device endpoint name and its PSK identity (therefore they must be identical in Coiote DM).  

0. Generate the NVS partition:

```
python3 tools/nvs_partition_gen.py generate nvs_config.csv nvs_config.bin 0x6000
```

![Client configuration](images/nvs_config.png "Client configuration"){: style="float: left;margin-right: 1177px;margin-top: 17px;"}

## Step 4: Add device to the LwM2M Server

To connect your M5Stick to the Coiote IoT Device Management LwM2M Server, use your access to a Coiote DM installation, or register at https://www.avsystem.com/try-anjay/ to get access.

To connect the board:

0. Log in to Coiote DM and from the left side menu, select **Device Inventory**.
0. In **Device Inventory**, click **Add device**.
0. Select the **Connect your LwM2M device directly via the Management server** tile.
![Add via Mgmt](images/mgmt_tile.png "Add via Mgmt")
0. In the **Device credentials** step:
    - In the **Device ID** enter your board endpoint name, e.g. `test_device`.
      ![Device credentials step](images/add_mgmt_quick.png "Device credentials step")
    - In the **Security mode** section, select the **PSK** mode:
    - In the **Key identity** field, type `test_device`.
    - In the **Key** field, type the shared secret used in the device-server authentication.  
0. Click the **Add device** button and **Confirm** in the confirmation pop-up.
0. In the **Connect your device** step, wait for the board to connect.

## Step 5: Flash the board and run device

Use pre-built binaries to flash the board and provide credentials by flashing the NVS partition binary.

0. Install the `esptool.py`:
```
pip install esptool
```

0. Flash the board:

```
esptool.py -b 750000 --chip esp32 write_flash 0x0000 m5stickc-plus.bin
```

0. Flash the NVS partition binary:

```
esptool.py -b 750000 --chip esp32 write_flash 0x9000 nvs_config.bin
```

Once executed, the device will be reset and run with the configuration you provided.

![Registered device](images/registered_device.png "Registered device")
