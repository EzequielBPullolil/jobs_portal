//Library and modules
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const app = express()

//App middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use(fileUpload())

//Routes
const jobsRoutes = require('src/core/jobs/routes')
app.use('/jobs', jobsRoutes)

const postulatesRoutes = require('src/core/postulate/routes')
app.use('/postulates', postulatesRoutes)

const usersRoutes = require('src/core/users/routes')
app.use('/users', usersRoutes)
module.exports = app