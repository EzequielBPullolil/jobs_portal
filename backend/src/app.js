const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())



//Routes
const jobsRoutes = require('src/core/jobs/routes')
app.use('/jobs', jobsRoutes)

const postulatesRoutes = require('src/core/postulate/routes')
app.use('/postulates', postulatesRoutes)

module.exports = app