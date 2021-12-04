import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDom from 'react-dom';
import ReactS3 from 'react-s3';
import '../App.css';
//Optional Import
import { uploadFile } from 'react-s3';
import {aws} from 
 
const config = {
    bucketName: 'sortamyfaceapp',
    dirName: 'photos', /* optional */
    region: 'us-west-1',
    accessKeyId: aws.accessKeyId,
    secretAccessKey: aws.secretAcessKey,
}

function uploadPage() {

  return (
    <div >
    <Container >     
      <h1>Upload below</h1>
      <div id="viewer" />
      <input type ='file' onChange={this.upload}/>
      </Container>
    </div>
  );
}
uploadPage()
export default Upload2;
