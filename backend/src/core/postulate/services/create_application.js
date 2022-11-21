const { PostulateModel } = require('src/services/sequelize/index')
const { v4: uuidv4 } = require('uuid')
module.exports = async ({ user_id, email,  job_id, message}) => {
  /**
   * Persit postulate and return they id, email, message and cv
   */

  const id = uuidv4()
  await PostulateModel.create({id, user_id, email, job_id, message})

  return {
    id, email, message
  }
}