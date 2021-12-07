//GET-ME QUERY to Run as Redirect after log-in
// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

//CREATE USER ROUTE
export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

//LOG-IN USER ROUTE
export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};


// DELETE IMAGE for Logged in User

export const deleteBreed = (breedData, token) => {
  console.log("breedData: " + breedData);
    return fetch(`/api/users/breeds/${breedData}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
};

// save breed data for a logged in user
export const saveBreed = (breedData, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(breedData),
  });
};

//Search Dog Breeds
export const searchDogBreeds = (query) => {
  return fetch(`https://dog.ceo/api/breed/${query}/images/random/20`);
};

