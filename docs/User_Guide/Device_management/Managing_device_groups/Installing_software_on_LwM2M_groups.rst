.. _Installing_software_for_LwM2M_groups:

Installing software for LwM2M groups
====================================

Read this instruction to learn how to install software on groups of LwM2M devices.

To install software on a group of devices:

1. Go to :guilabel:`Device groups`.
2. From a list of groups, select a group for which you want to install the software package.
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

  .. figure:: images/Installing_LwM2M_software_for_groups.*
     :align: center

     *Fig. Installing software*

6. Click the :guilabel:`Upgrade` button.

**See also:**

 * :ref:`Uninstalling_software_packages_for_LwM2M_groups`
 * :ref:`Upgrading_software_packages_for_LwM2M_groups`