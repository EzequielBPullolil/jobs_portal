const CreateApplication = require('src/core/postulate/services/create_application')
const { JobModel } = require('src/services/sequelize/index')

describe('CreateApplication test', () => {
  let jobId = 'createApplication_test_id'
  beforeAll(async () => {
    await JobModel.create({
      id: jobId,
      title: 'title',
      description: 'a description',
      email: 'a test email',
      minimal_experience: 0
    })
  })
  describe('throw error cases', () => {
    test('Missing email', async () => {
      expect.assertions(2)
      await expect(CreateApplication({
        email: '',
        message: 'a test message',
        jobId: jobId,
        cv_path: 'a_test_path'
      })).rejects.toThrow('Missing email')
      await expect(CreateApplication({
        message: 'a test message',
        jobId: jobId,
        cv_path: 'a_test_path'
      })).rejects.toThrow('Missing email')
    })
    test('Missing cv_path', async () => {
      expect.assertions(2)
      await expect(CreateApplication({
        email: 'example@email.com',
        message: 'a test message',
        jobId: jobId,
        cv_path: ''
      })).rejects.toThrow('Missing cv_path')
      await expect(CreateApplication({
        email: 'example@email.com',
        message: 'a test message',
        jobId: jobId,
      })).rejects.toThrow('Missing cv_path')
    })
  })
})