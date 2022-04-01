const register = require('./store_routes/register');
const login = require('./store_routes/login');
const dashboard = require('./dashboard/dashbord')
const router = require('express').Router();


router.get('/', (req, res) => {
  res.render('index');
});

// store routes
router.use('/users', (req, res) => {
  res.send('store users');
});
router.use('/products', (req, res) => {
  res.send('store products');
});
router.use('/orders', (req, res) => {
  res.send('store orders');
});
router.use('/dashboard', dashboard);

// accounts routes
router.use('/login', login);
router.use('/register', register);

module.exports = router;
