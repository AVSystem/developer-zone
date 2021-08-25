.. _QSG_Managing_parameters_tree:

Managing the parameter tree
===========================
You can use the parameter tree to:

 * See a device data model.
 * Check parameters names and values.
 * See when values were updated.
 * Request for values update.
 * Change values of specific parameters (if values are not read-only or executable).
 * Set notifications and perform the Execute action.

Getting recent values of parameters
-----------------------------------

For each parameter value you have a date of its last update in the :guilabel:`Update time` column. Learn how to get recent values.

To get recent values:

1. Go to :guilabel:`Device inventory` and on the list of devices find a device for which you want to update a parameter value.
2. Click the device ID.
3. Go to :menuselection:`Parameter tree --> Change parameters` and on the tree find the parameter value.
4. Click the :guilabel:`Get all` or :guilabel:`Get` link.

.. tip:: If you select the :guilabel:`Interactive mode` check box, then you do not have to perform steps from 5-7.

5. To confirm getting recent values, go to the :guilabel:`Review changes` or :guilabel:`Advanced editor` tab.
6. Go through all changes line by line, and if you want to delete any of them, click the :guilabel:`Delete` button next to changes you want to remove.
7. To get values, click the :guilabel:`Save changes on device` link. The proper task is invoked.

Changing device parameters
--------------------------

Learn how to change device parameters.

.. tip:: Parameters that are displayed as plain text are read-only.

To change a parameter:

1. Go to :guilabel:`Device inventory` and on the list of devices find a device for which you want to change a parameter.
2. Click the device ID.
3. Go to :menuselection:`Parameter tree --> Change parameters` and on the tree find the parameter.
4. In the :guilabel:`Value` column, click the :guilabel:`Edit` button. The new window opens:

 * In the :guilabel:`Value` field, provide a new value.
 * To validate the value, click the :guilabel:`Validate value` check box.
 * From the :guilabel:`Type` list, select a type of the value you provided, or leave it as an automatic type.
 * Click the :guilabel:`Save` button.

.. tip:: If you select the :guilabel:`Interactive mode` check box, then you do not have to perform steps from 5-7.

5. To confirm parameters changes, go to the :guilabel:`Review changes` or :guilabel:`Advanced editor` tab.
6. Go through all changes line by line, and if you want to delete any of them, click the :guilabel:`Delete` button next to changes you want to remove.
7. To set parameters, click the :guilabel:`Save changes on device` link. XMLTask that sets parameters is invoked.
