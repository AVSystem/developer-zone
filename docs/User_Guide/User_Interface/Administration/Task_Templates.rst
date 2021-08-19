.. include:: /icons.rst

.. _UIR_A_Task_Templates:

Task templates
==============

Task templates are pre-configured tasks stencil that can be used as a foundation for specific task configuration.
This is a feature intended to save your time, if you need to frequently schedule similar tasks or want to execute complicated ones.
Common practice is to provide **Quick Fix** actions for common problems.
The Task template editor is available in :menuselection:`Administration --> Task templates`.

Layout
------

.. figure:: images/12.*
   :align: center

   *Fig. Task templates GUI*

Except setting :guilabel:`Template settings` (1), (notice the multitenancy domain - which allows you to create a template for a specific tenant, more in :ref:`UG_M_Managing_Multitenancy`) creating a task template is like creating a new task.
A comprehensive description can be found in :ref:`UG_Tasks`.

1. **Template settings** - a template configuration.

  * **Template name** - a unique name of a task template, it should briefly explain what the template is all about (as it is displayed in the **Task type or template** (4) section) (a required field).
  * **Template domain** - a multitenancy domain string (more details in :ref:`UG_M_Managing_Multitenancy`).
  * **Description** - a human readable description of a purpose of this template.
  * **Quick Fix action** - select this field if you wish to make the **Quick Fix** from that template. It means that the template will be accessible from :guilabel:`Device Management Center`, :ref:`UIR_Device_Groups`. To learn how to create the Quick Fix action from the task template, read the :ref:`Creating_Quick_Fix_from_a_task_template` chapter.
  * **Action name** - if the :guilabel:`Quick Fix action` is selected then you must provide a name for Quick Fix - it must be unique and will be displayed on UI, this name can be different than the template name (a required field).
  * :guilabel:`Require confirmation` - select it to ask for confirmation before the task is executed.
  * **Connection request behavior** - it indicates when a connection request should be executed, select one of the options:

    * **Never execute** - Coiote DM never executes the connection request.
    * **Always ask** - Coiote DM asks each time you select the action, if the connection request should be executed.
    * **Always execute** - Coiote DM always executes the connection request to speed up the provisioning process.

  * **Action required permission** - it informs if a particular permission is required to perform the task.
  * **Action icon** - select an icon for the action (more details in `Picking an icon for Quick Fix`_).
  * **Prefer restart** - Coiote DM restarts the action instead of creating the new one. It is useful for frequently used actions.

  .. tip:: If you select the :guilabel:`Prefer restart` option, a task history will contain only the last execution of **Quick Fix**, however all historic executions will be available in :ref:`UIR_Historical_Analysis`.

2. **Task type or template** - use it to select an existing template, edit it or select the task type to add the new template.
3. **Task settings** - use it to set settings of the task that will be created from that template (more details in :ref:`UG_Tasks`).
4. **Actions** - actions that can be performed on a currently edited task template:

  * :guilabel:`Save` - use it to save the current template.
  * :guilabel:`Save as new template` - use it to add a new task template (available if you modify the template settings).
  * :guilabel:`Delete` - use it to delete the current template.
  * :guilabel:`Cancel` - use it to cancel current edition without saving changes.

5. **Task type summary** - detailed information about a task type (more details in :ref:`UG_Tasks`) and a currently selected task template.
6. **Task specific configuration** - use it to configure a task.
7. **Task template parameters** - a list of parameters that you must provide before a task will be created.
8. **Add parameter** - use this button to configure additional parameters, click the :guilabel:`Add` to add a new entry.
9. **Task configuration** - it contains an XML editor (more details in :ref:`Xml task editor`).

.. _UIR_Adding_a_new_task_template:

Adding a new task template
--------------------------

To add the task template go to :menuselection:`Administration --> Task templates` and:

1. Provide a name.
2. Select a domain (more details in :ref:`UG_M_Managing_Multitenancy`).
3. Add a template description.
4. Optional: Select **Quick Fix** and fill required fields.
5. Select the task type (you can use the search).
6. Provide a task configuration.
7. Save the task template form by clicking the :guilabel:`Add new template` button or discard changes by clicking the :guilabel:`Cancel` button.

Picking an icon for Quick Fix
-----------------------------

.. figure:: images/21.*
   :align: center

   *Fig. Adding a new task template*

1. Search for an icon name.
2. Click a row to select the icon.
3. Click to close a window without selection.

Template use
------------
Templates can be used in the following contexts:

* **Global** - :menuselection:`Device actions --> Tasks --> Add new task`
* **Group** - :menuselection:`Device groups --> Group tasks --> Add task`
* **Device** - :menuselection:`Device inventory --> Device Management Center --> Device tasks --> Add new task`


Executing Quick Fix
-------------------
Quick Fixes can be triggered form the :guilabel:`Device inventory` view or from the Customer Care view.
If the Quick Fixes actions require an additional input, then a proper prompt will be displayed.

An example of the **Quick Fix** action input:

.. figure:: images/25.*
   :align: center

   *Fig. Executing Quick Fix*

Saving a task as a template
---------------------------

.. figure:: images/22.*
   :align: center

   *Fig. Creating a template*

1. Specify the task type.
2. Optional: Select one of predefined task templates shown in a violet font.
3. Configure task settings including general parameters of the task execution. More details in :ref:`UG_Tasks`.
4. Provide a task specific configuration including task commands.
5. Tasks can be saved as a task template from the standard task editor by clicking the :guilabel:`Save as template` button. Clicking the :guilabel:`Cancel` button takes you to the previous view.

.. figure:: images/23.*
   :align: center

   *Fig. Saving a task as a template*

6. Fill in all required template data as described above.
7. To save the template click the :guilabel:`Confirm` button.
8. To discard changes click the :guilabel:`Cancel` button.
