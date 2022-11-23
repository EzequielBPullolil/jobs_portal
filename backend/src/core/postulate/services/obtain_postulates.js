const { PostulateModel } = require('src/services/sequelize/index')
module.exports = async(jobId) => {
  /**
   * Find all postulates from job and return array of Postulates
   *
   * @param jobId Job.id
   * @return Array of Postulates
   */


  const postulatesFindend = await PostulateModel.findAll({where: {fk_jobs_id: jobId}, attributes:['id','email','message','cv']})

  return postulatesFindend
}