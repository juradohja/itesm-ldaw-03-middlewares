const {roles} = require("../middlewares/RoleMiddleware");
let UserModel = require("../models/User");

exports.canAccess = function(action, resource) {
  return async (req, res, next) => {
    try {
      const permission = roles.permission({
        role: req.user.role,
        action: action,
        resource: resource
      });
      if(!permission.granted) {
        return res.status(403).json({
          error: "You don't have permission to access this resource"
        });
      }
      next()
    } catch (error) {
      next(error)
    }
  }
}

exports.index = (req, res) => {
  let user = req.user;
  UserModel.selectAll()
    .then((data) => {
      let users = data;
      console.log(users);
      res.render('users/index', {user: user, users: users});
    });
}
