.. _GS_Logging_in_as_a_client:

Logging in as a client (impersonalization)
==========================================

Read this instruction to learn how to log in to other users' accounts to perform the same actions as owners of these accounts.

**Prerequisites:** To perform this action, you need to be a **system administrator** or have a proper permission assigned.

To log in as a client:

1. Log in to your account by using your username and password.
2. On the menu bar click :guilabel:`My account`, and then click :guilabel:`Log in as client`.

.. figure:: images/Logging_in_as_client.*
  :align: center

  *Fig. Logging in as a client*

3. From the :guilabel:`Select account` list, select an account in to which you want to log in.
4. Click the :guilabel:`Log in` button. You are instantly logged in to the selected account.

To log in to your account again, on the menu bar click :guilabel:`My account`, and then click :guilabel:`Log out` and log in once again.

Enabling users to log in to other users accounts
------------------------------------------------

Learn how to enable the :guilabel:`Log in as client` functionality for other users so that they can log in to other accounts in the same domain as well as their subtenants' accounts. In this way, such users can perform the same actions as owners of these accounts.

1. Go to :menuselection:`Administration --> Users management`.
2. Click the proper tab:

 * :guilabel:`System users` to add a permission to particular users.
 * :guilabel:`Group` to add the permission to a group of users.

3. In the tab, select proper users or groups and click the :guilabel:`Edit` button.
4. Click the :guilabel:`Private permissions` or :guilabel:`Permissions` tab and select the :guilabel:`smg.logInAsClient` permission.
5. Click the :guilabel:`Save` button.