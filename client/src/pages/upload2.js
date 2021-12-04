import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDom from 'react-dom';
import ReactS3 from 'react-s3';
import '../App.css';
//Optional Import
import { uploadFile } from 'react-s3';

 
const config = {
    bucketName: 'sortamyfaceapp',
    dirName: 'photos', /* optional */
    region: 'us-west-1',
    accessKeyId: 'AKIAWLZPGF5JNKPWTII5',
    secretAccessKey: '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',
}

function uploadPage() {

    upload(img){
        console.log(img.target.files[0]);
            ReactS3.upload(img.target.files[0], config)
            .then((data) =>{
                console.log(data.location);
            })
    }
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
