const UploadCv = require('src/services/upload_cv')
module.exports = (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) return res.status(400).json({ error: 'Missing cv file' })
  const cvPath = UploadCv(req.files.cv, req.params.jobId)
  req.cv_path = cvPath
  next()
}