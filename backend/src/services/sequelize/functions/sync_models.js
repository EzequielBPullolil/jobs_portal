const {JobModel, PostulateModel,sequelize } = require('src/services/sequelize/index')
module.exports = async(force)=>{
  /**
   * Sync all models in array
   * ! Respect ther sync call order
   * ! PostulateModel before JobModel sync or throw error
   * @param models Array of models
   */

  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
  await JobModel.sync({force: force})
  await PostulateModel.sync({force: force})
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
  console.log('Models sync')
}