const user = require('../../models/user');
const order = require('../../models/order');
const product = require('../../models/product');

class Dashboard {
  async render(req, res) {
    res.render('dashboard');
  }
  async getUsersData(req, res) {
    const data = await user.find();
    res.json(data);
  }
  async getOrdersData(req, res) {
    const data = await order.find();
    res.json(data);
  }
  async getProductsData(req, res) {
    const data = await product.find();
    res.json(data);
  }
}
module.exports = Dashboard;
