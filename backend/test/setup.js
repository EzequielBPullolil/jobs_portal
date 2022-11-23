const SyncModels = require('src/services/sequelize/functions/sync_models')
const MakeRelations = require('src/services/sequelize/functions/make_relations')
module.exports = async()=>{
  try{
    await SyncModels(true)
    await MakeRelations()
  }catch(err){
    console.error(err)
  }
}