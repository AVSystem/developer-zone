.. include:: /icons.rst

.. _UG_M_Adding_devices:

Adding devices
==============
Read this section to learn how you can add devices to a domain.

**Prerequisites:**

* To manage domains you need to have the proper permission - *admin.domainManagement*.
* One device can be assigned to one domain.

The following topics are covered:

* :ref:`Adding a single device <D_Adding_a_single_device_to_a_domain>`
* :ref:`Adding a group of devices <D_Adding_a_group_of_devices>`
* Adding multiple devices at the same time to a domain:

  * :ref:`Using the Change devices domain icon <D_Using_the_icon>`
  * :ref:`Using import from CSV <D_Using_import>`
  * :ref:`Using a task <D_Using_a_task>`

.. _D_Adding_a_single_device_to_a_domain:

Adding a single device to a domain
----------------------------------

**Prerequisites:** To manage domains you need to have the proper permission - *deviceManager.devices.changeDomain*.

1. Go to the :guilabel:`Device inventory` menu and select a device you want to add to a domain.
2. Depending on the type of a device go to:

 * The :guilabel:`General management` tab
 * The :guilabel:`Configuration` tab.

3. In the :guilabel:`Other` panel, from the :guilabel:`Domain` list, select the proper domain.
4. Click the :guilabel:`Save` link.

.. figure:: images/Adding_a_domain.*
    :align: center

    *Fig. Adding a domain to a single device*

.. _D_Adding_a_group_of_devices:

Adding a group of devices to a domain
-------------------------------------

1. Go to the :guilabel:`Device groups` menu and select a device group you want to add to a domain.
2. Click the :guilabel:`Edit` button.
3. In the :guilabel:`Edit group` panel, from the :guilabel:`Domain` list, select the proper domain.
4. Click the :guilabel:`Save` link.

Adding multiple devices at the same time to a domain
----------------------------------------------------

To add multiple devices at the same time to the domain, use one of the below options.

.. _D_Using_the_icon:

Using the |icon_DEVICE_GROUPS_MULTITENANT_16| icon
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Go to the :guilabel:`Device inventory` menu.
2. Search for devices that you want to add to a particular domain. If these devices are in other domains you can use the advanced search:

  * Click the :guilabel:`Advanced` button and select the :guilabel:`Expression filtering` check box.
  * Type: 

    * *${device.domain == ('/domain name/')}* - to look for a device whose domain is named exactly like that, for example, *${device.domain == ('/BC/')}*
    * *${device.domain != ('/domain name/')}* - to look for a device whose domain is not named like that, for example, *${device.domain != ('/BC/')}*

  * Click the :guilabel:`Search devices` link.

.. note:: Remember that a domain will be changed for **all devices** displayed on the list.

3. Click the the |icon_DEVICE_GROUPS_MULTITENANT_16| icon.

.. figure:: images/Searching_for_a_domain.*
    :align: center

    *Fig. Searching for a domain*

4. Select a domain and click the :guilabel:`Change` button.

.. _D_Using_import:

Using import
^^^^^^^^^^^^

To add devices to a domain or override devices domain you can use the :guilabel:`Import devices from CSV` functionality. How to perform import from CSV read the **Importing data** section in the :ref:`DA_Importing_devices_from_CSV` chapter.

.. _D_Using_a_task:

Using a task
^^^^^^^^^^^^

1. Put all devices that you want to add to a domain into one group.
2. Go to the :guilabel:`Group tasks` menu and click the :guilabel:`Add task` link.
3. From the :guilabel:`Task type or template` list, select :guilabel:`XmlTask`.
4. In the :guilabel:`Task specific configuration` panel, click :guilabel:`config` and from the list of tags select :guilabel:`setDomain`.
5. Click :guilabel:`setDomain` and from the :guilabel:`Domain` list, select the proper domain.

.. figure:: images/adding_devices_to_domain_creating_task.*
    :align: center

    *Fig. Creating a task to add many devices to one domain*

6. Click :guilabel:`setDomain` again.
7. Click the :guilabel:`Add new task` link. After the task execution, all devices from the devices group are added to the domain.

**See also:**

* :ref:`UG_M_Multitenancy_concept`
* :ref:`UG_M_Configuring_multitenancy`