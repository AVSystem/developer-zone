.. _Security Mechanisms:

===================
Security mechanisms
===================

----------------------
User security policies
----------------------

System users can be assigned to groups with a specific permission. In addition, administrator can also set up specific user security policies to take care of password expiration or password change policy. As an administrator, you can add security policies in :menuselection:`Administration -->  Users management --> Security policies`. Read how to add security policies in the :ref:`MU_Managing_security_policies` chapter.

.. important:: Security policies apply only to login mechanisms managed entirely by UMP. If third party comes into play (for example, LDAP, or other external systems) security policies will not take effect at all.

----------------
Access schedules
----------------

Access schedules grant a possibility to configure hours when users can log into the system. Schedules are divided into 15 minutes periods over a whole week with optional date boundaries. The schedule chooser works as the schedule chooser for tasks.
Read how to add a schedule to a user in the :ref:`MU_Adding_users_accounts` chapter and how to define the schedule in the :ref:`UIR_A_Predefined_Schedules_Editor` chapter.

------------------------------------------
Additional system configuration properties
------------------------------------------

Some additional properties stored in *ump.properties*:

 * **smg.mod.auth.maxConcurrentUsers** - determines how many concurrent users can be logged into the system.
 * **smg.mod.auth.multipleUsersAllowed** - if set to *true*, multiple users will be able to log into, for example, a "root" account and use it. If it is set to *off* after a successful login from other computer or browser, other users will be automatically logged off.
 * **smg.mod.auth.blockUserTemporarilyAfterAttempts** - the system will block a user account temporarily for a particular number of minutes after a specified number of failed attempts to log in.
 * **smg.mod.auth.blockUserPermamentlyAfterAttempts** - the system will block the user account permanently after a specified number of failed attempts to log in.
 * **smg.mod.auth.blockUserTemporarilyIntervalMinutes** - determines how long a temporary blocking will last.

**See also:**

.. toctree::
   :maxdepth: 1

   Security_Mechanisms/Hiding_Sensitive_Subscriber_Data
   Security_Mechanisms/Setting_up_LDAP_authentication

