import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import MyImages from './pages/MyImages';
import MyAlbums from './pages/MyAlbums';
import Upload from './pages/Upload';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/myImages' component={MyImages} />
          <Route exact path='/myAlbums' component={MyAlbums}/> 
          {/* <Route exact path='/upload' component={Upload} />  */}
        </Switch>
      </>
      <footer className="App-footer">
          <p>Made with 
          <br/>💜 & 🍕
          <br/>Created By: Tony Zhang, Gavin Murphy, Matt Weichel
          </p>
      </footer>
    </Router>
  );
};

export default App;
