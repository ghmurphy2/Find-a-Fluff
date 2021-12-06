import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import SavedBreeds from './pages/SavedBreeds';

import PetSearch from './pages/PetSearch';

import Upload from './pages/Upload';
import SearchBreeds from './pages/SearchBreeds';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/savedBreeds' component={SavedBreeds} />

         <Route exact path='/PetSearch' component={PetSearch}/> 

          <Route exact path='/upload' component={Upload} /> 
          <Route exact path='/searchBreeds' component={SearchBreeds} />
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
