# Overview

## How synchronization works

Coiote DM provides zero-touch provisioning for synchronized devices from Azure IoT Hub. This means that device entities are automatically created within Coiote DM upon synchronization with the Azure IoT Hub and this is repeated periodically for any new devices that appear. Therefore, after one successful synchronization, you can be sure that any devices that have been added to Azure IoT Hub at a later time will also be migrated to Coiote DM.             
