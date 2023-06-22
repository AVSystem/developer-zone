# Exercise 1: Connect the Raspberry Pi Pico W to a LwM2M Server. 

Let’s start with the first exercise on building an end-to-end LwM2M application by running Anjay LwM2M Client on the Raspberry Pi Pico W, and connecting your device to Coiote LwM2M Server over Wi-Fi.

## Prerequisites

* A Raspberry Pi Pico W board with a USB cable
* [Git](https://git-scm.com/downloads)
* [Python](https://www.python.org/downloads/)
* Local WiFi network
* Serial communication program such as minicom, RealTerm (for Linux/Mac) or PuTTy (for Windows)
* An active [Coiote IoT DM](https://eu.iot.avsystem.cloud/) user account.

## Prepare binaries

### Install dependencies

Configure and compile the LwM2M Client. To do so, you need to install some dependencies and clone three GitHub repositories: [Anjay Client for the Raspberry Pi Pico W](https://github.com/AVSystem/Anjay-pico-client), the [Raspberry Pi Pico W SDK](https://github.com/raspberrypi/pico-sdk), and the [FreeRTOS kernel](https://github.com/FreeRTOS/FreeRTOS-Kernel).

Start by creating a new workspace, installing the dependencies, and cloning all three GitHub directories into this workspace.

1. Create and open a new directory:
    ```
    mkdir lwm2m-academy
    cd lwm2m-academy
    ```

1. Install dependencies:

    === "Linux"
        When using **Ubuntu**, run the following command:

        ```
        sudo apt install cmake gcc-arm-none-eabi libnewlib-arm-none-eabi libstdc++-arm-none-eabi-newlib
        ```

        When using **Fedora**, run the following command:

        ```
        sudo dnf install python3 cmake minicom arm-none-eabi-newlib arm-none-eabi-gcc-cs-c++ arm-none-eabi-gcc-cs arm-none-eabi-binutils-cs gcc-arm-linux-gnu gcc-c++-arm-linux-gnu gcc gcc-c++
        ```

    === "Mac"
        When using MacOS, run the following command:
        
        ```
        brew install armmbed/formulae/arm-none-eabi-gcc
        ```

    === "Windows"
        Download and run the [installer](https://developer.arm.com/-/media/Files/downloads/gnu-rm/10-2020q4/gcc-arm-none-eabi-10-2020-q4-major-win32.exec) to install `arm-none-eabi-gcc` and `arm-none-eabi-gdb`. 

        Select the default destination directory (E.g. `C:\GNU_Arm_Embedded_Toolchain`).
    
        Check the `Add path to environment variable` option **before** you click the `Finish` button for the installation.

        ![Windows installer](images/module1_windows.png)
---

1. Clone three GitHub repositories using Git.

    * Clone the RPi Pico SDK repository and update its submodules
        
        ```
        git clone -b 1.4.0 https://github.com/raspberrypi/pico-sdk.git
        cd pico-sdk/ && git submodule update --init && cd ..
        ```

    * Clone the FreeRTOS kernel repository
        ```
        git clone -b V10.5.0 https://github.com/FreeRTOS/FreeRTOS-Kernel.git
        ```

    * Clone the Anjay-pico-client repository and update its modules
        ```
        git clone https://github.com/AVSystem/Anjay-pico-client.git
        cd Anjay-pico-client && git submodule update --init --recursive && cd ..
        ```

## Connect to the LwM2M Server

Before connecting your device to the cloud, log in to the Coiote IoT Device Management: [eu.iot.avsystem.cloud](https://eu.iot.avsystem.cloud).

Select **Device Inventory** from the left-side menu

