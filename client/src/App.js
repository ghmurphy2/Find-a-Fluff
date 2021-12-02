import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navbar class="AppNavbar-navbar" />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
