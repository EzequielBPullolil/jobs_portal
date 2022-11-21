module.exports = (sequelize, {STRING, TEXT})=>{
  const postulates = sequelize.define('Postulates', {
    id:{
      type: STRING,
      allowNull: false,
      primaryKey:true
    },
    email: {
      type: STRING,
      allowNull: false
    },
    message: {
      type: TEXT,
      allowNull: false
    },
    CV: {
      type: STRING,
      allowNull: true
    }
  },{
    timestamps: false
  })

  return postulates
}