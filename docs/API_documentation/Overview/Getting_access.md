# Getting access

## Registration

To use the {{coiote_short_name}} API you need to have a user account in the platform. Individual users can sign up for a free Developer account using the [sign-up page]({{coiote_site_link}}/iam/realms/coiote-cloud/login-actions/registration?client_id=coiote-dm&tab_id=u5lrlEPuspI). They are granted a regular user account that has access to a selected set of endpoints, such as devices, groups or deviceEvents. You can find the list of endpoints accessible for a Developer account in the [Permissions](#permissions) section. For more information about account types, see [Plans and pricing](https://www.avsystem.com/coiote-iot-device-management-platform/plans-and-pricing/).

## Authentication

**Type of authentication**

{{coiote_short_name}} API uses OAuth 2.0 Password Grant authentication. In this form of authentication you have to provide the username and password in a `POST` request to the server. The server then exchanges the password for an access token.
The `POST` request contains the following parameters:

- *grant_type* - by providing the value “password” you indicate the password grant authentication type
- *username* - your username
- *password* - your password

!!! Note
    SSO users (usually business users) need to have an Identity Access Management (IAM) service account. Contact the platform administrator to have this account created. 

!!! Note
    In some installations the users obtain access token through exchange token procedure. Contact the platform administrator for more information.

**How to get access token**

You can obtain a REST API access token by sending the `POST` request on an authentication endpoint. If you want to use cURL enter the following command in the terminal:

```
curl -X - `POST` \                                                                                     
-H "Content-Type:application/x-www-form-urlencoded" \
   --data-urlencode "grant_type=password" \
   --data-urlencode "username=user@mail.com" \
   --data-urlencode "password=pass" \
  'https://#HOSTNAME/api/auth/oauth_password'
```

You can send the request using any of the tools described in section [Tools to test our API](./Using_the_API.md#tools-to-test-our-api).

The response to this request will contain the access token and its expiration time expressed in seconds:  

```
{"access_token":"your_access_token","token_type":"Bearer","expires_in":"number_of_seconds"}
```

**How to authenticate requests**

Include the obtained token in the "authorization" header of the request. For example:
```
curl -i -X - `GET` "http://#HOSTNAME/api/coiotedm/v3/devices" -H "accept: application/json" -H "authorization: Bearer #TOKEN"
```
Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

**Error messages related to invalid authentication**

- 401: Unauthorized - you may encounter this error, if you provide incorrect access token
- 403: Forbidden - you may encounter this error, if you attempt to access an endpoint without the necessary permission
  
**Token expiration time**

The expiration time of the token is determined by the administrator and remains consistent for all user types. Typically, the token expires after around 5 minutes.

## Permissions

Each endpoint has a separate permission. 

Developer and Business accounts have permissions for the access to the following set of API endpoints:

- `GET cachedDataModels/{deviceId}`
- `DELETE deviceEvents/handler/{id}`
- `GET deviceEvents/handler`
- `GET deviceEvents/handler/{id}`
- `POST deviceMonitoring/configuration/{group_groupId}/enable/`
- `GET deviceMonitoring/{data_deviceId}/alias/{alias}`
- `GET deviceMonitoring/{data_deviceId}/resourceUrl/{lwm2mUrl}`
- `DELETE devices/{id}`
- `GET devices`
- `GET devices/{id}`
- `POST devices`
- `PUT devices/{id}`
- `GET devices/all/count`
- `POST dialects/addObject`
- `GET domains`
- `GET domains/{id}`
- `DELETE groups/{id}`
- `GET groups`
- `GET groups/{id}`
- `POST groups`
- `PUT groups/{id}`
- `GET instantiatedResources/dataModelDefinition/{deviceId}`
- `GET instantiatedResources/resourcesData/{deviceId}`
- `DELETE monitoring/{monitoringName}`
- `GET monitoring`
- `GET monitoring/{monitoringName}`
- `POST monitoring`
- `PUT monitoring/{monitoringName}`
- `GET monitoringData/aggregates/numerical/{monitoringName}/{groupId}/{resourceName}`
- `GET monitoringData/aggregates/textual/{monitoringName}/{groupId}/{resourceName}`
- `GET monitoringData/moreSamples`
- `GET monitoringData/samples/{monitoringName}/{deviceId}`
- `GET observations`
- `DELETE observations/device/{deviceId}/{path}`
- `GET observations/device/{deviceId}/{path}`
- `POST observations/device/{deviceId}/{path}`
- `POST sessions/{deviceId}`
- `GET settingValues`
- `PUT settingValues`
- `GET settingValues/deviceProfile/{deviceId}`
- `GET settingValues/groupProfile/{groupId}`
- `GET taskReports`
- `GET taskReports/{taskId}/{deviceId}`
- `GET tasks`
- `GET tasks/{id}`
- `DELETE tasks/callback/{taskId}/{callbackName}`
- `GET users/{id}`
