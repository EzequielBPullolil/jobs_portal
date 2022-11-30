const request = require('supertest')
const app = require('src/app')
const rootUsersRoute = '/users'
const {validate: validateUUID} = require('uuid')


describe('Users router test', () => {
  const usersFields = {
    name: 'exampleUserName',
    password: 'aMagistralPassword',
    email: 'example@test.com'
  }
  describe('Root route test', () => {
    test('POST (create user) ', done => {
      request(app)
        .post(rootUsersRoute)
        .send(usersFields)
        .then(({statusCode, body})=>{
          const {status, user} = body
          expect(statusCode).toBe(201)
          expect(status).toBe('user created')
          expect(validateUUID(user.id)).toBe(true)

          done()
        })
    })
  })
})