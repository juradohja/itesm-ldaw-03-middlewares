let router = require('express').Router();
let dashboardController = require('../controllers/DashboardController');
let usersController = require('../controllers/UsersController');


router.get('/dashboard', dashboardController.index);
router.get('/users', usersController.canAccess('read','users'), usersController.index);

module.exports = router;
