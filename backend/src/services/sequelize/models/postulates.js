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
    cv_path: {
      type: STRING,
      allowNull: true
    },
    fk_jobs_id: {
      type: STRING,
      allowNull: false,
      references: {
        model: 'Jobs',
        key: 'id'
      }
    }
  },{
    timestamps: false
  })

  return postulates
}