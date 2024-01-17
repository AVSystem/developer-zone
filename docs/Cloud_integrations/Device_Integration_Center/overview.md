# Data Integration Center

Data Integration Center is our feature that allows you to forward device related data to your systems, databases,
message brokers etc. There are two kind of events:

* Lifecycle - these are related to device life cycle events like creation, update, deletion
* Telemetry - these are related to telemetry gathered by device like temperature measurement

![overview](./images/data-integration-center-overview.webp)

## Templating

Templating feature allow you to define how your payload (or headers) looks like. This enables you to integrate with
almost all available services, gathering your data where you desire.

![wizard-form-body](./images/wizard-form-body.webp){ width=50% }

You are free to modify body template as long as it proper JSON. If you want different content type you can use `Text`
that have not validation at all.

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

As you can notice there are values starting with `$` e.g. `$endpointName`. These are called variables.

## Variables

Variables are predefined, and allows you to use some device context in payload. When sending variables are replaced with
actual value e.g. `$endpointName` with `test-device-47193512895`. There are several variables that can be used, if
variable do not exist e.g. `$notExisting` then this will be send as it is. Available variables differs from context
where they are used.

### Headers

Variables can be used in `Header value` field (variables defined in `Header key` will not be considered). You can enter
any header value e.g. some token. If you change type to `$` you will be allowed to easily select some variable. However,
in `abc` mode, variables can be also used.

![custom-headers-dialog](./images/custom-headers-dialog.webp){ width=80% }

For device lifecycle events, we have such possible variables:

* `version` - version of the event (type: string)
* `timestamp` - time in milliseconds (type: long)
* `endpointName` - device endpoint name (type: string)
* `domainId` - domain id of device (type: string)
* `domainName` - name of the last subdomain (type: string)
* `subtype` - type of device event (type: string)

In device telemetry events, we have such possible variables:

* `version` - version of the event (type: string)
* `timestamp` - time in milliseconds (type: long)
* `endpointName` - device endpoint name (type: string)
* `domainId` - domain id of device (type: string)
* `domainName` - name of the last subdomain (type: string)

### Body

![body-dialog](./images/body-dialog.webp){ width=80% }

For device lifecycle events, we have such possible variables:

* `version` - version of the event (type: string)
* `timestamp` - time in milliseconds (type: long)
* `endpointName` - device endpoint name (type: string)
* `domainId` - domain id of device (type: string)
* `domainName` - name of the last subdomain (type: string)
* `subtype` - type of device event (type: string)
* `metadata` - complex data about device event (type: json)

In device telemetry events, we have such possible variables:

* `version` - version of the event (type: string)
* `timestamp` - time in milliseconds (type: long)
* `endpointName` - device endpoint name (type: string)
* `domainId` - domain id of device (type: string)
* `domainName` - name of the last subdomain (type: string)
* `url` - lwm2m path (type: string)
* `value` - lwm2m resource value (type: string|number)
