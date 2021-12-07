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
      // console.log(data);
      let query =  `https://api.petfinder.com/v2/animals?status=adoptable&limit=5`
        if (values.type !== '' ){
          query += `&type=${values.type}`
          
          if (values.type !== '' ){
            query += `&breed=${values.breed}`
          }
          if (values.type !== '' ){
            query += `&gender=${values.gender}`
          }
          if (values.type !== '' ){
            query += `&location=${values.zipCode}`
          }
          if (values.type !== '' ){
            query += `&good_with_dogs=${values.dogSafe}`
          }
          if (values.type !== '' ){
            query += `&good_with_children=${values.childSafe}`
          }
          if (values.type !== '' ){
            query += `&good_with_cats=${values.catSafe}`
          }
        }
      return fetch( query ,
        
      //  ?type=${values.type}&breed=${values.breed}&gender=${values.gender}&good_with_children=${values.childSafe}&location=${values.zipCode}&good_with_cats=${values.catSafe}&good_with_dogs=${values.dogSafe}`,
        //   determined url plus params, 2 to start data.params included to gate search
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            //  include bearer token for fetch request

            Authorization: "Bearer " + data.access_token,
          },
        }
      ).then((res) => res.json());
    });
};

export default formHandler;
