.. _UG_M_Managing_domains:

Managing domains
================

Learn how to manage your domains that enable you to divide the system between different tenants.

.. figure:: images/domain_management.*
   :align: center

   *Fig. The Domain management panel*

**Prerequisites:** To manage domains you need to have the proper permission - *admin.domainManagement*.

* :ref:`Adding domains <Adding_domains>`
* :ref:`Editing domains <Editing_domains>`
* :ref:`Deleting domains <Deleting_domains>`
* :ref:`Configuring login pages <Configuring_login_pages>`
* :ref:`Configuring Kannel <Configuring_Kannel>`

.. _Adding_domains:

Adding domains
--------------

To add a domain:

1. Go to :menuselection:`Administration --> Domain management`.
2. Select the appropriate place in the :guilabel:`Domains list` where you want to add a new domain and click :guilabel:`Add`.

.. tip::    Domain name segments can only contain alphanumeric characters.

3. In the :guilabel:`Create subdomain` panel, provide the name for the domain and optionally, a short description.

.. figure:: images/creating_a_subdomain.*
   :align: center

   *Fig. Creating a subdomain*

4. Click the :guilabel:`Add subdomain` button. You can now see the domain and the users inside it. In the :guilabel:`Device groups`, you can see the tenant group.
5. To add subdomains to the domain you have just created, repeat steps **2-4**.

.. _Editing_domains:

Editing domains
---------------

To edit a domain:

1. Go to :menuselection:`Administration --> Domain management`.
2. Select the domain you want to edit and click the :guilabel:`Edit` button.
3. Change the appopriate settings and click :guilabel:`Save`.

.. figure:: images/Editing_a_subdomain.*
   :align: center

   *Fig. Editing a domain*

.. _Deleting_domains:

Deleting domains
----------------

To delete a domain:

1. To delete the domain, you need to delete all users, tenant groups and devices assigned to it.

  * To delete users, go to :menuselection:`Administration --> Users management` and edit users' data so that they are no longer assigned to the domain.
  * To delete tenant groups, go to :guilabel:`Device groups`, select a tenant group and click the :guilabel:`Edit` button. Click the :guilabel:`Delete` link.
  * To delete devices, go to :guilabel:`Device groups`, select a tenant group and click the :guilabel:`Edit` button. Click the :guilabel:`Detach all devices from group` button.

2. Go to :menuselection:`Administration --> Domain management`.
3. On a list of domains, find a domain or a subdomain you want to delete and click :guilabel:`Edit`.
4. Click the :guilabel:`Delete domain` button.

.. _Adding_users_to_a_domain:

Adding users to a domain
------------------------

.. tip:: * To enable users to have access to more data, put them higher in your domain hierarchy.
         * One user can be assigned only to one domain.

To add a user:

1. Go to :menuselection:`Administration --> Domain management`.
2. In the :guilabel:`Domains list`, select the appropriate domain and click the :guilabel:`Add` button. Read more in the :ref:`MU_Adding_users_accounts` chapter.
3. If you want to create multiple user accounts and assign all to one domain, use the :guilabel:`Add many` button. Read more in the :ref:`MU_Adding_multiple_users_accounts` chapter.
4. If you already have a user account:

 * Go to :menuselection:`Administration --> Users management` and select the user you want to add to a particular domain.
 * Click the :guilabel:`Edit` button and from the :guilabel:`Domain` list, select the appropriate domain.
 * Click the :guilabel:`Save` button.

.. _Configuring_login_pages:

Configuring login pages
-----------------------

To configure individual login pages for your domains (including Internal, Google and IBM authentication methods):

1. Go to :menuselection:`Administration --> Domain management` and select the domain for which you want to create or edit a login page.
2. Enter the :guilabel:`Login pages` tab. 
3. To edit an existing login page configuration, click it, change the desired settings and click :guilabel:`Save changes`.

.. note:: You can introduce changes even in case of the default login page. However, deleting such a page is not possible.

.. figure:: images/login_pages_panel.*
   :align: center

   *Fig. The Login pages panel*

4. To create a new login page, click the :guilabel:`Add new` button and configure the following fields:

 * Basic configuration

   * :guilabel:`Name` - the custom name for your login page configuration.
   * :guilabel:`URL` - the address of the login page.
   * :guilabel:`Internal login` checkbox - select this checkbox if you want to enable users in your domain to log in using the internal user credentials.

     .. figure:: images/login_pages_basic.*
        :align: center

        *Fig. Login pages basic configuration*

 * Account creation settings

   * :guilabel:`User creation` - set it to manual or automatic. In case of the latter, fill in the following fields:
   * :guilabel:`Domain` - the domain to which the created users will be automatically assigned.
   * :guilabel:`Set active` - select this checkbox if you want users to be activated at their creation. If left unchecked, the administrator will have to activate each account manually before the user can log in.
   * :guilabel:`Group` checkboxes - assign users to selected permission groups or choose the :guilabel:`Change private permissions` link for customized settings. Read more in the :ref:`Permissions` chapter.
   * :guilabel:`Access rights` - select the :guilabel:`Administrator` checkbox to give Administrator rights to the automatically created users.
   * :guilabel:`Security policy` - set the security policy for automatically created users.

     .. figure:: images/login_pages_account_creation.*
        :align: center

        *Fig. Account creation settings*

 * Google authentication

   * :guilabel:`Add new` link - click this link you want to enable users in your domain to log in using their Google account credentials. Then, fill in the following fields:

     * :guilabel:`Name` - the custom name for your Google authentication setting.
     * :guilabel:`Client ID` - provide your Google ClientID with the *.apps.googleusercontent.com* suffix.
     * :guilabel:`GSuite domain` - provide your GSuite domain.

     .. figure:: images/login_pages_google.*
        :align: center

        *Fig. Google authentication settings*

 * IBM authentication

   .. warning:: **Prerequisites**: When configuring your IBM Cloud Identity application sign-on settings, be sure to add your Redirection URI which follows the pattern: ``https://<hostname>/auth/ibm``. Also, remember to mark the :guilabel:`Send all known user attributes in the ID token` checkbox, or provide your email address in the :guilabel:`Attribute name` field and choose *email* as your :guilabel:`Attribute source`.

   * :guilabel:`Add new` link - click this link if you want to enable users in your domain to log in using their IBM credentials. Then, fill in the following fields:

     * :guilabel:`Name` - the custom name for your IBM authentication setting.
     * :guilabel:`Tenant URL` - provide your Tenant URL (to be configured your IBM Cloud Identity Applications settings).
     * :guilabel:`Client ID` - provide your Client ID (to be copied from your IBM Cloud Identity Applications settings).
     * :guilabel:`Client secret` - provide your Client secret (to be copied from your IBM Cloud Identity Applications settings).

     .. figure:: images/login_pages_ibm.*
        :align: center

        *Fig. IBM authentication settings*

5. Once you finished the configuration, click :guilabel:`Add new`.

.. note:: * To learn how to use the external login functionality, read the :ref:`GS_Logging_in_with_external_authentication` chapter.
 * To manage the data of external accounts connected with a given user profile, go to the :guilabel:`External authenticators` tab for your user in the :ref:`Users management <MU_Adding_users_accounts>`.
 * To track changes to login pages configuration done by users, go to :guilabel:`Historical analysis --> Users --> Activity` and search the results by selecting the :guilabel:`Login page configs` criterion.



.. _Configuring_Kannel:

Configuring Kannel
------------------

To configure the Kannel SMS gateway for your domain (and subdomains):

.. note:: Configuration will be inherited by your subdomains from the parent domain, but can be overridden for each subdomain and its subdomains.

1. Go to :menuselection:`Administration --> Domain management` and select the domain for which you want to create a Kannel configuration.
2. Enter the :guilabel:`Kannel` tab. 
3. In the tab, provide the required data: 

   * Base URL - it consists of the protocol, domain, and port: e.g. http://example.com:13013.
   * Username - provide the username used for Kannel authentication.
   * Password - provide the password used for Kannel authentication.

4. Click :guilabel:`Save changes`.

.. tip:: To learn how to communicate with the device via SMS, see the :ref:`SMS_connector` section.

**What to do next:** Configure your multitenancy by adding users, devices, groups of devices, task templates, tasks, resources and monitoring instances. Read the :ref:`Adding devices <UG_M_Adding_devices>` and :ref:`Configuring multitenancy <UG_M_Configuring_multitenancy>` chapters.

**See also:**

* :ref:`UG_M_Configuring_multitenancy`
