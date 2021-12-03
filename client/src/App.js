import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import MyPage from './pages/MyPage';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/MyPage'>
            <MyPage />
          </Route>
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
