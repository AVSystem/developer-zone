.. _Default_system_tasks:

====================
Default system tasks
====================

Default system tasks are factory-installed items that help the platform work more seamlessly and efficiently. However, there are cases when some of them become redundant, and they may be deactivated to save disk space or reduce network traffic.
System tasks are grouped according to their importance in the system operation:

Essential
---------

 .. warning:: Do not remove these tasks as it will significantly impact system operation and performance.

 * ``EnsureObservationTask`` - ensures that observations are applied on a LwM2M device (if removed, observations will be forgotten, for example in case of server restart).
 * ``MonitoringTask`` - ensures that monitoring is executed on a device.
 * ``ClearCustomLogLevel`` - ensures that devices do not use high-verbosity log levels for too long. Essential for conserving disk space.

Important
---------

 .. warning:: Removing these tasks is discouraged, but the system performance will not be significantly affected by their absence.

 * ``datamodelRefresher`` - causes the LwM2M device's datamodel to be fetched each time the device registers to the platform. Although it is not recommended, it can be turned off to limit network traffic.

Optional
--------

 .. tip:: You may safely remove these tasks as their impact on the system is marginal.

 * ``ipTrackerSetup`` - tracks which device IDs were tied to particular IP addresses. It is of minor importance, and can be safely turned off to conserve disk space. Might be useful for diagnostics.

 .. note:: The :guilabel:`Last known WAN IP` table in the :guilabel:`Quick diagnostics` panel in the Device Management Center works regardless of whether this task is turned on or off.