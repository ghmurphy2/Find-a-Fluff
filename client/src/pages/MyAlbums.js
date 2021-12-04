// ================THIS PAGE DISPLAYS USER'S SAVED ALBUMS, SHOULD REDIRECT HERE AFTER LOGGING IN=========
import React from 'react';
import { Container } from 'react-bootstrap';
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
      <h1>Photo Album Viewer</h1>
      <div id="viewer" />
      </Container>
    </div>
  );
}

export default MyAlbums;
