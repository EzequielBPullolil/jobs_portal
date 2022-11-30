const userRouter = require('express').Router()

userRouter.route('/')
  .post(async(req,res)=>{
    return res.status(201).json({
      status: 'user created'
    })
  })

module.exports = userRouter