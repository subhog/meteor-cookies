

Cookies for Meteor.js
=====================

A simple package for basic cookie management in Meteor projects.


API
===


    Cookie.get(name)

Gets value of a named cookie. Reactive data source.




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


If `clear` parameter is set, cookie is immediately removed.



    Cookie.clear(name)

Remove named cookie.



    Cookie.clearAll()

Remove all cookies. Useful during development.



    Cookie.list()

List all registered cookie names. Reactive data source.





