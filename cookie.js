Cookie = {};

Cookie._deps = {};
Cookie._dep = new Deps.Dependency();



Cookie.get = function(name) {
  var _dep = Cookie._deps[name];
  if(!_dep) {
    Cookie._deps[name] = new Deps.Dependency();
    _dep = Cookie._deps[name];
  }
  _dep.depend();

  var fullCookie = document.cookie;

  var startIndex = fullCookie.indexOf(name + '=');
  if (startIndex === -1) return null;    /* named cookie not found */

  startIndex = fullCookie.indexOf('=', startIndex) + 1;
  var endIndex = fullCookie.indexOf(';', startIndex);
  if (endIndex === -1) endIndex = fullCookie.length;

  return unescape(fullCookie.substring(startIndex,endIndex));
};



Cookie.set = function(name, value, duration) {

  var expireTime = new Date().getTime();
  if(duration) {
    if(duration.seconds) expireTime += duration.seconds * 1000;
    if(duration.minutes) expireTime += duration.minutes * 1000 * 60;
    if(duration.hours) expireTime += duration.hours * 1000 * 60 * 60;
    if(duration.days) expireTime += duration.days * 1000 * 60 * 60 * 24;
    if(duration.months) expireTime += duration.months * 1000 * 60 * 60 * 30;
    if(duration.years) expireTime += duration.years * 1000 * 60 * 60 * 24 * 366;
    if(duration.clear) expireTime = 0;
  } else {
    expireTime += 366 * 24 * 60 * 60 * 1000;
  }

  var str = '' + name + '=' + escape(value) + '; expires=' + new Date(expireTime).toUTCString() + '; path=/';
  document.cookie = str;

  var _dep = Cookie._deps[name];
  if(!_dep) {
    Cookie._deps[name] = new Deps.Dependency();
    _dep = Cookie._deps[name];
  }
  _dep.changed();
  Cookie._dep.changed();
};


Cookie.list = function() {
  Cookie._dep.depend();
  
  var str = document.cookie;
  var arr = str.split(';');
  var list = [];
  for(var i in arr) {
    var index = arr[i].indexOf('=');
    list.push(arr[i].substring(0, index).replace(/^ +/, '').replace(/ +$/, ''));
  }
  return list;
};


Cookie.clear = function(name) {
  Cookie.set(name, null, {clear: true});
};



Cookie.clearAll = function() {
  var str = document.cookie;
  var arr = str.split(';');
  var list = [];
  for(var i in arr) {
    var index = arr[i].indexOf('=');
    list.push(arr[i].substring(0, index).replace(/^ +/, '').replace(/ +$/, ''));
  }

  for(var i in list) {
    Cookie.clear(list[i]);
  }
  Cookie._dep.changed();
};








