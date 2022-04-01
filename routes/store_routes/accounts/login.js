const LoginController = require('../../../controllers/store/accounts/loginController');

const router = require('express').Router();

const loginController = new LoginController();
router.get('/', loginController.render);

module.exports = router;
