const CreateApplication = require('src/core/postulate/services/create_application')
const {JobModel} = require('src/services/sequelize/index')

describe('CreateApplication test', () => {
  let jobId = 'createApplication_test_id'
  beforeAll(async()=>{
    await JobModel.create({
      id: jobId,
      title: 'title',
      description: 'a description',
      email: 'a test email',
      minimal_experience: 0
    })
  })
  describe('throw cases', () => {
    test('Missing email throw error ', async () => {
      expect.assertions(2)
      await expect(CreateApplication({
        email: '',
        message:'a test message',
        jobId: jobId,
        cv_path:'a_test_path'
      })).rejects.toThrow('Missing email')
      await expect(CreateApplication({
        message:'a test message',
        jobId: jobId,
        cv_path:'a_test_path'
      })).rejects.toThrow('Missing email')
    })
  })
})