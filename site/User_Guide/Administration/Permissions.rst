.. |zws| unicode:: 0x200B .. zero width space
   :trim:

.. _Permissions:


===========
Permissions
===========

Coiote DM has simple permission structure based mostly on menu access. They can be also used in device configuration panels, quick fix actions or other system functions. This chapter covers only permission used by the core Coiote DM components. You can add your own permissions and use them in any customizable part of the system.

.. note:: Permissions can be managed by the :ref:`UIR_A_CSV_Import_&_Export_templates` view.

+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| Permission key                                                     | Description                                                                                 |
+====================================================================+=============================================================================================+
| acs |zws| .resources                                               | Allows user to manage stored resources - add and delete                                     |
|                                                                    | them. This permission also enables direct adding of new                                     |
|                                                                    | firmware from the **Firmware upgrade panel** in :guilabel:`Device inventory` if this        |
|                                                                    | is visible.                                                                                 |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| acs |zws| .resources |zws| .config |zws| .download                 | Allows user to download resources that are device config                                    |
|                                                                    | files and change their types.                                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin |zws| .changePassword                                        | Allows user to change a password.                                                           |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin |zws| .entityAdministrator                                   | Allows user to view CSV Import/Export templates and manage                                  |
|                                                                    | entities for which he has a permission.                                                     |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin |zws| .groups                                                | Allows user to manage groups of users in database entity                                    |
|                                                                    | administrator - change their permissions and select                                         |
|                                                                    | authentication policies. However this permission does                                       |
|                                                                    | not allow to change users bindings to groups.                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin |zws| .importExport                                          | Allows user to view administration import/export panel and                                  |
|                                                                    | perform operations for those entities he has a permission.                                  |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin |zws| .licensingInfo                                         | Allows user to view licensing information and upload new licenses                           |
|                                                                    | (if they comply with system key). Additionally he can load new                              |
|                                                                    | license when previous one is not valid anymore - other users                                |
|                                                                    | cannot log into the system in that situation.                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin |zws| .panelEditor                                           | Allows user to manage XML settings panels definition - edit and                             |
|                                                                    | override them from both device and group levels.                                            |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin |zws| .permissions                                           | Allows user to manage permissions stored in system. It does not                             |
|                                                                    | allow to change permission bindings for either a user or group                              |
|                                                                    | of users.                                                                                   |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin |zws| .schedules                                             | Allows user to manage defined task execution schedules.                                     |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin |zws| .taskTemplates                                         | Allows user to manage defined task templates.                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin |zws| .users                                                 | Allows user to manage users defined in system - change their                                |
|                                                                    | data and password. For modifying user permission and groups                                 |
|                                                                    | user needs to have additional permissions.                                                  |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin |zws| .usersLogs                                             | Allows user to browse activity logs of all users (in addition to                            |
|                                                                    | own activity). Additionally enables advanced activity report                                |
|                                                                    | and browsing validity of user activity entries.                                             |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| alerts |zws| .changeState                                          | Allows user to manually change alert state.                                                 |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| alerts |zws| .hideAll                                              | Allows user to manually hide multiple alerts from group                                     |
|                                                                    | alert management tab in single operation.                                                   |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .alertType                   | Allows user to export alert types entities in JSON format                                   |
|                                                                    | from the Import/Export panel.                                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .all |zws| .import           | Allows user to import entities in Import/Export panel when                                  |
|                                                                    | imported entity type is not specified.                                                      |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .device                      | Allows user to export device entities in JSON format from                                   |
|                                                                    | the Import/Export panel.                                                                    |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .group                       | Allows user to export device group entities in JSON format                                  |
|                                                                    | from the Import/Export panel.                                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .groupDispatchRule           | Allows user to export group dispatch rule entities in JSON                                  |
|                                                                    | format from the Import/Export panel.                                                        |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .import                      | Allows user to import entities from Import/Export panel.                                    |
|                                                                    | For each entity import additional permission is required.                                   |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .quickFix                    | Allows user to export quick fix entities in JSON format                                     |
|                                                                    | from the Import/Export panel.                                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .resource                    | Allows user to export resource entities in JSON format                                      |
|                                                                    | from the Import/Export panel.                                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .schedule                    | Allows user to export task schedule entities in JSON                                        |
|                                                                    | format from the Import/Export panel.                                                        |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .service                     | Allows user to export service definition entities in                                        |
|                                                                    | JSON format from the Import/Export panel.                                                   |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .settingValue                | Allows user to export SV definition entities in JSON                                        |
|                                                                    | format from the Import/Export panel.                                                        |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .simpleProperty              | Allows user to export simple system property entities in                                    |
|                                                                    | JSON format from the Import/Export panel.                                                   |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .task                        | Allows user to export ACS task entities in JSON format                                      |
|                                                                    | from the Import/Export panel.                                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .taskReport                  | Allows user to export task report entities in JSON                                          |
|                                                                    | format from the Import/Export panel.                                                        |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver |zws| .entities |zws| .taskTemplate                | Allows user to export task templates entities in JSON                                       |
|                                                                    | format from the Import/Export panel.                                                        |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devGroupsManagement                           | Allows user to open Group Management Center view.                                           |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devGroupsManagement |zws| .actions            | Allows user to view Actions tab in Group Management                                         |
|                                                                    | Center and execute actions on group level.                                                  |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devGroupsManagement |zws| .alerts             | Allows user to manage alerts on group level -                                               |
|                                                                    | browse alerts and define alerting rules.                                                    |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devGroupsManagement |zws| .devices            | Allows user to manage devices on group level.                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devGroupsManagement |zws| .devicesTypesStats  | Allows user to view device types statistics in groups.                                      |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devGroupsManagement |zws| .documents          | Allows user to manage document entities on group level.                                     |
|                                                                    | Applicable types of document are images, infographics,                                      |
|                                                                    | text files and binaries.                                                                    |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devGroupsManagement |zws| .firmware           | Allows user to manage device firmware on group level.                                       |
|                                                                    | Available actions are scheduling firmware upgrade for                                       |
|                                                                    | whole group and add new firmware resource for specific                                      |
|                                                                    | group (including device type groups).                                                       |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devGroupsManagement |zws| .historicalAnalysis | Allows user to perform historical analysis on group                                         |
|                                                                    | level. This operation are resource expensive, so                                            |
|                                                                    | this permission should be limited.                                                          |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devGroupsManagement |zws| .migration          | Allows user to manage group migration rules in Group                                        |
|                                                                    | Management Center view.                                                                     |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devGroupsManagement |zws| .services           | Allows user to manage services availability for devices                                     |
|                                                                    | in managed group.                                                                           |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devGroupsManagement |zws| .settingValues      | Allows user to manage setting value profile on group                                        |
|                                                                    | level. This enables modification of all functionalities                                     |
|                                                                    | that are based on setting value mechanism, including                                        |
|                                                                    | dialect selection.                                                                          |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devGroupsManagement |zws| .tasks              | Allows user to manage tasks on group level - this                                           |
|                                                                    | include browsing group task execution statistics.                                           |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devGroupsManagement |zws| .valueTracer        | Allows user to manage parameter value tracing tasks                                         |
|                                                                    | on group level. This also allows for generating value                                       |
|                                                                    | tracer reports.                                                                             |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devices                                       | Allows user to browse device inventory list.                                                |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devices |zws| .add                            | Allows user to manually add new device to Coiote DM in                                      |
|                                                                    | addition to automatic device adding on first visit                                          |
|                                                                    | (if corresponding new device default system behavior                                        |
|                                                                    | is configured).                                                                             |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devices |zws| .addDevicesToGroup              | Allows user to add and remove devices to group through                                      |
|                                                                    | device inventory list, quick actions or from group                                          |
|                                                                    | task report view. Also enables access to group                                              |
|                                                                    | membership management menu option.                                                          |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devices |zws| .changeDomain                   | Allows user to modify device domain when multitenancy is                                    |
|                                                                    | enabled in license.                                                                         |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devices |zws| .delete                         | Allows user to delete device from system. This operation                                    |
|                                                                    | cannot be performed on multiple devices at once.                                            |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .devices |zws| .edit                           | Allows user to modify basic device settings.                                                |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager |zws| .editSpecificProfile                           | Allows user to manage device properties (setting values on                                  |
|                                                                    | device level). Please note that this enables to modify behavior                             |
|                                                                    | of all system functionalities, for single device, that is based                             |
|                                                                    | on settings value profile.                                                                  |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .accessRules                                   | Allows user to manage access rules for devices. Additionally                                |
|                                                                    | allows for blacklisting and unblacklisting of devices from                                  |
|                                                                    | quick action.                                                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .deletingTask                                  | Allows user to delete tasks from either device level or group level                         |
|                                                                    | - if he has access to view those tasks.                                                     |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .devManagementCenter                           | Allows user to view device management center.                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .exportDevices                                 | Allows user to export devices inventory list as CSV or HTML                                 |
|                                                                    | table. Additionally allows for exporting devices identities from                            |
|                                                                    | group task report view.                                                                     |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .interactiveMode                               | Allows user to browse device parameter tree in interactive mode.                            |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .paramCopy                                     | Allows user to access the Copy parameters menu entry and its                                |
|                                                                    | functionality.                                                                              |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .taskHistory                                   | Allows user to view task executions for whole system (available                             |
|                                                                    | from menu option) and on system dashboard.                                                  |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .tasks |zws| .add                              | Allows user to add new tasks. For selecting task targets there                              |
|                                                                    | are specific permission.                                                                    |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .tasks |zws| .edit                             | Allows user to edit existing tasks.                                                         |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .tasks |zws| .priorityChange                   | Allows user to modify task priority while adding and editing task                           |
|                                                                    | or task template.                                                                           |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .tasks |zws| .rerun                            | Allows user to rerun existing task. This task may be either                                 |
|                                                                    | finished or even in progress.                                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .tasks |zws| .rrob                             | Allows user to modify rerun on bootstrap flag while adding                                  |
|                                                                    | and editing task or task template.                                                          |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .tasks |zws| .selectTargetDevice               | Allows user to schedule task on single device.                                              |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement |zws| .tasks |zws| .selectTargetGroup                | Allows user to schedule task on group of devices.                                           |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| diagnostics |zws| .historicalAnalysis                              | Allows user to perform system wide historical analysis.                                     |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .actions |zws| .addToFavorite                            | Allows user to manage his own favorite devices. Additionally                                |
|                                                                    | enables quick actions responsible for adding and removing                                   |
|                                                                    | devices to favorite list.                                                                   |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .actions |zws| .dumpDatamodel                            | Allows user to download data model on single device from quick                              |
|                                                                    | actions.                                                                                    |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .actions |zws| .quickXML                                 | Allows user to execute Quick XML action - scheduling XmlTask                                |
|                                                                    | with given configuration.                                                                   |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .countData                                               | Allows user to perform counts of entities in tables. It allows                              |
|                                                                    | both simple and extended counts if available.                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .documents                                               | Allows user to browse documents (infographics, texts, etc.)                                 |
|                                                                    | available for device.                                                                       |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .firmware                                                | Allows user to access the Firmware upgrade tab in :guilabel:`Device inventory` from which   |
|                                                                    | user can perform device firmware change.                                                    |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .fullVersion                                             | Allows user to access full version of :guilabel:`Device inventory`   as well as simplified. |
|                                                                    | Without this permission only :guilabel:`Device inventory` version that is accessible may    |
|                                                                    | be simplified dashboard.                                                                    |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .general                                                 | Allows user to access device general settings tab in :guilabel:`Device inventory`.          |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .historicalAnalysis                                      | Allows user to access historical analysis on device level.                                  |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .logs                                                    | Allows user to access device logs.                                                          |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .quickDiagnostic                                         | Allows user to access quick diagnostics panel showing basic                                 |
|                                                                    | device info.                                                                                |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .remoteAdmin                                             | Allows user to browse and modify device parameter tree.                                     |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .services |zws| .migrate                                 | Allows user to migrate services between devices.                                            |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .services |zws| .toggle                                  | Allows user to enable services on device level.                                             |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .services |zws| .configure                               | Allows user to manage services on device level.                                             |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .settings                                                | Allows user to access device settings tabs. For specific settings                           |
|                                                                    | tab additional permission may be needed.                                                    |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc |zws| .tasks                                                   | Allows user to browse device tasks.                                                         |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| smg |zws| .help                                                    | Allows user to access Coiote DM context help.                                               |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| smg |zws| .password_visible                                        | Allows user to view passwords in UMP. Otherwise                                             |
|                                                                    | password in panels will not be visible and user will                                        |
|                                                                    | be allowed only to modify it (if possible) without                                          |
|                                                                    | knowing current value.                                                                      |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| statistics |zws| .visible                                          | Allows user to access Network Operations Center style                                       |
|                                                                    | system statistics panel.                                                                    |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin.loginMessage                                                 | Allows user to access :menuselection:`Administration --> Terms of Service`.                 |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver.entities.loginMessage                              | Allows user to be able to import and export entities  connected with                        |
|                                                                    | :guilabel:`Terms of Service` from :menuselection:`Administrator --> Import/Export`.         |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement.tasks.advanceToGroup                                 | Allows user to advance a task to a group task.                                              |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement.tasks.copy                                           | Allows user to copy an existing task.                                                       |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement.tasks.pauseOnDevice                                  | Allows user to pause execution of a task on a single device.                                |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement.tasks.pauseOnGroup                                   | Allows user to pause execution of a task on a group of devices.                             |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager.devGroupsManagement.valueTracer                      | Allows user to view :menuselection:`Device groups --> Value tracking`.                      |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dataTransceiver.entities.csvImportConfiguration                    | Allows user to export CSV import configurations in                                          |
|                                                                    | :menuselection:`Administration --> Import/Export`.                                          |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc.settings.groupActionTrigger                                    | Allows user to use the :guilabel:`Group action trigger` menu in :guilabel:`Device actions`. |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin.extensions.thingworx                                         | Allows user to view the :guilabel:`PTC ThingWorx` panel in :guilabel:`Extensions`.          |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin.extensions.coiotedo                                          | Allows user to view the :guilabel:`Coiote IoT Data Orchestration` panel in                  |
|                                                                    | :guilabel:`Extensions`.                                                                     |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| admin.extensions.custom                                            | Allows user to view :guilabel:`My custom REST template` panel in :guilabel:`Extensions`.    |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc.software                                                       | Allows user to access the :guilabel:`LwM2M software` tab in :guilabel:`Device inventory`    |
|                                                                    | where they can manage software of a device.                                                 |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager.devGroupsManagement.software                         | Allows user to access the :guilabel:`LwM2M software` tab in :guilabel:`Device groups` where |
|                                                                    | they can manage software for a group of devices.                                            |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc.firmware                                                       | Allows user to access the :guilabel:`LwM2M firmware` tab in :guilabel:`Device inventory`    |
|                                                                    | where they can change firmware of a device.                                                 |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| deviceManager.devGroupsManagement.firmware                         | Allows user to access the :guilabel:`LwM2M firmware` tab in :guilabel:`Device groups` where |
|                                                                    | they can manage firmware for a group of devices.                                            |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc.deviceTest.sendEmailReport                                     | Allows user to use the :guilabel:`Submit results` button in                                 |
|                                                                    | :menuselection:`Device inventory --> LwM2M protocol tests`.                                 |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc.fotaSota.keepForever                                           | Allows user to select the :guilabel:`Forever` check box for the :guilabel:`Keep file`       |
|                                                                    | option when uploading a firmware or software file in :guilabel:`LwM2M firmware` and         |
|                                                                    | :guilabel:`LwM2M software` tabs.                                                            |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| dmc.deviceTest.includeBootstrapTestsUncheck                        | Allows user to deselect the :guilabel:`Add bootstrap tests results to summary` check box in |
|                                                                    | :menuselection:`Device inventory --> LwM2M protocol tests`.                                 |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| devManagement.tasks.bloodlineChange                                | Allows user to change bloodlines for tasks and task templates.                              |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+
| smg.logInAsClient                                                  | Allows user to see the :guilabel:`Log in as client` option in the :guilabel:`My account`    |
|                                                                    | list.                                                                                       |
+--------------------------------------------------------------------+---------------------------------------------------------------------------------------------+

.. _REST_API_Permissions:

Coiote DM REST API permissions
------------------------------

+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Permission key                                                                              | Description                                                                                                                                                              |
+=============================================================================================+==========================================================================================================================================================================+
| rest.base.paths.cachedDataModels.GET_deviceId                                               | Allows user to send the *GET /cachedDataModels/{deviceId}* method to get values for device data model parameters.                                                        |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.devices.POST                                                                | Allows user to send the *POST /devices* request to create a new device entity.                                                                                           |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.devices.DELETE_id                                                           | Allows user to send the *DELETE /devices/{id}* request to delete the device identity.                                                                                    |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.devices.GET                                                                 | Allows user to send the *GET /device* request to find the device.                                                                                                        |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.devices.GET_id                                                              | Allows user to send the *GET /devices/{id}* request to get the device by identity.                                                                                       |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.devices.PUT_id                                                              | Allows user to send the *PUT /devices/{id}* request to update the device entity.                                                                                         |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.domains.POST                                                                | Allows user to send the *POST /domains* request to create or update an existing domain.                                                                                  |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.domains.DELETE_id                                                           | Allows user to send the *DELETE /domains/{id}* request to delete a domain.                                                                                               |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.domains.GET                                                                 | Allows user to send the *GET /domains* request to find the domain.                                                                                                       |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.domains.GET_id                                                              | Allows user to send the *GET /domains/{id}* request to get the domain by identity.                                                                                       |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.domains.PUT_id                                                              | Allows user to send the *PUT /domains/{id}* request to update the existing domain.                                                                                       |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.groups.POST                                                                 | Allows user to send the *POST /groups* request to create or update an existing group.                                                                                    |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.groups.DELETE_id                                                            | Allows user to send the *DELETE /groups/{id}* request to delete the group.                                                                                               |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.groups.GET                                                                  | Allows user to send the *GET /groups* request to find the group.                                                                                                         |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.groups.GET_id                                                               | Allows user to send the *GET /groups/{id}* request to get the group entity by identity.                                                                                  |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.groups.PUT_id                                                               | Allows user to send the *PUT /groups/{id}* request to update the existing group.                                                                                         |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.monitoring.POST                                                             | Allows user to send the *POST /monitoring* request to create a new monitoring instance.                                                                                  |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.monitoring.GET_monitoringName                                               | Allows user to send the *GET /monitoring/{monitoringName}* request to get the monitoring configuration.                                                                  |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.monitoring.GET                                                              | Allows user to send the *GET /monitoring* request to to find the monitoring instance.                                                                                    |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.monitoring.DELETE_monitoringName                                            | Allows user to send the *DELETE /monitoring/{monitoringName}* to remove the monitoring instance.                                                                         |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.monitoring.PUT_monitoringName                                               | Allows user to send the *PUT /monitoring/{monitoringName}* request to update the monitoring configuration.                                                               |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.monitoringData.aggregates.numerical.GET_monitoringName_groupId_resourceName | Allows user to send the *GET /monitoringData/aggregates/numerical/{monitoringName}/{groupId}/{resourceName}* request to get aggregated numerical resource data.          |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.monitoringData.aggregates.textual.GET_monitoringName_groupId_resourceName   | Allows user to send the *GET /monitoringData/aggregates/textual/{monitoringName}/{groupId}/{resourceName}* request to get aggregated textual resource data.              |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.monitoringData.samples.GET_monitoringName_deviceId                          | Allows user to send the *GET /monitoringData/samples/{monitoringName}/{deviceId}* request to get all samples for a given monitoring instance within a given time period. |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.settingValues.PUT                                                           | Allows user to send the *PUT /settingValues* to create or update Setting Value.                                                                                          |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.settingValues.GET                                                           | Allows user to send the *GET /settingValues* to find Setting Value.                                                                                                      |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.settingValues.deviceProfile.GET_deviceId                                    | Allows user to send the *GET /settingValues/deviceProfile/{deviceId}* to get the Setting Values profile for a given device.                                              |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.settingValues.groupProfile.GET_groupId                                      | Allows user to send the *GET /settingValues/groupProfile/{groupId}* to get the Setting Values profile for a given group.                                                 |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.taskReports.GET                                                             | Allows user to send the *GET /taskReports* to find Task Reports.                                                                                                         |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.taskReports.GET_taskId_deviceId                                             | Allows user to send the *GET /taskReports/{taskId}/{deviceId}* to get Task Report for a given task and device.                                                           |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.tasks.DELETE_id                                                             | Allows user to send the *DELETE /tasks/{id}* to delete a task.                                                                                                           |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.tasks.GET                                                                   | Allows user to send the *GET /tasks* to find the task.                                                                                                                   |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.tasks.GET_id                                                                | Allows user to send the *GET /tasks/{id}* to get the task by identity.                                                                                                   |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.tasks.PUT_id                                                                | Allows user to send the *PUT /tasks/{id}* to update the task.                                                                                                            |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.tasks.callback.DELETE_taskId_callbackName                                   | Allows user to send the *DELETE /tasks/callback/{taskId}/{callbackName}* to delete callback registered on the given task identity.                                       |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.tasksFromTemplates.group.POST_groupId                                       | Allows user to send the *POST /tasksFromTemplates/group/{groupId}* to create a task that will be executed on all devices in a given group.                               |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.tasksFromTemplates.deviceBlocking.POST_deviceId                             | Allows user to send the *POST /tasksFromTemplates/deviceBlocking/{deviceId}* to create a blocking task that will be executed on a device with a given identity.          |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.tasksFromTemplates.device.POST_deviceId                                     | Allows user to send the *POST /tasksFromTemplates/device/{deviceId}* to create a task that will be executed on a device with a given identity.                           |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.users.GET                                                                   | Allows user to send the *GET /users* to find a user using a condition.                                                                                                   |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.users.GET_id                                                                | Allows user to send the *GET /users/{id}* to get the user data by ID.                                                                                                    |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.base.paths.users.DELETE_id                                                             | Allows user to send the *DELETE /users/{id}* to remove the user by ID.                                                                                                   |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| rest.custom.paths.register.POST                                                             | Alows user to send the *POST /register* to create a user with all dependencies (a domain and group).                                                                     |
+---------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

