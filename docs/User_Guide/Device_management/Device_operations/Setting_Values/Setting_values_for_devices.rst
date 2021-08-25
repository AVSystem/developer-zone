.. _QSG_Setting_values_for_devices:

Adding setting values for devices
=================================

Setting values (SVs) are properties associated with a device. Every device has its properties.

Adding setting values to a device
---------------------------------

To add a setting value to a device:

1. Go to :guilabel:`Device inventory` and from the list of devices, select a device.
2. Depending on the type of a device go to:

 * The :guilabel:`General management` tab
 * The :guilabel:`Configuration` tab.

3. In the :guilabel:`Properties` panel click the :guilabel:`Add` link. An empty row adds on the end of the list.
4. Provide a name into the :guilabel:`Name` field and a value into the :guilabel:`Value` field.

.. figure:: images/Adding_setting_values_to_a_device.*
   :align: center

   *Fig. Adding setting values to a device*

4. Click the :guilabel:`Save` link.
5. To delete a setting value, find it on the list and click the :guilabel:`Delete` link.
6. To get setting values from the device, click the :guilabel:`Compute setting value profile` link.

Adding setting values to a group of devices
-------------------------------------------

To add a setting value to a group of devices:

1. Go to :guilabel:`Device groups` and from the list of groups, select a group.
2. Go to :guilabel:`Profiles` and click the :guilabel:`Add` link.
3. Provide a name into the :guilabel:`Name` field and a value into the :guilabel:`Value` field.

.. figure:: images/Adding_setting_values_to_a_group_of_devices.*
   :align: center

   *Fig. Adding setting values to a group of devices*

4. To override values of setting values with the same name in all subgroups of the selected group, select the :guilabel:`Locked` check box.
5. Click the :guilabel:`Save` link.
6. To delete a setting value, find it on the list and click the :guilabel:`Delete` link.
7. To get setting values from the device, click the :guilabel:`Compute setting value profile` link.
8. To use the same setting values that are used in another group, click the :guilabel:`Copy from` link:

 * Select a group and click the :guilabel:`Copy` link.
 * Select check boxes next to setting values you want to copy.
 * Click the :guilabel:`Copy` link.

Adding secret setting values to a group of devices
--------------------------------------------------

To create a secret setting value (hidden behind asterisks) for a group of devices:

1. Go to :guilabel:`Device groups` and from the list of groups, select a group.
2. Go to :guilabel:`Profiles` and click the :guilabel:`Add secret` link.
3. Provide a name into the :guilabel:`Name` field and a value into the :guilabel:`Value` field. The value will be hidden behind asterisks.

.. figure:: images/Adding_secret_setting_values_to_a_group_of_devices.*
   :align: center

   *Fig. Adding secret setting values to a group of devices*

4. Click the :guilabel:`Save` link.
5. To view the hidden value, click the eye icon.
