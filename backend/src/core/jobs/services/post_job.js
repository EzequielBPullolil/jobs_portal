const { JobModel } = require('src/services/sequelize/index')
const { v4: uuidv4 } = require('uuid')
module.exports = async ({
  title,
  email,
  description,
  minimal_experience
}) => {
  /**
   * Verify job params and persist it in database
   *
   * @params title STRING
   * @return {
   *  id: UUID STRING,
   *  title: STRING
   * }
   */
  const id = uuidv4()
  const jobCreated = await JobModel.create({
    id,
    title,
    email,
    description,
    minimal_experience
  })

  return jobCreated
}