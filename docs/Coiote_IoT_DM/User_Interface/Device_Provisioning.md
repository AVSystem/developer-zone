# Automated Provisioning for Nordic boards

## Introduction
With Factory provisioning for Nordic IoT devices, you can load on-device communication credentials and any cloud-related configuration at the factory level to automate secure device onboarding to Coiote IoT DM cloud.

Here’s a tutorial to get you started with device provisioning using a dedicated script to be found in the [Anjay Zephyr Client repository](https://github.com/AVSystem/Anjay-zephyr-client).

## Prerequisites
- A Nordic board connected to your computer. 
- Installed [Go Programming language](https://go.dev/dl).
- Installed [mcumgr command line tool](https://docs.zephyrproject.org/3.1.0/services/device_mgmt/mcumgr.html).
- Zephyr development environment set up.
- An active [Coiote DM cloud](https://eu.iot.avsystem.cloud) account.
- If you're using Windows: possibility to run Linux scripts/tools either via WSL, Cygwin or other.

## Provision the device using PSK
This section shows how to provision your device using a pre-shared key (PSK).

1. Prepare configuration:

    Before running the script some configuration should be set. Example configuration can be found in `Anjay-zephyr-client/tools/provisioning-tool/configs` directory.

    - Edit `endpoint_cfg` contains LwM2M objects setting that will be uploaded to the device. Set `RID.Security.Mode` to `0` and modify `RID.Security.PKOrIdentity` and `RID.Security.SecretKey` as well.

    - Edit `lwm2m_server.json` modify `domain` entry to reflect your domain in Coiote server. This file is needed if you wish the script to automatically add the new device to Coiote DM.

2. Get the Coiote DM Access Token

    The provisioning script can register your device to Coiote DM automatically. You might use this option for the sake of this tutorial, but this is an optional step.

    !!! note
        If you wish to skip device registration to Coiote DM, then call `ptool.py` without `-t` and `-S` options.

    First an access token needs to be generated.

    - Create `get_token.sh` file:
        ```
        #!/bin/bash

        SERVER="https://eu.iot.avsystem.cloud"

        echo "Enter your login credentials for $SERVER"
        read -p "Login: " USER
        read -p "Password: " -s PASS

        curl -X POST \
           -H "Content-Type:application/x-www-form-urlencoded" \
           --data-urlencode "grant_type=password" \
           --data-urlencode "username=$USER" \
           --data-urlencode "password=$PASS" \
           "$SERVER/api/auth/oauth_password"
        ```
    - If you're using Linux, run `chmod u+x get_token.sh` to give execute rights. Under Windows you can use the GUI to allow execution of this file.

    - Run `./get_token.sh`. The script will ask you for your login and password for eu.iot.avsyste.cloud, please provide it.

    If a JSON structure had been displayed containing `"access_token"` your ready to proceed. Copy your token.

    !!!important
        The token received is valid only for a short period of time.

    For more informaton how to aquire the access token see [REST API authentication](https://eu.iot.avsystem.cloud/doc/user/REST_API/REST_API_Authentication/).

3. Run provisioning tool

    After creating the correct configuration for provisioning make sure that west configuration is correct and the `manifest.path` is set to an absolute path. Run:
        ```
        cd Anjay-zephyr-client/demo
        ./../tools/provisioning-tool/ptool.py -b nrf9160dk_nrf9160_ns -s <SERIAL> \
            -c ../tools/provisioning-tool/configs/endpoint_cfg -t <TOKEN> \
            -S ../tools/provisioning-tool/configs/lwm2m_server.json \
        ```

    !!!important
        `<SERIAL>` should be the USB serial number of the connected board. You can check the serial number of your board by running: `nrfjprog -i`. The `<TOKEN>` should be the token acquired in previous step.

    !!!note
        To see all of the options available in the script run `./ptool.py -h`.

    If everything went well then your device should be visible in Coiote DM.

## Provisioning the device using certificates
Now we will show how to provision the device using certificates. This method is very similar to the provisioning the device with PSK and will require just a few additional steps.

!!!note
    You may need to remove the device from Coiote if you finished the steps in previous section and the device is already registered. Coiote will not allow registration of the device with the same name.

1. Prepare configuration

    Like in the PSK example we will modify the configuration found in `Anjay-zephyr-client/tools/provisioning-tool/configs` directory.

    - Edit `endpoint_cfg` and change `RID.Security.Mode` to `2` for authentication using certificates.

    - Edit `lwm2m_server.json` modify `domain` entry to reflect your domain in Coiote server.

    - Edit `cert_info.json`. This file contains information for generating a self signed certificate. This configuration is needed only if user don't want to provide certificates generated ealier.

    - Get the certificate for `eu.iot.avsystem.cloud`. Run:

        `openssl s_client -showcerts -dtls eu.iot.avsystem.cloud:5684 > server.pem` to download server certificate and then

        `openssl  x509 -outform der -in server.pem -out server.der` to convert it to DER format.

2. Getting Coiote Access Token

    Repeat this step from previous section to acquire a new token.

3. Run provisioning tool

    Similar to the example with PSK run:

    ```
    cd Anjay-zephyr-client/demo
    ./../tools/provisioning-tool/ptool.py -b nrf9160dk_nrf9160_ns -s <SERIAL> \
        -c ../tools/provisioning-tool/configs/endpoint_cfg -t <TOKEN> \
        -S ../tools/provisioning-tool/configs/lwm2m_server.json \
        -C ../tools/provisioning-tools/configs/cert_info.json -p server.der
    ```

    !!!note
        If you prefer using your own certificates then letting the script create a self signed cert then you can use option `-k` for providing endpoint private key `-r` to provide endpoint public cert. Also please remove option `-C` while running `ptool.py`.

4. Connecting device to Coiote

    During running the provisioning script you will be asked to upload the device public certificate to Coiote.

    - Log in Coiote DM

    - On the left side choose `Administration -> DTLS/TLS certificates`

    - Click `Add File`, in a popup window enter a name and upload the public certificate. The self signed certificate generated by the script should be in `Anjay-zephyr-client/demo/cert` directory.

    If everyting went well you should see your new certificate and the device should be ready to connect to Coiote. 
