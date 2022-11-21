const {validate:validateUUID} = require('uuid')
const app = require('src/app')
const request = require('supertest')
describe('Jobs routes test', () => {
  const jobSujectParms = {
    title: 'Job',
    email: 'test@mail.com',
    description: 'a test description for job',
    miinimal_experience: 0
  }
  test('POST (post job)', done => {
    request(app)
      .post('/jobs')
      .send(jobSujectParms)
      .expect('Content-Type', /json/)
      .then(response=>{
        expect(response.statusCode).toBe(201)
        expect(response.body).toBeDefined()

        const {status, job} = response.body

        expect(status).toBe('Job posted')
        expect(job).toHaveProperty('title', jobSujectParms.title)
        expect(job).toHaveProperty('id')
        expect(validateUUID(job.id)).toBe(true)

        jobSujectParms.id = job.id
        done() //
      })
  })
  describe('jobs/:id route tests', () => {
    test('GET (Detail post)', done => {
      request(app)
        .get(`/jobs/${jobSujectParms.id}`)
        .expect('Content-type', /json/)
        .then(response=>{
          expect(response.statusCode).toBe(200)
          expect(response.body.job).toBeDefined()

          const { title } = response.body.job

          expect(title).toBe(jobSujectParms.title)
          done()
        })
    })
  })
})