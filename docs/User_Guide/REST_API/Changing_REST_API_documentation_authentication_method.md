# Changing REST API documentation authorization method

The administrator can decide whether the REST API documentation should be accessed with or without providing the local account password.

In order to change the authorization method, open the `cdm.conf` and, in the `restApi` section, find the `swaggerDocAuthMode`. Set its value to:

   * `GUI_COOKIE` - if you want the access to REST API documentation to be based on the cookie obtained during logging in to the platform, or
   * `BASIC` - if you want to require password-based authentication upon entering the REST API documentation.

!!! note
    Even with the `GUI_COOKIE` setting in place, the user will still need the standard authentication (using the username and password or API token) to use REST API requests.
