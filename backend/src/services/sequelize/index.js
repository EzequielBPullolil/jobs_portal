const {DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST} = process.env

const {Sequelize, DataTypes} = require('sequelize')

const dbConnection = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  dialect: 'mysql'
})
const job = require('src/services/sequelize/models/jobs')(dbConnection, DataTypes)
const postulate = require('src/services/sequelize/models/postulates')(dbConnection, DataTypes)


module.exports = {
  sequelize: dbConnection,
  JobModel: job,
  PostulateModel: postulate
}