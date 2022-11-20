const app = require('src/app')
const request = require('supertest')
describe('Jobs routes test', () => {
  const job_suject_params = {
    title: ''
  }
  test('POST (post job)', done => {
    request(app)
      .post('/jobs')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(response=>{
        expect(response.body).toBeDefined()

        const {status, job} = response.body

        expect(status).toBe('Job posted')
        expect(job).toHaveProperty('title', job_suject_params.title)
      })
  })
})