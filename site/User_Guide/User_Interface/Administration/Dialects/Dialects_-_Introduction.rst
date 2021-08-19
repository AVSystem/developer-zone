.. _Dialects_-_Introduction:

=======================
Dialects - Introduction
=======================

Dialects form a layer of advanced, low-level device provisioning configuration that is intended to mitigate differences
in behavior of various device types provisioned by Coiote DM. Ideally, when dialects are properly configured, higher layers
(provisioning tasks, monitoring, etc.) can assume uniform interface and behavior of all device types. In particular, dialects are used to:

 * Configure various settings specific to particular provisioning protocols.
 * Apply modifications and corrections to the data model exposed by devices.
 * Apply modifications and corrections to data model operations issued on devices.
 * Set up an uniform, virtualized data model for all device types.

Each dialect is an independent piece of configuration. Coiote DM comes up with a set of predefined dialects. These are called
**static** dialects and cannot be modified by Coiote DM users. In addition to predefined dialects, Coiote DM users can define
their own dialects which can be added, modified and deleted at any time using a dedicated administration panel in the
Coiote DM UI. These dialects are called the **dynamic** or **user-defined** dialects. The dialect can be selected independently for
any single device or it may be applied on entire group of devices. Internally, this is controlled by the ``dialectName``
setting value. Coiote DM comes up with some sensible defaults, automatically having some basic dialects selected for devices
provisioned with particular protocols.

Structure of dialects
=====================

Every dialect is defined by a text document in the `HOCON (Human Optimized Config Object Notation) <https://github.com/typesafehub/config/blob/master/HOCON.md>`_
format. You should familiarize yourself with HOCON before doing any dialect configuration. In short, HOCON is similar to JSON, but much more powerful, with features
like including other documents, substitutions (references), overriding and other facilities which enable easy reuse of
configuration fragments. This allows to keep things concise and minimize duplication. Thanks to ``include`` clauses in HOCON, dialects can refer to each other by including contents of other dialects. At
the same time, settings inherited from included dialects can be easily and selectively overridden.

The set of HOCON documents that configure dialects can be divided into two subsets:

 * **Concrete dialect configurations** - these represent actual dialects which can be set up on devices and device groups.
   Therefore, they are always required to be valid and are extensively checked for errors upon editing.
 * **Abstract dialect configurations** - these are merely reusable common chunks of HOCON which can only be included by
   other dialects. Therefore, they are not validated and cannot be set up on devices and groups.

Dialects also have a hierarchical structure, which is reflected by their names, for example, ``lwm2m``, ``lwm2m.default``.

.. tip:: The dialects hierarchy is simply a naming convention, completely independent of a way dialects include each other. In particular, remember that dialects do not automatically include their parents.

Including and overriding example
--------------------------------

The following example shows the structure of a dialect that includes some other dialect and selectively overrides
some settings inherited from the included dialect. Suppose that there is a (simplified) dialect named ``lwm2m`` defined by the following HOCON document:

``lwm2m.conf``::

    lwm2m {
      # Number of milliseconds that server will wait for a response from a device before failing the session
      messageTimeout = 90000

      marshallingSettings {
        # Options affecting how boolean values are handled
        booleanRepresentations {
          # String representations of boolean values accepted by the device
          # Used for marshalling of ParameterValueStruct and SetParameterAttributesStruct
          # When null, no particular representation is enforced.
          nativeTrue = null
          nativeFalse = null
        }

        trimTagValues = true
      }

      // possibly more options...
    }

This is a simplified version of a base dialect which configures the LwM2M protocol. Suppose now that we have a group of
devices which use ``0`` and ``1`` to represent boolean values, instead of ``true`` and ``false``. We need to
provide that information in the dialect so that LwM2M implementation in Coiote DM knows which boolean representation to use.
In order to do this, we create a new dialect, say ``lwm2m.zeroOneBooleans`` which includes the ``lwm2m`` dialect and
overrides ``nativeTrue`` and ``nativeFalse`` settings with appropriate values:

``lwm2m.zeroOneBooleans.conf``::

    // include clause works as if the lwm2m dialect was "copied and pasted" into this document
    include "/lwm2m"

    // we selectively override only these settings which we need, using compact syntax
    lwm2m.marshallingSettings.booleanRepresentations {
      nativeTrue = "1"
      nativeFalse = "0"
    }

.. note:: When using the *include* command, remember to insert domain name of the included dialect in slashes before specifying the dialect name.

**See also:**

 * :ref:`UIR_A_Device_Dialects`
 * :ref:`UG_UIR_DM_Selecting_dialects_for_devices_and_groups`
