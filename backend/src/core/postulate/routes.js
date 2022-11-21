const postulatesRouter = require('express').Router()

postulatesRouter.route('/:jobId')
  .post((req,res)=>{
    return res.status(201).json({
      status: 'successful application'
    })
  })
  .get((req,res)=>{
    return res.status(200).json({
      postulates: []
    })
  })


module.exports = postulatesRouter