const router = require('express').Router();

const register = require('./accounts/register')
const login = require('./accounts/login')

router.use('/users', (req, res) => {
  res.send('store users');
});
router.use('/products', (req, res) => {
  res.send('store products');
});
router.use('/orders', (req, res) => {
  res.send('store orders');
});
router.use('/login', login);
router.use('/register', register);

module.exports = router;
