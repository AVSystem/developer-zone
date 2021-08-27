.. include:: /icons.rst

.. _UG_UIR_DA_Tasks:

Tasks
=====

Use this panel to manage all :ref:`tasks <UG_Tasks>`. In this panel you can find all tasks from devices and groups of devices. The panel has also many tools to control all tasks in UMP. The panel :guilabel:`Tasks` is accessible from the main menu
:menuselection:`Device actions --> Tasks`.

.. figure:: images/50.*
   :align: center

   *Fig. Tasks GUI*

1. Search panel - use a standard or an advanced mode to search for tasks.
2. :guilabel:`Show executions` - use it to see which tasks were executed.
3. :guilabel:`Add new task` - use it to add a new task.
4. Tools to count and sort tasks:

 * |icon_COUNT_16| - use it to count tasks
 * |icon_COUNT_ADVANCED_16| - use it to see current tasks statistic

5. Actions - you can perform the following actions on the task instance:

 * :guilabel:`Edit` - use it to edit a task configuration.
 * :guilabel:`Copy` - use it to create a new task instance based on the current one.
 * :guilabel:`Advance to group` - use it to copy a device task to a group. Be careful with this option.
 * :guilabel:`Delete` - use it to delete this task instance.
 * :guilabel:`Restart task` - use it to restart a task.
 * :guilabel:`Execution log` - use it to check a list of tasks executed during a specified period of time.
 * :guilabel:`Edition log` - use it to check which tasks were created, deleted, or modified during a specified period of time.

Options to manage tasks
-----------------------

.. figure:: images/52.*
   :align: center

   *Fig. Options to manage tasks*

1. :guilabel:`Show executions` - it displays a toolbar to sort tasks by:

 * Any status
 * Success
 * Failure
 * Warning
 * Not Finished

2. :guilabel:`Add new task` - use this button to prepare a :ref:`task configuration <UG_T_Task_Configuration>` and add tasks to devices.
3. :guilabel:`Count devices` - use it to count tasks in a tab.
4. :guilabel:`Current task statistic` - it displays statistic about tasks such as:

 * Class name
 * Number of stooped tasks
 * Number of active tasks
 * Number of tasks

Advanced search mode
--------------------

A mode of search using to search tasks by advanced options.

.. figure:: images/53.*
   :align: center

   *Fig. Advanced search mode*

1. **Advanced search mode panel** - click a magnifying glass to display advanced search options.
2. **Save search** - use it to create a filter for a particular domain and save it by clicking the :guilabel:`Create filter` link.
3. **Search criteria toolbar** - use it to custom conditions of searching.
4. **Add search criteria** - use it to add a new custom criteria of searching.
5. **Expression filtering** - use it to search tasks by expressions.
6. **Search** - use it to search tasks by a custom criteria.

Search filters
--------------

It includes all saved search filters in a domain you belong to. You can load or remove a search filter.

.. figure:: images/54.*
   :align: center

   *Fig. Search filters*

Search history
--------------

It stores and displays a history of searching. You can load a filter search task to a current search or clear the searching history.

.. figure:: images/55.*
   :align: center

   *Fig. Search history*

Expression filtering check box
------------------------------

Use it to search by expressions.

.. figure:: images/56.*
   :align: center

   *Fig. Expression filtering check box*

Expression filtering examples
-----------------------------

Example 1
^^^^^^^^^

Searching a task by an ID.

* Use the advanced search mode and select the :guilabel:`Expression filtering` check box.
* Write the expression in the :guilabel:`Expression filtering` field: *${task.id=='name of ID you search'}*.
* Click the :guilabel:`Search` link and Coiote DM displays tasks by the ID.

Example 2
^^^^^^^^^

Searching a task by a priority greater than 2.

* Use the advanced search mode and select the :guilabel:`Expression filtering` check box.
* Write the expression in the :guilabel:`Expression filtering` field: *${task.priority>2}*.
* Click the :guilabel:`Search` link and Coiote DM displays tasks by the priority greater than 2.
