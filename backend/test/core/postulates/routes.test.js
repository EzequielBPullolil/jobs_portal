const request = require('supertest')
const app = require('src/app')
const { JobModel } = require('src/services/sequelize/index')
const path = require('path')
describe('Postulates routes test', () => {
  const cvPath = path.join(process.env.NODE_PATH, 'test/file_suject/cv.pdf')
  describe('route /:jobId param test', () => {
    let jobId = 'nonCreatedJob'
    let postulateSend = {
      email: 'example@email.com',
      message: 'Postulate message',
    }
    beforeAll(async () => {
      jobId = 'postulate_test_job'
      await JobModel.create({
        id: jobId,
        title: 'a test job',
        description: 'this job is for postulates route test ',
        email: 'tata@email.com'
      })
    })
    test('POST (Apply job)', done => {
      request(app)
        .post(`/postulates/${jobId}`)
        .set({
          'Content-Type': 'application/json',
        })
        .field('email', postulateSend.email)
        .field('message', postulateSend.message)
        .attach('cv', cvPath)
        .then(({ statusCode, body }) => {
          expect(statusCode).toBe(201)
          expect(body).toHaveProperty('status', 'successful application')
          done()
        })
    })

    test('GET (Show job postulates)', done => {
      request(app)
        .get(`/postulates/${jobId}`)
        .expect('Content-type', /json/)
        .then(({ statusCode, body }) => {
          expect(statusCode).toBe(200)
          expect(body).toHaveProperty('postulates')
          const { postulates } = body

          expect(postulates).toBeInstanceOf(Array)
          expect(postulates.length > 0).toBe(true)

          expect(postulates[0]).toMatchObject(postulateSend)
          done()
        })
    })
  })
})