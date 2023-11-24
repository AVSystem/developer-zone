# How to perform secure Over-the-Air (OTA) updates? (nRF 9160)

The LwM2M standard makes Over-the-Air (OTA) updates straightforward, reducing the complexity of implementation and management. What's crucial is that it enhances security through authentication and encryption.

To demonstrate the potential of a single update, we use an IoT device with nRF 9160 DK integrated with Anjay IoT SDK—a setup that enables LwM2M Connectivity.

In the tutorial, we'll guide you through a few steps to handle OTA updates, monitor update statuses, and confirm if the device was successfully updated.

Connect your IoT devices with Anjay IoT SDK - LwM2M Client:

* [Anjay Client repository](https://github.com/AVSystem/Anjay)
* [Anjay Zephyr Client repository](https://github.com/AVSystem/Anjay-zephyr-client)

Coiote IoT Device Management - free registration:
Test it out yourself by registering for a free Developer account [{{ coiote_short_name }}]({{ coiote_site_link }}/) user account.
<iframe width="560" height="315" src="https://www.youtube.com/embed/9quGdc9vSiE?si=eJ2htVtBviY43fy7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>