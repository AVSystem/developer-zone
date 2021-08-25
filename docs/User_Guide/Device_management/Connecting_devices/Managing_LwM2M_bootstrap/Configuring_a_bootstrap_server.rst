.. _UG_MLB_Configuring_a_bootstrap_server:

Configuring a Bootstrap server
==============================

Read this chapter to learn how to configure a Bootstrap server.

.. tip:: A device should have only one Bootstrap server configured.

.. figure:: images/Configure_bootstrap_server.*
   :align: center

   *Fig. Configuring a Bootstrap server procedure*

To configure a Bootstrap server:

1. Go to :menuselection:`Administration --> LwM2M servers`.
2. Click the :guilabel:`Add` button.
3. Configure a server. To learn more about particular fields, read the :ref:`UIR_A_LwM2M_servers` chapter.
4. Click the :guilabel:`Save` button.
5. Go to :menuselection:`Administration --> LwM2M bootstrap`.
6. Select the :guilabel:`Select bootstrap server` check box.
7. From the list, select the appropriate server.

.. figure:: images/Configure_bootstrap_server_2.*
   :align: center

   *Fig. Configuring a Bootstrap server*

8. Click the :guilabel:`Save` button. When the device will start the bootstrap procedure it will have the new bootstrap server configured.

.. note:: Your bootstrap logic will be applied as a group task for your own bootstrap group and the bootstrap groups of your subtenants.
