const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())



//Routes
const jobsRoutes = require('src/core/jobs/routes.js')
app.use('/jobs', jobsRoutes)


module.exports = app