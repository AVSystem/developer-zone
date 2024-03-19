# raspberry

The ``raspberry`` platform is intended to run on Raspberry Pi devices and
implements a couple of additional functionalities on top of the basic client.
It is mostly intended as a base for implementing application-specific objects
using the [FSDM](../FSDM.md).

The port of Svetovid for the Raspberry Pi is intended as a **LwM2M Starter
Kit** -- a hardware+software package that also contains the Pi itself. Binaries
prebuilt for this purpose are available on GitHub: [Svetovid Raspberry
Client](https://github.com/AVSystem/Svetovid-raspberry-client).

## Supported hardware

The ``raspberry`` target is intended to be compatible with all mainstream
Raspberry Pi models. It is primarily tested on [Raspberry Pi OS](
https://www.raspberrypi.com/software/operating-systems/), which is a version
of Debian, but should in principle work on any mainstream Linux distribution.

This target also includes an implementation of objects for some additional
peripherals, namely:

* Generic push-buttons connected to GPIO pins
* Generic LED lights connected to GPIO pins
* The Raspberry Pi [Sense HAT](https://www.raspberrypi.com/products/sense-hat/)

## Features

### Implemented objects

The core Svetovid binary build for the ``raspberry`` platform implements the
following LwM2M objects:

- Security (/0),
- Server (/1),
- Device (/3),
- Firmware Update (/5) - as a stub,
- Portfolio (/16),
- Event Log (/20),
- Light Control (/3311),
- Push button (/3347).

The Firmware Update object expects an executable binary for the target platform,
and the update process will just perform ``exec()`` on that binary. This is
intended mostly for testing or as a proof-of-concept, not as a production
solution.

### Sense HAT support

An optional Sense HAT support package adds implementation of the following
objects (based on FSDM):

- Temperature (/3303),
- Accelerometer (/3313),
- Magnetometer (/3314),
- Barometer (/3315),
- Gyrometer (/3334),
- Addressable Text Display (/3341).

## Device identity

If not configured otherwise (see [Client
configuration](../Client_Configuration.md)), the client will use the following
information to connect to the LwM2M Server:

| | |
| :-: | :-: |
| **Endpoint name** | ``urn:dev:os:B827EB-{serial_number}`` </br> (note: ``{serial_number}`` is the ``Serial`` field from ``/proc/cpuinfo``) |
| **Default LwM2M Server** | ``coap://127.0.0.1:5683`` |

!!! Note
    DTLS is disabled in the default configuration. To enable it, the PSK key
    needs to be configured explicitly in the
    [security.json](../Client_Configuration.md#connection-settings) file.

## Build instructions

### Building on the Raspberry Pi itself

To build Svetovid on the Raspberry Pi, you will need the following
prerequisites:

- Clang (or GCC; Clang is recommended) with C++ support and all the essential
  build dependencies
- CMake 3.6.3 or newer
- Git
- Zlib (optional, you can use ``-DWITH_AVS_HTTP_ZLIB=OFF`` CMake option to
  remove this dependency, at the cost of no support for HTTP compression)
- Boost C++ Libraries (optional, you can use ``-DWITH_SYSTEM_BOOST=OFF`` CMake
  option to download Boost as part of the build process instead)

On Raspberry Pi OS Bookworm (based on Debian 12), you can install all the
required dependencies by running the following commands (identical or similar
commands should work on other distributions from the Debian family; finding
packages for other distributions is outside the scope of this documentation):

```
sudo apt update &&
sudo apt install \
    build-essential \
    clang \
    cmake \
    git \
    libboost-all-dev \
    python3-sphinx \
    python3-sphinx-rtd-theme \
    zlib1g-dev
```

The preferred way to build Svetovid for the ``raspberry`` target on the
Raspberry Pi itself is running:

```
git submodule update --init --recursive
env CC=clang CXX=clang++ cmake \
    -DCMAKE_BUILD_TYPE=MinSizeRel \
    -DTARGET_PLATFORM=raspberry \
    .
make -j$(nproc)
```

The preferred compiler is Clang, but Svetovid will compile using GCC as well.

To additionally build the Debian packages, run:

```
make package
```

### Cross-compiling

To build Svetovid for the Raspberry Pi on another machine, you will need:

- Build environment based on a Debian system in the same version as the target
  Raspberry Pi OS (e.g. Debian 12 if targeting Raspberry Pi OS Bookworm) -
  either a native installation, a virtual machine, or a container (e.g. Docker)
  environment

- GCC cross-compile packages for the target platform (``arm-linux-gnueabihf``
  for 32-bit or ``aarch64-linux-gnu`` for 64-bit)

- CMake 3.6.3 or newer

- Git

Once in the Debian build environment, you can install all the required
dependencies by running the following commands:

```
sudo apt update &&
sudo apt install \
    cmake \
    g++-aarch64-linux-gnu \
    g++-arm-linux-gnueabihf \
    gcc-aarch64-linux-gnu \
    gcc-arm-linux-gnueabihf \
    git \
    python3-sphinx \
    python3-sphinx-rtd-theme
```

To cross-compile Svetovid for the Raspberry Pi, run:

```
git submodule update --init --recursive
cmake \
    -DCMAKE_BUILD_TYPE=MinSizeRel \
    -DCMAKE_TOOLCHAIN_FILE=cmake/toolchain/raspberry-raspbian.cmake \
    -DTARGET_PLATFORM=raspberry \
    -DWITH_AVS_HTTP_ZLIB=OFF \
    -DWITH_GTEST=OFF \
    -DWITH_SYSTEM_BOOST=OFF \
    .
make -j$(nproc)
make package
```

!!! Note
    To build a 64-bit version, use
    ``cmake/toolchain/raspberry-raspbian64.cmake`` as the CMake toolchain file
    instead.

!!! Note
    Boost C++ Libraries will be downloaded and built as part of the build
    process.

The ``*.deb`` files ready to install on the Raspberry Pi will be generated in
the source root directory.

## Installation instructions

The build result is the following set of Debian packages:

- **svetovid_{version}_{architecture}.deb** - base binary of Svetovid itself and
  the systemd service unit file; note: the post-install script will
  automatically start Svetovid as a daemon

Additionally, the following packages can be built from the commercial codebase
and are available publicly as binaries:

- **svetovid-plugin-fsdm_{version}_{version}.deb** - dynamically loadable
  library that enables the FSDM functionality in Svetovid

- **avsystem_svetovid-{version}-Linux-fsdmtool.deb** -
  [fsdmtool](../FSDM.md#fsdm-script-stub-generator) script, that allows creating
  stubs of FSDM scripts from XML object definitions and/or downloading them from
  the LwM2M Object Registry

- **avsystem_svetovid-{version}-Linux-fsdmtool-runtime-python.deb** - runtime
  library used by the Python scripts generated by ``svetovid-fsdmtool``

- **avsystem_svetovid-{version}-Linux-fsdmtool-runtime-sh.deb** - runtime
  library used by the shell scripts generated by ``svetovid-fsdmtool``

- **avsystem_svetovid-{version}-Linux-sensehat.deb** - implementations of IPSO
  sensor object targeting the
  [Sense HAT](https://www.raspberrypi.com/products/sense-hat/), based on FSDM

You can put those files on a Raspberry Pi using any method available, e.g. using
a USB drive, or by copying them using ``scp`` (requires SSH to be enabled on the
Pi):

```
scp *.deb {Pi_IP_ADDRESS}:/tmp/
```

The preferred method of installing Svetovid is to install some or all of the
aformentioned files, depending on your needs, for example (on the Pi terminal):

```
sudo apt install /tmp/*.deb
```

## Directory structure of an installed client

Assuming that all the packages mentioned above are installed:

- ``/etc/svetovid/``

    - ``/etc/svetovid/config/`` - configuration files, see
      [Client configuration](../Client_Configuration.md)

    - ``/etc/svetovid/dm/`` - default directory for FSDM-based object
      implementations

        - The ``sensehat`` package puts implementations of some IPSO objects
          here.

    - ``/etc/svetovid/persistence/`` - data persisted across firmware updates

    - ``/etc/svetovid/volatile_persistence/`` - data persisted across reboots,
      but not firmware updates

- ``/tmp/`` - temporary directory used by the Firmare Update object and the FSDM
  plugin

    - ``/tmp/fsdm_local_socket`` - UNIX domain socket used for additional
      communication between the FSDM scripts and the Svetovid binary

- ``/usr/``

    - ``/usr/bin/svetovid`` - main LwM2M client executable

    - ``/usr/bin/svetovid-fsdmtool`` - convenience symbolic link for the
      ``fsdmtool`` executable

    - ``/usr/lib/python2.7/dist-packages/fsdm`` - symbolic link to the FSDM
      Python runtime for Python 2.7

    - ``/usr/lib/python3/dist-packages/fsdm`` - symbolic link to the FSDM Python
      runtime for Python 3

    - ``/usr/lib/svetovid/`` - LwM2M client extensions loaded at runtime

        - ``/usr/lib/svetovid/libfsdm_plugin.so`` - FSDM support plugin

    - ``/usr/lib/systemd/system/svetovid.service`` - systemd unit file for
      Svetovid

    - ``/usr/local/share/svetovid/`` - FSDM runtime and utilities

      - ``/usr/local/share/svetovid/bin/svetovid-fsdmtool`` - main executable
        for the ``fsdmtool``

        - ``/usr/local/share/svetovid/bin/fsdm/`` - ``fsdmtool`` support modules

        - ``/usr/local/share/svetovid/lib/fsdm/python/`` - FSDM runtime for
          Python

        - ``/usr/local/share/svetovid/lib/fsdm/sh/`` - FSDM runtime for shell
          scripts

## Launch instructions

Svetovid is configured to launch through ``systemd`` and the install scripts
enable and launch it by default.

To manually start the client, use:

```
sudo systemctl start svetovid
```

To manually stop the client, use:

```
sudo systemctl stop svetovid
```

LwM2M client process logs are sent to syslog. To access them, either:

- read syslog directly, e.g.:

    ```
    journalctl -fu svetovid
    ```

- or stop the LwM2M client service as described above, then run it in
  foreground:

    ```
    /usr/bin/svetovid
    ```

## IPSO Objects configuration

The LwM2M IPSO objects do not provide any way to configure sensors, thus they
can only be used to report information from devices already configured by some
other means.

Right now, the Raspberry Pi client application supports the following IPSO
objects that can represent simple devices connected via the Pi's GPIO header:

- [IPSO Light control](http://www.openmobilealliance.org/tech/profiles/lwm2m/3311.xml)

- [IPSO Push button](http://www.openmobilealliance.org/tech/profiles/lwm2m/3347.xml)

Configuration of these IPSO objects should be placed in
``/etc/svetovid/config/``.

### Pin mapping

Pin identifiers entered in the configuration files described below are BCM pins.
Refer to [pinout.xyz](https://pinout.xyz/) for example to see where they are
located.

### IPSO Light control (3311)

Configuration options:

- ``data_pin`` - used to control the light (by ``svetovid``),

- ``dimmer`` - PWM controlled light intensity in percents, may be omitted
  (default value: 100).

Example configuration file (`ipso_light.json`):

```
{
    "1": {
        "data_pin": "20",
        "dimmer": "45"
    }
}
```

To use LED module, connect power supply pins to appriopriate 3.3 V and GND pins
of Raspberry Pi and the signal pin to configured ``data_pin`` of the Raspberry
Pi connector. Depending on LED module used, it's possible to drive the diode via
signal pin, without using 3.3 V power supply. Note, that standalone LED should
be connected via resistor to limit the current to not exceed diode capabilities
or maximum allowed RPi's GPIO current (16 mA).

### IPSO Push button (3347)

Configuration options:

- ``data_pin`` - used to read the button state (by ``svetovid``).

Example configuration file (`ipso_pushbutton.json`):

```
{
    "1": {
        "data_pin": "19"
    }
}
```

One terminal of the push button must be connected to configured ``data_pin``,
while the other one must be connected to 3.3 V power supply (available on pin 1
and 17 of the RPi connector - not to be confused with BCM pins numbers).
