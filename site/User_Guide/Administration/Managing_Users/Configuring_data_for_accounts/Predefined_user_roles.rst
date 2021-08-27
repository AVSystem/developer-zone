.. _MU_Predefined_user_roles:

Predefined user roles
=====================

To speed up creation of new users in the platform, you can use predefined user roles that consist of sets of permissions.

 * **Admin** - has access to the whole platform (all its functionalities along with multitenancy) and a full permission set.
 * **Cloud Admin** - has access to the widest array of functionalities along with multitenancy. If **Cloud Admins** are assigned to different domains, they have a great control over the platform but they do not influence one another. They can use the following panels:

   * :guilabel:`Administration`
   * :guilabel:`Resources`
   * :guilabel:`Expression sandbox`
   * :guilabel:`LwM2M servers`
   * :guilabel:`Task templates`
   * :guilabel:`Panel Editor`
   * :guilabel:`Device actions`
   * :guilabel:`Tasks`
   * :guilabel:`Group action trigger`
   * :guilabel:`Inject ACS URL`
   * :guilabel:`Unknown and unauthorized devices`
   * :guilabel:`Group membership management`
   * :guilabel:`Favorite devices`
   * :guilabel:`Import devices from CSV`
   * :guilabel:`Device inventory` (with adding both management and bootstrap entities)
   * :guilabel:`Device management`
   * :guilabel:`Device groups` with :guilabel:`Value tracking`
   * :guilabel:`Monitoring & reporting`
   * :guilabel:`Monitoring`
   * :guilabel:`Change password`
   * :guilabel:`Extentions`.

 * **Cloud Tenant** - has the same set of permissions as **Cloud Admin** but cannot manage groups of devices - only single ones. **Cloud Tenant** has access to the following panels:

   * :guilabel:`Administration`
   * :guilabel:`Resources`
   * :guilabel:`Expression sandbox`
   * :guilabel:`Device actions`
   * :guilabel:`Tasks`
   * :guilabel:`Inject ACS URL`
   * :guilabel:`Favorite devices`
   * :guilabel:`Device inventory` (with adding both management and bootstrap entities)
   * :guilabel:`Device management` (all tabs without a permission to change a device's domain)
   * :guilabel:`Change password`.

 * **Cloud Basic** - has access to basic device management without tasks. Such a user role is good for learning how the platform works and for testing basic capabilities of devices. **Cloud Basic** has access to the following panels:

   * :guilabel:`Device inventory` (with adding management entities only)
   * :guilabel:`Device management` (:guilabel:`Dashboard`, :guilabel:`Objects`, :guilabel:`General management`, :guilabel:`Logs` and :guilabel:`LwM2M firmware` without a permission to change a device's domain and groups)
   * :guilabel:`Change password`.

 * **Cloud Bootstrap REST** (REST only) - has only two permissions: *rest.base.paths.devices.POST* (allows to send the *POST /devices request* to create a new device entity) and *rest.base.paths.devices.PUT_id* (allows user to send the *PUT /devices/{id} request* to update the device entity).
