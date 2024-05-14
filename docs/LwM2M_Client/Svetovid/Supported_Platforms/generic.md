# generic

The ``generic`` platform allows running a minimal subset of Svetovid's
functionality on any otherwise unsupported platform. It is mostly intended for
testing and prototyping.

## Supported hardware

In principle, the ``generic`` target can be used on any device that is capable
of running Linux. It is primarily developed and tested on [Ubuntu
Desktop](https://ubuntu.com/download/desktop).

Packaging this type of build as a Docker container is also officially supported.

There is also an additional Docker image that integrates Svetovid with
OpenThread Border Router functionality. It is based on the official
[ot-br-posix](https://github.com/openthread/ot-br-posix) container, and adds
the functionality of managing the OTBR remotely via LwM2M. Please refer to the
documentation of that project for information about the hardware supported as
the Thread radio.

More information about the OpenThread Border Router variant can be found in
AVSystem IoT Developer Zone article: [OpenThread Border Router configurable
through LwM2M server]({{ svetovid_devzone_doc_prefix }}/LwM2M_Client/OpenThread/OTBR_with_svetovid).

!!! Note
    Svetovid **only supports operating systems based on the Linux kernel**. If
    you wish to run it on a machine that runs another operating system such as
    Windows, macOS or \*BSD, please use a virtual machine or container runtime
    (e.g. Docker) running Linux.

## Features

### Implemented objects

Without any external additions, the ``generic`` platform implements the
following LwM2M objects:

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

### OpenThread Border Router

The ``svetovid_with_otbr`` Docker target adds implementations of the following
objects (based on FSDM):

- OTBR Configuration (/33630),
- OpenThread Neighbor List (/33633),
- OpenThread Commissioner Joiner Table (/33634),
- OpenThread Neighbor Networks (/33639),
- OpenThread Join Existing Network (/33640).

!!! Note
    The aforementioned objects are part of the Object ID range reserved for
    AVSystem's private use, and as such are not standardized under OMA. They may
    not be supported by third-party LwM2M Server implementations.

## Device identity

!!! Note
    This section only applies to the standalone builds. Please see the
    [Docker builds](#docker-builds) section for information about configuring
    the Docker builds.

If not configured otherwise (see [Client
Configuration](../Client_Configuration.md)), the client will use the following
information to connect to the LwM2M Server:

| | |
| :-: | :-: |
| **Endpoint name** | ``urn:dev:os:generic-{hostname}-{machine_id}`` </br> (note: ``{machine_id}`` is the contents of ``/etc/machine-id``) |
| **Default LwM2M Server** | ``coap://127.0.0.1:5683`` |

!!! Note
    DTLS is disabled in the default configuration. To enable it, the PSK key
    needs to be configured explicitly in the
    [security.json](../Client_Configuration.md#connection-settings) file.

## Build instructions

### Standalone build

To do a standalone build of Svetovid, you will need the following prerequisites:

- Clang (or GCC; Clang is recommended) with C++ support and all the essential
  build dependencies
- CMake 3.6.3 or newer
- Git
- Zlib (optional, you can use ``-DWITH_AVS_HTTP_ZLIB=OFF`` CMake option to
  remove this dependency, at the cost of no support for HTTP compression)
- Boost C++ Libraries (optional, you can use ``-DWITH_SYSTEM_BOOST=OFF`` CMake
  option to download Boost as part of the build process instead)

On Ubuntu 20.04, you can install all the required dependencies by running the
following commands (identical or similar commands should work on other
distributions from the Debian family; finding packages for other distributions
is outside the scope of this documentation):

```sh
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

The preferred way to build Svetovid for the ``generic`` target on the host
platform itself is running:

```sh
git submodule update --init --recursive
env CC=clang CXX=clang++ cmake -DTARGET_PLATFORM=generic .
make -j$(nproc)
```

To additionally build the Debian packages, run:

```sh
make package
```

### Docker image build

The dockerfile is called ``Dockerfile.clean_svetovid`` and it is located in the
``dockerfiles`` directory within the source tree root.

Docker build process is multi-stage, which means that there is an intermittent
image created used for the build process itself. The final Svetovid image
contains only necessary stuff and is as lightweight as possible.

To build the Docker image, run:

```sh
git submodule update --init --recursive
docker build . -f ./dockerfiles/Dockerfile.clean_svetovid
```

You may also optionally pass other arguments to ``docker build``, for example
the ``--tag`` parameter to automatically tag the resulting image (e.g. ``--tag
svetovid``), or the ``--platform`` image to build an image for a foreign
platform (e.g. ``--platform linux/arm/v7`` for running on a Raspberry Pi).

## Installation instructions

### Standalone installation instructions

After running ``make package``, the following Debian packages will be created:

- **svetovid_{version}_{architecture}.deb** - base binary of Svetovid itself and
  the systemd service unit file; note: the post-install script will
  automatically start Svetovid as a daemon

Additionally in the commercial version only:

- **svetovid-plugin-fsdm_{version}_{architecture}.deb** - dynamically loadable
  library that enables the FSDM functionality in Svetovid
- **avsystem_svetovid-{version}-Linux-fsdmtool.deb** -
  [fsdmtool](../FSDM.md#fsdm-script-stub-generator) script, that allows creating
  stubs of FSDM scripts from XML object definitions and/or downloading them from
  the LwM2M Object Registry
- **avsystem_svetovid-{version}-Linux-fsdmtool-runtime-python.deb** - runtime
  library used by the Python scripts generated by ``svetovid-fsdmtool``
- **avsystem_svetovid-{version}-Linux-fsdmtool-runtime-sh.deb** - runtime
  library used by the shell scripts generated by ``svetovid-fsdmtool``

The preferred method of installing Svetovid is to install some or all of the
aforementioned files, depending on your needs, for example:

```sh
sudo apt install ./*.deb
```

If you're running an RPM-based distribution, you can use ``alien`` (installing
``alien`` itself is beyond the scope of this documentation) to convert the
``*.deb`` files into ``*.rpm`` and install those:

```sh
sudo alien --to-rpm --scripts *.deb
sudo rpm --replacefiles -ivh *.rpm
```

### Docker installation instructions

The Docker build does not require additional installation - the built image is
ready to run. You may tag it for your convenience - any further instructions
will assume that the image has been tagged as just ``svetovid``.

## Directory structure of an installed client

Assuming that all the packages mentioned above are installed:

- ``/etc/svetovid/``
    - ``/etc/svetovid/config/`` - configuration files, see
      [Client Configuration](../Client_Configuration.md)
    - ``/etc/svetovid/dm/`` - default directory for FSDM-based object
      implementations

        !!! Note
            In the Docker builds, this directory is initially populated with
            files from the ``dockerfiles/docker-init-files/dm/`` subdirectory of
            the source repository; that contains an alternative implementation
            of the Device (/3) object.

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

### Additional files used by the Docker images

- ``/etc/svetovid/svetovid_start.sh`` is the entry point of the Docker
  container; this script starts the Svetovid process and allows to modify basic
  LwM2M configuration (endpoint name, DTLS PSK identity and key, server
  hostname) with the use of ENV values while starting the container (see the
  [Docker builds](#docker-builds) section)
    - The variant with OTBR support additionally contains
      ``/etc/svetovid/svetovid_start_otbr.sh`` and uses that as the entry point.
      That script launches both the OTBR and Svetovid startup scripts
      concurrently.
- The ``/etc/svetovid/config/`` directory contains files copied from the
  ``dockerfiles/docker-init-files/config/`` subdirectory of the source
  repository; this is required for proper handling of startup with configuration
  based on environment variables.
- The ``/etc/svetovid/dm/`` directory contains files copied from the
  ``dockerfiles/docker-init-files/dm/`` subdirectory of the source repository;
  that contains an alternative implementation of the Device (/3) object.
    - The variant with OTBR supports also includes implementations of the objects
      related to OpenThread.
- ``/var/cache/svetovid/`` - in the variant with OTBR support, contains data
  related to the OTBR state, cached to limit the number of accesses to the OTBR
  daemon socket, and to implement transactionality of modifications by the LwM2M
  Server.
- ``/run/openthread-wpan0.sock`` - local UNIX-domain socket used for
  communication with the OTBR daemon (note: this is part of the ``ot-br-posix``
  package and not related to Svetovid, but used by OTBR object implementations)
- ``/run/sve-openthread-wpan0.lock`` - in the variant with OTBR support, this
  file is used to synchronize accesses to the OTBR daemon socket.

## Launch instructions

### Standalone build

Svetovid is configured to launch through ``systemd`` and the install scripts
enable and launch it by default.

To manually start the client, use:

```sh
sudo systemctl start svetovid
```

To manually stop the client, use:

```sh
sudo systemctl stop svetovid
```

LwM2M client process logs are sent to syslog. To access them, either:

- read syslog directly, e.g.:

    ```sh
    journalctl -fu svetovid
    ```

- or stop the LwM2M client service as described above, then run it in the
  foreground:

    ```sh
    /usr/bin/svetovid
    ```

### Docker builds

The Docker builds use the following environment variables to configure the
LwM2M Client:

- ``EP`` - LwM2M Client's endpoint name *as well as* DTLS Identity
- ``PSK`` - LwM2M Client's PSK in plain-text
- ``SERVER_HOST`` - LwM2M Server's endpoint (e.g. ``{{ coiote_server }}``)

### Examples

- run Svetovid LwM2M Client in background (as a daemon)

    ```sh
    docker run -d -e EP='foo' -e PSK='bar' -e SERVER_HOST='{{ coiote_server }}' svetovid
    ```

- stop LwM2M Client by stopping Svetovid container

    ```sh
    docker stop <containerId>
    ```

- resume LwM2M Client by stopping Svetovid container

    ```sh
    docker start <containerId>
    ```

- run container interactively with automatic container deletion after existing

    ```sh
    docker run -it --rm -e EP='foo' -e PSK='bar' -e SERVER_HOST='{{ coiote_server }}' svetovid
    ```

- run container with custom Svetovid log level e.g. to troubleshoot

    ```sh
    docker run -it --rm -e EP='foo' -e PSK='bar' -e SERVER_HOST='{{ coiote_server }}' -e LOG_LEVEL='debug' svetovid
    ```

- start container without running the Sevetovid LwM2M client (e.g. to prototype your own objects)

    ```sh
    docker run -it -e EP='foo' -e PSK='bar' -e SERVER_HOST='{{ coiote_server }}' svetovid /bin/bash
    ```

- run container interactively with OTBR (remember to connect RCP and edit its path if necessary)

    ```sh
    docker run --rm --sysctl "net.ipv6.conf.all.disable_ipv6=0 net.ipv4.conf.all.forwarding=1 net.ipv6.conf.all.forwarding=1" -p 8080:80 -p 8081:8081 --dns=127.0.0.1 -it --volume /dev/ttyACM0:/dev/ttyACM0 --privileged -e DNS64_ONLY=1 -e EP='foo' -e PSK='bar' -e SERVER_HOST='{{ coiote_server }}' openthread/svetovid_with_otbr --radio-url spinel+hdlc+uart:///dev/ttyACM0
    ```
