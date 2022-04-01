const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});
router.use('/store', require('./store_routes/store.js'))

module.exports = router;
