# Automated Provisioning for Nordic boards

## Introduction
The device before it will be deployed in the field needs to be flashed and configured. This process takes some time and effort.

This tutorial will show you how to provision Nordic boards using the provisioning script found [Anjay-zephyr-client repositorie] (https://github.com/AVSystem/Anjay-zephyr-client).

## Prerequisites
- Nordic board connected to your computer.
- Installed [mcumgr command line tool](https://docs.zephyrproject.org/3.1.0/services/device_mgmt/mcumgr.html).
- Zephyr development environment set up.
- Registered account on [EU IOT CLOUD](https://eu.iot.avsystem.cloud).

## Step 1: Getting Coiote Access Token
The provision script can register the provisioned device to Coiote DM automaticlly. We will use this option in this tutorial but this is a optional step and can be omited. First an access token needs to be generated. 

1. Create `get_token.sh` file:
    ```
    #!/bin/bash

    if [ -z "$1" ]
    then
        echo "Usage:"
        echo "$0 [USERNAME]"
        exit 1
    fi

    USER="$1"
    SERVER="https://eu.iot.avsystem.cloud"

    read -p "Password for user $USER on $SERVER: " -s PASS

    curl -X POST \
       -H "Content-Type:application/x-www-form-urlencoded" \
       --data-urlencode "grant_type=password" \
       --data-urlencode "username=$USER" \
       --data-urlencode "password=$PASS" \
       "$SERVER/api/auth/oauth_password" 
    
    ```
2. Run `chmod u+x get_token.sh` to give execute rights

3. Run `./get_token.sh [USERNAME]` where `[USERNAME]` is the user registered on eu.iot.avsyste.cloud. The script will ask you for your password, please provide it.

    If a JSON structure had been displayed containing `"access_token"` your ready to proceed. Copy your token, it's valid only for a short period of time. 

    For more informaton how to aquire the access token see [REST API authentication](https://eu.iot.avsystem.cloud/doc/user/REST_API/REST_API_Authentication/).

## Step 2: Prepare configuration
Before running the script some configuration should be set. Example configuration can be found in `Anjay-zephyr-client/tools/provisioning-tool/configs` directory.

1. Edit `endpoint_cfg` contains LwM2M objects setting that will be uploaded to the device. Set `RID.Security.Mode` to `0` for PreShared Key or `2` for authentication using certificates. If PreShared Key authentication was choosen modify `RID.Security.PKOrIdentity` and `RID.Security.SecretKey` as well.

2. Edit `cert_info.json`. This file contains information for generating a self signed certificate. This configuration is needed only if `RID.Security.Mode` is set to `2` and the user don't want to provide certificates generated ealier.

3. Edit `lwm2m_server.json` modify `domain` entry to reflect your domain in Coiote server. This file is needed if you wish the script to automaticlly add the new device to Coiote DM.

4. If in `endpoint_cfg` file you set `RID.Security.Mode` as `2` (certificate) then run 

    `openssl s_client -showcerts -dtls eu.iot.avsystem.cloud:5684 > server.pem` to download server certificate and then 

    `openssl  x509 -outform der -in server.pem -out server.der` to convert it to DER format. 

## Step 3: Run provisioning tool
After creating the correct configuration for provisioning make sure that west configuration is correct and the `manifest.path` is set to a absolute path.
The script should be executed from a directorie from which the command `west build` will work. For the tutorial we will use the `Anjay-zephyr-client/demo`.

    ```
    cd Anjay-zephyr-client/demo
    ./../tools/provisioning-tool/ptool.py -b nrf9160dk_nrf9160_ns -s <SERIAL> -c ../tools/provisioning-tool/configs/endpoint_cfg -t <TOKEN> -S ../tools/provisioning-tool/configs/lwm2m_server.json -C ../tools/provisioning-tools/configs/cert_info.json -p server.der
    ```
    
    Where <SERIAL> should be the USB serial number of the connected board and <TOKEN> should be the token acquired in Step 1.
    If you prefer using your own certificates then letting the script create a self signed cert use option `-k` for providing endpoint private key and `-r` to provide endpoint public cert. 

## Step 4: Connecting device to Coiote
If you choosen authentication using certificate the public device certificate needs to be uploaded to the Coiote.

1. Log in Coiote DM

2. On the left side choose `Administration -> DTLS/TLS certificates`

3. Click `Add File`, in a popup window enter a name and upload the public certificate.

    If everyting went well you should see your new certificate and the device should be ready to connect to Coiote. 
