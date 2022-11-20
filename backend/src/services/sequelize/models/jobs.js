module.exports = (sequelize, {STRING})=>{
  const jobs = sequelize.define('Jobs', {
    id:{
      type: STRING,
      allowNull: false,
      primaryKey:true
    },
    title: {
      type: STRING,
      allowNull: false
    }
  },{
    timestamps: false
  })

  return jobs
}