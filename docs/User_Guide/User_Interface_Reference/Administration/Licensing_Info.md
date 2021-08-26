# Licensing info

Read this panel to learn basic information about the license.

## Vocabulary

This section contains information about common terms used in this chapter:

   * License point - a point to be assigned to an incoming device, meaning that the device can be provisioned. Assignment can be permanent and is a one-time operation.
   * Pool - a group of license points.

## Layout

![Licensing info](images/10.png){: .center }

1. **System version** - a system build version.
2. **Client identifier** - a client identification data.
3. **License ID** - a license unique ID.
4. **Generated at** - the license generation date and time.
5. **Current time** - a current date and time.
6. **Valid until** - the license expiration date and time.
7. **Number of devices** - a total number of devices in the system.
8. **Provisioned devices/Limit** - a number of assigned license points/a maximum number of license points to be assigned (pool).
9. **Current/Licensed users count** - an actual number of users in the system/a maximum number of users.
10. **License status** - a status of the license:

    * **VALID** - the license verification successful.
    * **NOT VALID** - the license is invalid or expired.

11. **Additional functionalities** - a list of additional features covered by this license.
12. Click the **Load license** button, paste your license and confirm by clicking the **Load** button.

## Description

This section covers the main licensing module functionalities. The license is periodically verified by the system.

Following locations are checked for license data:

   * A file system (**only during startup**): file *license.dat* in the Coiote DM main directory.
   * A database: *[ump.globalProperties].acs.license*

If both locations contain license data, the preferred one is the newest one - containing the license with the newest generation data (it matters only during the system startup). If license data is missing or invalid, the system may allow only to log in and prompt you for entering proper data. The provisioning is stopped till the successful validation of the new license.
You can change this behavior using the system property: *acs.license.allowLoginWhenLicenseMissing*.

If by any reason at any time, license verification reports invalidity, device provisioning also stops (for every device in the system).
The main causes of this situation:

   * A license state changes into invalid.
   * A manual change in the license was made.

Reaching the limit mentioned in the number 8 will **not** stop the provisioning for already licensed devices. Moreover, new incoming devices will still be added to the system but they will not be provisioned (as there is no more license points left).

## Reclaiming a license point

You can reclaim (reassign) license points using one of the below options.

To reclaim a license point:

**Option 1**: Use the additional license option called *DEVICE_REMOVAL_ALLOWED* that allows you to reclaim a license point after removing a device.

**Option 2**: If you have a proper license you can schedule a task that automates points removal for inactive devices. It will check if there are any inactive devices and if there are, it will reclaim license points from them.

1. Open a license file and find the following license fields:

     * *inactivityDays* - states for how many days a device should not report to Coiote DM.
     * *removalPeriod* - states after how many days license points will be removed from inactive devices and can be used for another devices (a periodic task).

    Look at the example of the license fragment below:

    ```
    <License>
      <extensions>
        <extension>MULTITENANCY</extension>
        <extension>RESOURCE_CLUSTER</extension>
        <extension>DEVICE_REMOVAL_ALLOWED</extension>
        <extension>MASS_DEVICE_REMOVAL_ALLOWED</extension>
        <extension>MONITORING</extension>
        <extension>LIVE_TOUCH</extension>
        <extension>LIFETIME_LICENSE</extension>
      </extensions>
      <inactivityDays>120</inactivityDays>
      <removalPeriod>30</removalPeriod>
      <signature>example signature</signature>
    </License>
    ```

    Notice that this license states that after 30 days, license points for devices that were inactive for 120 days will be removed and they can be used for another devices.

    !!! note
        Notice that this task does not remove inactive devices from UMP. It only reclaims license points.

2. Decide on proper values in the license fields.

3. Optionally, configure a task that will remove inactive devices and automatically generate a report:

    * Open the `cdm.conf` file that can be found in the Coiote DM installation directory - `installdir/config/default` and `installdir/config/customername`.
    * In the file, find the following system properties in the *acs.license* fragment:

        * *removeDevices* - removes devices along with reclaimed points.
        * *reportRemoval* - generates a report from the removal procedure.

    * Set both system properties to *true*.

    The below example show the fragment of the file you should find in `cdm.conf`:

    ```
    acs {
        license {
            #subsequent alert interval in hours
            removeDevices = true
            reportRemoval = true
        }
    }
    ```

4. To see the report after task completion:

    * Log into Coiote DM and go to **Monitoring & Reporting —> Reports**.
    * On the list of reports, find **Device removal report**.

    !!! note
        The task described above cannot be run on demand.

## Additional functionalities of the system that are included in the license

The following functionalities can be included in the license:

   * A possibility to use a device removal to reassign the license point after device removal
   * Multitenancy
   * Monitoring
   * A possibility to buy a lifetime license.
