module.exports = (sequelize, {STRING, TEXT, TINYINT})=>{
  const jobs = sequelize.define('Jobs', {
    id:{
      type: STRING,
      allowNull: false,
      primaryKey:true
    },
    title: {
      type: STRING,
      allowNull: false
    },
    email: {
      type: STRING,
      allowNull: false
    },
    description: {
      type: TEXT,
      allowNull: false
    },
    minimal_experience: {
      type: TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  },{
    timestamps: false
  })

  return jobs
}