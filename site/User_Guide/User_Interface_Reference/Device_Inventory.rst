.. _UIR_Device_Inventory:

==========================
Device inventory interface
==========================

.. figure:: images/5.*
   :align: center

   *Fig. Device inventory*

1. `Device search and navigation`_
2. `Device list`_

.. _Device search and navigation:

Device search and navigation
----------------------------

.. figure:: images/6.*
   :align: center

   *Fig. Device search and navigation*

1. :guilabel:`Add new device` - use it to manually add a device to a server. Learn more in the :ref:`Add new device <Add_new_device>` section below or see the :ref:`UG_T_Adding_devices` chapter.
2. :guilabel:`Add bootstrap details` - use it to manually add a device to a server using the Bootstrap server. Learn more in the :ref:`Add bootstrap details <Add_new_device>` section below or see the :ref:`UG_T_Adding_devices` chapter.
3. :guilabel:`Advanced` - click it to open the advanced search mode.
4. Search operator - you can select which operator you want to use to search for devices. There are four operators available (*==*, *!=*, *starts with*, and *contains*). By default *contains* is selected. Operator selection is saved automatically for a given column when you change the operator (the administrator can change this setting). If no preferences were saved for a given column, then the operator is the same as for the previous column. If an administrator sets a particular operator in the configuration file, you will not be able to change it.

5. Search field allowing to search by:

 * Identity
 * OUI
 * Model name
 * Software version
 * WAN IP

 You can switch between this criteria by clicking the magnifying glass in a proper column - it turns green.

6. Filter selection - you can select a saved filer here. You can see only filters belonging to your domain.
7. Listing options:

 * Items per page
 * Navigation through device list pages

8. Additional actions buttons:

 * :guilabel:`CSV Export` - use it to export all devices that you can see on the list to the CSV file.
 * :guilabel:`Lightweight table view` - use it to export the list of devices to a simple table in the HTML format.
 * :guilabel:`Devices count` - use it to see how many devices are on the list.
 * :guilabel:`Device count - advanced` - to learn more read the :ref:`Devices count - advanced <Devices_count_advanced>` section.
 * :guilabel:`Add to group` - use it to add all devices that you can see on the list to a particular group.
 * :guilabel:`Remove from group` - use it to delete all devices that you can see on the list from a selected group.
 * :guilabel:`Change devices domain` - use it to change a domain for all devices that you can see on the list.
 * :guilabel:`Advanced export to CSV` - use it to configure how the list of devices should look like after exporting it to the CSV file (to learn more read the :ref:`Exporting devices to CSV <DM_Exporting_devices_to_CSV>` chapter).
 * :guilabel:`Import devices from CSV` - use it to import devices from the CSV file.

.. _Device list:

Device list
-----------

.. figure:: images/7.*
   :align: center

   *Fig. Device list*

1. :guilabel:`Identity` - a link to Device Management Center.
2. :guilabel:`Description` - a description of the origins of device information.
3. :guilabel:`WAN Interface IP` - a WAN IP address of the device UI.
4. :guilabel:`Manufacturer` - a manufacturer name.
5. :guilabel:`Model name` - a model name obtained from a data model.
6. :guilabel:`Software version` - a version of software.
7. :guilabel:`Last visit time` - time when the selected device last visited the server.
8. :guilabel:`Devices management` - an indicator if management is enabled for the device.

--------------
Device buttons
--------------

.. figure:: images/8.*
   :align: center

   *Fig. Device buttons*

Click a row with a device to see the additional buttons:

 * :guilabel:`DMC` - use it to go directly to :guilabel:`Device Management Center`.
 * :guilabel:`Edit` - use it to edit the details of a device. It also allows you to disable management for a chosen device. For a detailed instruction, please see :ref:`UG_UIR_DM_Disabling_device_management_for_single_devices`.

 * :guilabel:`Remove` - use it to remove the device.

  .. warning:: Removing devices cannot be reverted.

---------------
Advanced search
---------------

.. warning:: Use this function with caution as it may impact system performance.

After clicking the :guilabel:`Advanced` button located on the left side of the search box, you can enable the advanced search mode.

.. figure:: images/9.*
   :align: center

   *Fig. Advanced search*

1. A button to switch between a basic and advanced search.
2. Tabs:

 * :guilabel:`Current search` - use it to create and save an advanced filter.
 * :guilabel:`Search history` - use it to use filters that were used before.
 * :guilabel:`Select filter` - use it to manage filters saved earlier.

3. :guilabel:`Save search` - use it to create a filter for a particular domain and save it by clicking the :guilabel:`Create filter` link.
4. An order of the results settings.
5. Buttons for removing simple conditions.
6. :guilabel:`Add search criteria` - use it to add simple conditions.
7. :guilabel:`Expression filtering` - use it to enable an advanced search criteria. After clicking the check box, you can define your search further by typing *${*.

.. figure:: Device_Inventory/images/Advanced_search_advanced_criteria_t.*
   :align: center

   *Fig. Expression filtering*

8. :guilabel:`Search devices` - use it to search for devices.

.. _Devices_count_advanced:

Devices count - advanced
------------------------

To see how many devices connected to Coiote DM between established thresholds, click the :guilabel:`Devices count - advanced` icon. The count is based on devices last visit. The statistics are created after clicking the :guilabel:`Count` button and they are displayed as a summary in a table. They are also visualized as a pie chart. You can then download this information as a pie chart image file by clicking the :guilabel:`Image` link, or as a CSV file by clicking the :guilabel:`Download CSV` link.

.. figure:: Device_Inventory/images/Count_devices_advanced.*
   :align: center

   *Fig. Devices count - advanced*

#. :guilabel:`Last visit time ranges thresholds` - a point in time that will divide the statistics. You can click the :guilabel:`Delete` icon to remove a threshold, and use the calendar to select a proper date.
#. :guilabel:`Add time threshold` - use it to add another time threshold.
#. :guilabel:`Count` - use it to trigger creation of statistics and display of a table (4) and a pie chart (5).
#. Table - a table displaying a count of devices between defined time thresholds.
#. Chart - a pie chart is a graphical representation of data from the table (4).
#. :guilabel:`Image` - use this button to open a new window with only a pie chart image displayed.
#. :guilabel:`Download CSV` - use this button to save the table as a CSV file.

.. _Add_new_device:

Add new device/bootstrap details window
---------------------------------------

  .. note:: The :guilabel:`Add bootstrap details` window contains the same options as the :guilabel:`Add new device` window. 

.. figure:: Device_Inventory/images/add_device_window.*
   :align: center

   *Fig. Add new device window*

1. :guilabel:`Endpoint name` - choose the name that your device will be identified by. 
2. :guilabel:`Security` - choose the preferred security mode from among the following options:

   * :guilabel:`NoSec` - no security mode is set, it can be used only in test environments.
   * :guilabel:`Pre-Shared Key` - communication between the device and the server will be encrypted. To decrypt the communication, :guilabel:`PSK identity` and :guilabel:`PSK` are needed.
   * :guilabel:`External Pre-Shared Key` - the device's Pre-Shared Key is stored externally. Here, only DTLS ID must be provided.
   * :guilabel:`Certificate` - security is established using a certificate.

3. :guilabel:`Pre-Shared Key` - enter your Pre-Shared Key. It can be specified either in plain text or hexadecimal format.
4. :guilabel:`DTLS identity` - specify the name with which the device identifies itself during the DTLS handshake. It is recommended to use endpoint name as DTLS identity.

**See also:**

.. toctree::
   :maxdepth: 1

   Device_Inventory/Device_Management_Center
