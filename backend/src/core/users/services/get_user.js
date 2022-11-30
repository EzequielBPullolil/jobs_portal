const { UserModel } = require('src/services/sequelize/index')
module.exports = async(id)=>{
  /**
   * Finds user in db by id and return they  name, email
   *
   * TODO: Return User profile
   * @id UUID
   * @return {name, email}
   */

  const {name,last_name, email} = await UserModel.findByPk(id, {
    attributes: ['name', 'last_name', 'email']
  })

  return {
    name,
    email,
    last_name
  }

}