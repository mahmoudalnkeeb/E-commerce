class LoginController {
  render(req, res) {
    res.render('login');
  }

  login(req, res) {
    const { email, password } = req.body;
  }
}

module.exports = LoginController;
