.. _UG_M_Multitenancy_concept:

Multitenancy concept
====================

Multitenancy is an optional feature of the system that allows you to configure a single installation of Coiote DM so that it can be used by many organizations (suborganizations). Still each of them has access only to its own data.

Basic information
-----------------

Multitenancy in Coiote DM is realized through the concept of domains. Domains can be treated as containers for collections of system data available only to organizations (suborganizations) added to a particular domain.
Domains can be assigned, inter alia, to:

 * Users
 * Devices
 * Groups of devices
 * Tasks and Quick Fixes
 * Tasks templates
 * Resources
 * Monitoring
 * Filters created in the advanced search
 * Dialects.

Domains are also reflected in:

 * :guilabel:`Historical analysis` because what users see depends on devices added to their domains. One device can be assigned to one domain and the same applies to a user.
 * :menuselection:`Monitoring & Reporting --> Reports` because users can see reports generated only in their domains.

Domains form a hierarchical structure so users who are higher in a hierarchy have access to more data, and users who are at the bottom of the hierarchy have limited access. Each of system users must be assigned to a domain and then they can operate on data that belongs
to their own domain or some of its subdomains. When they, for example, create a task template it is saved only in their domain. Keep in mind that, tasks, task templates and manually added resources and devices will inherit a domain from a user that executed the action (this is true for both UI and API), whereas device resources added using uploading inherit the domain from a device. What is more, each domain should have a user with special permissions who can configure subdomains of the part of the system he/she can access.

Each system has a root domain that is marked with a single **/** - this is the higher domain and only system administrators should be assigned to it because users assigned to this domain can see all subdomains in the system and data related to them. In other words, they have access to all data.

The *Fig. Administrator* shows tenant groups and subgroups that a system administrator assigned to the root domain can see.

.. figure:: images/Tenant_groups_admin.*
   :align: center

   *Fig. Administrator*

The *Fig. User* shows tenant groups and subgroups that a user assigned by a system administrator to the **/Tenant/** domain can see.

.. figure:: images/Tenant_groups_user.*
   :align: center

   *Fig. User*

The below screen shows an example of a domain hierarchy in an organization.

.. figure:: images/multitenancy.*
   :align: center

   *Fig. An example of a domain hierarchy*

By looking at the screen it can be said that:

 * A user assigned to the **/** domain can see everything that is configured in **/, /org1/, /org2/, /org1/a/ and /org1/b/** domains.
 * A user assigned to the **/org1/** domain can see everything that is configured in **/org1/**, **/org1/a/** and **/org1/b/** domains.
 * A user assigned to the **/org2/** domain can see everything that is configured in the **/org2/** domain.
 * A user assigned to the **/org1/a/** domain can see everything that is configured in the **/org1/a/** domain.
 * A user assigned to the **/org1/b/** domain can see everything that is configured in the **/org1/b/** domain.

Only task templates and Quick Fixes that are in the root domain (**/**) can be visible to all users but only in the read-only mode. So users can use the templates and Quick Fixes but they cannot edit them.
Moreover, while configuring multitenancy you have to always keep in mind what data you want to make available to users.
A group hierarchy does not depend on a domain hierarchy.

Enabling multitenancy
---------------------
To use multitenancy you must have this option in your license (you can check it in :menuselection:`Administration --> Licensing Info` and it should be included into the :guilabel:`Additional functionalities` section).

.. figure:: images/License_multitenancy_enabled.*
   :align: center

   *Fig. Information about multitenancy in a license*

Multitenancy is also included in a configuration file in :file:`ump/config/custom/cdm.conf`. You should find the *acs.multitenancyFilteringEnabled* parameter and it should be set to *true* - this means that multitenancy is enabled. If you are a system administrator, you can now see the :guilabel:`Domain management` menu in :guilabel:`Administration`.

**See also:**

 * :ref:`UG_M_Managing_domains`
 * :ref:`UG_M_Adding_devices`
 * :ref:`UG_M_Configuring_multitenancy`