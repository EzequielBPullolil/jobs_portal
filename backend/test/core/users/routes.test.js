const request = require('supertest')
const app = require('src/app')
const rootUsersRoute = '/users'



describe('Users router test', () => {
  test('root route POST (create user) ', done => {
    request(app)
      .post(rootUsersRoute)
      .then(({statusCode, body})=>{
        expect(statusCode).toBe(201)
        expect(body).toHaveProperty('status', 'user created')

        done()
      })

  })
})