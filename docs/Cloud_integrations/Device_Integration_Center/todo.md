# Device Integration Center - Templating

Templating feature allow you to define how your payload (or headers) looks like.

## Variables

There are several variables that can be used. Available variables differs from context where they are used/

### Headers

Variables can be used in `value` field (variable defined in header name will not be considered).

#### Device Events

Possible variables:

* version - version of the event (type: string)
* timestamp - time in milliseconds (type: long)
* endpointName - device endpoint name (type: string)
* domainId - domain id (type: string)
* domainName - name of the last subdomain (type: string)
* subtype - type of device event (type: string)

#### Telemetry Events

Possible variables:

* version -
* timestamp -
* endpointName -
* domainId -
* domainName -


### Body

#### Device Events

Possible variables:

* version - version of the event (type: string)
* timestamp - time in milliseconds (type: long)
* endpointName - device endpoint name (type: string)
* domainId - domain id (type: string)
* domainName - name of the last subdomain (type: string)
* subtype - type of device event (type: string)
* metadata - complex data about device event (type: json)

#### Telemetry Events

Possible variables:

* version -
* timestamp -
* endpointName -
* domainId -
* domainName -
* url - lwm2m path (type: string)
* value - lwm2m resource value (type: string)

## Body type

Format type of body can be adjusted to your needs. You can choose between JSON and TEXT.

Webhook: JSON / TEXT
Influx: TEXT (with indeed in influx line protocol)
Kafka: JSON
