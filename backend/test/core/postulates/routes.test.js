const request = require('supertest')
const app = require('src/app')

describe('Postulates routes test', () => {
  describe('route /:jobId param test', () => {
    let jobId = 'nonCreatedJob'
    let postulateSend = {
      user_id: 'fakeUserID',
      email: 'example@email.com',
      job_id: jobId,
      message: 'Postulate message',
      cv: 'path/to/cv'
    }
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
          expect(postulates.length > 1).toBe(true)

          expect(postulates[0]).toMatchObject(postulateSend)
          done()
        })
    })
  })
})