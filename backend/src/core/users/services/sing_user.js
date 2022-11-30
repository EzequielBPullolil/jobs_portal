const { UserModel } = require('src/services/sequelize/index')
const {v4: uuidV4} = require('uuid')
module.exports = async ({ name, last_name, email, password, id }) => {
  /**
   * Encrypt the password, persist an User to database  and
   * return they id, name and email
   * TODO: ENCRYPT PASSWORD
   * @return {id, name, email}
   */
  if(id === undefined || id === '') id = uuidV4()
  await UserModel.create({id, name, email, password, last_name})


  return {
    id,
    name,
    last_name,
    email
  }
}