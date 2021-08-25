.. _UG_UIR_DM_Test_cases:

Test cases
==========

Read this section to learn how to manage test cases for a device to verify if it supports LwM2M-specific features. To find out more about the :guilabel:`LwM2M protocol tests` tab in the Device Inventory, please go to :ref:`LwM2M protocol tests`.

Adding test cases
-----------------

To add a test case:

1. Go to :menuselection:`Administration --> Task templates`.
2. Configure the task:

 * From the :guilabel:`Task type of template` list, select a template on which you want to create your test case.
 * Type the template name, select a domain, and type a description.
 * Select the :guilabel:`Use as a device test case` check box so that your task is the test case.

 .. figure:: images/Adding_test_cases.*
    :align: center

    *Fig. Adding test cases*

 * Configure the rest of the settings.

3. Click the :guilabel:`Add new template` button. The new test case is created and available from :menuselection:`Administration --> Task templates` and :menuselection:`Device inventory --> LwM2M protocol tests`.

Running a test case
-------------------

To run a test case:

1. Go to :guilabel:`Device inventory`.
2. From a list of devices, select a device for which you want to run the test.
3. Go to the :guilabel:`LwM2M protocol tests` tab. To view this tab you need to have the :guilabel:`dmc.deviceTest` permission assigned by the administrator.
4. From the list of test cases, select which ones you want to run.

 .. figure:: images/Running_test_cases.*
    :align: center

    *Fig. Running test cases*

5. Click the :guilabel:`Run selected test cases` button. Tests start and the progress bar is displayed. Once tests are finished, results are displayed.
6. If you want to include tests results from a bootstrap entity into the summary of the management entity presented in the CSV file and a report send by email, select the :guilabel:`Add bootstrap tests results to summary` check box.

.. tip:: To send an email with tests results, click the :guilabel:`Submit results` buttons and to download a summary file, click the :guilabel:`Download summary file`.

**See also:**

 * :ref:`LwM2M protocol tests`
