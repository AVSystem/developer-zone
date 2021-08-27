.. include:: /icons.rst

.. _UIR_Device_Groups:

=====================
Device groups details
=====================

Groups were introduced to simplify control and operation on several devices simultaneously. Each device can belong to many groups. Each group can include as many devices as possible, thus relationship many-to-many takes place. Grouping may be done by device manufacturer, geographic position, or any other relation.
:guilabel:`Device groups` is similar to :guilabel:`Device inventory`, however there are several differences such as migration rules that have sense only for a group context.

Interface
---------

 .. figure:: images/Device_groups_overview.*
    :align: center

    *Fig. Interface*

1. :guilabel:`Edit` and :guilabel:`Add` buttons - use them to edit or add new groups:

 .. figure:: images/Editing_a_group.*
    :align: center

    *Fig. Editing a group*

 * Use the :guilabel:`Edit group` panel to edit a certain group.

   * :guilabel:`Delete` - use it to delete a group.
   * :guilabel:`Detach all devices from group` - use it to delete all devices from the selected group.
   * :guilabel:`Domain` - use it to set multitenancy options. To learn more about multitenancy, read the :ref:`UG_M_Managing_Multitenancy` chapter.
   * :guilabel:`Priority` - use it to set a priority for a group. Remember that the higher number you set, the higher priority the group has.
   * :guilabel:`Description` - use it to add comments for a group. The comments will be displayed in :guilabel:`Device inventory` in :guilabel:`General management` in the :guilabel:`Groups` panel.
   * :guilabel:`Save` - use it to save changes in the :guilabel:`Domain`, :guilabel:`Priority` and :guilabel:`Description` fields.

 .. figure:: images/Adding_a_group.*
    :align: center

    *Fig. Adding a group*

 * Use the :guilabel:`Add group` window to add a subgroup to the currently active group.

   * :guilabel:`Name` - use it to name your subgroup. This field is obligatory.
   * :guilabel:`Priority` - use it to set a priority for the subgroup you create. Remember that the higher number you set, the higher priority the group has.
   * :guilabel:`Description` - use it to add comments for the new subgroup. The comments will be displayed in :guilabel:`General management` in the :guilabel:`Groups` panel.
   * :guilabel:`Add` - use it to add the new subgroup.

**See also:** :ref:`QSG_Managing_groups`

2. Basic search - use it to look for groups. A provided search string is applied to the whole shown data and you cannot limit searching to a single column. In case of search for groups you need to type a group name (or its part) and press :kbd:`Enter` to start searching. Results will be shown on the groups tree with a green background. Additionally, all child and parent groups of the marked group will be shown to easily browse through the group hierarchy.

 .. figure:: images/Groups_search.*
    :align: center

    *Fig. Basic search*

3. Groups list - a list of available groups.
4. Tabs - use them to perform different operations on groups.
5. Monitoring - a list of monitoring configured for a selected group.
6. Tabs configuration - use it to decide which tabs you want to see and in what order they should be displayed. If you want to display the tabs drag them from :guilabel:`Available tabs` to :guilabel:`Selected tabs`. To reorder the tabs, drag them from one place to the other. You need to always save changes by clicking the :guilabel:`Confirm` button. To restore a default view, click the :guilabel:`Restore defaults` button.

 .. figure:: images/Device_groups_tabs.*
    :align: center

    *Fig. Tabs configuration*

Available tabs
--------------

The following tabs are available in :guilabel:`Device groups`:

 * :ref:`UIR_Devices`
 * :ref:`UIR_Monitoring`
 * :ref:`UIR_Monitoring_alerts`
 * :ref:`UIR_Actions`
 * :ref:`UIR_Services`
 * :ref:`UIR_Migrations`
 * :ref:`UIR_Group_tasks`
 * :ref:`UIR_Profiles`
 * :ref:`UIR_Documents`
 * :ref:`UIR_Alerts`
 * :ref:`UIR_Statistics`
 * :ref:`UIR_Historical_analysis_groups`
 * :ref:`UIR_Setting_panels`
 * :ref:`UIR_LwM2M_Software`
 * :ref:`UIR_LwM2M_Firmware`
 * :ref:`UIR_Value_tracking`

.. _UIR_Devices:

Devices
^^^^^^^

Use the :guilabel:`Devices` tab to see what devices belong to a particular group.

.. figure:: images/Devices_tab.*
   :align: center

   *Fig. Devices*

1. The :guilabel:`Include subgroups` check box.
2. Search use it to search using different parameters:

 * Identity (aka Device ID)
 * OUI
 * Model name
 * Software version
 * WAN Interface IP

 Switching between the search fields is available by clicking the magnifying glass in the corresponding column. Upon clicking the magnifying glass turns green and a search tip at the search bar changes to the corresponding parameter name. You can use the :guilabel:`Select filter` list to select a ready search that was previously saved in your domain.

 .. note:: Click the magnifying glass to enable the advanced search mode.

3. Listing options:

 * Items for page
 * Navigation through device list pages

4. Additional actions buttons:

 * :guilabel:`CSV Export` - use it to export the list of devices to a simple table in the HTML format.
 * :guilabel:`Lightweight table view` - use it to export all devices that you can see on the list to the CSV file.
 * :guilabel:`Devices count` - use it to see how many devices are on the list.
 * :guilabel:`Devices count - advanced` - to learn more, read the **Devices count - advanced** section in User Guide.
 * :guilabel:`Add to group` - use it to add all devices that you can see on the list to a particular group.
 * :guilabel:`Remove from group` - use it to delete all devices that you can see on the list from a selected group.
 * :guilabel:`Add device to current group` - use it to add a selected device to a currently open group.
 * :guilabel:`Change devices domain` - use it to change a domain for all devices that you can see on the list (to learn more about multitenancy, read the :ref:`UG_M_Managing_Multitenancy` chapter).
 * :guilabel:`Advanced export to CSV` - use it to configure how the list of devices should look like after exporting it to the CSV file.

.. _UIR_Monitoring:

Monitoring
^^^^^^^^^^

Use the :guilabel:`Monitoring` tab to see a real-time status of the most important parameters obtained from devices of a certain group.

.. figure:: images/Monitoring_tab.*
   :align: center

   *Fig. Monitoring*

The view is divided into two panels:

 * :guilabel:`Enabled for this group` - it shows monitoring configured for a group you selected.
 * :guilabel:`Disabled for this group` - it shows monitoring configured for other groups.

1. To see charts of the particular monitoring, click the monitoring name.
2. To learn what a particular KPI means, hover over it. To learn more about KPI, read the :ref:`OG_MM_Monitoring Type Specific Settings` chapter.
3. To remove the monitoring from the group you selected, click the :guilabel:`ON` icon.
4. To add the monitoring to a group you selected, click the :guilabel:`OFF` icon.

.. _UIR_Monitoring_alerts:

Monitoring alerts
^^^^^^^^^^^^^^^^^

Use the :guilabel:`Monitoring alerts` tab to see a list of devices for which a particular alert was raised for a selected monitoring. If there is no monitoring set on the particular group, the :guilabel:`Monitoring` and :guilabel:`Alert` lists are disabled.

.. figure:: images/Monitoring_alerts_tab.*
   :align: center

   *Fig. Monitoring alerts*

To learn how to display a list of devices read the :ref:`UG_MDG_Viewing_monitoring_alerts` chapter.

.. _UIR_Actions:

Actions
^^^^^^^

Use the :guilabel:`Actions` tab to perform quick actions on devices.

.. warning:: Be careful when you create Quick Fix on a group because if there is something wrong with it, many devices will be affected.

.. figure:: images/Actions_tab.*
   :align: center

   *Fig. Actions*

.. _UIR_Services:

Services
^^^^^^^^

Use the :guilabel:`Services` tab to enable services for a selected group of devices.

.. figure:: images/Services_tab.*
   :align: center

   *Fig. Services*

.. _UIR_Migrations:

Migrations
^^^^^^^^^^

Use the :guilabel:`Migrations` tab to migrate devices.

 .. tip:: Syntax of each migration rule is checked while you type it. What is more, if the migration rule is not correctly performed; then the field in which you typed it is marked in red and when you hover over the field you will see a description of an error.

 .. figure:: images/Migration_task_tab.*
    :align: center

    *Fig. Migrations*

 * :guilabel:`Add new migration rule` - use it to  add a new rule.
 * :guilabel:`Save` - click it to save the rule.
 * :guilabel:`Discard changes` - use it to cancel changes made in the rule.
 * :guilabel:`Active` - use it to enable a migration rule.
 * :guilabel:`Condition` - type a condition into this field.
 * :guilabel:`Destination group` - type a group to which devices should be migrated.
 * :guilabel:`Remove from group` - use it to delete a device from a group after the rule evaluation.
 * :guilabel:`Apply in subgroups` - use it to execute the rule also for devices belonging to subgroups of the source group.
 * :guilabel:`Notes` - use it to type important information about the rule.
 * :guilabel:`Delete` - use it to delete the rule.

To learn how to add the rule and to see some examples, read the :ref:`UG_MDG_Migrations` and :ref:`UG_MDG_Setting_up_migration_rules` chapters.

.. _UIR_Group_tasks:

Group tasks
^^^^^^^^^^^

Use the :guilabel:`Group tasks` tab to schedule a task on a group level. This is a very good way to perform tasks for many devices.

.. figure:: images/Group_tasks_tab.*
   :align: center

   *Fig. Group tasks*

When you select any task in the table, actions buttons (1), as well as :guilabel:`Configuration`
(2) and :guilabel:`Executions` (3) panels appear.

1. **Actions buttons**:

 * :guilabel:`Edit` - use it to open a task editor for a current task.
 * :guilabel:`Copy` - use it to open the task editor for a copy of the current task.
 * :guilabel:`Delete` - use it to delete the current task.
 * :guilabel:`Rerun task` - use it to rerun the current task.
 * :guilabel:`Rerun failed` - use it to rerun the current task on devices where it initially failed.
 * :guilabel:`Execution log` - use it to see additional information about task execution.
 * :guilabel:`Edition log` - use it to see additional information about edition of the task.
 * :guilabel:`Show reports` - use it to see reports of task execution for every device in the current group.
 * :guilabel:`Show statistics view` - use it to see detailed statistics of the task.

2. :guilabel:`Configuration` - use it to see main configuration of the task.
3. :guilabel:`Executions` - use it to see paused and finished tasks:

 * :guilabel:`Paused` - use it to pause a task on a particular device or a group of devices. If a task is paused on any of devices you will see them in a table. To go directly to a device on which the task is paused, click the link in the :guilabel:`Target` column.
 * :guilabel:`Finished` - click the :guilabel:`Compute statistics` button to see a chart. You can save a chart as an image by clicking the :guilabel:`Save as image` button.

You can activate and deactivate a task by clicking the icon in the column next to the :guilabel:`ID` column.

**See also:**

 * :ref:`UG_T_Device_and_group_tasks`
 * :ref:`UG_T_Adding_tasks_to_groups`

.. _UIR_Profiles:

Profiles
^^^^^^^^

Use the :guilabel:`Profiles` tab to define setting values (SVs) on the group level.

 .. figure:: images/Profiles_tab.*
    :align: center

    *Fig. Profiles*

 * :guilabel:`Add` - use it to add a new setting value.
 * :guilabel:`Save` - use it to save the setting value.
 * :guilabel:`Compute setting value profile` - use it to get setting values from the device.
 * :guilabel:`Copy from` - use it to copy setting values used in another group.
 * :guilabel:`Search` - use it to search for setting values by their name or value. Type a phrase and press :kbd:`Enter`.
 * :guilabel:`Locked` - use it to override the value of SVs with the same name in all subgroups of the selected group.
 * :guilabel:`Delete` - use it to delete the setting value.

To learn how to add a setting value to a group of devices, read the :ref:`QSG_Setting_values_for_devices` chapter.

.. _UIR_Documents:

Documents
^^^^^^^^^

Use the :guilabel:`Documents` tab to see a list of documents that are relevant to a selected group.

.. figure:: images/Documents_tabs.*
   :align: center

   *Fig. Documents*

The tab is divided into two panels:

1. A list of added documents with a search field.

 * Search - click the magnifying glass icon in the column to search using its content, for example, if you click the magnifying glass icon in the :guilabel:`Extension`
   column, type an extension you want to search for into the search field and press :kbd:`Enter`.
 * :guilabel:`To show` - click one of the options to display particular data:

   * :guilabel:`Just current group` - to show documents from a current group only
   * :guilabel:`Current group with subgroups` - to show documents from the current group and from all subgroups
   * :guilabel:`Only inherited` - to show documents inherited from parent groups.

 * Table with documents - a list of available documents. If you want to go directly to a group to which a particular document is added, click the link in the :guilabel:`Link to a group` column.

2. :guilabel:`Edit` - the panel where you can add, save, remove or download documents:

 * :guilabel:`Name` - a name of a document that will be displayed in the above table.
 * :guilabel:`Extension` - the extension of the document.
 * :guilabel:`Description` - a short description of the document.
 * :guilabel:`Type` - a type of the document, for example, a text or image.
 * :guilabel:`Inherit` - use it to make the document visible in subgroups.
 * :guilabel:`Upload` - use it to upload the document to the system after you complete proper fields.
 * :guilabel:`Add` - use it to activate the panel which allows you to add the document.
 * :guilabel:`Save` - use it to save changes done to the document.
 * :guilabel:`Remove` - use it to remove the document from the system.
 * :guilabel:`Download` - use it to download the document on your disk.

To learn how to add, download and delete documents, read the :ref:`UG_MDG_Managing_groups_documents` chapter.

.. _UIR_Alerts:

Alerts
^^^^^^

Use the :guilabel:`Alerts` tab to manage alerts and view their details. For more information see :ref:`Alerts`.

.. figure:: images/Alerts_tab.*
   :align: center

   *Fig. Alerts*

.. _UIR_Statistics:

Statistics
^^^^^^^^^^

Use the :guilabel:`Statistics` tab to analyze statistical data from different groups. Using this tab you can see how many devices of a particular manufacturer are in the system.

 .. figure:: images/Statistics_tab.*
    :align: center

    *Fig. Statistics*

 * Click the chart to see detailed information. To come back to the previous view, click the :guilabel:`All` link.
 * :guilabel:`Include devices from subgroups` - use it to see also devices from subgroups.
 * :guilabel:`Download inventory report` - use it to download an inventory report in the HTML format.
 * :guilabel:`Image` - use it to save the chart as an image.
 * :guilabel:`CSV` - use it to save statistics as a CSV file.
 * :guilabel:`Full screen` - use it to see the chart in full screen.

.. _UIR_Historical_analysis_groups:

Historical analysis
^^^^^^^^^^^^^^^^^^^

Use :guilabel:`Historical analysis` tab to view some of the statistical data from :ref:`UIR_Historical_Analysis`, filtered by device groups.

.. figure:: images/Historical_analysis_tab.*
   :align: center

   *Fig. Historical analysis - groups*

1. List of device groups - it allows you to select a group from the device group structure defined on the server. A :ref:`OG_Search` box is also available to filter out groups matching the entered sub-string.

 .. note:: Historical analysis for a device group is *always* performed on the selected group as well as all its subgroups.

2. List of available charts - analysis types that can be performed for device groups are listed. Clicking a name of an analysis displays its properties panel, as well as its chart area.
3. Analysis properties - configuration options for the selected analysis, allowing to configure a time range for the chart, and other settings specific for a given analysis.
4. :guilabel:`Image`/:guilabel:`CSV` - use it to save the currently displayed chart as an image file, or data used to generate the chart as the CSV file.
5. Chart area - it displays an interactive chart, presenting historical data.

 .. tip:: As this panel is a variant of the :ref:`UIR_Historical_Analysis` screen, refer there for the detailed description of the interface.

**Differences from global historical analysis**

| There are two major differences in :ref:`UIR_Historical_Analysis` available in the global context:

 * **Performance** - while the global historical analysis is a simple aggregation of data, which can be performed very quickly, in the case of the device group context, every data sample needs to be filtered based on the device group assignment. This is a computationally heavy operation. That is why, a progress window is displayed while calculating chart data.
 * **Available analysis set** - some of the analysis types do not make sense or are prohibitively expensive to implement for device groups. For that reason, only selected analyses are available in this scope:

   * :guilabel:`Session distribution`
   * :guilabel:`Session per devices devices`
   * :guilabel:`Session distribution per type`
   * :guilabel:`Task edition history`

.. _UIR_Setting_panels:

Setting panels
^^^^^^^^^^^^^^

Use the :guilabel:`Setting panels` tab to edit devices properties. To learn more about the tab, read the :ref:`Setting Panels` chapter.

.. figure:: images/Setting_panels_tab.*
   :align: center

   *Fig. Setting panels*

**See also:**

 * :ref:`UG_UIR_DG_GMP_Group_types`
 * :ref:`Managing_device_groups`

.. _UIR_LwM2M_Software:

LwM2M software
^^^^^^^^^^^^^^

Use the :guilabel:`LwM2M software` tab to install, uninstall, upgrade, activate or deactivate software on a group of devices. This tab is for LwM2M devices.

.. figure:: images/Device_groups_LwM2M_software_interface.*
   :align: center

   *Fig. LwM2M software*

1. :guilabel:`Installation history` - a list of operations that were performed because of installation, uninstallation, activation, deactivation or upgrade. You can click any ID to see more details of operations.

 * :guilabel:`Activate/Deactivate` - use this link to activate or deactivate software.
 * :guilabel:`Upgrade` - use this link to upgrade software on a group of LwM2M devices. To learn how to do this, read the :ref:`Upgrading_software_packages_for_LwM2M_groups` chapter.
 * :guilabel:`Uninstall` - use this link to uninstall software on the group of LwM2M devices. To learn how to do this, read the :ref:`Uninstalling_software_packages_for_LwM2M_groups` chapter.

2. :guilabel:`Schedule new software installation` - use this link to install new software on the group of LwM2M devices. To learn how to do this, read the :ref:`Installing_software_for_LwM2M_groups` chapter.
3. Use this panel to see more details about the task, the panel refreshes automatically for the selected task to provide current data.

 * :guilabel:`Delete` - use it to delete a task from a history.
 * :guilabel:`Rerun task` - use it to run again the task.
 * :guilabel:`Rerun failed` - use it to run again a failed task.
 * :guilabel:`Execution log` - use it to see more details about execution of the task.
 * :guilabel:`Show reports` - use it to see reports about the task.

.. _UIR_LwM2M_Firmware:

LwM2M firmware
^^^^^^^^^^^^^^

Use the :guilabel:`LwM2M firmware` tab to upgrade firmware. This tab is for LwM2M devices.

.. figure:: images/Device_groups_LwM2M_firmware_upgrade_interface.*
   :align: center

   *Fig. LwM2M firmware*

1. :guilabel:`Installation history` - a list of operations that were performed because of firmware upgrade. You can click any ID to see more details of operations.
2. :guilabel:`Schedule new firmware upgrade` - use this link to upgrade firmware on the group of LwM2M devices. To learn how to do this, read the :ref:`Upgrading_firmware_for_LwM2M_groups` chapter.
3. Use this panel to see more details about the task, the panel refreshes automatically for the selected task to provide current data.

 * :guilabel:`Delete` - use it to delete a task from a history.
 * :guilabel:`Rerun task` - use it to run again the task.
 * :guilabel:`Rerun failed` - use it to run again a failed task.
 * :guilabel:`Execution log` - use it to see more details about execution of the task.
 * :guilabel:`Show reports` - use it to see reports about the task.

.. _UIR_Value_tracking:

Value tracking
^^^^^^^^^^^^^^

Use this :guilabel:`Value tracking` tab to observe resources for a group of devices. If resource observation is enabled on a single device; then settings configured on a group to which this device belongs are not taken into consideration (settings from the device are used).

.. figure:: images/Value_tracking_GUI.*
   :align: center

   *Fig. Value tracking*

1. :guilabel:`Add new` - use it to add a resource that you want to observe on a group.
2. A list of observed resources.
3. :guilabel:`Edit` - use it to edit settings of observation.
4. :guilabel:`Remove` - use it to remove the observation of the resource. Observation will be removed from all devices in the group except for devices whose observation was set individually from the devices level.
