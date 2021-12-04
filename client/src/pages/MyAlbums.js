// ================THIS PAGE DISPLAYS USER'S SAVED IMAGES, SHOULD REDIRECT HERE AFTER LOGGING IN=========
import React from 'react';
// import { Container, Button, Card } from 'react-bootstrap';
// import { getMe, deleteAlbum } from '../utils/API';
// import Auth from '../utils/auth';
// import logo from '../logo.svg'
import Gallery from 'react-photo-gallery';
// import { removeImageId } from '../utils/localStorage';

// import '../App.css';

// const MyAlbums = () => {
//     const [userData, setUserData] = useState({});
  
//     // use this to determine if `useEffect()` hook needs to run again
//     const userDataLength = Object.keys(userData).length;
  
//     useEffect(() => {
//       const getUserData = async () => {
//         try {
//           const token = Auth.loggedIn() ? Auth.getToken() : null;
  
//           if (!token) {
//             return false;
//           }
  
//           const response = await getMe(token);
  
//           if (!response.ok) {
//             throw new Error('something went wrong!');
//           }
  
//           const user = await response.json();
//           setUserData(user);
//         } catch (err) {
//           console.error(err);
//         }
//       };
  
//       getUserData();
//     }, [userDataLength]);
  
//     // create function that accepts the album's mongo _id value as param and deletes the album from the database
//     const handleDeleteAlbum = async (albumId) => {
//       const token = Auth.loggedIn() ? Auth.getToken() : null;
  
//       if (!token) {
//         return false;
//       }
  
//       try {
//         const response = await deleteAlbum(albumId, token);
  
//         if (!response.ok) {
//           throw new Error('something went wrong!');
//         }
  
//         const updatedUser = await response.json();
//         setUserData(updatedUser);

//         // **========SET UP LOCAL STORAGE??????=========**
//         // upon success, remove image's id from localStorage
//         // removeImageId(imageId);
//       } catch (err) {
//         console.error(err);
//       }
//     };
  
//     // if data isn't here yet, say so
//     if (!userDataLength) {
//       return <img src={logo} className="App-logo" alt="logo">LOADING...</img> ;

//     }
  
//     return (
//       <>
//         <Container fluid className='text-light bg-dark'>
//           <Container>
//             <h1>Viewing saved albums!</h1>
//           </Container>
//         </Container>
//         <Container>
//           <h2>
//             {userData.savedAlbums.length
//                 ?`Viewing ${userData.Albums.length} saved ${userData.savedAlbums.length === 1 ? 'album' : 'albums'}:`
//                 : 'You have no saved images!'}
//           </h2>
//           <Container>
//             {userData.savedAlbums.map((image) => {
//               return (
//                 <Card key={image.imageId} border='dark'>
//                   {image ? <Card.Img src={image.imageId} alt="an image" variant='top' /> : null}
//                   <Card.Body>
//                     <Card.Title>{image.title}</Card.Title>
//                     <p className='small'>Creator: {image.username}</p>
//                     <Card.Text>{image.description}</Card.Text>
//                     <Button className='btn-block btn-danger' onClick={() => handleDeleteAlbum(image.imageId)}>
//                       Delete this Album!
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               );
//             })}
//           </Container>
//         </Container>
//       </>
//     );
//   };

import { render } from "react-dom";

import { photos } from "./photos";

/* popout the browser and maximize to see more rows! -> */
const BasicRows = () => <Gallery photos={photos} />;
// render(<BasicRows />, document.getElementById("app"));

export default BasicRows;
