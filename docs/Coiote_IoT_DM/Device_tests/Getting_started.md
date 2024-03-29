# Getting started

Start using the **Device tests** feature right away. This short instruction will help you create your first test, run it on a device and see the execution logs.

## Prerequisites

A device that is added and registered in the platform.

## Create your first test

1. From the navigation menu on the left, select **Device test repository** and then **Server simulator**.

    ![Device test repository](images/interop1.png "Device test repository")

2. Click **Add test** and select **Add test manually**.

    ![Adding a new test](images/interop2.png "Adding a new test")

3. Configure your test:

![Configure your test](images/interop3.png "Configure your test")

* Provide a name for your test.
* Under the **Action list**, click **Add action**, select **Write** from the drop down list and provide data for the following fields:
    * **Parameter name**: `Device.0.Manufacturer`,
    * **Expected value**: `Example_manufacturer`,
    * **Expected response code**: `4.05 MethodNotAllowed`.
* Under the **Action list**, select **Read** from the drop down list and provide data for the following fields:
    * **Parameter name**: `LwM2M Server.1.Binding`,
    * **Expected value**: `U`,
    * **Expected response code**: `2.05 Content`.
* Click **Add a new test**.

## Run test on your device

1. In the **Device inventory**, select a currently registered device and enter its **Device Management Center**.
2. In **Device Management Center**, select the **Device tests** tab.

    !!! note
        If the **Device tests** tab is not visible in the menu, use the settings button under the menu to add it: drag it from **Available tabs** and drop it in **Selected tabs** and click **Confirm**.

3. Tick the test you have just created and click **Run selected (1)**.
![Running a test](images/interop5.png "Running a test")

4. After a few moments, the execution ends and the test status should change from `In progress` to `Success`.  

!!! tip
    The `Success` status of a test measures the correctness of the device response against the expected test parameters. Depending on the device and tester's needs, there may be tests that are *successful* when the device responds with a *Failure* message (similarly to the example presented in this section).

## Check test execution details

To see execution logs for your tests:

1. While in the **Device tests** panel, find your test and click its name.
2. Expand the **Logs** section using the **^** arrow icon to see execution details.

    ![Checking test results](images/image103.png "Checking test results")

3. Use the **Check logs** button for each action inside the test to see the highlighted results for this action.   
