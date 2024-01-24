# Data Integration Center

Data Integration Center is a feature that allows you to forward device related data to your systems, databases, message
brokers etc. There are two kind of events:

* Lifecycle - these are related to device life cycle events like creation, update, deletion.
* Telemetry - these are related to telemetry gathered by device like temperature measurement.

<figure markdown>
  ![Overview](./images/data-integration-center-overview.webp){ align=center }
  <figcaption>High-level overview of the Data Integration Center integration</figcaption>
</figure>

## Templating

Templating feature allows for defining how your payload (or headers) looks like. This enables you to integrate with
almost all available services, gathering your data according to your preferences.

![Wizard Form Body](./images/wizard-form-body.webp){ width=49% } ![Wizard Preview](./images/wizard-preview.webp){ width=49% }

You can modify a body template as long as it is proper `JSON`. If you want a different content type you can use `Text`
option that have no validation at all.

=== "JSON"

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

=== "TEXT"

    ```text
    version: $version
    timestamp: $timestamp
    endpointName: $endpointName
    domainId: $domainId
    url: $url
    value: $value
    ```

Note that there are values starting with `$` e.g. `$endpointName`. These are called variables.

## Variables

Variables are predefined and allow for using some device context in a payload. When sending event, variables are replaced 
with actual value e.g. `$endpointName` with `test-device-47193512895`. There are several variables that can be used, if
variable does not exist e.g. `$notExisting` then it is sent as normal text.

=== "Device Lifecycle Variables"

      * `version` *(type: string)* - The version in which events are sent. Any changes will be reflected in it.
      * `timestamp` *(type: long)* - Time of occurrence of the event in milliseconds.
      * `endpointName` *(type: string)* - The device endpoint name given at creation.
      * `domainId` *(type: string)* - The entire ID of the domain in which the device is located.
      * `domainName` *(type: string)* - The name of the last subdomain without slashes.
      * `subtype` *(type: string)* - Enumeration type of the event.
      * `metadata` *(type: json|string)* - Additional details about the event in relation to its subtype.

        !!! Note "Metadata format"
            For the `JSON` content type, it is an object with possibly nested fields. Whereas for `TEXT` it is a simple string with fields separated by commas.

=== "Device Telemetry Variables"

      * `version` *(type: string)* - The version in which events are sent. Any changes will be reflected in it.
      * `timestamp` *(type: long)* - Time of occurrence of the event in milliseconds.
      * `endpointName` *(type: string)* - The device endpoint name given at creation.
      * `domainId` *(type: string)* - The entire ID of the domain in which the device is located.
      * `domainName` *(type: string)* - The name of the last subdomain without slashes.
      * `url` *(type: string)* - LwM2M path (Resource Id) for which changes are occurring.
      * `value` *(type: string|number)* - The value of the changed LwM2M resource. 

        !!! Note "Value format"
            Although it can be a number, in the case of `JSON` content type it must be enclosed in quotation marks.

Available variables differs from context where they are used. See [headers](#headers) and [body](#body) for detailed information.

### Headers

Variables can be used in the `Header value` field. You can
enter any header value e.g. some token. If you change type to `$` you will be allowed to easily select available variables.
However, in `abc` mode, variables can also be used with the help of the `$` sign.

!!! Note

    Variables cannot be used in the header key. Thus, any `$` references defined in the `Header key` will not be considered.

![Custom Headers Dialog](./images/custom-headers-dialog.webp){ width=80% }

=== "Available lifecycle variables"

      For device lifecycle events, there are the following variables:
    
      * `version`
      * `timestamp`
      * `endpointName`
      * `domainId`
      * `domainName`
      * `subtype`

=== "Available telemetry variables"

      For device telemetry events, there are the following variables:
    
      * `version`
      * `timestamp`
      * `endpointName`
      * `domainId`
      * `domainName`

### Body

As mentioned in [Templating](#templating) section, you can define how your payload looks like.
If you want to return to the default template, use the **Return to default** button.

=== "Webhook body"

    In the webhook integration, you can choose between two [content types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type):
    
    * `JSON` - It enforces [the JSON format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).
               The editor tries to catch any mistakes and point them out.
    * `TEXT` - In this case there is no format validation.

=== "Kafka body"

    For integration with kafka, only `JSON` content type is allowed.

![Body Dialog](./images/body-dialog.webp){ width=80% }

=== "Available lifecycle variables"

      For device lifecycle events, there are the following variables:
    
      * `version`
      * `timestamp`
      * `endpointName`
      * `domainId`
      * `domainName`
      * `subtype`
      * `metadata`

=== "Available telemetry variables"

      For device telemetry events, there are the following variables:
    
      * `version`
      * `timestamp`
      * `endpointName`
      * `domainId`
      * `domainName`
      * `url`
      * `value`
