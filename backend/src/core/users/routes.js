const {SingUser, GetUser} = require('./services/index')
const userRouter = require('express').Router()
userRouter.route('/')
  .post(async(req,res)=>{
    try{
      const user = await SingUser(req.body)
      return res.status(201).json({
        status: 'user created',
        user
      })
    }catch(err){
      console.error(err)
      return res.status(400).json(err)
    }
  })

userRouter.route('/:id')
  .get(async(req,res)=>{
    const user = await GetUser(req.params.id)

    return res.status(200).json(user)
  })

module.exports = userRouter