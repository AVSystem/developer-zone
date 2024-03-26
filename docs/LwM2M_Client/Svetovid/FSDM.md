# File System Data Model

FSDM (File System Data Model) is a framework that allows implementing LwM2M
objects using Python or Bash scripts. It is provided as a plugin for Svetovid,
available in the commercial version and in certain binary distribution.

## FSDM plugin

When enabled, this plugin maps a specific directory to LwM2M Objects, Instances
and Resources. Default mapped directory is ``/etc/svetovid/dm`` and it can be
changed in ``fsdm.json`` file. It is expected to have the following structure:

- ``/etc/svetovid/dm/`` (default)

    - ``$OBJECT_ID/`` - directory representing an LwM2M Object with given ID.

        - ``resources/`` - directory containing scripts used to access
          individual Resources.

            - set of executable scripts representing individual Resources. Names
              of these files MUST exactly correspond to their Resource IDs.
              </br>
              See [FSDM resources](#fsdm-resources) for details.

        - ``instances`` - (optional) executable script used for managing object
          instances. </br>
          See [FSDM instances script](#fsdm-instances-script) for details.

        - ``transaction`` - (optional) executable script used to handle
          transactional processing of object resources. </br>
          See [FSDM transaction script](#fsdm-transaction-script) for details.

Other remarks:

- Any unexpected files contained within the directory are ignored, including:

    - "root"-level directories with non-numeric names,

    - any files present on the "Object" level,

    - "Resource"-level files/directories with non-numeric names.

## FSDM script stub generator

FSDM plugin comes with a helper tool for generating stubs of required scripts.
Run ``svetovid-fsdmtool --help`` to see up-to-date help message with usage
examples.

!!! Note
    ``svetovid-fsdmtool`` is distributed as a separate installation package (e.g
    ``avsystem_svetovid-21.12-raspberry-Linux-fsdmtool.deb`` in case of the
    Raspberry Pi platform), so please make sure that it is installed before
    starting.

## FSDM config file

FSDM settings are stored in ``fsdm.json`` file. Example:

```json
{
    "dirs": {
        "datamodel": "/tmp/datamodel"
    }
}
```

- ``dirs.datamodel`` - directory containing LwM2M objects, as described before.
  If not set, **default is:** ``/etc/svetovid/dm``.

## FSDM resources

Each Resource is an executable script, which is called as follows:

```sh
script OPERATION [ OPTIONS... ]
```

### Resource script operations

- ``read`` - represents an LwM2M Read operation. The script MUST return resource
  value on its standard output.

    !!! Note
        The script **MUST NOT** add any trailing newlines that are not a part of
        actual resource value. Anything printed on `stdout` is interpreted as
        binary data, i.e. no newline translation (e.g. CRLF <-> LF) is
        performed.

- ``write`` - represents an LwM2M Write. The script MUST read new resource value
  from its standard input.

    !!! Note
        **ALL** data until EOF represents the resource value. Any trailing
        newlines present on `stdin` MUST be handled as part of resource value.
        `stdin` contents **MUST** be interpreted as binary data, i.e. no newline
        translation (e.g. CRLF <-> LF) may be performed.

- ``execute`` - represents LwM2M Execute operation. Arguments, if any, can be
  passed using the ``--args`` option.

- ``reset`` - resets Resource to its original state - sets it to a default value
  or deletes it. In case of a Multiple Resource, it shall remove all its
  Multiple Resource Instances - right after ``reset``, the following ``list``
  command should print an empty string.

    !!! Note
        It will be called for each resource of an instance before LwM2M
        Write-Replace is performed on the instance (or on the resource if it is
        a Multiple Resource).

- ``list`` - only applicable to Multiple Resources. The script should print a
  whitespace-separated list of valid Resource Instance IDs for this resource.

- ``describe`` - returns Resource metadata in JSON format, including:

    - ``"operations"``: a combination of ``R``/``W``/``E``

    - ``"datatype"``: see [resource data types](#resource-data-types) section
      below

    - ``"multiple"``: (optional) boolean flag indicating that the script
      represents a Multiple Resource. If omitted, it is assumed to be false

    - ``"name"``: (optional) human-readable resource name

    - ``"description"``: (optional) human-readable description of the resource

    - ``"external-notify"``: (optional) enables external notification mechanism,
      for this resource. See also
      [external notify](#fsdm-external-notify-trigger) section

      Example:

      ```json
      {
          "operations": "RW",
          "datatype": "opaque",
          "multiple": false,
          "name": "Data",
          "description": "Some data"
      }
      ```

### Resource script options

- ``--instance ID`` - ID of the LwM2M Instance being referred to. May not be
  present if a specific Object Instance is not relevant, e.g. when querying
  resource metadata.

- ``--resource-instance ID`` - ID of the LwM2M Multiple Resource Instance being
  referred to. May not be present if the operation targets a Single Resource or
  the Multiple Resource as a whole.

- ``--args ARGUMENTS...`` - Execute operation arguments. Only present if
  ``OPERATION`` is ``execute``. Always passed as the last option, all arguments
  that follow ``--args`` are to be interpreted as arguments to Execute
  operation. ``--args`` may be omitted if the list of Execute arguments is
  empty. </br>
  Each ``ARGUMENT`` can be either:

    - a single digit,

    - ``N=CONTENT`` string, where N is a single digit, and CONTENT is a string
      consisting of any characters allowed within the Execute argument by the
      LwM2M spec (space is not allowed). Badly formatted arguments from server
      request won't be ever passed to the script.

      For example:

      ```sh
      --args 2=foo 1 8=bar
      ```

### Multiple Resources

Multiple Resources are still implemented as single scripts. LwM2M requests map
to script operations as follows:

- LwM2M Read: ``list`` + ``read`` on each Multiple Resource Instance,

- LwM2M Write (replace): ``delete`` + ``write`` on each Multiple Resource
  Instance,

- LwM2M Write (update): ``write`` on each Multiple Resource Instance,

- LwM2M Execute: always fails with Method Not Allowed. Never calls the script.

### Resource data types

Data types used on the LwM2M layer SHOULD correspond to the schema definition.
Each resource script MUST support the ``describe`` operation, which MUST return
accurate resource metadata.

- `string`: UTF-8 encoded plain text

- `integer`: stringified integer

- `float`: stringified double-precision floating-point value

- `boolean`: stringified integer `0` or `1`

- `opaque`: opaque binary data

- `time`: seconds since Unix epoch; same representation as integer

- `objlnk`: ``OID:IID`` string, where `OID` and `IID` are valid stringified
  Object/Instance IDs

!!! Note
    - ``read`` operation MUST write data of correct type on standard output.

    - Implementations MAY assume data passed to the standard input when invoking
      ``write`` operation have correct data type.

### Script exit status

The following exit status codes are handled by Svetovid:

- ``0`` indicates successful execution.

- ``100`` - ``131`` - cause Svetovid to respond to the LwM2M server with a CoAP
  error from the ``4.xx`` range, e.g.:

    - ``100`` - *4.00 Bad Request*

    - ``104`` - *4.04 Not Found*

    - ``115`` - *4.15 Unsupported Content-Format*

    - etc.

- ``200`` - ``231`` - cause Svetovid to respond to the LwM2M server with a CoAP
  error from the ``5.xx`` range, e.g.:

    - ``200`` - *5.00 Internal Server Error*

    - ``201`` - *5.01 Not Implemented*

    - etc.

!!! Note
    See [CoAP RFC](https://tools.ietf.org/html/rfc7252#section-12.1.2) for a
    more detailed list of CoAP response codes.

## FSDM instances script

``instances`` script is called as follows:

```sh
instances OPERATION [ ID ]
```

``OPERATION`` is one of:

- ``list`` - the script should print a whitespace-separated list of valid
  Instance IDs for its object.

- ``create ID`` - the script should create an LwM2M Object Instance when called.
  This operation takes an ``ID`` argument, which is an integer in the [0; 65534]
  range that MUST be used as the ID of created instance. The script MUST follow
  [script exit status](#script-exit-status) to return operation status
  (success/failure).

    - After a successful ``create``, the newly created Instance ID MUST become
      visible in the output of ``list`` operation.

    - An attempt to ``create`` an Instance ID that is already present MUST fail
      with a "4.00 Bad Request" code. Failure caused by any other reason MUST
      result in an exit status representing a CoAP code from the 5.xx range (see
      [script exit status](#script-exit-status)).

    - The ``create`` operation MUST initialize all resources for the newly
      created instance to their default values. If a particular resource has no
      default value, it MUST be left undefined. The ``create`` operation will be
      followed by a series of ``write`` operations which may fill them as
      required, after which the ``transaction`` script is called to either
      commit or rollback changes.

    See [transaction script](#fsdm-transaction-script) for details.

- ``delete ID`` - the script should delete an instance ``ID`` if one exists.

- ``describe`` - returns Object metadata in JSON format, including:

    - ``version`` - (optional) object version number, as described in
      [LwM2M Core TS section 7.2](https://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#7-2-0-72-Object-Versioning)

    - ``"external-notify"`` - (optional) enables external notification mechanism
      for the set of instances of this object. </br>
      See also [external-notify](#fsdm-external-notify-trigger).

!!! Note
    The ``instances`` script MAY not be present, in which case the Object is
    assumed to be a Single-Instance Object, for which an Instance ID 0 always
    exists and cannot be deleted. </br>
    When it is present, all operations other than ``list`` are optional.

## FSDM transaction script

``transaction`` script, if present, is called before and after every mutating
operation on an LwM2M object, i.e. Write/Create/Delete.

```sh
transaction OPERATION
```

``OPERATION`` is one of:

- ``begin`` - called before the mutating LwM2M request to set up a savepoint
  for future rollback. </br>
  The exit status of this script MUST follow the
  [script exit status](#script-exit-status) rules.

- ``validate`` - called after the mutating LwM2M request. This operation checks
  if the object is in a consistent state after all modifications. It MUST also
  make sure that ``commit`` will be successful (see ``commit`` operation
  description for more details). If ``validate`` fails, ``rollback`` is
  performed.

- ``commit`` - called after all atomic operations the LwM2M request is split
  into succeeded, to make sure they are actually applied.

    !!! Warning
        If this operation fails, the data model will be left in an inconsistent
        state (``rollback`` will not be invoked). For this reason, it may return
        an error code if and only if a fatal, unpredictable and irrecoverable
        error (e.g. physical I/O error) occurs. All other errors (e.g. being a
        consequence of invalid object state) MUST be reported by ``validate``
        operation beforehand.

- ``rollback`` - called after some of the atomic operations the LwM2M request is
  split into fails. This operation MUST restore LwM2M object to the state it was
  in at the point ``begin`` was called.

!!! Note
    The ``transaction`` script MAY not be present, in which the Object is
    assumed to not require transactional processing of any kind. This is NOT
    recommended if the object implements any writable resources or Create/Delete
    operation on instances.

## FSDM external Notify trigger

There are two ways Svetovid can be notified about changes occurring in the File
System Data Model.

1. **Pull-mode:** The default mode. Svetovid regularly polls ``instances list``
   and ``resource read`` operations to check if some changes in their outputs
   have appeared.

2. **Push-mode:** The mode in which it is the user responsibility to notify
   Svetovid about the following changes in FSDM:

      - list of valid Instance IDs for an object (returned value of
        ``instances list`` operation) has changed for **other** reason than
        calling ``instances create`` or ``instances delete`` by Svetovid

      - readable resource has changed its value for **other** reason than
        calling ``write``, ``reset`` or ``clear`` by Svetovid

### Usage

To activate "Push-mode" for an object instance or a resource, user has to
explicitly enable that mode in the resource or instances scripts:

- For `python` based scripts generated by ``fsdmtool``, for readable entities,
  the class constant ``EXTERNAL_NOTIFY`` should be set to ``True`` (default
  value is ``False``).

- For `sh` based scripts generated by ``fsdmtool``, for readable entities,
  ``RESOURCE_EXTERNAL_NOTIFY`` and ``INSTANCES_EXTERNAL_NOTIFY`` should be set
  to ``"true"`` (default value is ``"false"``).

- For scripts manually crafted, one should make sure that the ``describe``
  operation of the entity also returns ``"external-notify": true``.

After enabling the functionality, it is possible to use special Unix domain
socket to notify about value changes. The socket is created after Svetovid
launch in Svetovid temporary directory (by default: ``/tmp/fsdm_local_socket``).

!!! Note
    Push mode may also be enabled for Resources whose values never change, and
    for instance sets of objects whose instance sets never change. In this case,
    it is enough to just set the external notify flag to true without the need
    to send notifications to Svetovid.

User may send JSON containing information about changed state of instances and
resources as follows:

```json
{ "notify": ["/10", "/20", "/9/0/1", "/9/0/2"] }
```

In example above we want to inform that:

- instances lists of objects 10 and 20 have changed

- values of resources ``/9/0/1`` and ``/9/0/2`` have changed

To send the message through the socket user can use standard tools like `nc` or
`socat`.

#### nc

```sh
echo '{ "notify": ["/10", "/20", "/9/0/1", "/9/0/2"] }' | nc -NU /tmp/fsdm_local_socket
```

!!! Note
    Option ``-N`` is set because `nc` should shutdown the socket after EOF on
    the input.

#### socat

```sh
echo '{ "notify": ["/10", "/20", "/9/0/1", "/9/0/2"] }' | socat - UNIX-CONNECT:/tmp/fsdm_local_socket
```

#### Native socket API

User can use standard socket API of his preferred programming language. These
are important things to remember about user-side socket:

- socket domain should be `AF_UNIX` / `AF_LOCAL`

- socket type should be `SOCK_STREAM`

- after sending the whole message the socket should be shut down for further
  transmissions (`SHUT_WR` flag)

### Response

As a result of triggering a notify a response is sent through the socket. There
are 3 kinds of result:

1. ``{"result": "OK"}``: There were no errors during triggering a notify.

2. ``{"result": "warning", "details": [ ... ] }``: In this case some of entries
   could not be processed and the reasons for each entry are indicated in
   `details` section. Entries omitted in `details` section were perfectly valid
   and there is no need to try notifying them again.

3. ``{"result": "error", "details": "..." }``: There was some serious problem
   with execution of user request (e.g. parsing error). In this case **all
   entries** should be considered as **not processed**.

#### Examples

``"details"`` section for ``"OK"`` result is absent:

```sh
user@host $ echo '{ "notify": ["/1337"] }' | nc -NU /tmp/fsdm_local_socket
{
    "result": "OK"
}
user@host $
```

``"details"`` for ``"warning"`` result is an array of failure reasons:

```sh
user@host $ echo '{ "notify": [":-)", "/1/2/3"] }' | nc -NU /tmp/fsdm_local_socket
{
    "result": "warning",
    "details": [
        {
            "path": ":-)",
            "reason": "not object or resource path"
        },
        {
            "path": "\/1",
            "reason": "non-FSDM object"
        }
    ]
}
user@host $
```

``"details"`` for the ``"error"`` result is a single diagnostic string:

```sh
user@host $ echo abcdefgh | nc -NU /tmp/fsdm_local_socket
{
    "result": "error",
    "details": "malformed input"
}
user@host $
```

## Triggering Send message

Svetovid may be forced to generate a Send message where he will inform the
server about a specific resource. Similar to the Notify trigger in
**push-mode** the user can pass a JSON to the Unix domain socket to communicate
with Svetovid:

```json
{ "send": ["/10", "/20/0", "/9/0/1", "/9/0/2"] }
```

In this example we will send to the LwM2M server:

- all values of resources in all of the instances of object 10

- all values of resources in ``/20/0``

- values of resources ``/9/0/1`` and ``/9/0/2``

## FSDM key-value store for keeping volatile object state

Sometimes, when implementing an object, there's a need to keep track of some
information for the object to function properly. An example could be an object
with two Resources: "Current Value" and "Max Value".

To implement the "Max Value" Resource, one has to keep track of the values
being presented and save the largest one seen so far somewhere. One way to do
it would be by using some kind of temporary file storage. Another way is to
used our pre-implemented simple key-value store accessible through
``/tmp/fsdm_local_socket`` socket.

### Supported commands

#### set

Sets or replaces keys to specified values. Example use:

```sh
user@host $ echo '{ "store": { "set": { "foo1": "bar", "foo2": "baz" } } }' | nc -NU /tmp/fsdm_local_socket
{
    "result": "OK"
}
user@host $
```

Which sets `foo1` to `bar` and `foo2` to `baz`.

#### get

```sh
user@host $ echo '{ "store": { "get": ["foo1", "foo2"] } }' | nc -NU /tmp/fsdm_local_socket
{
    "result": "OK",
    "details": {
        "foo1": "bar",
        "foo2": "baz"
    }
}
user@host $
```

Gets the value assigned to keys `foo1` and `foo2`. Note that it is possible to
get more than one key, and if the key is not set, it is not returned.

#### delete

```sh
user@host $ echo '{ "store": { "delete": ["foo1"] } }' | nc -NU /tmp/fsdm_local_socket
{
    "result": "OK"
}
user@host $
```

Deletes the key `foo1` and a key assigned to it from the store.
