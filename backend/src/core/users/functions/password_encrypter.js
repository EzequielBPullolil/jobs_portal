const bcrypt = require('bcrypt')
const saltRounds = process.env.BCRYPT_ROUNDS || 12
module.exports = (password) => {
  /**
   * Encrypt and return @password
   */
  const salt = bcrypt.genSaltSync(saltRounds)
  const encriptedPassword = bcrypt.hashSync(password, salt)

  return encriptedPassword
}