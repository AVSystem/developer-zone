.. _DEA_Adding_CSV_export_configurations:

 .. important:: Hello, Cloud ACS user!

Adding CSV export configurations
================================
Read this section to learn how to create a new export configuration.

To add a CSV export configuration:

1. Go to :guilabel:`Administration` and select :guilabel:`CSV Import/Export templates`.
2. Click :guilabel:`CSV export configuration`.
3. Click the :guilabel:`Add` icon.
4. Provide a name for a configuration.
5. From the list select whether you want to export devices or assets.
6. Select one of editor modes:

  * :guilabel:`Simple` - to add a column, click it in the :guilabel:`Available operations` table.
  * :guilabel:`Expressions` - to add the column, click the :guilabel:`Add column` link and start typing expressions. To see expression suggestions for a device, use the :guilabel:`Select representative of imported devices` option.
  * :guilabel:`Plain text` - to add the column, start typing expressions. You should type one column name and expression per line, for example, *Identity,${device.id}*.

7. After adding all columns you can remove, edit or move them:

  * To remove a column in the :guilabel:`Expressions` or :guilabel:`Simple` tab, click the :guilabel:`Remove` icon next to it.
  * To edit the column, go to the :guilabel:`Expressions` or :guilabel:`Plain text` tab, and make necessary changes.
  * To change an order of columns, go to the :guilabel:`Simple` tab, and use the drag and drop functionality.

.. figure:: images/adding_new_CSV_export_configuration.*
  :align: center

  *Fig. Adding CSV export configurations*

8. Click the :guilabel:`Save` button.

**What to do next:** Use the newly created CSV export configuration, for example, to export devices to CSV in :guilabel:`Device inventory`.
