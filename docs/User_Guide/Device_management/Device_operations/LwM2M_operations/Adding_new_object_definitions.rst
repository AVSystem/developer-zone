.. _UG_Adding_new_object_definitions:

Adding new object definitions
=============================

Read this chapter to learn how to add new object definitions.

To add a new object definition:

1. Go to :menuselection:`Device inventory --> Objects`.
2. In the :guilabel:`Objects` panel, click :guilabel:`Add new LwM2M object definition`.

 .. figure:: images/new_object_definition_1.*
    :align: center

    *Fig. The Objects panel*

3. In the window that opens, import the desired LwM2M object definition. You can paste an XML definition or an URL in the field, or use the :guilabel:`Upload file` button.

  .. note:: The imported object definition will be validated. In the :guilabel:`Validation status` field, you will see errors associated with specific XML lines.

 .. figure:: images/new_object_definition_2.*
    :align: center

    *Fig. Importing LwM2M object definition*

4. After the definition is positively validated, click :guilabel:`Import`.
5. The object definition is now added to the user domain. In the pop-up window, click :guilabel:`Refresh data model` to discover the defined object immediately, or click :guilabel:`Close`.

 .. figure:: images/new_object_definition_3.*
    :align: center

    *Fig. Refreshing the data model*

 .. note:: The object will be visible in the panel only after refreshing the device's data model.

7. If you chose the refresh data model option, click :guilabel:`Yes, execute task now` to refresh the data model immediately.

 .. figure:: images/new_object_definition_4.*
    :align: center

    *Fig. Action trigger*

**See also:**

 :ref:`Adding_new_object_definitions_to_device_dialects`