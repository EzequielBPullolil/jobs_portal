const postulatesRouter = require('express').Router()

postulatesRouter.route('/:jobId')
  .post((req,res)=>{
    return res.status(201).json({
      status: 'successful application'
    })
  })


module.exports = postulatesRouter