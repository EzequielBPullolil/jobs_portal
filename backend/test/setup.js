const SyncModels = require('src/services/sequelize/functions/sync_models')
const MakeRelations = require('src/services/sequelize/functions/make_relations')
module.exports = async()=>{
  await SyncModels(true)
  await MakeRelations()
}