const jobsRouter = require('express').Router()
const {postJob, findJob} = require('./services/index')

jobsRouter.route('/')
  .post(async(req,res)=>{
    const job = await postJob(req.body)
    return res.status(201).json({
      status: 'Job posted',
      job
    })
  })
jobsRouter.route('/:id')
  .get(async(req,res)=>{
    const findedJob = await findJob(req.params.id)
    return res.status(200).json({job: findedJob})
  })
module.exports = jobsRouter