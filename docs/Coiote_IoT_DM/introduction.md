---
date: 2023-05-10
og_title: AVSystem IoT Developer Zone
---

# {{ coiote_long_name }}

{{ coiote_long_name }} allows you to manage your LwM2M devices throughout their entire lifecycle. {{ coiote_short_name }} supports device onboarding, data management, data visualization, automated tests, firmware updates, and cloud integrations.

[Visit {{ coiote_short_name }} website]({{avsystem_coiote_link}}){: .md-button }

!!! Tip "Sign up free of charge"
    Get started by <a href="{{ coiote_site_link }}/" target="_blank">**signing up**</a> to {{ coiote_long_name }}. You can sign up for a developer account which allows you to connect up to 10 devices free of charge.

![Coiote login page](images/login-page-new.png "{{ coiote_short_name }} login page")

## Features

!!! Note
    Features marked with an "*" are only included in the premium version of {{ coiote_short_name }}.

### Device inventory

The Device inventory provides a comprehensive overview of all registered LwM2M devices. After selecting one of your devices, you enter the **Device center** which allows you to monitor and manage single devices.

In the **Device center**, you can:

* Adjust device configurations
* Set observations
* Schedule firmware updates
* Visualize device data
* Access detailed device logs

The key features of **Device center** include:

* **Device analytics**: The Device analytics board provides tools for monitoring and visualizing device data through customizable widgets. It supports real-time and historical data analysis with options to adjust time ranges, zoom into charts, and enable live data display with five-second refresh intervals. Widgets can be reordered, or removed to suit specific monitoring needs, and device monitoring can be toggled to control data collection and storage.

* **Device logs**: The Device logs tab offers detailed visibility into log data for troubleshooting and performance monitoring. It includes a histogram for log volume analysis, a searchable and filterable log entries list, and tools for defining relative or absolute time ranges for log retrieval. Real-time monitoring is supported with live log updates, and filters allow targeted viewing for protocols such as CoAP and LwM2M.

### Device groups*

Devices can be added to **Groups** allowing for easy management of your device fleet. Instead of managing devices one by one, configurations can be updated for a group of devices with a single click.

### Integrations

{{ coiote_short_name }} supports integrations with popular cloud platforms such as **Azure IoT Hub**, **AWS IoT Core** or **nRF Cloud**. The **Device Integration Center** enables the configuration of **Webhook** and **Kafka** event handlers, supporting real-time event streaming and tailored device interactions.

### Device test repository*

You can test performance of your device firmware by mimicking real-world scenarios. Device tests allow you to validate new application firmware, to test the implementation of the LwM2M standard, and to run regression tests to ensure new firmware doesn’t break existing functionality.

### Fleet FOTA

This feature allows efficient firmware updates across your entire device fleet. You can create **FOTA configurations** to define update parameters, such as target firmware versions and use it later for an update on a single device or to create a **FOTA campaign**. FOTA campaigns enable you to plan, schedule, and monitor large-scale updates for specific groups of devices. 

### Administration

The administration section provides tools for configuring platform settings, including **Billing**, **User management**, and **Domain management**.


!!! Info
    A comprehensive and detailed description of all platform features, can be found in the user documentation available after logging into the platform. 