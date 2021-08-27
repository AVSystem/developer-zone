.. _MU_Adding_users_accounts:

Adding user accounts
====================

As a system administrator you need to create accounts for users so that they can have access to the system. Some of users can be created using external
systems such as SSO or LDAP, then such users have :guilabel:`SSO` or :guilabel:`LDAP` labels assigned (labels are visible in the table with users).

.. note:: You will not be able to add user accounts if you do not have free licenses for users.

To add a user account:

1. Go to :guilabel:`Administration` and select :guilabel:`Users management`.
2. Go to the :guilabel:`System users` tab.
3. Click the :guilabel:`Add` button.
4. Type a user login and a full name.
5. Set a password for the user by choosing one of the below options:

 * To generate a random password, click the :guilabel:`Generate password` link. Copy the generated password and give it to the user.
 * To generate a particular password, type it into the :guilabel:`Password` and :guilabel:`Confirm password` fields. Copy the generated password and give it to the user.

6. Type an email address and phone number.
7. From the :guilabel:`Template` list, select a template or complete the below fields.

  .. tip:: If you select the template, most of the settings will be set according to the settings included in the selected template.

8. Activate the user account by clicking the :guilabel:`Activate` link (by default the user account is inactive). To make the account inactive, click the :guilabel:`Deactivate` link.

.. figure:: images/adding_a_new_user.*
  :align: center

  *Fig. Adding user accounts*

9. If you want to set for how long the user can access the system, click the :guilabel:`Set expiration day` link and set the appropriate dates.
10. In :guilabel:`Access rights`, select the :guilabel:`Administrator` check box if you want to give the user access to the whole system.
11. From the :guilabel:`Access schedule` list, select a proper schedule. During the selected time period the user will be able to use the account.
12. Select a domain.
13. Configure other settings in the below tabs:

 * :guilabel:`Groups` - select groups by clicking the group name to which the user will belong.
 * :guilabel:`Private permissions` - select check boxes next to permissions.
 * :guilabel:`Security policy` - select proper policies names.
 * :guilabel:`REST API Quota` - set how many times during a defined time period (set in the :guilabel:`Quota reset period` field) a user can send particular requests.
 * :guilabel:`External authenticators` - this tab shows the OpenID token data of external accounts connected with the user profile. Note that each connected external service account will be saved as a separate pair of **Issuer** and **Subject**.

14. Click the :guilabel:`Save` button.

.. tip:: If you need to add more than one user account with the same settings, consider :ref:`adding multiple user accounts <MU_Adding_multiple_users_accounts>`.

**See also:** :ref:`UG_WB_Limiting_the_number_of_requests`
