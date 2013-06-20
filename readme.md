

Cookies for Meteor.js
=====================

A simple package for basic cookie management in Meteor projects.


API
===


Get cookie
----------

    Cookie.get(name)

Gets value of a named cookie. Reactive data source.


Set cookie
----------

    Cookie.set(name, value, duration)

Sets value of a named cookie.

**name** *string* - name of the cookie
**value** *string* - value
**duration** *{} (optional)* - possible fields:

- seconds
- minutes
- hours
- days
- months
- years
- clear

Remove cookies
--------------

    Cookie.clear(name)

Remove named cookie.


    Cookie.clearAll()

Remove all cookies. Useful during development.


Other
-----

    Cookie.list()

List all registered cookie names. Reactive data source.






