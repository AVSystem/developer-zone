# Task configuration
==================

Coiote DM has a generic GUI for general task configuration. You can use it to create and edit tasks.

 .. figure:: images/12.*
   :align: center

   *Fig. Task configuration GUI*

.. _Task type or template:

---------------------
Task type or template
---------------------

To create a task you need to select its type.

 * Search - insert a search string and press :kbd:`Enter` (you can type any fragment of a phrase and search is case insensitive).
 * Types tree - select the task type from the tree by clicking it.

.. figure:: images/2.*
   :align: center

   *Fig. Task type or template*

Every task has its own unique configuration. This configuration is divided into three separate sections:

 * :guilabel:`Task settings` - common task settings.
 * :guilabel:`Task properties` - you can add different properties to the task.
 * :guilabel:`Task specific configuration` - each task has a unique set of parameters. Remember that you can use expressions in the task configuration.

.. _Task Summary:

------------
Task summary
------------

When you select a task in the :guilabel:`Task type summary` panel you can see its name and a short description.

 .. figure:: images/3.*
   :align: center

   *Fig. Task summary*

.. _Task Target:

-----------
Task target
-----------

The task can be applied on a single device or a device group. To choose task target use the :guilabel:`Task target` panel.

 .. figure:: images/Task_target.*
   :align: center

   *Fig. Task target*

 * :guilabel:`Selected device` - a current target - an identity of the device or a group name.
 * :guilabel:`Select device`/:guilabel:`Select group` - click it to select a new device or group.

.. note:: You must specify a target to save the task.

-------
Actions
-------

After you enter the whole configuration, you should save it. To do it use the :guilabel:`Actions` panel.

 .. figure:: images/Actions_LwM2M.*
   :align: center

   *Fig. Actions for LwM2M devices*

 * :guilabel:`Add new task` - use it to create a new task instance for a specified target.
 * :guilabel:`Add and execute` - use it to add and execute the task immediately without checking if a device works.
 * :guilabel:`Save as template` - use it to store all task configurations as a task template for later use.
 * :guilabel:`Cancel` - use it to discard the task without saving.

.. _Task Settings:

-------------
Task settings
-------------

 .. figure:: images/5.*
   :align: center

   *Fig. Task settings*

1. :guilabel:`Active` - it indicates if a task should be executed. When you are not sure about the task configuration save it without selecting this flag and activate the task later. By default, it is set to *true*.
2. :guilabel:`Anonymous` - use a check box to indicate whether you want to specify a name for a task. This name is used in UI and logs - the task with the name is easier to track. This name does not have to be unique.
3. :guilabel:`Name` - if you do not select the :guilabel:`Anonymous` check box, you can specify a name in this field. It is recommended to use only alphanumeric characters and '_'.
4. :guilabel:`Comments` - use it to write comments and descriptions to explain what this task does. It is shown as a last column in the task table view.
5. :guilabel:`Schedule` - use it to specify a unique schedule for the task or select an existing one.
6. :guilabel:`Schedule connection` - use it to schedule a connection request at the first time slot that applies for a selected schedule.
7. :guilabel:`Execute` - when and how the task will be executed:

 * :guilabel:`Once` - the task will be executed only once:

   * :guilabel:`Execution condition` - use it to create an execution condition using expressions that will allow for task execution when particular conditions are fulfilled. For example: *${device.property.PPPUsername  == 'testValue'}*.

 * :guilabel:`Once and repeat` - the task will be executed repeatedly on the basis of selected options:

   * :guilabel:`Execution condition` - a condition for this section will work only when you select one of options - :guilabel:`Automatic restart` or :guilabel:`Repeat on bootstrap`. Otherwise, the task will be saved as a single execution task. By default, :guilabel:`Automatic restart` is selected when you click the :guilabel:`Execution condition` field.
   * :guilabel:`Repeat on register` - it indicates if the task should be restarted when BOOTSTRAP event occurs. By default, it is set to *false*.
   * :guilabel:`Automatic restart` - it indicates if the task will be restarted in each session with the device. This means that it will be executed many times - not once as usual. It is useful for tasks that suppose to monitor some parameters. By default, it is set to *false*.

8. :guilabel:`Applies to subgroups` - this option is available only if a group target is selected. If it is set to *true*, the task will be applied for all devices that belong to the selected group and all its subgroups. If it is set to *false*, only devices that are directly in the selected group will run this task. By default, it is set to *false*.
9. :guilabel:`Logging level` - use it to set a logging level for the task, only messages with a severity equal or higher than the given one will be stored in a task log.
10. :guilabel:`Priority` - use it to set an integer value of a current task priority. This is a Unix-style value so a lower value means a higher priority. Default value can be found in a task library.
11. :guilabel:`Min. interval (sec)` - use it to set a minimal interval between task executions. That means that if a session occurs earlier than last execution time plus this interval, the task will not be executed.
12. :guilabel:`Domain` - use it to select the multitenancy domain for the task.

 .. important:: Remember that you can create the task only in your multitenancy domain.

13. :guilabel:`Bloodline` - use it to select to which bloodline a task will be assigned or add your own bloodline by typing its name and clicking :kbd:`Enter`. The bloodline functionality is a way of overwriting inherited tasks and if there are several tasks in the same bloodline only one will be executed (that is, the task created directly on the device or the task belonging to the group with the highest priority) while the device contacts the system.
14. :guilabel:`Discard execution details` - if it is set to *true*, no report will be created after executing the task. This implies that task will be executed in each session (like in the :guilabel:`Automatic restart` option). It is useful for stateless tasks. By default, it is set to *false*.

.. _Task Priorities:

---------------
Task priorities
---------------

All tasks have a priority specific to their type. For example *RefreshDataModelTask* (defined on a root group) has a priority 1 and *SetValuesTask* has a priority 10 (default priority).
Priorities are used to control an order of tasks execution. They are designed to avoid possible problems with device management.

Tasks are ordered by:

* **Priorities** - to ensure that some tasks execute before other, even if they were scheduled later. The lower numeric priority, the higher priority task has.
* **CreationDate** - to ensure proper task execution for tasks with the same priority. For example, you create two **SetValuesTask** tasks: (*A.B.C=1*) and (*A.B.C=2*) in this order. There is a guarantee that result is *A.B.C=2* and never *A.B.C=1* if both succeed and no other tasks were applied during the LwM2M session.

.. Note:: All newly created tasks have by default priority set to **10**. They will be executed in an order of creation.

If the task has :guilabel:`Automatic restart` or :guilabel:`Discard execution details` options selected, other tasks with a lower priority will only wait for its start and will execute afterwards.

.. _Xml task editor:

---------------
XML task editor
---------------

Use XML task editor to configure a custom task using predefined tags.

.. figure:: images/tags_view.*
   :align: center

   *Fig. Adding tags*

To add a new tag, click a parent tag (1), then click the new tag (2), note that not all tags are always available. To fill tag properties use the form at the right site of the editor (3).

.. figure:: images/tags_options.*
   :align: center

   *Fig. Using tag options*

To delete, copy, paste or rename a tag, right-click it and select one of the available options (1).

.. figure:: images/tags_drag_and_drop.*
   :align: center

   *Fig. Changing an order of tags*

To move tag with their child tags, use the drag and drop functionality:

1. Press left mouse button.
2. Without releasing move the tag to the selected place.
3. Release the mouse button.

.. _Data_model_key_prompts:

----------------------
Data model key prompts
----------------------

To make using data model keys in tasks simpler, the system prompts you when you complete the :guilabel:`Data model key` field.
If it is possible, Coiote DM displays a number of possible object instances. What is more, all keys and object instances that are
available on the selected device are shown in bold.

.. figure:: images/Datamodel_key_prompts.*
   :align: center

   *Fig. Data model key prompts for a device*

When you create a task for a group, Coiote DM is not able to suggest you values of object instances so you have to type them manually.
The place where you need to type the number of the object instance is marked as **{i}**.

.. figure:: images/Datamodel_key_prompts_group_of_devices.*
   :align: center

   *Fig. Data model key prompts for a group of devices*


.. _XML Editor modes:

----------------
XML editor modes
----------------
You can switch editor modes by selecting the :guilabel:`Edit raw XML` check box. There are two available modes of the XML editor, the first one is a tree editor which is user-friendly however, for advanced users can be too slow.

.. figure:: images/10.*
   :align: center

   *Fig. Tree editor*

The second one is the raw XML editor which is dedicated to advanced users.

.. figure:: images/11.*
   :align: center

   *Fig. Raw editor*
