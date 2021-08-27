.. _Upgrading_software_packages_for_LwM2M_groups:

Upgrading software packages for LwM2M groups
============================================

Read this instruction to learn how to upgrade software packages for groups of LwM2M devices.

To upgrade a software package on a group of devices:

1. Go to :guilabel:`Device groups`.
2. From a list of groups, select a group for which you want to uninstall the software package.
3. Go to the :guilabel:`LwM2M software` tab.
4. Click the :guilabel:`Upgrade` link.
5. Configure your upgrade:

 * Into the :guilabel:`Package name` field, type a name of a package.
 * Into the :guilabel:`Package version` field, type a package version. Otherwise all packages that have the same name will be upgraded.

 .. figure:: images/Upgrading_software_for_groups.*
    :align: center

    *Fig. Upgrading software*

6. Click the :guilabel:`Next` button.
7. Continue configuring your upgrade:

 * From a list of available software files, select a file that you want to use for upgrade. If you want to add a new file:

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

  .. figure:: images/Configuring_LwM2M_upgrade_for_groups.*
     :align: center

     *Fig. Configuring upgrade*

8. Click the :guilabel:`Upgrade` button.

**See also:**

 * :ref:`Installing_software_for_LwM2M_groups`
 * :ref:`Uninstalling_software_packages_for_LwM2M_groups`