.. _UG_T_Creating_a_custom_XML_task_with_alerts:

Creating a custom XML task with alerts
======================================

Read this chapter to learn how to create a task that will raise alerts on a selected group.

To create a task with alerts:

1. Go to :menuselection:`Device groups --> Group tasks`.
2. From the list of groups, select a proper group.
3. Click the :guilabel:`Add task` link.
4. From the :guilabel:`Task type or template` panel, select :guilabel:`XmlTask`.
5. In the :guilabel:`Task settings` panel, configure proper settings.
6. In the :guilabel:`Task specific configuration` panel, click :guilabel:`config`.
7. On the list of tags, find the :guilabel:`alert` tag (you can place it anywhere if you maintaing the appropriate syntax and XML logic). The alert tag consists of the following attributes:

 * :guilabel:`Type` - a type of an alert you want to manage. It is the most important parameter. The system aggregates and processes alerts using this string. This name will be visible in :menuselection:`Device groups --> Alerts --> Device alerts` and :menuselection:`Device groups --> Alerts --> Alerts table`.
 * :guilabel:`Caption` - a managed alert caption. It is a name of the alert in a human-readable format.
 * :guilabel:`Description` - a managed alert description. The detailed description of the alert and a reason why it occurred.
 * :guilabel:`Raise` - a boolean value that indicates whether the alert should be raised (when set to *true*) or hidden.
 * :guilabel:`Severity` - a numerical severity level of the managed alert:

   * :guilabel:`DEBUG` – 0
   * :guilabel:`INFO` – 500
   * :guilabel:`WARN` – 1000
   * :guilabel:`ERROR` – 2000

 * :guilabel:`Target` - a target of the managed alert - when it is left empty, the device on which the task is being executed will be taken as the target.

 .. figure:: images/Adding_a_task_with_an_alert.*
    :align: center

    *Fig. Creating a custom XML task with alerts*

8. In the :guilabel:`Task settings` panel, select the :guilabel:`Active` check box.
9. Click the :guilabel:`Add new task` button. After the task is performed on the devices, you can see results in:

 * :menuselection:`Device groups --> Alerts --> Alerts table`

   * If you want to include all child subgroups, mark the :guilabel:`Include subgroups` check box.
   * From the :guilabel:`Severity level` list, select a minimal severity level.
   * To display alerts, click the :guilabel:`Compute` link.
   * To display only raised alerts, select the :guilabel:`Only raised` check box.
   * To export alerts, click the proper button - :guilabel:`CSV Export` or :guilabel:`Lightweight table view`.

 * :menuselection:`Device groups --> Alerts --> Device alerts`.

   * If you want to include all child subgroups, mark the :guilabel:`Include subgroups` check box.
   * To display alerts, click the :guilabel:`Compute` link.
   * After computing, a pie chart will appear. Hover over the selected part of the chart to see what alert it is and on how many devices it was raised. By clicking the chart you will see a list of devices on which the given alert occurred.
   * To export the list with devices, click the proper button - :guilabel:`CSV Export` or :guilabel:`Lightweight table view`.
   * To add these devices to the particular group, click the :guilabel:`Add to group` button.
