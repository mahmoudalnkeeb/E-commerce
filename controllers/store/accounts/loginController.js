const user = require('../../../models/user');
const Bcrypt = require('../../../utils/bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const salt = process.env.SALT;
const bcrypt = new Bcrypt(salt);

class LoginController {
  render(req, res) {
    res.render('login');
  }

  async login(req, res) {
    const { email, password } = req.body;
    const data = await user.findOne({ email });
    const hash = data.password;
    if (bcrypt.compare(password + salt, hash)) {
      req.session.user = {
        firstname: data.firstname,
        lastName: data.lastName,
        email: data.email,
      };
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  }
}

module.exports = LoginController;
