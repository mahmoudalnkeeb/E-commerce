class RegisterController {
  render(req, res) {
    res.render('register');
  }
  register(req, res) {
    const { firstname, lastname, email, password, confirm, country } = req.body;
  }
}

module.exports = RegisterController;
