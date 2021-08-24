# LwM2M

## Applications



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


## Resources

| Subcategory | Parameter name  | Virtual Data Model      | Strictly required | Type | Unit/Values | R/W | Description            | UMP feature | Standard | Example  |
|-------------|-----------------|-------------------------|-------------------|------|-------------|-----|------------------------|-------------|----------|----------|
| Resources   | Avaliable RAM   | Resources.RAMAvaliable  |                   | uint | MiB         | R   | The total physical RAM |             |          |          |
|             | Free RAM        | Resources.RAMFree       |                   | uint | MiB         | R   | The free physical RAM  |             |          |          |
