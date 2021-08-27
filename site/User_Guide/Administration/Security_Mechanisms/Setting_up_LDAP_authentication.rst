.. _AG_Setting_up_LDAP_authentication:

Setting up LDAP authentication
==============================

Introduction
------------

You can set up Coiote DM to authenticate and authorize users using the :strong:`Lightweight Directory Access Protocol` (LDAP).
The LDAP flow is divided into two parts: authentication and authorization.
Both of these parts can be done directly or through an admin account.

Authentication
^^^^^^^^^^^^^^

During authentication, we want to know if the login and password are correct. There are two ways to do that:

 * **Direct authentication**

A simple attempt to log in by means of user login/password.

 * **Admin-based authentication**

The Admin-based authentication first logs in as an admin,
then searches the actual user login by means of the username entered by the user and the :ref:`system configuration <ldap-cdm-conf>`,
and then tries to log in as the selected user by means of the login it found and the password provided.

Authorization
^^^^^^^^^^^^^

During authorization (authorization can use a different LDAP than authentication) we need to get a list of permissions for the logged user.
To achieve that, we get a list of specified LDAP attributes that are then translated into Coiote DM role names
(see :ref:`how to define the mapping <ldap-mapping-entity>`).

 * **Direct authorization**

Direct-based authorization logs in as the same user as in the case of authentication and gets the list of required attributes.

 * **Admin-based authorization**

Admin based authorization logs in as the admin user and gets the list of required attributes.

Actual configuration
--------------------

1. You need to request a version that allows to use LDAP. You need to choose at this point whether
you want to use admin-based or direct method for authentication, and admin-based or direct method for authorization.

.. _ldap-cdm-conf:

2. In the :file:`cdm.conf` file, you need to specify all the connection details.
There are ``directBased`` and ``adminBased`` parts of both authentication and authorization
settings. You can omit the ``adminBased`` configration if you go for the ``directBased`` and vice versa.
An example configuration is presented below.
For the :file:`/your-config/entities/ldapMappings.conf` path in `commonEntitiesList` section,
the :file:`your-config` is the folder name where the :file:`cdm.conf` file
is located. The following part, :file:`entities/ldapMappings.conf`, points to an arbitrary file within that folder.
For details on how to define such a file, see :ref:`how to define the LDAP-Coiote role mapping <ldap-mapping-entity>`.

 ::

   smg.mod.auth.ldap {
     authentication {
       # common authentication settings
       connection.address = "ldap://<address>:389"     # URL of LDAP authentication server
       defaultDomain = null                            # Domain that will be assigned to user if none of mappings contain domain
                                                       # if null then at least one matching mapping must contain domain
       directBased {
         # ignore if you use admin-based authentication
         loginDnPrefix = "login="                      # prefix for login
         loginDnSuffix = ",CN=test"                    # sufix for login
       }
       adminBased {
         # ignore if you use direct authentication
         mainLogin = "CN=admin,DC=example,DC=com"      # DN of ldap user, which logs in into LDAP for user authentication
         mainPassword = "test"                         # password of ldap user
         baseDN = "CN=test,DC=example,DC=com"          # baseDN which is used for searching authenticated user DN
         userLoginAttribute = "cn"                     # ldap entry attribute which is used for authenticated user searching
         filter = "(|(sn=test)(sn=abcd))"              # filter used during ldap search which is used for result narrowing (optional)
       }
     }
     authorization {
       # common authorization settings
       connectionAddress = "ldap://localhost:389"      # ldap address used in authorization (can be different than for authentication)
       fields = [memberOf]                             # field names which are being searched
       removeDomainDuringAuthorization = true          # if true - user's login contains domain, which is dropped and only login is used for authentication
       loginDN = "OU=PGED,DC=PGED,DC=OT"               #  DN of authorizing user (which is used for loading/searching its attributes)
       directBased {
         # ignore if you use admin-based authorization
         loginDnPrefix = ""                            # prefix of ldap user's DN during authorization
         loginDnSuffix = ""                            # suffix of ldap user's DN during authorization
         loginFieldName = "sAMAccountName"             # baseDN used for searching user attributes
       }
       adminBased {
         # ignore if you use direct authorization
         mainLogin = "admin"                           # DN of ldap user, which logs in into LDAP for user authentication
         mainPassword = "password"                     # password of ldap user
         adminAuthorizationPrefix = "login="
         displayNameAttribute = "sn"                   # ldap attribute which contains user's display name
       }
     }
   }

   commonEntitiesList += {
     importOption = ADD_NEW_AND_UPDATE_EXISTING
     entityClass = "com.avsystem.ump.core.db.entities.LdapMapping"
     // Adjust "your-config" name to your actual config-directory name
     resourcePath = /your-config/entities/ldapMappings.conf
   }


.. _ldap-mapping-entity:

3. You need to create a configuration file that specifies the mapping from LDAP attributes to Coiote DM roles and domains.
The file can be anywhere in your config-directory, as specified in the :file:`cdm.conf` file.
We suggest saving it at :file:`/entities/ldapMappings.conf`. The following example has only a single
mapping defined (``exampleId``), but in common scenarios you'll need to define a few of them.

 ::

   entities {
     "com.avsystem.ump.core.db.entities.LdapMapping" {
       // each entry must have assigned a unique id
       exampleId = {
         // ID of permission-giving role. Most common for Coiote are: cloudadmin, cloudtenant, cloudbasic
         "roleId" : "cloudadmin",
         // Domain that will be assigned to the user (can be null)
         "domain" : "/",
         // whether the user will be marked as super-user (NOT recommended until you are absolutely sure you want to do this)
         "superUser" : false,
         // And now this part defines if the mapping will apply to the user.
         // It is a map (in this example it has two entries).
         // If all entries match, then user will be assigned the role.
         // Key is attribute that will be matched (for example: "sn")
         // Value is list of values (in this case two for "sn"), at least one of these values must match for an map entry to match.
         // There are two kinds of values:
         // PlainAttributeValue, which must be an exact-match
         // and AttributeValueRegex, which can contain a regular expression.
         // user with "cn=wojtek,sn=wojciech" would match, but "cn=wojtek,sn=kowalski" would not
         "expectedAttributes" : {
           "sn" : [ { "PlainAttributeValue" : { "value" : "nie-to" } }, { "AttributeValueRegex" : { "regex" : "wojcie.." } } ]
           "cn" : [ { "PlainAttributeValue" : { "value" : "wojtek" } } ]
         }
       }
     }
   }

.. note:: Note that to create LDAP-mappings, you will need to use Coiote DM group IDs instead of role names. To collect them, use the following command:

 ::

   mongo --authenticationDatabase admin -u <user> -p <password> --eval "db.getSiblingDB('smg').Role.find({},{ _id: 1, displayName: 1 }).toArray()"`

 Example: In LDAP-mappings, you need to use the **cloudadmin** group ID instead of the **Tenant Admin** role name.

Setting up LDAP over TLS
------------------------

You can use the TLS to secure the connection to the LDAP server.
It might be necessary to add a CA certificate used to sign the LDAP server’s certificate to the list of certificates recognized by the JVM. If so, please refer to the instruction below.

Note that example commands assume placeholder filenames, paths and passwords - please remember to adjust them to your environment.

 .. tip:: You can set the ``smg.mod.auth.ldap.disableCertificateChecking = true`` in ``cdm.conf`` to use LDAPs without the need to import the LDAP server's certificate, but you will lose some security guarantees.

1. If the CA certificate is PEM-encoded, then change endoding to DER.

 Example command, using `openssl`:
 
 ``openssl x509 -in cert.pem -inform pem -out cert.der -outform der``


2. Import the certificate to CA certs.

 Example command, using `keytool`, a program bundled with JDK:
 
 ``keytool -importcert -alias startssl -keystore /usr/lib/jvm/jre-1.8.0/lib/security/cacerts -storepass changeit -file cert.der``


3. Adjust the Coiote DM config.

 You need to change the URL of the LDAP server from "ldap://IP:389" (389 being the standard LDAP port) to "ldaps://IP:636" (note the protocol change, 636 is the standard LDAPs port).

 ::

   smg.mod.auth.ldap {
     authentication {
       connection.address = "ldaps://IP:636"
     }
     authorization {
       connectionAddress = "ldaps://IP:636"
     }
   }

4. Restart Coiote DM.

Additional helpful commands:
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

 * List CA certificates recognized by the JVM:
   ``keytool -keystore /usr/lib/jvm/jre-1.8.0/lib/security/cacerts -storepass changeit -list``

   .. note:: The path to ``cacerts`` might vary depending on the Java version or your Linux distribution.

 * Connect to LDAP server and verify the certificate:
   ``openssl s_client -connect ldap.server.io:636 -CAfile cert.pem </dev/null 2>/dev/null | grep -i verify``

 * Using ldapsearch over TLS.
   Add configuration to LDAP (e.g. /etc/openldap/ldap.conf):
   ``TLS_CACERT /path/to/cert.pem``
   and then use ldapsearch using "ldaps://IP:636" URL