# Runtime certificate and private key configuration
Build a project with a runtime certificate and private key.

## Prerequisites
* The STM32L496G-DISCO/BG96 board with a USB cable.
* Installed **minicom** (for Linux), **RealTerm**, **PuTTy** (for Windows), or another serial communication program.
* An active [Coiote IoT DM](https://eu.iot.avsystem.cloud/) user account.

## Build and flash the device
To get the latest binary file and flash the board:

0. Go to [Anjay-freertos-client](https://github.com/AVSystem/Anjay-freertos-client/releases/).
0. Download the `Anjay-freertos-client-STM32L496G-BG96.bin` file.
0. To flash the board, open your **File manager** and drag the downloaded `.bin` file to your **DIS_L496ZG** external device.
0. You will see a blinking diode on your board. The diode will stop blinking as soon as the flashing is finished.

## Generate certificate
The certificate and private key based on the SECP256R1 curve can be provided through the shell interface in PEM format. To generate them open terminal and use the following commands.

!!! Important

    To use the certificate and private key with Coiote IoT DM you must specify a common name that is the same as the client endpoint name.

```
openssl ecparam -name secp256r1 -out ecparam.der
openssl req -new -x509 -nodes -newkey ec:ecparam.der -keyout demo-cert.key -out demo-cert.crt -days 3650
openssl x509 -in demo-cert.crt -outform pem -out cert.pem
openssl ec -in demo-cert.key -outform pem -out key.pem
```

![Fragement of creating certificates](images/create_cert.png)

You will see created `demo-cert.pem` and `demo-cert.key.pem` files in the directory.

## Configuring the Client

0. With the board still connected to a serial port interface, open a serial communication program.
0. Press the reset button located on the board. This should trigger the following prompt:

    ``Press any key in 3 seconds to enter config menu...``

0. Press any key and in the configuration menu, change the default credentials to your data by following the instructions presented in the program
    - Set **4. Security (none/psk/cert)** to `cert`.
    - Set **5. Endpoint name** to your board endpoint name, e.g. `anjay-demo`.
    - Set **6. Public cert or PSK identity** and paste your generated certificate from `demo-cert.pem` file.
    - Set **7. Private cert or PSK** and paste your generated certificate private key from `demo-cert.key.pem` file.
    - Set **8. APN**, **9. APN username**, and **10. APN password** to compatibile with your SIM card.

    !!! important
        APN (Access Point Name) is the name of a gateway between a GSM, GPRS, 3G and 4G mobile network and another computer network. If you use built-in eSIM card truphone then change APN to **iot.truphone.com**.

    !!! Note
        If you use external eSIM card you have to check APN used by SIM card's provider.

    ![Generate certificate in Anjay](images/anjay_cert.png)

0. Save created changes, by clicking **1. Save & Exit**, and go to the next step to add a device to Coiote.

## Add device to Coiote IoT DM and connect

0. Upon logging in to Coiote IoT DM for the first time, you will see the **Add your LwM2M device** panel.

    !!! note
        If you had previously added a device, in **Device inventory**, click the **Add device** button.

0. Select the **Connect your LwM2M device directly via the Management server** tile.
   ![Add via Mgmt](images/ex1.3.png "Add via Mgmt")
0. In the **Device credentials** step:
     - In the **Endpoint name** enter your LwM2M device endpoint name, e.g. `anjay-demo`.
     - In the **Security mode** section, select **Certificate** mode.
        ![Device credentials step](images/add_mgmt_cert.png "Device credentials step")
     - Click **Upload a new certificate** and **Browse**.
     - In the pop-up, go to the directory where your certificate has been generated, select the `demo-cert.crt` file and click **Open**.
     - Click **Add device**.

0. Click **Next**, **Go to Summary** to skip the third step, and **Finish** to see your Device Center.
    ![Registered device](images/registered_cert.png "Registered device")
