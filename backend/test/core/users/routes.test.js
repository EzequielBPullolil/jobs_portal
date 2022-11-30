const request = require('supertest')
const app = require('src/app')
const rootUsersRoute = '/users'



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
          expect(statusCode).toBe(201)
          expect(body).toHaveProperty('status', 'user created')

          done()
        })
    })
  })

})