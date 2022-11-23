const { JobModel, PostulateModel, sequelize } = require('src/services/sequelize/index')
module.exports = async () => {
  JobModel.hasMany(PostulateModel, {
    foreignKey: 'fk_jobs_id'
  })
  PostulateModel.belongsTo(JobModel, {
    foreignKey: 'fk_jobs_id',
    as: 'job'
  })
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
  await JobModel.sync({ force: true })
  await PostulateModel.sync({ force: true })
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1')

}