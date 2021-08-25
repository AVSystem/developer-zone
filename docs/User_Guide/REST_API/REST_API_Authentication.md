# REST API authentication

To use REST API, a regular user account in the platform is required. Such user account should have permissions for performing REST API requests.
The user can obtain a REST API access token by sending the `POST` request on an authentication endpoint:

```

    curl --request POST  --url http://#HOSTNAME/api/auth/oauth_password   --header 'content-type: application/x-www-form-urlencoded'  --data 'grant_type=password&username=#USERNAME&password=#PASSWORD'
```

A response to this request contains the access token and its expiration time is expressed in seconds:

```
    {"access_token":"#TOKEN","token_type":"Bearer","expires_in":"#EXPIRATION_TIME"}
```

The obtained token can be used for performing requests on a device management endpoint - it should be included in the "authorization" header. For example:

```
    curl -i -X GET "http://#HOSTNAME/api/coiotedm/v3/devices" -H "accept: application/json" -H "authorization: Bearer #TOKEN"
```

Token expiration time is renewed on each request. When the token is no longer needed it can be invalidated using the authentication endpoint:

```
    curl --request POST  --url http://#HOSTNAME/api/auth/invalidate_token --header 'content-type: application/json'  --data '{"token": "#TOKEN"}'
```
