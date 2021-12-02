// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
//route to create user
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
//route to login user
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

// make a search to Face++ api for a SINGLE IMAGE FACE DETECT
// https://api-us.faceplusplus.com/facepp/v3/detect?api_key=8aHPO1DQPDnVtqc2QR7CdSsIaW3sZzmL&api_secret=pMD2UERJUqJ7XwE6wRW_Ricr_-WWUT9d
export const faceDetect = (query) => {
    return fetch(`https://api-us.faceplusplus.com/facepp/v3/detect?api_key=8aHPO1DQPDnVtqc2QR7CdSsIaW3sZzmL&api_secret=pMD2UERJUqJ7XwE6wRW_Ricr_-WWUT9d&image_url=${query}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function(data){
       console.log(data) 
       const faceToken = data.faces.face_token
       const  faceImgId = data.faces.image_id
       console.log("this is the assigned faceToken : ", faceToken)
       console.log("this is the assigned image Id for the above faceToken: ", faceImgId)
      });
  };

// make a search to Face++ api for a DUAL IMAGE FACE COMPARE
// https://api-us.faceplusplus.com/facepp/v3/compare?api_key=8aHPO1DQPDnVtqc2QR7CdSsIaW3sZzmL&api_secret=pMD2UERJUqJ7XwE6wRW_Ricr_-WWUT9d
export const faceCompare = (query, query2) => {
    return fetch(`https://api-us.faceplusplus.com/facepp/v3/compare?api_key=8aHPO1DQPDnVtqc2QR7CdSsIaW3sZzmL&api_secret=pMD2UERJUqJ7XwE6wRW_Ricr_-WWUT9dCdSsIaW3sZzmL&api_secret=pMD2UERJUqJ7XwE6wRW_Ricr_-WWUT9d&image_url1=${query}&image_url2=${query2}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
