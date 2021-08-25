.. _UG_T_Adding_devices:

##############
Adding devices
##############

Go through below sections to learn how to add devices.

Adding devices to the server using the Bootstrap server with the PSK security mode
==================================================================================

Read this section to learn how to add a device to the server using the Bootstrap server with the PSK security mode.

 .. note:: It is assumed that you have the Bootstrap server configured. Read the :ref:`UG_MLB_Configuring_a_bootstrap_server` chapter to learn how to do this.

To add a device:

1. Configure the server:

 * Go do :guilabel:`Device inventory` and click the :guilabel:`Add bootstrap details` button.
 * Type proper data.
 * Click the :guilabel:`Add` button.

.. figure:: images/Adding_a_device_using_bootstrap_server.*
   :align: center

   *Fig. Adding a device*

2. Configure the device (LwM2M Client). Details depend on a device's provider. Make sure that:

 * Device uses the Bootstrap server for connection
 * Device uses the Pre-Shared Key security mode
 * Device uses the *test-device* endpoint name
 * Device uses the *test-device* DTLS Identity
 * Device uses the *test-key* PSK
 * The URI of the server is set to *coaps://<host>:5694* (for example: coaps://lwm2m-test.avsystem.io:5694).

 .. tip:: If you use Anjay (https://github.com/AVSystem/Anjay#running-the-demo-client); then you might simply execute the following command from the main Anjay directory (swapping <host> for a real server address): ``output/bin/demo --endpoint-name test-device --security-mode psk --identity 746573742d646576696365  --key 746573742d6b6579 --server-uri coaps://<host>:5694 --bootstrap``. The long number-like strings are hex-encoded “test-device” and “test-key”. You can use the **xxd** program to hex-encode: ``output/bin/demo --endpoint-name test-device --security-mode psk --identity $(echo -n "test-device" | xxd -p)  --key $(echo -n "test-key" | xxd -p)  --server-uri coaps://<host>:5694 --bootstrap``.

3. Click the :guilabel:`Add` button.
4. To establish the connection with the platform, configure your device using the settings displayed on the pop-up **before you close it**. Note that after closing the pop-up **you will not have access to this data**.

Adding devices to the server with the PSK security mode
=======================================================

Read this section to learn how to add a device to the server with the PSK security mode.

To add a device:

1. Configure the server:

 * Go do :guilabel:`Device inventory` and click the :guilabel:`Add new device` button.
 * Type proper data.
 * Click the :guilabel:`Add` button.

.. figure:: images/Adding_a_device_using_management_server.*
   :align: center

   *Fig. Adding a device*

2. Configure the device (LwM2M Client). Details depend on a device's provider. Make sure that:

 * Device uses the Management server for connection
 * Device uses the Pre-Shared Key security mode
 * Device uses the *test-device* endpoint name
 * Device uses the *test-device* DTLS Identity
 * Device uses the *test-key* PSK
 * The URI of the server is set to *coaps://<host>:5684* (for example: coaps://lwm2m-test.avsystem.io:5684).

 .. tip:: If you use Anjay (https://github.com/AVSystem/Anjay#running-the-demo-client); then you might simply execute the following command from the main Anjay directory (swapping <host> for a real server address): ``output/bin/demo --endpoint-name test-device --security-mode psk --identity 746573742d646576696365  --key 746573742d6b6579 --server-uri coaps://<host>:5684``. The long number-like strings are hex-encoded “test-device” and “test-key”. You can use the **xxd** program to hex-encode: ``output/bin/demo --endpoint-name test-device --security-mode psk --identity $(echo -n "test-device" | xxd -p)  --key $(echo -n "test-key" | xxd -p)  --server-uri coaps://<host>:5684``.

3. Click the :guilabel:`Add` button.
4. To establish the connection with the platform, configure your device using the settings displayed on the pop-up **before you close it**. Note that after closing the pop-up **you will not have access to this data**.


Adding devices using the Certificate security mode
==================================================

Read this section to learn how to add a device to the server using the Bootstrap server with the Certificate security mode.

.. note:: Certificates work for both management and bootstrap server connections.

To add a device with a certificate:

1. Add a device certificate/CA using the :guilabel:`DTLS/TLS Certificates` panel. For more details, please refer to :ref:`UIR_A_DTLS_TLS_Certificates` 
2. Go do :guilabel:`Device inventory` and click the :guilabel:`Add new device` or :guilabel:`Add bootstrap details` button, depending on your preferred connection type.

 * Provide endpoint name.
 * From the :guilabel:`Security` field, select :guilabel:`Certificate`
 * Click the :guilabel:`Add` button.

.. tip:: To enable the verification of the LwM2M Endpoint name against the certificate CN (Common Name) as defined by the LwM2M specification, add the **verifyEpAgainstCertCn** setting value to your device configuration and set it to `true`.

3. Configure the device (LwM2M Client). Details depend on a device's provider. Make sure that:

 * Device uses the management or bootstrap server for connection, according to your preference
 * Device uses the Certificate security mode
 * Device uses the endpoint name as provided in the platform.
 * The URI of the server is set to *coaps://<host>:5684* (for example: coaps://lwm2m-test.avsystem.io:5684).

4. To establish connection with the platform, configure your device using the settings displayed on the pop-up **before you close it**. Note that after closing the pop-up **you will not have access to this data**.

**See also:** :ref:`UG_Managing_LwM2M_bootstrap`
