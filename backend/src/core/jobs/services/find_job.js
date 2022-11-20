const {JobModel} = require('src/services/sequelize/index')
module.exports = async(jobId)=>{
  /**
   * Find by id one job and return it
   *
   * @param jobId UUIDV4
   */

  const job = await JobModel.findByPk(jobId)
  return job
}