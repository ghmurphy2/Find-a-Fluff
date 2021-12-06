import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import logo from '../logo.svg';

import Auth from '../utils/auth';
import '../App.css';

const AppNavbar = () => {
    //setting the modal display state
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return(
        <>
        <Navbar id="AppNavbar-navbar"  bg='dark' variant='dark' expand='lg'>
            <Container id="AppNavbar-navbar" fluid>
                <Navbar.Brand className="align-text-bottom" as={Link} to='/'>
                  <img src={logo} className="App-logo" alt="logo" />
                </Navbar.Brand>

              
              
                <Navbar.Toggle aria-controls='navbar' />
                <Navbar.Collapse id='navbar'>
                  <Nav id="loggedinLinks" className='ml-auto align-text-bottom'>
                      {/* if user is logged in show saved books and logout */}
                      {Auth.loggedIn() ? (
                      <>
                          
                          <Nav.Link as={Link} to='/savedBreeds'>
                          Saved Breeds
                          </Nav.Link>
                          {/* <Nav.Link as={Link} to='/upload'>
                          Upload Image
                          </Nav.Link> */}
                          <Nav.Link as={Link} to='/PetSearch'>
                          Search Pets
                          </Nav.Link>
                          <Nav.Link as={Link} to='/searchBreeds'>
                          Search Breeds
                          </Nav.Link>
                          <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                      </>
                      ) : (
                      <Nav.Link onClick={handleShow}>Login/Sign Up</Nav.Link>
                      )}
                    </Nav>
              </Navbar.Collapse> 
            </Container>
        </Navbar>
        {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={handleClose}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Create an Account</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
    );
};

export default AppNavbar;