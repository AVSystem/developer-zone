# Live data model strategies

The most common use case for dialects is data model virtualization. Virtualized data model is the device
data model, but with some modifications applied to it, for example:

- Some objects and parameters may be added or removed,
- Values and types of parameters may be modified.

These modifications are applied on-the-fly by Coiote DM when data model operations are invoked during provisioning.

## Live data model strategy architecture

The virtualized data model is defined by a chain of components called *live data model strategies*. Each strategy is
responsible for applying some specific change on the data model (for example, correcting values of some parameters).
Multiple strategies are then chained together to form the full data model virtualization pipeline.

The following figure shows an example live data model strategy chain configured for LwM2M devices:

![Live Data Model Strategy chain](Live_Data_Model_Strategies/images/LiveDataModelStrategies.png)

The top-level strategy (remapping in above example) accepts data model operation requests (for example, to get or set parameter
values) from Coiote DM provisioning implementations (tasks, monitoring, etc.). Then it may apply some modifications to
the requests and finally passes them to the next strategy. Requests are passed like this through the entire strategy
chain until they finally reach the bottom-level strategy. That final strategy usually implements some particular
provisioning protocol (LwM2M in above example) and is able to send the requests to the device.

After the device responds with results of data model operations, the bottom-level strategy publishes data model changes
which should be applied to the device data model saved in the Coiote DM database. Changes are passed through the strategy chain, in
reverse order, until they reach the top-level strategy.

There may be arbitrary number of strategies configured in the chain. It is also possible to configure multiple instances
of the same type of strategy (for example, multiple remapping strategies).

## Configuring live data model strategy chain

The live data model strategy chain can be configured in a dialect. Every dialect contains a `liveDatamodelStrategies` property which is a list of HOCON objects. Every object contains a definition of a strategy. For the example showed above, the configuration may look similarly to:

    ```
    liveDatamodelStrategies = [
      { type: LwM2M },
      {
        type: BLACKLISTING
        // blacklisting definitions here
      },
      {
        type: REMAPPING
        // remapping definition here
      }
    ]
    ```

However, it is very likely that each strategy will be defined in a separate HOCON document. The above example may be
refactored into four separate dialect configurations:

- abstract dialect ``lwm2m.conf``:

    ```
    liveDatamodelStrategies += { type: LwM2M }
    // other LwM2M settings
    ```

- abstract dialect ``blacklisting.conf``:

    ```
    liveDatamodelStrategies += {
      type: BLACKLISTING
      // blacklisting definitions here
    }
    ```

- abstract dialect ``strategies.remapping.conf``:

    ```
    liveDatamodelStrategies += {
      type: REMAPPING
      // remapping definition here
    }
    ```

- concrete dialect ``lwm2m.virtualized.conf``:

    ```
    include "lwm2m"
    include "strategies.blacklisting"
    include "strategies.remapping"
    ```

To learn more about protocol-specific applications, see the :ref:`OG_Virtual_Data_Model`.
