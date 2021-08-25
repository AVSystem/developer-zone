.. _Task Spawning:

-------------
Task spawning
-------------


Basic Idea
^^^^^^^^^^

Task spawning is an additional feature of XmlTask that grants you a possibility to easily configure advanced workflows basing on conditions, group association and whole expression mechanisms used in XmlTask. XmlTask is capable of spawning other tasks using <task> tag. Example real-world scenario is when devices are not stable and need to be restarted automatically after one week of uptime. Without task spawning, solution would require group migration, thus introducing unnecessary complexity to the solution. With task spawning you can easily define an Xml task that checks device uptime and schedules a RebootTask when uptime exceeds some explicit limit.


Technical Details
^^^^^^^^^^^^^^^^^

Spawned tasks are not separate tasks but work within a parent task sandbox. When you use task spawning, parent task keeps all necessary details in its report. Additional report is also available in the underneath database but it is not shown in the system UI.

Task spawning approach prevents from creating excess of task instances, due to including several of them in one spawned XmlTask and performing group operations. This is especially critical for periodic tasks or tasks within for/while loops.

.. warning:: If a child task fails parent task is marked as failed as well.

For example, if you perform FirmwareUpgrade with config restoration and either step is unsuccessful, then whole task automatically fails.


Examples
^^^^^^^^


Backup configuration, Firmware Upgrade, Restore configuration
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

Some devices reset their configuration after execution of firmware upgrade. In these cases operator has to perform backup of configuration, conduct firmware upgrade and then  restore configuration from the backup. Example below shows how to do it using task spawning.

.. code-block:: cpp

	<config>
	  <task class="com.avsystem.ump.acs.task.BackupConfigurationTask">
	    <config intervalTime="1" />
	  </task>
	  <task class="com.avsystem.ump.acs.task.FirmwareUpgradeTask">
	    <config resourceId="74" />
	  </task>
	  <task class="com.avsystem.ump.acs.task.RestoreConfigurationTask">
	    <config fromDate="2013.05.01 13:47:14" toDate="2020.07.04 13:47:14" />
	  </task>
	</config>


Reboot device after uptime exceeding one week
"""""""""""""""""""""""""""""""""""""""""""""

Example below shows configuration of Xml task that reboots device after uptime exceeds one week (168 hours)

.. code-block:: cpp

	<config>
	  <get key="InternetGatewayDevice.DeviceInfo.UpTime" output="uptime" />
	  <if expr="${#num(uptime) &gt; 3600*24*7}">
	    <task class="com.avsystem.ump.acs.task.RebootTask" />
	  </if>
	</config>
