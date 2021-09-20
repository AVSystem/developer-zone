.. _UG_E_PEC_res_object:

.. role:: sign
.. role:: sym
.. role:: dyn

``res`` object
==============

It provides access to CSV resources. For any resource in the system the **expressionAlias** field can be set. Only CSV resources
with non-null expression alias are visible from expressions. Moreover, it is possible to access some static CSV files
that are allowed by system configuration.

CSV format
----------

A file format should follow a standard CSV specification. A delimiter character is ``/,`` and a quote character is ``/"``.
If a cell contains any leading or trailing spaces, it requires explicit quoting in order to make them a part of a cell value,
otherwise they will be trimmed.

Example
-------

Suppose there is a CSV resource (with **expressionAlias** set to *alias*) that contains some simple static mapping, that is,
from OUI to manufacturer:

::

    OUI,manufacturer
    000000,xerox
    000001,xerox
    000002,xerox
    fcfbfb,cisco

It is possible to write an expression that:

 * Accesses some particular value, for example, retrieves a manufacturer for the *fcfbfb* OUI:

  ``${res.alias.by('OUI').get('fcfbfb').manufacturer}``

  or using column indexes if a file does not contain column names:

  ``${res.alias.by(0).get('test')(1)}``

 * Accesses directly, for example, the 3 :sup:`rd` record from the file (indexing starts with zero):

  ``${res.alias.row(2)}``

 * Retrieves all records matching a given key, for example, all records for the `xerox` manufacturer:

  ``${res.alias.by('manufacturer').getAll('xerox')}``

API reference
-------------

| :sign:`res.`:dyn:`<expressionAlias>`:sign:`: CsvResource`

  It returns a resource with a given expression alias. It is possible to have two CSV resources with the same expression alias.
  It is undefined which one will be visible from expressions. ``NoSuchElementException`` is thrown when there is no resource
  with the given alias.

| :sign:`(r: CsvResource).`:sym:`by`:sign:`(columnIndex: Int): CsvResourceByIndex`

  It chooses which column should be used as a key in the static mapping. ``null`` is returned when ``columnIndex`` is greater
  than the number of columns in the CSV file.

| :sign:`(r: CsvResource).`:sym:`by`:sign:`(columnName: String): CsvResourceByName`

  It chooses which column should be used as a key in the static mapping. Values from the first CSV row are interpreted as column
  names. If there are any duplicates, it is undefined which one will be used. ``NoSuchElementException`` is thrown when
  the resource is empty. ``null`` is returned when there is no column named ``columnName`` in the CSV file.

| :sign:`(r: CsvResource).`:sym:`row`:sign:`(rowNumber: Int): List[String]`

   It directly returns a record specified by ``rowNumber``. ``null`` is returned when ``rowNumber`` is greater than the number
   of records in the CSV file.

| :sign:`(r: CsvResource).`:sym:`columnNames`:sign:`: Set[String]`

   It returns a set of values from the first CSV row. An empty set is returned when the resource is empty.

| :sign:`(r: CsvResourceByIndex).`:sym:`get`:sign:`(key: String): List[String]`
| :sign:`(r: CsvResourceByName).`:sym:`get`:sign:`(key: String): List[CsvRecord]`

   It selects some particular record from the mapping by the key. ``null`` is returned when there is no record matching a given
   key. If there are duplicates in the column, it is undefined which one will be used. It is possible to access all records
   matching the given key using ``getAll(key)``.

| :sign:`(r: CsvResourceByIndex).`:sym:`getAll`:sign:`(key: String): List[List[String]]`
| :sign:`(r: CsvResourceByName).`:sym:`getAll`:sign:`(key: String): List[List[CsvRecord]]`

   It allows to select all records matching a given key. An empty list is returned when there is no such a record.

| :sign:`(r: CsvRecord).`:sym:`asMap`:sign:`: Map[String, String]`

   It transforms a record to a string map keyed by column names.

| :sign:`(r: CsvRecord).`:dyn:`<columnName>`:sign:`: String`

   It returns a value located at a given column. ``null`` is returned when there is no column named ``columnName`` in the CSV file.
