# Client configuration

## Introduction

Svetovid keeps configuration in JSON files. For Raspberry Pi, the default
location of these JSONs is ``/etc/svetovid/config``. Default configuration
directory may be overwritten by passing ``--conf-dir`` command line argument
when starting a Svetovid binary.

!!! Warning
    Only the following JSON files are supposed to be modified manually:

    - ``security.json``
    - ``server.json``
    - ``svd.json``

    Editing other JSON files in the configuration directory may cause unexpected
    behavior of the client.

!!! Note
    The LwM2M client process may modify these files at runtime. To avoid
    your changes from being overwritten, make sure to stop the ``svetovid``
    process before modifying the configuration (see the documentation relevant
    for your target platform, e.g.
    [launch instructions for the generic target](Supported_Platforms/generic.md#launch-instructions)).

## General settings

Settings not directly related to LwM2M server connections are stored in
``svd.json`` file. Example:

!!! Note
    This file can generally be left empty if you are fine with the defaults.

```json
{
    "device": {
        "endpoint_name": "53r14l",
        "udp_listen_port": 1234
    },
    "logging": {
        "default_log_level": "trace",
        "log_level": {
            "svd": "trace"
        }
    },
    "lwm2m_version_config": {
        "min": "1.0",
        "max": "1.1"
    },
    "in_buffer_size_b": 1024,
    "out_buffer_size_b": 1024,
    "msg_cache_size_b": 65536
}
```

- ``device.endpoint_name`` - if set, the endpoint name will be set to the
  configured value. <br/>
  **Default value:** automatically generated
  ``urn:dev:os:MANUFACTURER_OUI-SERIAL_NUMBER``, where the method of getting
  ``MANUFACTURER_OUI`` and ``SERIAL_NUMBER`` is specific to the platform used.
- ``device.udp_listen_port`` - force binding to a specific UDP port. If set to a
  non-zero value, all UDP sockets created by the LwM2M client will be bound to
  the configured port. <br/>
  **Default value:** random ephemeral ports will be used.
- ``device.server_initiated_bootstrap`` - enables/disables LwM2M Server
  initiated bootstrap support. If set to true, connection to the Bootstrap
  Server will be closed immediately after making a successful connection to any
  regular LwM2M Server and only opened again if (re)connection to a regular
  server is rejected. <br/>
  **Default value:** ``0``.
- ``device.core_persistence`` - enables/disables Anjay core persistence, which
  allows Svetovid to keep information about DTLS sessions, active LwM2M server
  registrations and active resource observations in non-volatile storage. Note
  that this information is only persisted after a graceful shutdown of Svetovid.
  <br/>
  **Default value:** ``0``.
- ``device.rebuild_client_cert_chain`` - enables/disables rebuilding client
  certificate chain based on the trust store (either the initial one or the one
  provisioned via EST) for inclusion in the (D)TLS handshake when using
  Certificate mode. If disabled, only the leaf client certificate will be sent
  in the handshake. <br/>
  **Default value:** ``0``.
- ``device.est_reenroll_config.enable`` - enables/disables usage of the EST
  Simple Re-enroll (``/est/sren``) operation. <br/>
  **Default value:** ``1``.
- ``device.est_reenroll_config.nominal_usage`` - nominal period for which a
  certificate provisioned by the EST server is used, expressed as part of the
  certificate validity period (value in the [0.0, 1.0] range). <br/>
  **Default value:** ``0.9``.
- ``device.est_reenroll_config.max_margin_s`` - limit, in seconds, on the margin
  between re-enrollment request and the certificate expiration time. In other
  words, it is guaranteed that re-enroll request will not be sent earlier than
  ``max_margin`` before the certificate expiration time. A negative value may be
  set to disable the limit. <br/>
  **Default value:** ``2592000`` (30 days).
- ``device.est_cacerts_policy`` - Policy of when to perform the ``/est/crts``
  request and which servers will use the trust store updated through it. <br/>
  Possible values are:
    - ``for_est_security_and_bootstrap`` (**default**) - perform the
      ``/est/crts`` request if there are servers configured to use the EST
      security mode, and use the updated trust store for those servers, as well
      as for the Bootstrap Server if it's configured to use either EST or
      Certificate security mode
    - ``for_est_security`` - perform the ``/est/crts`` request if there are
      servers configured to use the EST security mode, and use the updated trust
      store for those servers only; the Bootstrap Server will use the updated
      trust store only if it is itself configured to use the EST security mode
    - ``if_est_configured`` - perform the ``/est/crts`` request if there are
      servers configured to use the EST security mode, and use the updated trust
      store for all servers configured to use either EST or Certificate security
      mode
    - ``always`` - perform the ``/est/crts`` request if there are servers
      configured to use either EST or Certificate security mode, and use the
      updated trust store for all such servers
    - ``disabled`` - never perform the ``/est/crts`` request
- ``logging.default_log_level`` - log level applied to messages in case no more
  specific log level exists. <br/>
  Acceptable values:
    - "trace" (log all messages)
    - "debug"
    - "info"
    - "warning"
    - "error"
    - "quiet" (do not log anything)

    **Default value:** "info".

- ``logging.log_level.MODULE_NAME`` - log level applied to messages originating
  from ``MODULE_NAME`` only. Can be used to selectively control logging levels.
- ``lwm2m_version_config.min`` and ``lwm2m_version_config.max`` - minimum and
  maximum version of the LwM2M protocol that the client will attempt to use.
  Only ``1.0`` and ``1.1`` are currently supported versions, and both are used
  by default. The client will always attempt to register using the highest
  configured version and fall back to older versions if necessary.
- ``in_buffer_size_b`` - size (in bytes) of the buffer used for storing incoming
  LwM2M messages. The client will not be able to handle packets bigger than this
  size. </br>
  **Default value:** 4096.
- ``out_buffer_size_b`` - size (in bytes) of the buffer used for storing
  outgoing LwM2M messages. In cases where the message sent would exceed this
  size, the client will attempt a BLOCK-wise CoAP transfer instead. </br>
  **Default value:** 4096.
- ``msg_cache_size_b`` - size (in bytes) of the buffer used for storing outgoing
  LwM2M messages. When the client receives a duplicate request while an
  already-prepared response is in the cache, it is used instead of generating a
  new one. Cached messages are removed after their validity expires. If total
  size of cached messages exceeds configured value, oldest entries are evicted
  to make room for fresh ones. </br>
  Setting this value to 0 disables message caching. In such case, the client
  will handle all received retransmitted requests as if they were new ones,
  which may result in performing non-idempotent operations multiple times. </br>
  **Default value:** 65536.
- ``retry_after_s`` - enables/disables reconnection policy which after specified
  period of time (in seconds) after all server connections failed performs a
  reconnection attempt. A value of 0 disables reconnection attempts, and causes
  the client to shut down if it is unable to establish any connection.
  </br>
  **Default value:** 30.
- ``dirs.persistence`` - path to the persistence directory. That path MUST NOT
  get cleared on FW update. </br>
  **Default value:** `SVETOVID_PERSISTENCE_DIR` set during compile time.
- ``dirs.volatile_persistence`` - path to a volatile persistence directory. That
  path MUST be cleared on FW update, but persist across reboots. </br>
  **Default value:** `SVETOVID_VOLATILE_PERSISTENCE_DIR` set during compile
  time.
- ``dirs.plugins`` - path to Svetovid's plugin installation directory. </br>
  **Default value:** `SVETOVID_PLUGIN_DIR` set during compile time.
- ``dirs.temp`` - path to a directory used for temporary file storage. </br>
  **Default value:** `SVETOVID_TEMP_DIR` set during compile time.
- ``dirs.firmware_download_dir`` - path where PULL FW downloads will be kept.
  It MAY be cleared on FW update, but SHOULD persist across reboots in order to
  support firmware download resumption. </br>
  **Default value:** `SVETOVID_FIRMWARE_DOWNLOAD_DIR` set during compile time.
- ``dirs.pkix_trust_store`` - path to file or directory containing certificates
  that shall be used as the initial trust store for Certificate Usage modes that
  demand PKIX verification. </br>
  **Default value:** `SVETOVID_PKIX_TRUST_STORE` set during compile time, which
  is the global system trust store (``/etc/ssl/certs``) on platforms that
  support it, none otherwise.
- ``dirs.pkix_trust_store_crls`` - path to file containing CRLs that shall be
  used in conjunction with ``pkix_trust_store`` as the initial trust store for
  Certificate Usage modes that demand PKIX verification. </br>
  **Default value:** none.

## Connection settings

!!! Note
    The default configuration is designed to let you easily connect to our
    [{{ coiote_long_name }}](https://www.avsystem.com/products/coiote-iot-device-management-platform/).
    Please register at [{{ coiote_server }}]({{ coiote_site_link }}) to get
    access.

To configure an LwM2M Bootstrap Server, an instance has to be created in
``security.json`` file. A non-Bootstrap LwM2M Server additionally requires
adding an instance to the ``server.json`` file.

### Examples

#### Bootstrap server

  - **security.json**
    ```json
    {
        "2": {
            "server_uri": "coap:\/\/{{ coiote_server }}:5693",
            "is_bootstrap": "1",
            "security_mode": "nosec",
            "pubkey_or_identity_hex": "",
            "server_pubkey_hex": "",
            "privkey_or_psk_hex": "",
            "ssid": "7",
            "bs_timeout_s": "0"
         }
    }
    ```

  - **server.json**
    ```json
    {}
    ```

#### Non-bootstrap server with DTLS in Pre-Shared Key mode

  - **security.json**
    ```json
    {
        "2": {
            "server_uri": "coaps:\/\/{{ coiote_server }}:5684",
            "is_bootstrap": "0",
            "security_mode": "psk",
            "pubkey_or_identity_hex": "3030323343372D303036303634434444423130",
            "server_pubkey_hex": "",
            "privkey_or_psk_hex": "4573644175496D4E7536",
            "ssid": "7",
            "bs_timeout_s": "0"
        }
    }
    ```

  - **server.json**
    ```json
    {
        "0": {
            "ssid": "7",
            "lifetime": "30",
            "notification_storing": "0",
            "binding": "U"
        }
    }
    ```

In the ``security.json`` file you may need to change the ``privkey_or_psk_hex``
with hexlified pre-shared-key of your choice. To convert raw string to
hexlified string, you can use:

```sh
$ echo -n 'your-secret-key' | xxd -p
```

### Possible configuration options

Specific options directly correspond to LwM2M Security/LwM2M Server Object
Resources. See the LwM2M protocol specification for more details.

- ``security.json`` options:
    - ``server_uri`` - LwM2M Server URI ("coap://" or "coaps://" URI, depending
      on the ``security_mode`` value),
    - ``is_bootstrap`` - Bootstrap Server (boolean)
    - ``security_mode`` - Security Mode (one of: "psk", "nosec", "cert")
    - ``pubkey_or_identity_hex`` - Public Key or Identity (hex string).

        !!! Note
            this **MUST** be a hex string, even if the value is in fact a
            printable text. For example, if the PSK identity is supposed to be
            "identity", this value should be set to "6964656e74697479".

    - ``server_pubkey_hex`` - Server Public Key (hex string; see NOTE above)
    - ``privkey_or_psk_hex`` - Secret Key (hex string; see NOTE above)
    - ``ssid`` - Short Server ID (1-65534)
    - ``holdoff_s`` - Client Hold Off Time (seconds)
    - ``bs_timeout_s`` - Bootstrap-Server Account Timeout (seconds)

- ``server.json`` options:
    - ``ssid`` - Short Server ID (1-65534, must match ``ssid`` of some Security
      Object Instance)
    - ``lifetime`` - Lifetime (seconds)
    - ``default_min_period`` - Default Minimum Period (seconds)
    - ``default_max_period`` - Default Maximum Period (seconds)
    - ``binding`` - Binding (one of: "U", "UQ")
    - ``notification_storing`` - Notification Storing When Disabled or Offline
      (boolean)
    - ``disable_timeout`` - Disable Timeout (seconds)

### Using a Bootstrap Server

When using a Bootstrap Server, it may modify the contents of the Security and
Server objects. These changes will **NOT** be written back to ``security.json``
or ``server.json`` files - instead, they will be persisted into
``/etc/svetovid/persistence/persistence.dat``. Note that this is a binary file
that is not intended for user modification.

The configuration in ``security.json`` and ``server.json`` will take preference
if the ``persistence.dat`` file doesn't exist, or if either of the JSON files
is newer than the last time Svetovid has been bootstrapped from them. In other
words, if you modify or ``touch`` the JSON files, they shall take preference.
