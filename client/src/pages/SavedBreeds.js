// ================THIS PAGE DISPLAYS USER'S SAVED IMAGES, SHOULD REDIRECT HERE AFTER LOGGING IN=========
import React, { useState, useEffect } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { getMe, deleteBreed } from '../utils/API';
import Auth from '../utils/auth';
import loading from '../loading.gif'
// import logo from '../logo.svg'
import { removeBreedId } from '../utils/localStorage';

import '../App.css';

const SavedBreeds = () => {
    const [userData, setUserData] = useState({});
  
    // use this to determine if `useEffect()` hook needs to run again
    const userDataLength = Object.keys(userData).length;
  
    useEffect(() => {
      const getUserData = async () => {
        try {
          const token = Auth.loggedIn() ? Auth.getToken() : null;
  
          if (!token) {
            return false;
          }
  
          const response = await getMe(token);
  
          if (!response.ok) {
            throw new Error('something went wrong!');
          }
  
          const user = await response.json();
          setUserData(user);
        } catch (err) {
          console.error(err);
        }
      };
  
      getUserData();
    }, [userDataLength]);
  
    // create function that accepts the image's mongo _id value as param and deletes the image from the database
    const handleDeleteBreed = async (breedId) => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }
  
      try {
        console.log("breed id: "+breedId)
        const response = await deleteBreed(breedId, token);
        console.log(response)
        if (!response.ok) {
          throw new Error('response WAS NOT OK!');
        }
  
        const updatedUser = await response.json();
        console.log(updatedUser)
        setUserData(updatedUser);

        // **========SET UP LOCAL STORAGE??????=========**
        // upon success, remove breeds's id from localStorage
        removeBreedId(breedId);
      } catch (err) {
        console.error(err);
      }
    };
  
    // if data isn't here yet, say so
    if (!userDataLength) {
      return (
        <Container  id="loadingDiv">
          <div>
            <h2>"LOADING..." </h2>
            <img src={loading} alt="loading..." />
          </div>
        </Container>
      );

    }
  
    return (
      <>
        <Container fluid className='text-light bg-dark'>
          <Container>
            <h1>Viewing saved images!</h1>
          </Container>
        </Container>
        <Container>
          <h2>
            {userData.savedBreeds.length
              ? `Viewing ${userData.savedBreeds.length} saved ${userData.savedBreeds.length === 1 ? 'breed' : 'breeds'}:`
              : 'You have no saved breeds!'}
          </h2>
          <Container>
            {userData.savedBreeds.map((breed) => {
              // console.log("this is the breed: ", breed)
              // console.log(userData.savedBreeds)
              return (
                <Card style={{ width: '18rem' }} key={breed.breedId} border='dark'>
                  {breed ? <Card.Img src={breed.breedId} alt="an image" variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{breed.breedId}</Card.Title>
          
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteBreed(breed._id)}>
                      Delete this Breed!
                    </Button>
                    <Button className='btn-block btn-sucsess' onClick={() => handleDeleteBreed(breed.breedId)}>
                      Search this Breed for Adoption!
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Container>
        </Container>
      </>
    );
  };

export default SavedBreeds;