const postulatesRouter = require('express').Router()
const {CreateApplication, ObtainPostulates} = require('./services/index')
postulatesRouter.route('/:jobId')
  .post(async (req,res)=>{
    try {
      const applicationParams = {
        jobId: req.params.jobId,
        ...req.body
      }
      console.log(applicationParams)
      const apply = await CreateApplication(applicationParams)
      return res.status(201).json({
        status: 'successful application',
        apply
      })
    }catch(err){
      console.error(err)
      return res.status(400).json({error: err.name, message: err.message})
    }
  })
  .get(async(req,res)=>{
    try {
      const postulates = await ObtainPostulates(req.params.jobId)
      return res.status(200).json({
        postulates
      })
    }catch(err){
      console.error(err)
      return res.status(400).json({error:err.name, message: err.message})
    }
  })


module.exports = postulatesRouter