const bcrypt = require('bcrypt');

class Bcrypt {
  constructor(salt) {
    this.saltRounds = 10;
    this.salt = salt;
  }

  async hash(password) {
    return await bcrypt.hash(password + this.salt, this.saltRounds);
  }

  async compare(password, hash) {
    return await bcrypt.compare(password + this.salt, hash);
  }
}

module.exports = Bcrypt;