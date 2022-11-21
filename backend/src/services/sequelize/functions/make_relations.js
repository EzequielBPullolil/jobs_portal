const {JobModel, PostulateModel} = require('src/services/sequelize/index')
module.exports = async()=>{
  JobModel.hasMany(PostulateModel, {
    foreignKey: {
      name:'fk_jobs_id',
      allowNull: false
    }
  })
  PostulateModel.belongsTo(JobModel, {
    foreignKey: {
      name:'fk_jobs_id',
      allowNull: false
    }
  })

  await JobModel.sync({force: true})
  await PostulateModel.sync({force: true})
}