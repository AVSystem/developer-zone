.. _Entry API:

``Entry``
=========

Represents a key-value association that can be obtained from :ref:`Map API`.

API reference
-------------

Map entries expose :ref:`Universal API` plus operations defined below.

| :sign:`(e: Entry[K,V]).`:sym:`key`:sign:`: K`

  Returns a key of this key-value entry.

| :sign:`(e: Entry[K,V]).`:sym:`value`:sign:`: V`

  Returns a value of this key-value entry.

| :sign:`(e: Entry[K,V]).`:sym:`withKey`:sign:`(newKey: NK): Entry[NK,V]` - for arbitrary type ``NK``

  Creates a new key-value entry by replacing a key with other key.

| :sign:`(e: Entry[K,V]).`:sym:`withValue`:sign:`(newValue: NV): Entry[K,NV]` - for arbitrary type ``NV``

  Creates a new key-value entry by replacing a value with other value.
