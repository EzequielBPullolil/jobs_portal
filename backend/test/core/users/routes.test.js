const request = require('supertest')
const app = require('src/app')
const rootUsersRoute = '/users'
const {validate: validateUUID} = require('uuid')


describe('Users router test', () => {
  const usersFields = {
    last_name: 'a last name',
    name: 'exampleUserName',
    password: 'aMagistralPassword',
    email: 'example@test.com'
  }
  describe('Root request test', () => {
    test('POST (create user) ', done => {
      request(app)
        .post(rootUsersRoute)
        .send(usersFields)
        .then(({statusCode, body})=>{
          const {status, user} = body
          expect(statusCode).toBe(201)
          expect(status).toBe('user created')
          expect(validateUUID(user.id)).toBe(true)

          usersFields.id = user.id
          done()
        })
    })
  })
  describe(':id param request test', () => {
    test('should ', done => {
      request(app)
        .get(`${rootUsersRoute}/${usersFields.id}`)
        .then(({statusCode, body })=>{
          expect(statusCode).toBe(200)

          expect(body).toHaveProperty('name', usersFields.name)
          done()
        })
    })
  })
})