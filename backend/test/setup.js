const SyncModels = require('src/services/sequelize/functions/sync_models')
module.exports = async()=>{
  await SyncModels(true)
}