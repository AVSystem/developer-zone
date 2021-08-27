.. _Hiding Sensitive Subscriber Data:

================================
Hiding sensitive subscriber data
================================

Password obfuscation will be configured using two parameters:

 * *smg.mod.devMan.passwordParameters* - a list of parameters names/properties that should be obfuscated. The default value:

  | Password,ConnectionRequestPassword,STUNPassword,ConfigPassword,KeyPassphrase,DevicePassword,
  | WEPKey,PreSharedKey,KeyPassphrase,pass,AdminPassword

 * *smg.mod.devMan.passwordRegexes* - list of parameters regexes that should be obfuscated. The default value:

::

  ^.*(?i)(password).*$

Also, *i* replaced checking, if string contains a word 'password' with regex (it does basically the same).

::

  ^.*(?i)(password).*$

Regex is checked against a whole string and *passwordParameters* are checked against a last part of dot-separated string.
