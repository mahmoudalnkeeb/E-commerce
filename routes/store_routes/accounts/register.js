const RegisterController = require('../../../controllers/store/accounts/registerController');
const router = require('express').Router();

const registerController = new RegisterController()

router.get('/', registerController.render);

module.exports = router;
