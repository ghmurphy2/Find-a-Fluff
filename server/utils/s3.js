// import dotenv from 'dotenv'
import aws from 'aws-sdk'
import crypto from 'crypto'
import { promisify } from "util"
const randomBytes = promisify(crypto.randomBytes)

// dotenv.config()

const region = "us-west-1"
const bucketName = "sortamyfaceapp"
const accessKeyId = AKIAWLZPGF5JNKPWTII5
const secretAccessKey = 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

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})

export async function generateUploadURL() {
  const rawBytes = await randomBytes(16)
  const imageName = rawBytes.toString('hex')

  const params = ({
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  })
  
  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
}