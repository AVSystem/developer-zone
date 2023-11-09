# How to send data outside the application using event handlers

**Prerequisites:**

- An active {{coiote_short_name}} DM user with a domain

**Endpoints used:**

- `POST /deviceEvents/handler/kafka`
- `POST /deviceEvents/handler/webhook`
- `POST /deviceEvents/handler/test/existing/{id}`




## Overview

You can send data outside the application using one of two methods - **Kafka** or **Webhook**.

**Webhook** sends events to an external HTTP server. You can choose this method, if you have an external server, lambda prepared in AWS, or your own application that is able to receive HTTP traffic from {{coiote_short_name}}.


**Kafka** sends events to an external Kafka server. It’s an option for advanced users. You should choose it if you want to forward a great number of events and you have a good understanding of how Kafka works.

## Step 1: Prepare a “receiver” for the data from {{coiote_short_name}}

Configure a destination to which you want to forward the data. It can be a Kafka cluster ([https://www.confluent.io/confluent-cloud/](https://www.confluent.io/confluent-cloud/)), a bucket for data in Influx Cloud ([https://www.influxdata.com/products/influxdb-cloud/](https://www.influxdata.com/products/influxdb-cloud/)), or your own HTTP server.

## Step 2: Configure the authentication

Get the authentication data (password/token) from your data receiver to use it for {{coiote_short_name}} authentication.

## Step 3: Prepare the information you want to forward

Decide which events you want to send. Event handlers can forward events of two types:

- **Telemetry events** - emitted each time a change in the device data is spotted by the system
- **Device events** - emitted each time the device state changes

**Telemetry events** are usually emitted when: 

- the device sends an LwM2M Notify message to the server, 
- the device sends an LwM2M Send message to the server, 
- the server carries out Read on the device resource. 

**Device events** are emitted when one of the following takes place:

- deviceCreated - a device is added to the system
- deviceFirstRegistration - a device connects for the first time
- deviceUpdatedViaWrite - the server carries out a Write to a device's resource
- deviceUpdatedViaFota - the server finishes execution of Firmware Upgrade (FOTA) on a device
- deviceDeleted - a device is deleted from the system

## Step 4: Create the event handler

The device event handler determines whether an event, telemetry or lifecycle, should be forwarded, decides how it should be forwarded, and then forwards the data. Each domain can have up to 10 event handlers. One event can trigger one or more event handlers. If the event handler fails 5 times in a row, then it is deactivated.

### Create a Kafka event handler

Send a POST request to the endpoint /deviceEvents/handler/kafka. Use the domain query parameter to specify the domain, otherwise, the domain of the user authorizing the request will be selected. In the request body, provide the event handler configuration. It consists of two parts:

#### Configure the connection to the Kafka instance

You can specify the configuration of the connection to the target Kafka instance:

- Using Kafka domain properties

If your domain has Kafka properties configured, you can reuse them in the handler. Whenever the configuration changes, it will be reflected in your event handler. This can be achieved by setting the connectionConfig.type field to "domainProperties" in the request body.

The following example of a request body creates a handler from Kafka config stored in domain properties:

``` json
{
   "type": "kafka",
   "name": "Domain Kafka event handler",
   "enabled": true,
   "connectionConfig": {
     "type": "domainProperties",
     "topic": "coiote.deviceEvents",
     "headers": {
       "Origin": "Coiote-DM"
     }
   },
   "filter": {
     "type": "lifecycle",
     "eventTypes": [ "deviceCreated" ]
   },
   "description": "This handler forwards data to kafka-cloud.com"
}
```

- Using custom Kafka producer configuration

You can specify the Kafka configuration directly in the request body. This configuration must follow the *.properties* file format syntax and contain at least the addresses for bootstrap servers of your Kafka cluster. If your config contains "sasl.jaas.config" property, it is advised to skip the “ character in the "username" and "password" fields using \.

The following example of a request body creates a handler from custom Kafka properties:

``` json
{
   "type": "kafka",
   "name": "Custom Kafka event handler",
   "enabled": true,
   "connectionConfig": {
     "type": "custom",
     "value": "bootstrap.servers=kafka-cloud.com:9093\nsecurity.protocol=SASL_PLAINTEXT\nsasl.mechanism=SCRAM-SHA-256\nsasl.jaas.config=org.apache.kafka.common.security.scram.ScramLoginModule required username=\"kafka-user\" password=\"pass\";",
     "topic": "iot.deviceEvents",
     "headers": {
       "Origin": "IoT DM"
     }
   },
   "filter": {
     "type": "lifecycle",
     "eventTypes": [ "deviceCreated" ]
   },
   "description": "This handler forwards data to kafka-cloud.com"
}
```

!!! Note
    In both types of configuration, for security reasons, the following parameters will be appended to the producer configuration:

```
retries = 0
max.block.ms = 8000
```

#### Select forwarded events by applying the filter

Each handler can forward events of only one of two types: Telemetry events or Device events.

For handlers that forward telemetry data, you can state for which LwM2M objects and resources the forwarding should happen, by specifying a list of LwM2M URLs in the filter definition.

For example, the following filter allows all events for resource Latitude in object Location (URL: /6/0/0) and also all events for object Temperature (URL /3303):

``` json
"filter": {
 "type": "telemetry",
 "lwm2mUrls": [ "/6/0/0", "/3303" ]
}
```

For handlers that forward device events, you have to point to the event types.

For example, the following filter selects the events of registration and carrying out FOTA:

``` json
"filter": {
 "type": "lifecycle",
 "eventTypes": [ "deviceFirstRegistration", "deviceUpdatedViaFota" ]
}
```

The following is an example of the request creating a handler with custom Kafka properties and device events:

=== "cURL"

    ```
    curl -X POST \
    -H "accept: application/json" \
    -H "Authorization: Bearer #TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"type":"kafka","name":"Domain Kafka event handler","enabled":true,"connectionConfig":{"type":"domainProperties","topic":"coiote.deviceEvents","headers":{"Origin":"Coiote-DM"}},"filter":{"type":"lifecycle","eventTypes":["deviceCreated"]},"description":"This handler forwards data to kafka-cloud.com"}' \
    "https://#HOSTNAME/api/coiotedm/v3/deviceEvents/handler/kafka"
    ```

=== "Coiote Python"

    ``` py
    from coiote.client import Coiote
    from coiote.v3.model.device_events import CustomKafkaConnectionConfig, DeviceLifecycleEventType, EventHandlerConfiguration, HandlerType, LifecycleEventHandlerFilter

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    event_handler = EventHandlerConfiguration(
        type=HandlerType.Kafka,
        name="Custom Kafka event handler",
        enabled=True,
        filter=LifecycleEventHandlerFilter(
            eventTypes=[DeviceLifecycleEventType.Created]
        ),
        connectionConfig=CustomKafkaConnectionConfig(
        from coiote.client import Coiote
    from coiote.v3.model.device_events import DeviceLifecycleEventType, EventHandlerConfiguration, HandlerType, KafkaFromPropertiesConnectionConfig, LifecycleEventHandlerFilter

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    event_handler = EventHandlerConfiguration(
        type=HandlerType.Kafka,
        name="Domain Kafka event handler",
        enabled=True,
        filter=LifecycleEventHandlerFilter(
            eventTypes=[DeviceLifecycleEventType.Created]),
        connectionConfig=KafkaFromPropertiesConnectionConfig(
            topic="coiote.deviceEvents",
            headers={
                "Origin": "Coiote-DM"
            }
        ),
        description="This handler forwards data to kafka-cloud.com"
    )
    print(
        client.device_events.create_handler(event_handler)
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

### Create a Webhook event handler

Send a `POST` request to the endpoint `/deviceEvents/handler/webhook`. Use the domain query parameter to specify the domain, otherwise, the domain of the user authorizing the request will be selected. In the request body, provide the event handler configuration. It consists of three parts:

#### Configure the connection

Each Webhook event handler can forward events both to HTTP and HTTPS endpoints. If you specify the target URL to be HTTPS, handler execution will fail if the certificate is not valid.

The requests can be authorized:

- using basic auth (user and password), by specifying *connectionConfig.auth* field of request body:

``` json
{
  "connectionConfig": {
     "type": "basic",
     "user": "<your username>",
     "password": "<your password>"
  }
  ...
}
```

- using bearer auth (token), by specifying *connectionConfig.token* field of request body:

``` json
{
  "connectionConfig": {
     "type": "token",
     "token": "<your token>"
  }
  ...
}
```

- using custom static header, by specifying *connectionConfig.additionalHeaders* field of request body:

``` json
{
  "connectionConfig": null,
  "additionalHeaders": {
     "<custom authorization header>": "<header value>"
  }
  ...
}
```

#### Specify delivery method and payload format

If you do not select the HTTP method using *connectionConfig.method* field, the requests will be sent using HTTP POST. You can specify the method to be one of "post", "put" or "patch".

By default, the events are represented as JSON when the request payload is prepared. You can change the format to InfluxDB line protocol by setting the *connectionConfig.format* field to "influxDb".

#### Select forwarded events by applying the filter

Each handler can forward events of only one of two types: Telemetry events or Device events.

For handlers that forward telemetry data, you can state for which LwM2M objects and resources the forwarding should happen, by specifying a list of LwM2M URLs in the filter definition.

For example, the following filter selects all events for resource Latitude in object Location (URL: /6/0/0) and also all events for object Temperature (URL /3303):

``` json
"filter": {
 "type": "telemetry",
 "lwm2mUrls": [ "/6/0/0", "/3303" ]
}
```

For handlers that forward device events, you have to point to the event types.

For example, the following filter selects the events of registration and carrying out FOTA:

``` json
"filter": {
 "type": "lifecycle",
 "eventTypes": [ "deviceFirstRegistration", "deviceUpdatedViaFota" ]
}
```

The following is an example of the request:

=== "cURL"

    ```
    curl -X POST \
    -H "accept: application/json" \
    -H "Authorization: Bearer #TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"type":"webhook","name":"Influx event handler","enabled":true,"connectionConfig":{"method":"post","format":"influxDb","additionalHeaders":{"Authorization":"Token <enter your token>"},"uri":"https://eu-central-1-1.aws.cloud2.influxdata.com/api/v2/write?bucket=<enter bucket ID>","auth":null},"filter":{"type":"telemetry","lwm2mUrls":["/6/0/0"]},"description":"This handler forwards location data to InfluxDB Cloud"}' \
    "https://#HOSTNAME/api/coiotedm/v3/deviceEvents/handler/webhook"
    ```

=== "Coiote Python"

    ``` py
    from coiote.client import Coiote
    from coiote.v3.model.device_events import TelemetryEventHandlerFilter

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    print(
        client.device_events.create_influx_handler(
            name="Influx event handler",
            host="eu-central-1-1.aws.cloud2.influxdata.com",
            bucket_id="<enter bucket ID>",
            token="<enter your token>",
            filter=TelemetryEventHandlerFilter(
                lwm2mUrls=["/6/0/0"]
            ),
            description="This handler forwards location data to InfluxDB Cloud"
        )
    )
    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

## Step 5: Test the created handler

You can send a `POST` request to the endpoint `/deviceEvents/handler/test/existing/{id}` to test if the handler works correctly. The payload will be generated automatically, based on the filter field of the handler configuration. If the event handler was previously disabled due to consecutive failures, after you test it successfully, the system will re-enable it.

You can also check if the data from the event has been collected by your “receiver”. 
