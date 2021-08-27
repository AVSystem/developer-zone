.. _Unknown and Unauthorized Devices:

================================
Unknown and unauthorized devices
================================

The panel :guilabel:`Unknown and unauthorized devices` is accessible from the main menu
:menuselection:`Device actions --> Unknown and unauthorized devices`.

-----------
Description
-----------

Use the :guilabel:`Unknown and unauthorized devices` panel to see a list of devices that visited Coiote DM but were not allowed to access. UMP counts such events and lists them in a table.
Access denial happens when a device is not created in the system, a device handling policy is set to **DoNotCreateDevicePolicy** and the device visits the system. As the system is unable to create such a device (because of the policy) it will treat it as unknown and deny access.

Layout
^^^^^^

A list of unknown devices is presented in a table:

.. figure:: images/9.*
   :align: center

   *Fig. Unknown and unauthorized devices GUI*

1. **Search box** - use it to search by a currently selected column (green magnifying glass).
2. **Identity** - an identity of an unknown device.
3. **IP Address** - an IP address of the unknown device.
4. **Creation time** - time when a device visited the system for the first time and was denied access.
5. **Last visit time** - time when a device visited the system for the last time and was denied access.
6. **Event type** - a cause of a denial (currently only an unknown device is supported).
7. **Event count** - shows how many times this event occurred.

**See also:** :ref:`Access Rules`