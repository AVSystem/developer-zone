# Data Integration Center

Data Integration Center is a feature that allows you to forward device related data to your systems, databases, message
brokers etc. There are two kind of events:

* Lifecycle - these are related to device life cycle events like creation, update, deletion.
* Telemetry - these are related to telemetry gathered by device like temperature measurement.

![Overview](./images/data-integration-center-overview.webp)

## Templating

Templating feature allows for defining how your payload (or headers) looks like. This enables you to integrate with
almost all available services, gathering your data according to your preferences.

![Wizard Form Body](./images/wizard-form-body.webp){ width=50% }

You can modify a body template as long as it is proper `JSON`. If you want a different content type you can use `Text`
that have no validation at all.

```json
{
  "version": "$version",
  "timestamp": $timestamp,
  "endpointName": "$endpointName",
  "domainId": "$domainId",
  "url": "$url",
  "value": "$value"
}
```

There are values starting with `$` e.g. `$endpointName`. These are called variables.

## Variables

Variables are predefined and allow for using some device context in a payload. When sending event, variables are replaced 
with actual value e.g. `$endpointName` with `test-device-47193512895`. There are several variables that can be used, if
variable does not exist e.g. `$notExisting` then it is sent as normal text. Available variables differs from context where
they are used.

### Headers

Variables can be used in the `Header value` field (variables defined in `Header key` will not be considered). You can
enter any header value e.g. some token. If you change type to `$` you will be allowed to easily select some variable.
However, in `abc` mode, variables can also be used.

![Custom Headers Dialog](./images/custom-headers-dialog.webp){ width=80% }

For device lifecycle events, there are the following variables:

* `version` - version of the event (type: string)
* `timestamp` - time in milliseconds (type: long)
* `endpointName` - device endpoint name (type: string)
* `domainId` - domain id of device (type: string)
* `domainName` - name of the last subdomain (type: string)
* `subtype` - type of device event (type: string)

In device telemetry events, there are the following variables:

* `version` - version of the event (type: string)
* `timestamp` - time in milliseconds (type: long)
* `endpointName` - device endpoint name (type: string)
* `domainId` - domain id of device (type: string)
* `domainName` - name of the last subdomain (type: string)

### Body

![Body Dialog](./images/body-dialog.webp){ width=80% }

For device lifecycle events, there are the following variables:

* `version` - version of the event (type: string)
* `timestamp` - time in milliseconds (type: long)
* `endpointName` - device endpoint name (type: string)
* `domainId` - domain id of device (type: string)
* `domainName` - name of the last subdomain (type: string)
* `subtype` - type of device event (type: string)
* `metadata` - complex data about device event (type: json)

In device telemetry events, there are the following variables:

* `version` - version of the event (type: string)
* `timestamp` - time in milliseconds (type: long)
* `endpointName` - device endpoint name (type: string)
* `domainId` - domain id of device (type: string)
* `domainName` - name of the last subdomain (type: string)
* `url` - lwm2m path (type: string)
* `value` - lwm2m resource value (type: string|number)
