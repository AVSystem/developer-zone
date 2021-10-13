.. _Quota:

=====
Quota
=====

.. caution:: This feature is not available in version **13.04** and older.

Quota was introduced to protect Coiote DM from a situation when a data model refreshes too often because this may cause Coiote DM to have problems with proper functioning.
Quota defines how many times a data model can be refreshed in a defined period of time. Quota is used in :ref:`tasks <Task Library>` that need to refresh the data model.
It is recommended to set the :guilabel:`Use quota` property to *true* because then the number of performed data model refreshes is checked, and if the limit is reached, a task waits until a new session to be executed.
If the :guilabel:`Use quota` property is set to *false*, then the task is performed immediately without checking the limit, and if the limit is exceeded then Coiote DM can have problems with proper operation.
