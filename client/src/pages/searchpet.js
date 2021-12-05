// ================THIS PAGE DISPLAYS USER'S SAVED ALBUMS, SHOULD REDIRECT HERE AFTER LOGGING IN=========
import React from 'react';
import { Container } from 'react-bootstrap';
import { Formik, Field, Form } from "formik";
// import { getMe, deleteAlbum } from '../utils/API';
// import Auth from '../utils/auth';
// import loading from '../loading.gif'
// import Gallery from 'react-photo-gallery';
// import { removeImageId } from '../utils/localStorage';

import '../App.css';

function PetSearch() {
  return (
    <div >
    <Container> 
    <div className="App">
      <h1>Contact Us</h1>
      <Formik
        initialValues={{ 
        type: "",
        breed: "",
        gender: "",
        size: "",
        zipcode: "",
        childSafe: "",
        dogSafe: "",
        catSafe: "",
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {/* request params, animal type, breed, zip code distance from, good_children checkbox, good cat checkbox, good dog checkbox, gender checkbox, size check, limit */}
        <Form>
        <h1>Please select the trait for your new best friend!</h1>
          <Field name="type" type="text" />
          <Field name="breed" type="text" />
          <Field name="gender" type="checkbox" />
          <Field name="size" type="dropdown" />
          <Field name="zipCode" type="text" />
          <Field name="childSafe" type="checkbox" />
          <Field name="dogSafe" type="checkbox" />
          <Field name="catSafe" type="checkbox" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
      </Container>
    </div>
  );
}

export default PetSearch;
