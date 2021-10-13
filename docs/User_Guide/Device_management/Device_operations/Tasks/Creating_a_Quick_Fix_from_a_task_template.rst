.. _Creating_Quick_Fix_from_a_task_template:

Creating Quick Fixes from task templates
========================================

Read this chapter to learn how to create a Quick Fix from a task template.

To create the Quick Fix from the task template:

1. Go to :menuselection:`Administration --> Task templates`.
2. From the :guilabel:`Task type of template` list, select a template on which you want to create your Quick Fix.
3. Configure the task:

 * Type its name, select a template domain and type a description.
 * Select the :guilabel:`Quick Fix action` check box so that your task is the Quick Fix action:

   * Into the :guilabel:`Action name` field, type a name for Quick Fix. It must be unique and will be displayed on UI, this name can be different than the template name.
   * Select the :guilabel:`Require confirmation` check box if you want to see confirmation before the task executes.
   * From the :guilabel:`Connection request behavior` list, select one of the options to decide if connection request should be executed.
   * From the :guilabel:`Action required permission` list, select a proper permission if the particular permission is required to perform this task.
   * Select the :guilabel:`Prefer restart` check box if you want Coiote DM to restart the action without creating a new one.
   * Select the icon for Quick Fix by clicking the :guilabel:`Pick` button.

 * Configure the rest of the settings.

4. Click the :guilabel:`Add new template` link. The new Quick Fix is added to the :guilabel:`Actions` tab in :guilabel:`Devices management center` and :guilabel:`Device groups`.

**See also:** :ref:`UIR_A_Task_Templates`
