const {JobModel, PostulateModel} = require('src/services/sequelize/index')
module.exports = async(force)=>{
  /**
   * Sync all models in array
   * @param models Array of models
   */

  await JobModel.sync({force: force})
  await PostulateModel.sync({force: force})
  console.log('Models sync')
}