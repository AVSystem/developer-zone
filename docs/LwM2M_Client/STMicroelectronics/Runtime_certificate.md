# Runtime certificate and private key configuration

To build a project with a runtime certificate and private key, the following command will be suitable for most boards:

```
west build -b <BOARD> -p -- -DCONFIG_ANJAY_ZEPHYR_RUNTIME_CERT_CONFIG=y
where <BOARD> should be replaced by the selected board from boards/ directory.
```

!!! Note
    Runtime certificate and private key do not work with Thingy:91.

This feature works with nrf9160dk starting from revision v0.14.0. For this board use configuration that utilizes an external flash chip and software-based cryptography:

west build -b nrf9160dk_nrf9160_ns@0.14.0 -p -- -DCONF_FILE=prj_extflash.conf -DOVERLAY_CONFIG="overlay_nrf_mbedtls.conf"
After that, the certificate and private key based on the SECP256R1 curve can be provided through the shell interface in PEM format. To generate them use the following commands (to use the certificate and private key with Coiote DM you must specify a common name that is the same as the client endpoint name):

```
openssl ecparam -name secp256r1 -out ecparam.der
openssl req -new -x509 -nodes -newkey ec:ecparam.der -keyout demo-cert.key -out demo-cert.crt -days 3650
openssl x509 -in demo-cert.crt -outform pem -out cert.pem
openssl ec -in demo-cert.key -outform pem -out key.pem
```

Then provide the generated certificate and private key through the shell with the following commands respectively:

```
anjay config set public_cert
anjay config set private_key
```