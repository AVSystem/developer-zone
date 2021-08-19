.. _UIR_Importing_monitoring_groups_from_CSV:

Importing monitoring groups from CSV
====================================
Learn how to import monitoring groups from a CSV file to prepare a group structure for monitoring maps.

To import monitoring groups from a CSV file:

1. Go to :guilabel:`Administration` and select :guilabel:`Import monitoring groups`.

 .. tip:: Before you import a file, take a look at a table that shows how a structure of the file should look like. You can also click the :guilabel:`download sample CSV` link to download a sample file and use it while creating the correct file.

2. If the first line of the file is not important, select the :guilabel:`Skip CSV header (first line)` check box.
3. To include :guilabel:`Cell group`, :guilabel:`Cell ID`, :guilabel:`Azimuth` and :guilabel:`Beam`, select the :guilabel:`Base station like device` check box.
4. From the :guilabel:`Number of levels` list, select how many administrative levels you want to include (up to 10 are possible).
5. Click the :guilabel:`Upload` button to upload the file from your disk. Importing is not performed at this point.
6. Select a root for your groups by clicking the :guilabel:`Select group` link and clicking the selected group.
7. Click the :guilabel:`Perform import` button.

 .. tip:: If any entry is duplicated, the first set of data is imported.

 .. figure:: images/Importing_monitoring_groups.*
    :align: center

    *Fig. Importing monitoring groups*

8. Go to :guilabel:`Device groups` and on the list of groups you should see you monitoring groups.
9. Go to :guilabel:`Profiles` and you can see :guilabel:`Latitude`, :guilabel:`Longitude`, :guilabel:`Azimuth` and :guilabel:`Beam` as setting values.

 .. figure:: images/Imported_monitoring_groups.*
    :align: center

    *Fig. A structure of imported monitoring groups*

 .. tip:: * If you cleared the :guilabel:`Base station like device` check box, then :guilabel:`Azimuth` and :guilabel:`Beam` will not be set as setting values and :guilabel:`Cell group` and :guilabel:`Cell ID` will not create additional administrative levels.
          * If the :guilabel:`Beam` column is empty in your file, then its value is set to *60*.
          * Values of :guilabel:`Latitude` and :guilabel:`Longitude` for a parent are average of values of its children, if there is more than one child in the group.

**See also:** :ref:`Monitoring_map`