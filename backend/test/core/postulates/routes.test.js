const request = require('supertest')
const app = require('src/app')


describe('Postulates routes test', () => {
  let jobId = 'nonCreatedJob'
  test('POST (Apply job)', done => {
    request(app)
      .post(`/postulates/${jobId}`)
      .expect('Content-type', /json/)
      .then(({statusCode, body})=>{
        expect(statusCode).toBe(201)
        expect(body).toHaveProperty('status', 'successful application')
        done()
      })
  })
})