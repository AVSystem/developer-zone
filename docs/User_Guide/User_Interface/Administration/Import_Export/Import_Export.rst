.. _UIR_Import_/_Export:

=============
Import/export
=============

Use the import and export data module to:

* Easily manage application entities
* Import default data at the application launch

Import/export is available in :menuselection:`Administration --> Import/export`.

.. warning:: Use importing and exporting carefully because wrong usage can lead to database inconsistency.

.. _Supported Entities:

------------------
Supported entities
------------------

The below entities are supported in UMP:

* Alert type
* CSV import configuration
* Device
* Group
* Group dispatch rule
* Login message
* Monitoring configuration
* Quick fix
* Resource
* Schedule
* Security policy
* Service
* Setting value
* Setting value category
* Setting value descriptor
* Simple property
* Task
* Task report
* Task template
* User template

.. _Export:

------
Export
------

Look at the below picture to see how the :guilabel:`Export` panel looks like.

.. figure:: images/export.*
   :align: center

   *Fig. The Export panel*

1. :guilabel:`Entity Name` - a list of all supported entities.
2. :guilabel:`Export` - use it to manage an export operation.
3. :guilabel:`Select all`, :guilabel:`Deselect all` - use it to select or to clear all fields.
4. :guilabel:`Exported fields` - a list of fields that will be exported.
5. :guilabel:`Query` - use it to search for particular values of parameters.
6. :guilabel:`Reset`, :guilabel:`Previous`, :guilabel:`Next` - use :guilabel:`Previous` and :guilabel:`Next` icons to quickly go through all entities, use the :guilabel:`Reset` icon to go back to the first page.
7. :guilabel:`Preview` - use the table to preview entities.
8. :guilabel:`Export` - use this link to export selected entities.
9. :guilabel:`Log` - use this panel to see logs from your operation.

.. _Import:

------
Import
------

Look at the below picture to see how the :guilabel:`Import` panel looks like.

.. figure:: images/import.*
   :align: center

   *Fig. The Import panel*

1. :guilabel:`Import` - use it to manage an import operation.
2. :guilabel:`Paste here` - a place where you can paste a source configuration. You can paste here up to 1 MB of a text.
3. :guilabel:`Import` - use this button to import parameters.
4. :guilabel:`Upload file` - use this button to upload the source configuration from a file.

**What to do next:** Learn how to :ref:`export <UIR_Exporting_entities>` and :ref:`import <UIR_Importing_entities>` entities.