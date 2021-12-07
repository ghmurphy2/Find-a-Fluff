// ================THIS PAGE DISPLAYS USER'S SAVED ALBUMS, SHOULD REDIRECT HERE AFTER LOGGING IN=========
import { React, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import formHandler from "../utils/petapi";
// import { getMe, deleteAlbum } from '../utils/API';
// import Auth from '../utils/auth';
// import loading from '../loading.gif'
// import Gallery from 'react-photo-gallery';
// import { removeImageId } from '../utils/localStorage';
import logo from '../logo.svg'
import "../App.css";

function PetSearch() {
  const [searchedPets, setSearchedPets] = useState([]);

  console.log("pets are", searchedPets);
  // render from here
  //  const [searchInput, setSearchInput] = useState('');
  return (
    <div className="mainContainer">
      <Container>
        <div className="petForm">
          <h1>Next Stop a new best friend!</h1>
          <Formik
            initialValues={{
              type: '',
              breed: '',
              gender: '',
              zipCode: '',
              childSafe: '',
              dogSafe: '',
              catSafe: '',
            }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              localStorage.setItem("values", JSON.stringify(values));
              ;
              // console.log(values);
              formHandler(values).then((data) => {
                return setSearchedPets(data.animals);
              });

              // .then((renderPetCard(searchedPets)));
            }}
          >
            <Form>
              <h1>Please select the trait for your new best friend!</h1>
              <h1> </h1>
              <label>
                Please input the type of animal you are interested in, leave
                blank to search all fuzzy and scaly friends!
                <Field name="type" type="text" />
              </label>
              <h1> </h1>
              <label>
                Please input a prefered breed of pet(if applicable)
                <Field name="breed" type="text" />
              </label>
              <h1> </h1>
              <label>
                Please input a prefered pet gender(if applicable)
                <Field name="gender" type="text" />
              </label>
              <h1> </h1>
              <label>
                Please enter your zip code so we can see who is in your
                neighborhood!
                <Field name="zipCode" type="text" placeholder="required" />
              </label>
              {/* require */}
              <h1> </h1>

              <div id="checkbox-group">
                Please check below for other members of your family so we can
                select the best pal for everyone.
              </div>
              <div role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field name="dogSafe" type="checkbox" />
                  Dogs
                </label>
                <label>
                  <Field name="catSafe" type="checkbox" />
                  Cats
                </label>
                <label>
                  <Field name="childSafe" type="checkbox" />
                  Small Children
                </label>
              </div>
              <button id="petSubmitBtn" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </Container>
      <Container>
        <Container>
          <h2>
            {searchedPets.length
              ? `Viewing ${searchedPets.length} ${
                  searchedPets.length === 1 ? "pet" : "pets"
                }:`
              : "Search above for a new pal!"}
          </h2>
        
            <Container >
              {searchedPets.map((pet) => {
                console.log(pet);
                return (
                
                  <Card key={pet._id} border="dark" >
                    {
                      pet.primary_photo_cropped ? (
                        <Card.Img
                          src={pet.primary_photo_cropped.medium}
                          alt="an image"
                          variant="top"
                        />
                      ) : (
                        <Card.Img
                          src={
                            logo
                          }
                          alt="an image"
                          variant="top"
                        />
                      )
                      // placeholder
                    }
                          <Card.Body>
                        <p>{pet.name}{pet.description}</p>
                        <Card.Title className='text-dark'>{pet.name}</Card.Title>
                        <Card.Text className='text-dark'>{pet.description}</Card.Text>
                        <Card.Text className='text-dark'>{pet.contact.email}</Card.Text>
                        <Card.Text className='text-dark'>{pet.contact.phonenumber}</Card.Text>
                        <Card.Link className='text-dark' href={pet.url}>{pet.url}</Card.Link>
                      
                     
                        {/* <Card.Link className='text-dark' href="#">{pet.contact}</Card.Link>
                        <Card.Link className='text-dark'  href="#">{pet.location}</Card.Link> */}

                      </Card.Body>
                    </Card>
              
                );
              })}
            </Container>
      
        </Container>
      </Container>
    </div>
  );
}

//   const renderPetCard = (props) =>{
//     <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//   <Card.Body>
//     <Card.Title>{props.name}</Card.Title>
//     <Card.Text>{props.description}
//     </Card.Text>
//   </Card.Body>
//   <Card.Body>
//     <Card.Link href="#">{props.organization}</Card.Link>
//     <Card.Link href="#">{props.location}</Card.Link>
//   </Card.Body>
// </Card>
//   }

export default PetSearch;
