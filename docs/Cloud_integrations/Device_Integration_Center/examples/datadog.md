# Datadog

To send data to Datadog using their API directly, you typically use HTTP requests, and the data should be formatted in the appropriate payload. Datadog has different APIs for various purposes, such as Metrics API, Logs API, and Traces API.

Here's an example of how you can send metric data to Datadog using the Metrics API:

Send Metric Data to Datadog Metrics API:
Obtain API Key:

Log in to your Datadog account.
Navigate to Integrations > APIs in the Datadog web interface.
Obtain your API key.
Construct Metric Data Payload:

Format your metric data in the payload. For example:

```shell
{
  "series": [
    {
      "metric": "custom.metric",
      "points": [
        [UNIX_TIMESTAMP, VALUE]
      ],
      "type": "gauge",
      "tags": ["tag1:value1", "tag2:value2"]
    }
  ]
}

```


Replace custom.metric, UNIX_TIMESTAMP, VALUE, tag1:value1, and tag2:value2 with your actual metric details.

Make HTTP Request:

Use the curl command or any HTTP client to make a POST request to the Datadog Metrics API:
```shell
curl -X POST -H "Content-Type: application/json" -H "DD-API-KEY: YOUR_API_KEY" -d 'YOUR_METRIC_PAYLOAD' "https://api.datadoghq.com/api/v1/series"
```
Replace YOUR_API_KEY with your Datadog API key and YOUR_METRIC_PAYLOAD with the actual metric data payload.

Notes:
* Ensure that you have the correct permissions and your Datadog API key has the necessary access.
* Adjust the metric data payload based on your specific metric requirements.
* Datadog has different APIs for logs and traces. If you need to send logs or traces, refer to the Datadog documentation for the respective API details.

Always refer to the Datadog API documentation for the most up-to-date information and details on payload formats for different APIs.

---

To send logs to Datadog using their Logs API, you need to make HTTP POST requests to the appropriate endpoint. Below is an example using the curl command to demonstrate how to send logs to Datadog using raw API requests.

Send Logs to Datadog using Logs API:
1. Obtain API Key:
    Log in to your Datadog account.
    Navigate to Integrations > APIs in the Datadog web interface.
    Obtain your Datadog API key.
2. Construct Log Data Payload:
    Format your log data in the payload. For example:
    ```shell
    {
    "ddsource": "manual",
    "ddtags": "env:production",
    "hostname": "web-server-1",
    "message": "Error: Something went wrong!",
    "service": "web-app",
    "status": "error"
    }
    ```
    Replace manual, env:production, web-server-1, Error: Something went wrong!, web-app, and error with your actual log details.

Make HTTP Request:

Use the curl command or any HTTP client to make a POST request to the Datadog Logs API endpoint:

```shell
curl -X POST -H "Content-Type: application/json" -H "DD-API-KEY: YOUR_API_KEY" -d 'YOUR_LOG_PAYLOAD' "https://http-intake.logs.datadoghq.com/v1/input"
```
Replace YOUR_API_KEY with your Datadog API key and YOUR_LOG_PAYLOAD with the actual log data payload.
