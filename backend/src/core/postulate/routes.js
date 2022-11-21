const postulatesRouter = require('express').Router()
const {CreateApplication} = require('./services/index')
postulatesRouter.route('/:jobId')
  .post(async (req,res)=>{
    const apply = await CreateApplication(req.body)
    return res.status(201).json({
      status: 'successful application',
      apply
    })
  })
  .get((req,res)=>{
    return res.status(200).json({
      postulates: []
    })
  })


module.exports = postulatesRouter