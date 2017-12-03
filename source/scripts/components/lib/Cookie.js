var Cookie;

Cookie = (function() {
  function Cookie() {}

  Cookie.prototype.set = function(cname, cvalue, exdays) {
    var d, expires;
    d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";" + "path=/";
  };

  Cookie.prototype.get = function(cname) {
    var c, ca, name, _i, _len;
    name = cname + "=";
    ca = document.cookie.split(';');
    for (_i = 0, _len = ca.length; _i < _len; _i++) {
      c = ca[_i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  return Cookie;

})();
