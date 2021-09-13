# Managing LwM2M software

## Installing software for LwM2M devices
=====================================

Read this instruction to learn how to install software on LwM2M devices.

To install software on a device:

1. Go to :guilabel:`Device inventory`.
2. From a list of devices, select a device on which you want to install software.
3. Go to the :guilabel:`LwM2M software` tab.
4. Click the :guilabel:`Schedule new software installation` link.
5. Configure your installation:

 * From a list of available software files, select a file that you want to install. If you want to add a new file, then:

   * Click the :guilabel:`Upload file` button.
   * Click the :guilabel:`Upload` button and select a file.
   * Into the :guilabel:`Name` field, type a name of the file or leave the name added automatically.
   * Optional: Into the :guilabel:`Description` field, type a description.
   * Decide for how long you want to keep a file in the system by selecting a proper check box.
   * Click the :guilabel:`Save` button.

   .. figure:: images/Uploading_software_file.*
      :align: center

      *Fig. Uploading a new software file*

 .. tip:: You can also upload a software file using :guilabel:`Resources` but remember that you have to select :guilabel:`software` from the :guilabel:`Category` list to make this file visible in the :guilabel:`LwM2M software` tab.

 * Decide on a timeout of your installation (how much time can elapse before it fails) by typing a proper value into the :guilabel:`Installation timeout in seconds` field.
 * Decide on a delivery method by selecting a proper option from the :guilabel:`Image delivery method` list.
 * Decide on a delivery protocol by selecting a proper option from the :guilabel:`Image delivery protocol` list.
 * Provide a proper URI into the :guilabel:`Base URI` field.
 * Select the :guilabel:`Use quota` check box to restrict resources available for the task.
 * Decide on a schedule for the installation. If you want the installation to start right away, from the :guilabel:`Select schedule` list, select :guilabel:`always`.

  .. figure:: images/Installing_LwM2M_software.*
     :align: center

     *Fig. Installing software*

6. Click the :guilabel:`Upgrade` button.

## Uninstalling software packages for LwM2M devices

Read this instruction to learn how to uninstall software packages for LwM2M devices.

To uninstall a software package from a device:

1. Go to :guilabel:`Device inventory`.
2. From a list of devices, select a device for which you want to uninstall the software package.
3. Go to the :guilabel:`LwM2M software` tab.
4. In the :guilabel:`Installed software` table, find the software package you want to uninstall.
5. Click the :guilabel:`Uninstall` link.

 .. figure:: images/Uninstalling_software_for_LwM2M_devices.*
    :align: center

    *Fig. Uninstalling software*

6. If you need, then you can reduce a configured timeout of an uninstalling task by providing a proper value.
7. Click the :guilabel:`Uninstall` button.

## Upgrading software packages for LwM2M devices

Read this instruction to learn how to upgrade software packages for LwM2M devices.

To upgrade a software package on a device:

1. Go to :guilabel:`Device inventory`.
2. From a list of devices, select a device for which you want to upgrade the software package.
3. Go to the :guilabel:`LwM2M software` tab.
4. In the :guilabel:`Installed software` table, find the software package you want to upgrade.
5. Click the :guilabel:`Upgrade` link.

 .. figure:: images/Upgrading_software_for_LwM2M_devices.*
    :align: center

    *Fig. Upgrading software*

6. Configure your upgrade:

 * From a list of available software files, select a file that you want to use for upgrade. If you want to add a new file, then:

   * Click the :guilabel:`Upload file` button.
   * Click the :guilabel:`Upload` button and select a file.
   * Into the :guilabel:`Name` field, type a name of the file or leave the name added automatically.
   * Optional: Into the :guilabel:`Description` field, type a description.
   * Decide for how long you want to keep a file in the system by selecting a proper check box.
   * Click the :guilabel:`Save` button.

  .. figure:: images/Uploading_software_file.*
     :align: center

     *Fig. Uploading a new software file*

 .. tip:: You can also upload a software file using :guilabel:`Resources` but remember that you have to select :guilabel:`software` from the :guilabel:`Category` list to make this file visible in the :guilabel:`LwM2M software` tab.

 * Decide on a timeout of your upgrade (how much time can elapse before it fails) by typing a proper value into the :guilabel:`Upgrade timeout in seconds` field.
 * Decide on a delivery method by selecting a proper option from the :guilabel:`Image delivery method` list.
 * Decide on a delivery protocol by selecting a proper option from the :guilabel:`Image delivery protocol` list.
 * Provide a proper URI into the :guilabel:`Base URI` field.
 * Select the :guilabel:`Use quota` check box to restrict resources available for the task.
 * Decide on a schedule for your upgrade. If you want the upgrade to start right away, from the :guilabel:`Select schedule` list, select :guilabel:`always`.

7. Click the :guilabel:`Upgrade` button.
