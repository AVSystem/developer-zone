# Handling invalid messages from devices

To overcome problems with invalid messages from devices **compatibility extensions** were introduced into the basic LwM2M dialect. By default, they are disabled. They increase tolerance for improper (with regard to the protocol) behavior of devices. Without them, such devices would not be able to communicate with Coiote DM. The below compatibility extensions are available:

    lwm2m {
     compatibilityExtensions = {
      omitInstanceNumberForSingletonObjects = false
      leshanContentFormats = false
      executableResourcesReturnedInTlv = false
    }
          }


 * ``omitInstanceNumberForSingletonObjects = false`` - allows for a situation when a server asks for a singleton object, for example: */3* and the device responds with a list of resources encoded in TLV. Normally, it is expected that resources are nested in an object instance with id = 0.

 * ``leshanContentFormats = false`` - accepts responses that use an old Leshan content format: TlvCode = 1542 and JsonCode = 1543.

 * ``executableResourcesReturnedInTlv = false`` - accepts READ responses that contain some values for Executable resources.
 * ``replaceOutgoingContentFormatCodes`` - allows arbitrary remapping of content format codes sent to a device. Affects ``Content-Format`` and ``Accept`` CoAP options.
 * ``replaceIncomingContentFormatCodes`` - allows arbitrary remapping of content format codes received from the device.

 !!! warning
     You should not enable compatibility extensions for properly working devices.

## Enabling a proper compatibility extension

To enable a compatibility extension:

1. Go to **Administration -> Device dialects**
2. On the dialects tree, find a proper place to add a dialect.
3. Create a new dialect for your device by clicking the **Add** link.
4. Include the dialect your device uses currently.
5. Copy a needed fragment of the compatibility extension and set it to *true*:

    include "original_dialect"
    lwm2m {
     compatibilityExtensions = {
      executableResourcesReturnedInTlv = false
    }
          }

6. Click the **Save all changes** link. Your device should work properly now.
