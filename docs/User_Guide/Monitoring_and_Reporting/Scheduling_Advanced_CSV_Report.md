# Scheduling advanced CSV Report

Read this section to learn how to schedule the report using the monitoring data export configuration prepared in **Administration --> CSV Import/Export templates**.

**Prerequisites:** In order to control report execution parallelism, the used thread pool size can be set in the `cdm.conf` file in the *smg.mod.gui.reportPoolSize=4* setting.

!!! warning
    Use of many threads speeds up report execution but at the same time it can cause database write contention for regular provisioning. That is why you should balance properly execution
    and operational performance.

To schedule the report:

1. Go to **Monitoring & Reporting —> Reports**.
2. Go to the **Schedule report** tab.
3. In the **Template selection** panel:

    * From the **Category** list, select **Monitoring reports**.
    * From the **Report template** list, select **Advanced CSV Report**.

4. Configure settings such as a schedule, time interval, transfer and retention policy. Read how to configure these settings in the [Reporting](reporting.html) chapter.
5. In the **Parameters** panel:

    * Click the **Select group** link and from the list select a group on which you want to schedule the report.

    !!! note
        Keep in mind, that the system will include only the devices that are in the selected group when next scheduled generation starts. Even if you delete a device from the group while the report is in progress, it will be included.

    * Optional: Type an expression to schedule the report only on devices that fulfill the specified condition.
    * Select one of export types:
        * **Raw**
        * **Aggregated**

    * From the list select a monitoring data export configuration.

6. Click the **Schedule** button.

!!! tip
    Apart from having proper data in the generated report, you can also come across the below cases:

    * An empty space instead of some data because there was no data to present.
    * The \- sign instead of data because there was no aggregation to present.

**See also:** [Adding CSV monitoring data export configurations](../User_Interface_Reference/Administration/CSV_Import_%26_Export_templates/Adding_CSV_export_configurations_for_monitoring.html)
