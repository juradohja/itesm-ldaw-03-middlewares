const AccessControl = require('accesscontrol');
const ac = new AccessControl();

exports.roles = (function() {

  ac.grant("user")
    .readOwn("dashboard");

  ac.grant("admin")
    .extend("user")
    .readAny("users");

  return ac;

})();
