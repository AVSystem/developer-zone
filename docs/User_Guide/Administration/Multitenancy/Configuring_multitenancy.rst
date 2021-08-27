.. include:: /icons.rst
.. _UG_M_Configuring_multitenancy:

Configuring multitenancy
========================

Read this chapter to learn how to configure multitenancy by adding resources, task templates, tasks, monitoring instances, devices and dialects.

**Prerequisites:** To manage domains you need to have the proper permission - *admin.domainManagement*.

The following topics are covered:

* :ref:`Adding resources <D_Adding_resources_to_a_domain>`
* :ref:`Adding tasks <D_Adding_tasks_to_a_domain>`
* :ref:`Adding task templates <D_Adding_task_templates_to_a_domain>`
* :ref:`Adding monitoring <D_Adding_monitoring_to_a_domain>`
* :ref:`Adding devices <UG_M_Adding_devices>`
* :ref:`Adding dialects <Adding_dialects_to_a_domain>`

.. _D_Adding_resources_to_a_domain:

Adding resources to a domain
----------------------------

To add a resource:

1. Go to :menuselection:`Administration --> Resources`.
2. From the list of resources, select a resource you want to add to a domain.
3. From the :guilabel:`Domain` list, select the proper domain.
4. Click the :guilabel:`Save` button.

.. _D_Adding_tasks_to_a_domain:

Adding tasks to a domain
------------------------

To add a task:

1. Go to :menuselection:`Device actions --> Tasks`.
2. From a list of available tasks, select a task and click the :guilabel:`Edit` link.
3. In the :guilabel:`Task settings` panel, expand the settings.
4. From the :guilabel:`Domain` list, select the proper domain and click the :guilabel:`Save` link.

.. _D_Adding_task_templates_to_a_domain:

Adding task templates to a domain
---------------------------------

To add a task template:

1. Go to :menuselection:`Administration --> Task templates`.
2. From the :guilabel:`Task type or template` list, select a template from which you want to create a new template.
3. Provide a name for the template and from the :guilabel:`Template domain`  select the proper domain.
4. Configure the template and click the :guilabel:`Add new template` link.

.. _D_Adding_monitoring_to_a_domain:

Adding monitoring to a domain
------------------------------

To add monitoring:

1. Go to :menuselection:`Monitoring & Reporting --> Monitoring`.
2. From the :guilabel:`Available monitorings` list, select monitoring.
3. From the :guilabel:`Domain` list, select the proper domain.
4. Configure other settings and click the :guilabel:`Save` link.

.. _Adding_dialects_to_a_domain:

Adding dialects to a domain
----------------------------

To add a dialect:

1. Go to :menuselection:`Administration --> Device dialects`.
2. From the :guilabel:`Domain` list, select the proper domain.
3. Click :guilabel:`Add` and paste the dialect configuration in the :guilabel:`Config` field to add the dialect to the selected domain and its subdomains.
4. Click :guilabel:`Save all changes`.

**See also:**

* :ref:`UG_M_Adding_devices`
* :ref:`UG_M_Multitenancy_concept`