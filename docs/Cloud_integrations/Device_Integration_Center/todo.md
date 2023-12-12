# Device Integration Center - Templating

## Variables

### Headers

Variables can be used in `value` field.

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

#### Body type

JSON / TEXT

