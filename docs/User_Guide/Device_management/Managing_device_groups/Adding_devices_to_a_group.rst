.. _QSG_Adding_devices_to_groups:

Adding devices to groups
========================
Learn how to add devices to groups.

**Option 1:**

1. Go to :guilabel:`Device inventory` and on the list of devices, find a device you want to add to a group and click it.
2. Depending on the type of a device go to:

 * The :guilabel:`General management` tab
 * The :guilabel:`Configuration` tab.

3. In the :guilabel:`Groups` panel click the :guilabel:`Add` link.

.. figure:: images/Adding_a_device_to_a_group_using_general_mgm.*
   :align: center

   *Fig. Adding a device to a group using the General management menu*

3. Select a group and click the :guilabel:`Save` link.


**Option 2:**

.. note:: Use this way of adding devices, if you want to add **all devices** from the list to a selected group.

1. Go to :guilabel:`Device inventory` and click the :guilabel:`Add to group` icon.

.. figure:: images/Adding_a_device_to_a_group_using_devices_mgm.*
   :align: center

   *Fig. Adding a device to a group using the Add to group icon*

2. From the list of groups select the group by clicking it.

  .. tip:: If you need to create a new group, click the :guilabel:`Add to new group` button, provide a name of the new group - it should start with *root* followed by a comma, for example, *root.fortests*, and optionally its description. Click the :guilabel:`Confirm` button.

3. Confirm your choice by clicking the :guilabel:`Yes` button.

**Option 3:**

1. Go to :menuselection:`Device actions --> Group membership management`.
2. In the left area, type or paste a list of devices (one device identity per line).
3. Click the :guilabel:`Verify` button to verify IDs. If the verification is not successful, click the :guilabel:`Edit` button and correct the identities marked in red.
4. Add groups to which you want to add devices by clicking the :guilabel:`Add` link and clicking the group name.

  .. tip:: To add many groups at the same time, select the :guilabel:`Edit groups` check box and paste each group in a new line.

.. figure:: images/Adding_a_device_to_a_group_using_membership_mgm.*
   :align: center

   *Fig. Adding a device to a group using the Group membership management menu*

5. Click the :guilabel:`Add` button.


**Option 4:**

To move devices from one group to another you can use migration rules. How to use them read in the :ref:`UG_MDG_Migrations` chapter.
