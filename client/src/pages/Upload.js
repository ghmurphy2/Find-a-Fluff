import React, { useState, useEffect, Component } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import '../App.css';
class App extends Component{
    fileSelectedHandler = event => {
        console.log(event);
    }


 Upload() {
    return (
      <div className="App">
            <input type="file" onChange={this.fileSelectedHandler}/>
        <footer className="App-footer">
          <p>Upload above</p>
        </footer>
      </div>
    );
  }
}
  
  export default Upload;