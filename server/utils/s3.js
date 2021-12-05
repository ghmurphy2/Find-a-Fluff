// // import dotenv from 'dotenv'
// import aws from 'aws-sdk'
// import crypto from 'crypto'
// import { promisify } from "util"
// const randomBytes = promisify(crypto.randomBytes)

// // dotenv.config()

// const region = "us-west-1"
// const bucketName = "sortamyfaceapp"
// const accessKeyId = AKIAWLZPGF5JNKPWTII5
// const secretAccessKey = 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

// const s3 = new aws.S3({
//   region,
//   accessKeyId,
//   secretAccessKey,
//   signatureVersion: 'v4'
// })

// export async function generateUploadURL() {
//   const rawBytes = await randomBytes(16)
//   const imageName = rawBytes.toString('hex')

//   const params = ({
//     Bucket: bucketName,
//     Key: imageName,
//     Expires: 60
//   })
  
//   const uploadURL = await s3.getSignedUrlPromise('putObject', params)
//   return uploadURL
// }

require('dotenv').config()
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')

const bucketName = 'sortamyfaceapp'
const region = 'us-west-1'
const accessKeyId = 'AKIAWLZPGF5JNKPWTII5'
const secretAccessKey = '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'

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

// uploads a file to s3
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename
  }

  return s3.upload(uploadParams).promise()
}
exports.uploadFile = uploadFile


// downloads a file from s3
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  }

  return s3.getObject(downloadParams).createReadStream()
}
exports.getFileStream = getFileStream