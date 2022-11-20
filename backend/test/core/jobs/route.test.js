const {validate:validateUUID} = require('uuid')
const app = require('src/app')
const request = require('supertest')
describe('Jobs routes test', () => {
  const job_suject_params = {
    title: 'Job'
  }
  test('POST (post job)', done => {
    request(app)
      .post('/jobs')
      .send(job_suject_params)
      .expect('Content-Type', /json/)
      .then(response=>{
        expect(response.statusCode).toBe(201)
        expect(response.body).toBeDefined()

        const {status, job} = response.body

        expect(status).toBe('Job posted')
        expect(job).toHaveProperty('title', job_suject_params.title)
        expect(job).toHaveProperty('id')
        expect(validateUUID(job.id)).toBe(true)

        job_suject_params.id = job.id
        done() //
      })
  })
  describe('jobs/:id route tests', () => {
    test('GET (Detail post)', done => {
      request(app)
        .get(`/jobs/${job_suject_params.id}`)
        .expect('Content-type', /json/)
        .then(response=>{
          expect(response.statusCode).toBe(200)
          expect(response.body.job).toBeDefined()

          const { title } = response.body.job

          expect(title).toBe(job_suject_params.title)
          done()
        })
    })
  })
})