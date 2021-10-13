# The HOCON format

HOCON stands for *Human Optimized Config Object Notation* and it is a format used by Coiote DM to configure dialects (among other things). A full overview of the format can be found in the [HOCON documentation](https://github.com/typesafehub/config/blob/master/HOCON.md) and it's recommended that you read it before working with HOCON.
This document presents a quick overview of HOCON features without going into smaller details.

HOCON is a superset of JSON, meaning that every JSON document is a correct HOCON document. Therefore, HOCON supports
all the basic types found in JSON, namely: objects, arrays, strings, booleans and numbers. However, it introduces a significant amount of syntactic extensions and features:

- Comments:

    ```
    // some comment
    # some other comment
    ```

- Includes:

  Includes should be treated as if included document is textually "copied and pasted" into the target document.
  This means that it you have multiple includes, their order matters. Also, you must be careful to **not** include
  the same document multiple times:

    ```
    include "someOtherConfig.conf"

    someObject {
      include "someConfigDirectlyIntoObject.conf"
    }
    ```

- Unquoted strings:

  Object field keys and values do not have to be enclosed in double quotes as long as they do not contain forbidden
  characters ``$ " { } [ ] : = , + # ` ^ ? ! @ * & \``:

    { field key with spaces : unquoted string }

- Multiline strings:

    ```
    multilineString : """
      stuff
      more stuff
    """
    ```

- Object key and value may be separated with *:* or *=* - there is no difference:

    ```
    someKey = someValue
    someOtherKey : someOtherValue
    ```

- The *:* or *=* may be skipped when the value is an object:

    ```
    someObject = {
      someKey = someValue
    }
    someOtherObject {
      someKey = someValue
    }
    ```

- Values for the same keys may be specified multiple times - the last value "wins":

    ```
    someKey = someValue
    someKey = someActualValue
    ```

- Objects with a single key can be expressed more concisely using path expressions. The following two snippets are equivalent:

    `someObject.someProperty = someValue`

    ```
    someObject {
      someProperty = someValue
    }
    ```

- Multiple definitions of the same object are automatically merged. All of the following snippets are equivalent:

    ```
    someObject {
      someKey = someValue
    }
    someObject {
      someOtherKey = someOtherValue
    }
    ```

    ```
    someObject {
      someKey = someValue
      someOtherKey = someOtherValue
    }
    ```

    ```
    someObject.someKey = someValue
    someObject {
      someOtherKey = someOtherValue
    }
    ```

    ```
    someObject.someKey = someValue
    someObject.someOtherKey = someOtherValue
    ```

- Values can be erased by assigning ``null`` to them. For example, to entirely replace some object instead of merging:

    ```
    someObject {
      someOldKey = someOldValue
    }
    someObject = null
    someObject {
      someNewKey = someNewValue
    }
    ```

- Substitutions:

    ```
    someObject {
      someKey = someValue
    }
    someProperty = ${someObject.someKey}
    ```

  Substitution resolution is done at the very end of a config processing. This means substitutions will resolve to last
  value set. For example, in the following config:

    ```
    someProperty = someValue
    otherProperty = ${someProperty}
    someProperty = otherValue
    ```

  ``otherProperty`` will have value ``otherValue``.

  Paths used in substitutions must be **absolute**.

* Strings (unquoted, quoted and multiline) and references can be concatenated:

    ```
    url = unquoted${substitution}"quo$ted"
    ```

* Lists (with each other) and references can be concatenated:

    ```
    myList = [1,2,3,4]
    myOtherList = ${myList} [5,6,7,8]
    ```

* Elements can be appended to lists with *+=*:

    ```
    myList = [1,2,3,4]
    myList += 5
    ```

* Objects (with each other) and references can be concatenated (merged):

    ```
    myObject {
      someKey = someValue
    }
    myOtherObject = ${myObject} {
      someOtherKey = someOtherValue
    }
    ```
