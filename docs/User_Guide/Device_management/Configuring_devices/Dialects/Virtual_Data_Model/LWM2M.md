# LwM2M

## Applications

| Subcategory                                         | Parameter name      | Virtual Data Model       | Strictly required | Type                                         | Unit/Values | R/W | Description                   | UMP feature | Specification                                |
|-----------------------------------------------------|---------------------|--------------------------|-------------------|----------------------------------------------|-------------|-----|-------------------------------|-------------|----------------------------------------------|
| Applications                                        | Name                | Applications.{i}.Name    | yes               | string                                       |             | RO  | Name of installed software    |             | Lightweight M2M – Software management Object |
|                                                     | Application version | Applications.{i}.Version | yes               | string                                       |             | RO  | Version of installed software |             | Lightweight M2M – Software management Object |
| | Status| Applications.{i}.Status | | string | "initial" "download" "started" "downloaded" "delivered" "installed" | RO                  | Status of installation   |                   | Lightweight M2M – Software management Object |             |     |                               |             |                                              |
| | Enable| Applications.{i}.Enable | yes | string | "enabled" "disabled" | RO                  | Indicates if software is enabled   |                   | Lightweight M2M – Software management Object |             |     |                               |             |                                              |

### Application capability for LwM2M

Definition: **lwm2m.capabilities.applications**

### References

[www.openmobilealliance.org/release/LWM2M_SWMGMT/V1_0-20170314-C/OMA-TS-LWM2M_SwMgmt-V1_0-20151201-C.pdf](http://www.openmobilealliance.org/release/LWM2M_SWMGMT/V1_0-20170314-C/OMA-TS-LWM2M_SwMgmt-V1_0-20151201-C.pdf)

## Generic

| Subcategory | Parameter name  | Virtual Data Model  | Strictly required | Type   | Unit/Values          | R/W | Description | UMP feature     | Standard          | Example                   |
|-------------|-----------------|---------------------|-------------------|--------|----------------------|-----|-------------|-----------------|-------------------|---------------------------|
| Generic     | MAC             | MAC                 | yes               | string | net.stripMac(value)  | R   |             | Identification  |                   |                           |
|             | OUI             | OUI                 | yes               | string |                      | R   |             | Identification  |                   |                           |
|             | Serial          | Serial              | yes               | string |                      | R   |             | Identification  | LWM2M_Device-v1_0 | Device.0.Serial Number    |
|             | HardwareVersion | HardwareVersion     |                   | string |                      | R   |             | Identification  |                   |                           |
|             | SoftwareVersion | SoftwareVersion     | yes               | string |                      | R   |             | Identification  | LWM2M_Device-v1_0 | Device.0.Firmware Version |
|             | Manufacturer    | Manufacturer        |                   | string |                      | R   |             | Identification  | LWM2M_Device-v1_0 | Device.0.Manufacturer     |
|             | Product class   | ProductClass        |                   | string |                      | R   |             | Identification  |                   |                           |
|             | Model name      | Model               | yes               | string |                      | R   |             | Identification  | LWM2M_Device-v1_0 | Device.0.Model Number     |

### Generic capability for LwM2M

Definition: **lwm2m.capabilities.generic**

Definition: **lwm2m.ext.generic**

## Resources

| Subcategory | Parameter name  | Virtual Data Model      | Strictly required | Type | Unit/Values | R/W | Description            | UMP feature | Standard | Example  |
|-------------|-----------------|-------------------------|-------------------|------|-------------|-----|------------------------|-------------|----------|----------|
| Resources   | Avaliable RAM   | Resources.RAMAvaliable  |                   | uint | MiB         | R   | The total physical RAM |             |          |          |
|             | Free RAM        | Resources.RAMFree       |                   | uint | MiB         | R   | The free physical RAM  |             |          |          |

### Resource capability for LwM2M

Definition: **lwm2m.capabilities.resources**

Definition: **lwm2m.ext.resources**

### References

[www.openmobilealliance.org/tech/profiles/LWM2M_Device-v1_0.xml](http://www.openmobilealliance.org/tech/profiles/LWM2M_Device-v1_0.xml)
