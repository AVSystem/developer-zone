# yocto

The [Yocto](https://www.yoctoproject.org/) project is, to quote its website,
"an open source collaboration project that helps developers create custom
Linux-based systems regardless of the hardware architecture." Svetovid includes
official support for running under Yocto-based systems.

## Supported hardware

The ``yocto`` target does not include any hardware-specific code, so it can be
run on any platform that can run Yocto.

## Features

### Implemented objects

Without any external additions, the ``yocto`` platform implements the following
LwM2M objects:

- Security (/0),
- Server (/1),
- Device (/3),
- Firmware Update (/5) - as a stub,
- Portfolio (/16),
- Event Log (/20).

The commercial version also supports [FSDM](../FSDM.md) to facilitate extending
this basic functionality easily.

The Firmware Update object expects an executable binary for the target platform,
and the update process will just perform ``exec()`` on that binary. This is
intended mostly for testing or as a proof-of-concept, not as a production
solution.

## Device identity

If not configured otherwise (see [Client
configuration](../Client_Configuration.md)), the client will use the following
information to connect to the LwM2M Server:

| | |
| :-: | :-: |
| **Endpoint name** | ``svetovid-yocto`` |
| **Default LwM2M Server** | ``{{ coaps_uri }}`` |
| **Default DTLS PSK Identity** | ``svetovid-yocto`` |
| **Default DTLS PSK** | ``svetovid-yocto-psk`` |

## Installation instructions

### As part of the system image

By default, Svetovid will be included in the system image that is ready to be
installed and booted on the target device. The instructions for installing those
images depend on the target platform, and as such are outside the scope of this
documentation.

### Through a package manager

Depending on the configuration, Yocto-based images may also support some
package management system, like [RPM](https://rpm.org/),
[APT](https://en.wikipedia.org/wiki/APT_(software)) or
[OPKG](https://en.wikipedia.org/wiki/Opkg).

The default configuration of Poky (the reference Yocto distribution) currently
uses RPM. The packages will be generated in the
``build/tmp/deploy/rpm/{platform}`` directory of your Yocto directory:

- **svetovid-{version}.{platform}.rpm** - all files necessary to run Svetovid
  and all the additional plugins and scripts (e.g. [FSDM](../FSDM.md) in the
  commercial version)
- **svetovid-dbg-{version}.{platform}.rpm** - debugging symbols for the binaries
  contained in the main package
- **svetovid-src-{version}.{platform}.rpm** - source code that was used to build
  the main package; note that it does NOT include build scripts and as such is
  only usable as a debugging aid
- **svetovid-dev-{version}.{platform}.rpm** - currently empty and unused

To install Svetovid on an existing device using RPM, copy the main RPM (or IPK)
file onto the device using any method available (e.g. using a USB drive or
``scp``), and run (in case of RPM):

```sh
rpm -ivh svetovid-*.rpm
```

## Directory structure of an installed client

Assuming that all the packages mentioned above are installed:

- ``/etc/svetovid/``
    - ``/etc/svetovid/config/`` - configuration files, see
      [Client configuration](../Client_Configuration.md)
    - ``/etc/svetovid/dm/`` - default directory for FSDM-based object
      implementations
    - ``/etc/svetovid/persistence/`` - data persisted across firmware updates
    - ``/etc/svetovid/volatile_persistence/`` - data persisted across reboots,
      but not firmware updates
- ``/tmp/`` - temporary directory used by the Firmare Update object and the
  [FSDM](../FSDM.md) plugin
    - ``/tmp/fsdm_local_socket`` - UNIX domain socket used for additional
      communication between the [FSDM](../FSDM.md) scripts and the Svetovid
      binary
- ``/usr/``
    - ``/usr/bin/svetovid`` - main LwM2M client executable
    - ``/usr/bin/svetovid-fsdmtool`` - convenience symbolic link for the
      [fsdmtool](../FSDM.md#fsdm-script-stub-generator) executable
    - ``/usr/lib/python2.7/dist-packages/fsdm`` - symbolic link to the
      [FSDM](../FSDM.md) Python runtime for Python 2.7
    - ``/usr/lib/python3/dist-packages/fsdm`` - symbolic link to the
      [FSDM](../FSDM.md) Python runtime for Python 3
    - ``/usr/lib/svetovid/`` - LwM2M client extensions loaded at runtime
        - ``/usr/lib/svetovid/libfsdm_plugin.so`` - [FSDM](../FSDM.md) support
          plugin
    - ``/usr/lib/systemd/system/svetovid.service`` - systemd unit file for
      Svetovid
    - ``/usr/local/share/svetovid/`` - [FSDM](../FSDM.md) runtime and utilities
        - ``/usr/local/share/svetovid/bin/svetovid-fsdmtool`` - main executable
          for the [fsdmtool](../FSDM.md#fsdm-script-stub-generator)
        - ``/usr/local/share/svetovid/bin/fsdm/`` -
          [fsdmtool](../FSDM.md#fsdm-script-stub-generator) support modules
        - ``/usr/local/share/svetovid/lib/fsdm/python/`` - [FSDM](../FSDM.md)
          runtime for Python
        - ``/usr/local/share/svetovid/lib/fsdm/sh/`` - [FSDM](../FSDM.md)
          runtime for shell scripts

## Launch instructions

Svetovid is configured to launch through the System V init scripts and it is
enabled by default.

To manually start the client, use:
```sh
service svetovid start
```

To manually stop the client, use:
```sh
service svetovid stop
```

LwM2M client process logs are sent to syslog. To access them, either:

- read syslog directly, e.g.:
    ```sh
    tail -f /var/log/messages
    ```

- or stop the LwM2M client service as described above, then run it in the
  foreground:
    ```sh
    /usr/bin/svetovid
    ```
