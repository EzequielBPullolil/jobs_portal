const app = require('src/app')
const PORT = process.env.PORT || 4000
const SyncModel = require('src/services/sequelize/functions/sync_models')
const force = process.env.NODE_ENV !== 'production'
app.listen(PORT, async()=>{
  await SyncModel(force)

  console.log(`server start at port ${PORT}`)
})