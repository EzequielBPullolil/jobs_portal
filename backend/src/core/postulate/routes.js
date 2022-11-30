const postulatesRouter = require('express').Router()
//App services
const {CreateApplication, ObtainPostulates} = require('./services/index')
//Middlewares
const UploadCv = require('./middlewares/upload_cv')
postulatesRouter.route('/:jobId')
  .post(UploadCv, async (req,res)=>{
    try {
      console.log('hi')
      const applicationParams = {
        jobId: req.params.jobId,
        cv_path: req.cv_path,
        ...req.body
      }
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