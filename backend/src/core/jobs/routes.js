const jobsRouter = require('express').Router()


jobsRouter.route('/')
  .post((req,res)=>{
    return res.status(201).json({
      status: 'Job posted',
      job: req.body
    })
  })

module.exports = jobsRouter