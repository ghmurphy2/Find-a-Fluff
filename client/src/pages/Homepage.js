import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

// import Auth from '../utils/auth';
import logo from '../logo.svg';

import '../App.css';

function Homepage() {
    return (
      <div className="App">
        {/* NavBar Header */}
        <header className="App-header">
         {/* link */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        </body>
        <footer className="App-footer">
          <p>Made with love</p>
        </footer>
      </div>
    );
  }
  
  export default Homepage;