exports.index = (req, res) => {
  let user = req.user;
  let isAdmin = req.user.role === "admin";
  res.render('dashboard/index', {user: user, isAdmin: isAdmin});
}
