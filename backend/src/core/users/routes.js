const {SingUser} = require('./services/index')
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

module.exports = userRouter