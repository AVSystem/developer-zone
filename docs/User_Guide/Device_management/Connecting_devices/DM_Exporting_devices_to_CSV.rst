.. _DM_Exporting_devices_to_CSV:

Exporting devices to CSV
========================
Read this instruction to learn how to export a list of devices to a CSV file to use data outside the system.

To export devices to a CSV file:

1. Go to :guilabel:`Device inventory`.
2. Below the :guilabel:`Add new device`, click the :guilabel:`Advanced export to CSV` icon.
3. From the :guilabel:`Select export configuration` list, select a template that was previously created in :menuselection:`Administration --> CSV Import/Export templates`.
4. If you do not use the template, click the :guilabel:`Show configuration editor` link and select one of editor modes:

  * :guilabel:`Simple` - to add a column, click it in the :guilabel:`Available operations` table.
  * :guilabel:`Expressions` - to add the column, click the :guilabel:`Add column` link and start typing expressions. To see expression suggestions for a device, use the :guilabel:`Select representative of exported devices` option.
  * :guilabel:`Plain text` - to add the column, start typing expressions. You should type one column name and expression per line, for example, *Identity,${device.id}*.

5. After adding all columns you can remove, edit or move them:

  * To remove a column in the :guilabel:`Expressions` or :guilabel:`Simple` tab, click the :guilabel:`Remove` icon next to it.
  * To edit the column, go to the :guilabel:`Expressions` or :guilabel:`Plain text` tab, and make necessary changes.
  * To change an order of columns, go to the :guilabel:`Simple` tab, and use the drag and drop functionality.

 .. figure:: images/DA_Exporting_devices_to_CSV.*
    :align: center

    *Fig. Exporting devices to CSV*

6. If you do not want to add headers (headers are column names), clear the :guilabel:`Append header` check box.
7. To see a preview of the CSV file, click the :guilabel:`Preview` button.
8. To export devices, click the :guilabel:`Download CSV` button.
9. To export devices to CSV periodically, click the :guilabel:`Schedule report` button and configure the report.
