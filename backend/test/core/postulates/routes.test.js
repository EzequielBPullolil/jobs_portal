const request = require('supertest')
const app = require('src/app')
const { JobModel } = require('src/services/sequelize/index')

describe('Postulates routes test', () => {
  describe('route /:jobId param test', () => {
    let jobId = 'nonCreatedJob'
    let postulateSend = {
      email: 'example@email.com',
      message: 'Postulate message',
      cv: 'path/to/cv'
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
        .send(postulateSend)
        .expect('Content-type', /json/)
        .then(({ statusCode, body }) => {
          expect(statusCode).toBe(201)
          expect(body).toHaveProperty('status', 'successful application')
          done()
        })
    })

    test('GET (Show ', done => {
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