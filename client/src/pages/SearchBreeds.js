import React, { useState, useEffect } from 'react';
import { Container, Col, Form, Button, Card, CardGroup, Row } from 'react-bootstrap';

import Auth from '../utils/auth';
import {  saveBreed, searchDogBreeds } from '../utils/API';
import { saveBreedIds, getSavedBreedIds } from '../utils/localStorage';

function SearchBreeds() {
    
    //create state for holding DogAPI data
    const [searchedBreeds, setSearchedBreeds] = useState([]);
    //create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    //create state to hold saved breedId values
    const [savedBreedIds, setSavedBreedIds] = useState(getSavedBreedIds());

    //set up useEffect hook to save `savedBreedIds` list to localStorage on component unmount
    useEffect(() => {
        return () => saveBreedIds(savedBreedIds);
    });

    //create method to search for breeds and set state on form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if(!searchInput) {
            return false;
        }

        try{
            const response = await searchDogBreeds(searchInput);

            if(!response.ok) {
                throw new Error('ruff-row! something went wrong!');
            }

            const  items  = await response.json();
            console.log(items)  
            const breedData = items.message.map((breed) => ({
                breedId: breed
            }));
            console.log(breedData);
            console.log(breedData[0]);
            console.log(searchInput)
            setSearchedBreeds(breedData);
            setSearchInput('');
        } catch (err) {
            console.error(err);
        }
    };

    //create function to handle saving a breed to our database
    const handleSaveBreed = async (breedId) => {
        //find breed in `searchedBreeds` state by matching id
        const breedToSave = searchedBreeds.find((breedData) => breedData.breedId === breedId );

        //get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const response = await saveBreed(breedToSave, token);
            console.log(breedToSave)
            console.log(response)
            if(!response.ok) {
                throw new Error('ruff-row! something went wrong!');
            }

            //if breed successfully saves to user's account, save breed id to state
            setSavedBreedIds([...savedBreedIds, breedToSave.breedId]);
            console.log('breed saved!')
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="mainContainer">
            <Container>
                Search For Dogg-o-s!
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group>
                        <Col xs={12} md={8}>
                            <Form.Control
                            name='searchBreed'
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            type='text'
                            size='lg'
                            placeholder='Search for a breed'
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <Button type='submit' variant='success' size='lg'>
                                Submit Search
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>

            <Container>
                <h2>
                    {searchedBreeds.length
                        ? `Viewing ${searchedBreeds.length} reuslts:`
                        : 'Search for a breed to begin!'}
                </h2>
                <CardGroup>
                    {searchedBreeds.map((breed) => {
                        return (
                            <Row >
                            {Array.from({ length: 1 }).map((_, idx) => ( 
                            <Col xs={{order: 'last'}} className="g-4">
                            <Card style={{ width: '18rem' }} key={breed.breedId} border='dark'>
                                {breed ? (
                                    <Card.Img src={breed.breedId} alt={`The picture for `} variant='top' />
                                ): null}
                                <Card.Body>
                                    <Card.Title className="mb-2 text-dark">Check Out This Pup</Card.Title> 
                                    {Auth.loggedIn() && (
                                        <Button
                                        disabled={savedBreedIds?.some((savedBreedId) => savedBreedId === breed.breedId)}
                                        className='btn-block btn-info'
                                        onClick={() => handleSaveBreed(breed.breedId)}>
                                            {savedBreedIds?.some((savedBreedId) => savedBreedId === breed.breedId)
                                            ? 'This breed has already been saved!'
                                            : 'Save this Breed!'}
                                        </Button> 
                                    )}
                                </Card.Body>
                            </Card>
                            </Col>
                            ))}
                            </Row>       
                        );
                    })}
                </CardGroup>
            </Container>
        </div>     
    );
};

export default SearchBreeds;