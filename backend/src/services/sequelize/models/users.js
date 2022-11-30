module.exports = (sequelize, { STRING }) => {
  const user = sequelize.define('Users', {
    id: {
      type: STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: STRING,
      unique: true
    },
    email: {
      type: STRING,
      allowNull: false
    },
    password: {
      type: STRING,
      allowNull: false
    }
  })


  return user
}