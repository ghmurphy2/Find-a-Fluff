// query pet api for location and available pets
// display breed, name, location, photo if available, full pet history if possible
// form for breed, location, size? information quailty


// document.addEventListener("DOMContentLoaded", formHandler);
const apiKey = "5lxmipzTjAo8PkmJwYYBpqT7OMJ46Os5Fbn4Wer8aDN83QBx88";
const secret = "spzjkthhuaI4tp1ChWV15hQHYgbTW4bHyxSuZbbL";


const formHandler = (values) => {
  console.log(values);
  // var url = 'https://api.https://api.petfinder.com/v2/.com/pet.getRandom';
  // placeholder query search params, type ie cat dog, breed, proximity require user zip,
  return fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body:
      "grant_type=client_credentials&client_id=" +
      apiKey +
      "&client_secret=" +
      secret,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      // 
      return fetch(
        `https://api.petfinder.com/v2/animals?type=${values.type}&breed=${values.breed}&gender=${values.gender}`,
        //   determined url plus params, 2 to start data.params included to gate search
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            //  include bearer token for fetch request

            Authorization: "Bearer " + data.access_token,
          },
        },
      ).then((res) => res.json());
    });
};




export default formHandler ; 

