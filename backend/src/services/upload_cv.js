const fs = require('fs')
const path = require('path')
module.exports = (file, jobId)=>{
  /**
   * Get file and save it in storager folder
   */
  try {
    const {data} = file
    const fileName = 'CV-NOMBRE-APELLIDO.pdf'
    const storageFolder = path.join(process.env.NODE_PATH, 'storage')
    const jobFolder = path.join(storageFolder, jobId)
    const postulatesFolder = path.join(jobFolder, 'postulates')
    const cvPath = path.join(postulatesFolder,fileName)
    if (!fs.existsSync(storageFolder)) fs.mkdirSync(storageFolder)
    if (!fs.existsSync(jobFolder)) fs.mkdirSync(jobFolder)
    if (!fs.existsSync(postulatesFolder)) fs.mkdirSync(postulatesFolder)
    fs.writeFileSync(cvPath, data)

    return cvPath
  }catch(err){
    throw Error(err)
  }
}