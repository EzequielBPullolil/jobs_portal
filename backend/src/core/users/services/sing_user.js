const { UserModel } = require('src/services/sequelize/index')
const {v4: uuidV4} = require('uuid')

const PasswordEncrypter = require('src/core/users/functions/password_encrypter')
module.exports = async ({ name, last_name, email, password, id }) => {
  /**
   * Encrypt the password, persist an User to database  and
   * return they id, name and email
   * TODO: ENCRYPT PASSWORD
   * @return {id, name, email}
   */
  if(id === undefined || id === '') id = uuidV4()
  const hashPassword = PasswordEncrypter(password)
  await UserModel.create({id, name, email, password:hashPassword, last_name})


  return {
    id,
    name,
    last_name,
    email
  }
}