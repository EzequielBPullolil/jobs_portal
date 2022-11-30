const { PostulateModel } = require('src/services/sequelize/index')
const { v4: uuidv4 } = require('uuid')
module.exports = async ({ user_id, email,  jobId, message, cv_path}) => {
  /**
   * Persit postulate and return they id, email, message and cv
   */
  if(!email || email === '' ) throw new Error('Missing email')
  const id = uuidv4()
  await PostulateModel.create({id, email, fk_jobs_id: jobId, message, cv_path})
  return {
    id, email, message
  }
}