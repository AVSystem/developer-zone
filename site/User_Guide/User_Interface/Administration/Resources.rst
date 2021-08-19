.. _UIR_A_Resources:

Resources
=========

Use this panel to browse, edit and add new resources to the system.

Panel Layout
------------

.. figure:: images/1.png
   :align: center

   *Fig. Resources*

There are three main elements of the panel layout:

#. Search bar and navigation buttons
#. The :guilabel:`Add` link
#. Resources table

Search bar and navigation buttons
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Item display buttons (1-6) make navigation between objects easy and intuitive.

.. figure:: images/2.png
   :align: center

   *Fig. Search bar and navigation buttons*

#. :guilabel:`Items per page` - click it to select how many resources you want to see on a single page (25, 50, 100).
#. :guilabel:`Navigation arrows` - click arrows to change pages.
#. :guilabel:`Show all resources` - click it to display all types of resources.
#. :guilabel:`Show only firmware` - click it to show only firmware.
#. :guilabel:`Show other resources than firmware` - click it to show resources other than firmware (for example, logs or configuration files).
#. :guilabel:`Add` - click it to upload a new file with certain properties.

Resources details
^^^^^^^^^^^^^^^^^

.. figure:: images/3.png
   :align: center

   *Fig. Resources details*

1. :guilabel:`Name` - unique resource name.
2. :guilabel:`File Source` - select if the resource is local or external. Local file means that the file will be stored on the server after you click the :guilabel:`Upload` and :guilabel:`Save` buttons. If you select the :guilabel:`External URL` option, you will see a field for a link to the resource.
3. :guilabel:`Upload` - click it and select a local file which you want to upload. When the file is selected uploading starts immediately. Remember that the file cannot be bigger than a configured size limit.
4. :guilabel:`File name` - this name is set automatically by Coiote DM based on a uploaded file name, it can be overwritten.
5. :guilabel:`Access` - password and username to secure the resource.
6. :guilabel:`Domain` - indicates a domain of system users that are allowed to see this resource.
7. :guilabel:`Visible for subtenants` - select it if you want the resource to be visible for all your subtenants. This also applies, for example, to the *static documentation* category, which means that your subtenants will be able to view the files you include in the top menu :guilabel:`Help`.
8. :guilabel:`Category` - category of the resource file.

 .. note:: Select the **static-documentation** category to include the file into the top menu :guilabel:`Help`. Both external and internal files are accepted. After you upload the file, remember to log out and log in again to see the result.

9. :guilabel:`Static content` - it gives a resource a static URL accessible outside the system. This check box is disabled by default but it can be enabled so that creating the static URL is possible. It can be done by changing one parameter value in configuration (learn how to do this in the **Enabling generation of a static content** section of Admin Guide).
10. :guilabel:`Description` - file description.
11. :guilabel:`Device types` - it allows you to bind the resource and the device type. To do so click the :guilabel:`Add` tab first, then select device types (you can select multiple with the :kbd:`Ctrl` key). After that click :guilabel:`Add selected`.

 .. important:: When you add firmware resources you need to add them to groups (preferably to device type groups), otherwise they will not be visible in :guilabel:`DMC`.

12. :guilabel:`Save/Cancel` - after uploading a file and editing all necessary fields, click :guilabel:`Save` to add the resource or :guilabel:`Cancel` to discard changes.

Resources table
^^^^^^^^^^^^^^^

.. figure:: images/4.png
   :align: center

   *Fig. Resources table*

#. :guilabel:`ID` - a database ID.
#. :guilabel:`Type` - it indicates a resource type.
#. :guilabel:`Name` - a name of the resource.
#. :guilabel:`File name` - a name of a downloaded file.
#. :guilabel:`Size` - a file size in B/kB/MB.
#. :guilabel:`Creation time` - time when the resource was created.
#. :guilabel:`Description` - a short description of the resource.
#. :guilabel:`Domain` - it indicates system users that are allowed to see this resource.
#. :guilabel:`Delete` - click it to delete that resource.
