// query pet api for location and available pets
// display breed, name, location, photo if available, full pet history if possible
// form for breed, location, size? information quailty
import $ from 'jquery'
document.addEventListener('DOMContentLoaded', formHandler);
var apiKey = '5lxmipzTjAo8PkmJwYYBpqT7OMJ46Os5Fbn4Wer8aDN83QBx88'

function formHandler(){
    document.getElementsById('submitZip').addEventlistener('click', function(e){
        e.preventDefault();
        var zip = document.getElementsById('zip').value;
        var url = 'https://api.https://api.petfinder.com/v2/types/${animalType}.com/pet.getRandom';
        // placeholder query
        $.ajax({
			url: url,
			jsonp: "callback",
			dataType: "jsonp",
			data: {
                // search params
				key: apiKey,
				animal: 'cat',
				'location': zip,
				output: 'basic',
				format: 'json'
			},
            // on success
            success: function(res){
                console.log(res)
                // 
                var petName = res.petfinder.pet.name.$t;
                var img = res.petfinder.pet.media.photos.photo[0].$t;
                var id = res.petfinder.pet.id.$t;
                // additional pet info
                // var petName = res.petfinder.pet.name.$t;
                // var petName = res.petfinder.pet.name.$t;

                var newName = document.createElement('a');
				var newDiv = document.createElement('div');
				newName.textContent = petName;
				newName.href = 'https://www.petfinder.com/petdetail/' + id;

                var newImg = document.createElement('img');
				newImg.src = img;

                newDiv.appendChild(newName);
				list.appendChild(newDiv);
				list.appendChild(newImg);
            }
        });
    })
}