# Managing LwM2M software

## Installing software for LwM2M devices

Read this instruction to learn how to install software on LwM2M devices.

To install software on a device:

1. Go to **Device inventory**.
2. From a list of devices, select a device on which you want to install software.
3. Go to the **LwM2M software** tab.
4. Click the **Schedule new software installation** link.
5. Configure your installation:

  * From a list of available software files, select a file that you want to install. If you want to add a new file, then:

    * Click the **Upload file** button.
    * Click the **Upload** button and select a file.
    * Into the **Name** field, type a name of the file or leave the name added automatically.
    * Optional: Into the **Description** field, type a description.
    * Decide for how long you want to keep a file in the system by selecting a proper check box.
    * Click the **Save** button.
      ![Uploading a new software file](images/Uploading_software_file.png "Uploading a new software file"){:style="float: left;margin-right: 1177px;margin-top: 17px;margin-bottom: 17px"}

        !!! tip
            You can also upload a software file using **Resources** but remember that you have to select **software** from the **Category** list to make this file visible in the **LwM2M software** tab.

    * Decide on a timeout of your installation (how much time can elapse before it fails) by typing a proper value into the **Installation timeout in seconds** field.
    * Decide on a delivery method by selecting a proper option from the **Image delivery method** list.
    * Decide on a delivery protocol by selecting a proper option from the **Image delivery protocol** list.
    * Provide a proper URI into the **Base URI** field.
    * Select the **Use quota** check box to restrict resources available for the task.
    * Decide on a schedule for the installation. If you want the installation to start right away, from the **Select schedule** list, select **always**.

      ![Installing software](images/Installing_LwM2M_software.png "Installing software")

6. Click the **Upgrade** button.

## Uninstalling software packages for LwM2M devices

Read this instruction to learn how to uninstall software packages for LwM2M devices.

To uninstall a software package from a device:

1. Go to **Device inventory**.
2. From a list of devices, select a device for which you want to uninstall the software package.
3. Go to the **LwM2M software** tab.
4. In the **Installed software** table, find the software package you want to uninstall.
5. Click the **Uninstall** link.
 ![Uninstalling software](images/Uninstalling_software_for_LwM2M_devices.png "Uninstalling software")
6. If you need, then you can reduce a configured timeout of an uninstalling task by providing a proper value.
7. Click the **Uninstall** button.

## Upgrading software packages for LwM2M devices

Read this instruction to learn how to upgrade software packages for LwM2M devices.

To upgrade a software package on a device:

1. Go to **Device inventory**.
2. From a list of devices, select a device for which you want to upgrade the software package.
3. Go to the **LwM2M software** tab.
4. In the **Installed software** table, find the software package you want to upgrade.
5. Click the **Upgrade** link.
   ![Upgrading software](images/Upgrading_software_for_LwM2M_devices.png "Upgrading software")
6. Configure your upgrade:
     - From the list of available software files, select a file that you want to use for upgrade. If you want to add a new file, then:
         * Click the **Upload file** button.
         * Click the **Upload** button and select a file.
         * Into the **Name** field, type a name of the file or leave the name added automatically.
         * Optional: Into the **Description** field, type a description.
         * Decide for how long you want to keep a file in the system by selecting a proper check box.
         * Click the **Save** button.
           ![Uploading a new software file](images/Uploading_software_file.png "Uploading a new software file"){:style="float: left;margin-right: 1177px;margin-top: 17px;margin-bottom: 17px"}

            !!! tip
                You can also upload a software file using **Resources** but remember that you have to select **software** from the **Category** list to make this file visible in the **LwM2M software** tab.

         * Decide on a timeout of your upgrade (how much time can elapse before it fails) by typing a proper value into the **Upgrade timeout in seconds** field.
         * Decide on a delivery method by selecting a proper option from the **Image delivery method** list.
         * Decide on a delivery protocol by selecting a proper option from the **Image delivery protocol** list.
         * Provide a proper URI into the **Base URI** field.
         * Select the **Use quota** check box to restrict resources available for the task.
         * Decide on a schedule for your upgrade. If you want the upgrade to start right away, from the **Select schedule** list, select **always**.

7. Click the **Upgrade** button.
