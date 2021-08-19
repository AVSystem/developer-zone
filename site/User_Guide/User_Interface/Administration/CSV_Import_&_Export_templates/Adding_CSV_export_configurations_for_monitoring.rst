.. _DEA_Adding_monitoring_data_export_configurations:

Adding CSV monitoring data export configurations
================================================

Read this section to learn how to create a new export configuration for monitoring data that you can use later to generate a report.

To add a CSV monitoring data export configuration:

1. Go to :guilabel:`Administration` and select :guilabel:`CSV Import/Export templates`.
2. Click :guilabel:`Monitoring data export configuration`.
3. Click the :guilabel:`Add` icon.
4. Into the :guilabel:`Name` field, type a unique name for a configuration (it will be later visible in :guilabel:`Reports`).
5. To include some additional data (for example, domain, hardware version or other setting values) from other CSV export configurations, select a proper export configuration name. To learn how to add the CSV export configuration, that you can use in this procedure, read the :ref:`DEA_Adding_CSV_export_configurations` chapter.
6. Add as many monitoring resources as you need from different monitoring types by clicking the :guilabel:`Add monitoring resources` button.
7. Configure each of resource in the following way:

 * From the :guilabel:`Monitoring (required)` list, select a monitoring name.
 * From the :guilabel:`Resource (required)` list, select a monitoring resource.
 * From the :guilabel:`Resource match type (required)` list, select:

   * :guilabel:`Exact match` if a resource selected from the :guilabel:`Resource (required)` list is an exact match.
   * :guilabel:`Prefix` if a resource selected from the :guilabel:`Resource (required)` list is only a prefix of existing resources. Then all resources starting with this prefix will be exported.

 * Into the :guilabel:`Resource alias` field, type a meaningful name for the column in which the selected resource will appear. It is recommended to include a type of aggregation in the name, for example, *Maximum of received bytes*. If you do not specify the name, then the raw name of the resource will be taken.
 * From the :guilabel:`Aggregation (required)` list, select a way in which data should be aggregated. Available aggregation types depend on the type of the selected resource:

   * For numerical parameters you will have: :guilabel:`Average`, :guilabel:`Maximum`, :guilabel:`Minimum`, :guilabel:`Sum`,and :guilabel:`Sum of delta` (for monitored numerical parameters, such as uptime or bytes sent or received, which data type is a counter in order to calculate an accurate sum in a data range, it is necessary to find a sum of peaks in data series and subtract the first and last value).
   * For alerts you will have: :guilabel:`Count` (a number showing how many times the selected alert occurred) and :guilabel:`Percentage` (a percentage of alert samples).
   * For textual parameters you will not be able to select aggregation because such values cannot be aggregated. You will see the **-** sign in a row.

 .. tip:: * To delete a particular resource, click the :guilabel:`Remove` button next to it.
          * An aggregation type is not taken into consideration, if you select the :guilabel:`Raw` export type while scheduling the report.

8. Click the :guilabel:`Save` button.

.. figure:: images/Adding_new_CSV_monitoring_export_configuration.*
   :align: center

   *Fig. Adding the CSV monitoring data export configuration*


**What to do next:** Use the newly created CSV monitoring data export configuration to schedule :guilabel:`Advanced CSV Report` in :menuselection:`Monitoring & Reporting --> Reports`. Read how to do it in the :ref:`ME_Scheduling_Advanced_CSV_Report` chapter.

**See also:** 

 * :ref:`ME_Scheduling_Advanced_CSV_Report`
 * :ref:`DEA_Adding_CSV_export_configurations`