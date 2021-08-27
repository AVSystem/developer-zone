.. _MU_Managing_security_policies:

Managing security policies
==========================

Adding security policies
------------------------
To ensure that user accounts are safe, create a security policy and assign it later to the accounts.
The security policy defines:

 * How a proper password should look like - its minimum length and complexity.
 * If users need to change passwords and what happens if they do not do it.
 * How often users can change passwords.
 * If accounts will be blocked after failed attempts to log in.

.. important:: Security policies apply only to login mechanisms managed entirely by Coiote DM. If you use, for example, LDAP or other external systems, then security policies will not take effect at all.

To add a security policy:

1. Go to :guilabel:`Administration` and select :guilabel:`Users management`.
2. Go to the :guilabel:`Security policies` tab.
3. Click the :guilabel:`Add` button.
4. Type a name for a policy.
5. Configure settings for a password.
6. Decide if users need to change their passwords and how often they should do it by selecting :guilabel:`Yes` in:

 * :guilabel:`Force at first login` so that users have to change their passwords immediately after first logging in.
 * :guilabel:`Force periodically`  so that users have to change their passwords after a defined time period (time is counted from the last password change).
 * :guilabel:`Frequency limit` so that users cannot change their passwords more often than a specified time period.

7. Decide what happens if users fail to log in.
8. Click the :guilabel:`Save` button.

.. figure:: images/adding_security_policies.*
  :align: center

  *Fig. Adding security policies*

Editing security policies
-------------------------

At any time you can make changes to a security policy to make it more or less strict.

To edit a security policy:

1. Go to :guilabel:`Administration` and select :guilabel:`Users management`.
2. Go to the :guilabel:`Security policies` tab.
3. Use search to find a security policy you want to edit and click it.
4. Click the :guilabel:`Edit` button.
5. Introduce needed changes.
6. Click the :guilabel:`Save` button.

Deleting security policies
--------------------------

If you do not want to use a security policy, you can delete it from the system.

To delete a security policy:

1. Go to :guilabel:`Administration` and select :guilabel:`Users management`.
2. Go to the :guilabel:`Security policies` tab.
3. Use search to find a security policy you want to delete and click it.
4. Click the :guilabel:`Delete` button.
5. Confirm your action by clicking the :guilabel:`Yes` button.
