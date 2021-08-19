.. _UIR_A_DTLS_TLS_Certificates:

DTLS/TLS Certificates
=====================

As an administrator of the Coiote DM installation you can add and manage device certificates and their CAs.

Adding a certificate
--------------------

To add a certificate:

1. Go to :menuselection:`Administration --> DTLS/TLS Certificates`.
2. Click the :guilabel:`Add file` button.
3. Type your custom certificate name and description.
4. Drag and drop the certificate file or upload it using the :guilabel:`Browse` button.

 .. figure:: images/adding_a_certificate.*
    :align: center

    *Fig. Adding a certificate*

5. Optionally, mark the :guilabel:`Use expression for endpoint name` and enter an expression to be built from client certificate data that will be used for endpoint names of devices authorized by this ceritificate.
6. Click the :guilabel:`Save` button.

Managing a certificate
----------------------

At any time you can edit, download or remove your certificate.

.. note:: Certificates defined in the configuration files cannot be edited or removed.

1. To edit a certificate name and description:

 * Choose a certificate to edit and click the :guilabel:`Edit` link.
 * Introduce the required changes in the text fields.
 * Click the :guilabel:`Save` button.

2. To download a certificate:

 * Choose a certificate to download and click the :guilabel:`Download` link.
 * The certificate will be downloaded automatically to your drive.

3. To remove a certificate:

 * Choose a certificate to remove and click the :guilabel:`Remove` link.
 * Click the :guilabel:`Confirm` button.

Adding certificates to the Deny list
------------------------------------

To make Coiote DM reject a device certificate, you need to add it to the :guilabel:`Deny list`. To do that, follow these steps:

1. In the :menuselection:`Administration --> DTLS/TLS Certificates`, go to the :guilabel:`Deny list` tab and click :guilabel:`Add file`.
2. In the pop-up, specify name, description, and upload your certificate file by using the `drag & drop` function or the :guilabel:`Browse` button.
3. Click :guilabel:`Save`.
4. After the certificate has been added correctly to the list, you can remove, edit or download it in the same way as in the :guilabel:`Trusted certificates` list.

.. note:: The :guilabel:`Deny list` has precendence over the :guilabel:`Trusted certificates` list, so if a certificate is placed in both lists, the Server will reject it.