.. _transfer object:

.. role:: sign
.. role:: sym
.. role:: dyn

``transfer`` object
===================

Utilities for file transfer between devices and Coiote DM resources.

API reference
-------------

.. This API is from: com.avsystem.ump.core.api.TransferApi

| :sign:`transfer.`:sym:`fileType.notSpecified`:sign:`: FileType`
| :sign:`transfer.`:sym:`fileType.vendorConfig`:sign:`(instance: Int): FileType`
| :sign:`transfer.`:sym:`fileType.vendorConfig`:sign:`: FileType`
| :sign:`transfer.`:sym:`fileType.vendorLogFile`:sign:`(instance: Int): FileType`
| :sign:`transfer.`:sym:`fileType.vendorLogFile`:sign:`: FileType`
| :sign:`transfer.`:sym:`generateDownloadUrl`:sign:`(protocol: ProtocolType, resourceId: String): String`
| :sign:`transfer.`:sym:`generateUploadUrl`:sign:`(protocol: ProtocolType, fileType: FileType, resourceId: String, deviceIdentity: String): String`
| :sign:`transfer.`:sym:`newResourceId`:sign:`: String`
| :sign:`transfer.`:sym:`protocol.anonymousFtp`:sign:`: ProtocolType`
| :sign:`transfer.`:sym:`protocol.emptyFtp`:sign:`: ProtocolType`
| :sign:`transfer.`:sym:`protocol.ftp`:sign:`: ProtocolType`
| :sign:`transfer.`:sym:`protocol.http`:sign:`: ProtocolType`
| :sign:`transfer.`:sym:`protocol.httpWithAuth`:sign:`: ProtocolType`
| :sign:`transfer.`:sym:`protocol.https`:sign:`: ProtocolType`
| :sign:`transfer.`:sym:`protocol.httpsWithAuth`:sign:`: ProtocolType`
