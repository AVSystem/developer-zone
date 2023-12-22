# Using the API

## Tools to test our API

After obtaining your access token, you can use any available method to send HTTP requests to the {{coiote_short_name}} API. The following are a few tools that you may find useful.

!!! Note
    You can learn how to get your access token in the [Authentication](Getting_access.md#authentication) section.

**cURL**

cURL is a command-line tool used for making requests to various servers and retrieving data. It is widely used for making HTTP requests. To test {{coiote_short_name}} API using cURL:

1. Open a terminal or command prompt.

2. Type "curl" followed by the URL with the endpoint you want to request and the desired options. You have to include the access token in the authorization header. For example:

    ```
    curl -i -X GET "http://#HOSTNAME/api/coiotedm/v3/devices" -H "accept: application/json" -H "authorization: Bearer #TOKEN"
    ```
Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

3. Execute the command by pressing Enter. cURL will send the request to the server and display the response on the terminal.

**Postman**

[Postman](https://www.postman.com/) is a popular API development and testing tool with a user-friendly interface for making HTTP requests. To test {{coiote_short_name}} API using Postman:

1. Open Postman in the browser or download the Postman desktop app.
2. Navigate to the new request tab.
3. Enter the URL in the address bar:

    ```
    https://#HOSTNAME/api/coiotedm/v3/ 
    ```
Replace `#HOSTNAME` with your actual hostname.

1. Include the API endpoint to which you want to send a request, for example: 
   
    ```
    https://#HOSTNAME/api/coiotedm/v3/devices
    ```
Replace `#HOSTNAME` with your actual hostname.

1. Go to the **Authorization** tab. From the **Type** dropdown list select *Bearer Token*. Paste your access token.
2. Customize your request by adding headers, query parameters, or request body content. You can do this by clicking on the corresponding tabs.
3. Click **Send**. Postman will display the response received from the server, including the status code, headers, and response body.
4. You can analyze the response data, save it, or perform additional actions. Postman provides features like response validation, saving requests in collections, or organizing requests into folders.


**Swagger UI**

!!! Note
    Swagger can be used only if the user's password is stored in the {{coiote_short_name}} DM IAM. It doesn’t work for Single sign-on users.

Swagger UI is a tool for visualizing and interacting with APIs that are documented using the OpenAPI Specification. Using Swagger you can expand API endpoints, view request/response details, try out requests directly from the UI, and see the corresponding responses.

To access {{coiote_short_name}} API in Swagger UI:

1. Log in to your {{coiote_short_name}} account.
2. Click the question mark icon in the top navigation bar.
3. Go to **Specification > API v3**.
   
In the Swagger UI:

1. Click **Authorize** and type your username and password. You will be granted an access token to make requests. Your token expires after around 5 minutes. After that time you have to authorize again.
2. Select an endpoint and click **Try it out**.
3. Type your search criteria and click **Execute**.
4. Swagger UI displays your request in cURL and URL format along with the response and description of possible response codes.

## Making a request

Once you decide on a tool, you can start to form a request.

1. Identify the endpoint you want to use.

    Decide which endpoint and method will provide you with the results you need. For example, to get a list of devices, you would use GET and the endpoint /devices. For a detailed description of available endpoints consult the API reference.

2. Use parameters to adjust your request.
    
    Look for available query parameters to refine your request. If you want to get a list of devices that connected to the system in a selected period of time, you can use the parameter "lastSessionTime".

3. Evaluate the response. 
   
    The API response typically includes a status code, headers, and a response body. If your request from the example is successful, you will receive the status code 200. The headers will include information such as content-length, content-type and time of request. The response body will contain an array of device identifiers: 

```
[
  "device_id",
  "device_id",
  "device_id",
  "device_id",
  "device_id",
  "device_id",
  "device_id",
  "device_id"
]
```

You can encounter the following success response codes: 

| Code | Text       | Description                                                                                                                                                                     |
|------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200  | Success    | The request was successfully processed and the server sends back the requested content in the response body.                                                                    |
| 201  | Created    | The request to create a new resource was successful. The server includes information about the newly created resource in the response body or through headers.                  |
| 204  | No Content | The request was successfully processed, but there is no new data to include in the response body. This status code is often used for requests that update or delete a resource. |

## Error responses

{{coiote_short_name}} API implements the Standard HTTP error codes as well as custom codes. Every response body contains additional information about the error in JSON format.

**Standard HTTP error codes**

The following table lists possible error codes with a short explanation.

| Code | Text                       | Description                                                                                                                                                                                                                                                                                                                                                        |
|------|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 400  | bad request                | The server can't process the request because of missing or malformed parameters, or invalid data. You should review the request details, make sure that all required parameters are provided correctly, and validate the syntax of any included data.                                                                                                              |
| 403  | request forbidden          | The server can't fulfill the request because you don’t have sufficient permissions for accessing the resource. Check your permissions and contact the server admin if you need help.                                                                                                                                                                               |
| 404  | entity not found           | The server couldn't locate the requested resource. This could happen, for example, because of a mistyped URL, a deleted or moved resource, or an invalid link or reference. You should verify that the requested URL is correct or check server-side configurations and file availability.                                                                         |
| 409  | conflict with server state | The server can’t fulfill the request because of a conflict with the current state of the target resource. This error often happens when a requested resource has been modified by another user, blocking an update or modification request. You should revise your request or coordinate with other users to make sure that conflicting modifications are avoided. |
| 429  | too many requests          | You have sent too many requests to the server within a given timeframe, exceeding the server's rate limit. You should implement mechanisms to control your request rate and respect the server's rate limiting policies.                                                                                                                                           |
| 503  | service unavailable        | The server is currently unable to process the request. This can happen when the server is experiencing high traffic, undergoing maintenance, or facing temporary resource limitations. You should wait for the server to become available again or contact the server administrator for more information on the expected downtime.                                 |

**Custom error codes**

Custom error codes are implemented to provide more detailed and contextual explanations of the errors. The description for the error code depends on the endpoint and can be found in the request body. The following table lists a few examples of custom error codes with their possible descriptions.

| Code | Description                                                                                                                                                  |
|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 4000 | The provided time range was invalid. The start date must be earlier than the end date and they must be past dates. / Payload is invalid.                     |
| 4001 | The provided limit was invalid. It must be an integer between 1 and 2048.                                                                                    |
| 4002 | The handler id must be a 24-byte hexadecimal string representation.                                                                                          |
| 4003 | The provided LwM2M URL was invalid. The correct format is '/x/y/z' with the values being numeric. / Kafka domain property is not configured for this domain. |
| 4004 | The available handlers limit is already reached.                                                                                                             |
| 4005 | Provided handler URI is invalid or forbidden.                                                                                                                |
| 4006 | Provided bootstrap server(s) is invalid or forbidden.                                                                                                        |
| 4030 | The user does not have the permissions to perform monitoring actions.                                                                                        |
| 4040 | The device with the provided ID was not found. / The handler with the given id was not found.                                                                |
| 4041 | LwM2M resource with provided URL was not found. / The domain with the given id was not found.                                                                |
| 4042 | LwM2M resource is outside of the monitored range. Objects with ID between 1 and 65534 inclusive are monitored.                                               |
| 5030 | System encountered error while processing request, please try again later.                                                                                   |
| 5031 | Monitoring is not enabled.                                                                                                                                   |

