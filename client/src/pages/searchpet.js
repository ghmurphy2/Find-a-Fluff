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

function MyAlbums() {
  return (
    <div  >
    <Container > 
    <div className="App">
      <h1>Contact Us</h1>
      <Formik
        initialValues={{ breed: "", petType: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="email" type="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
      </Container>
    </div>
  );
}

export default MyAlbums;
