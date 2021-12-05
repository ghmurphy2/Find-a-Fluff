// query pet api for location and available pets
// display breed, name, location, photo if available, full pet history if possible
// form for breed, location, size? information quailty

var apiKey = '5lxmipzTjAo8PkmJwYYBpqT7OMJ46Os5Fbn4Wer8aDN83QBx88'

function formHandler(){
    document.getElementsById('submitZip').addEvenetlistener('click', function(e){
        e.preventDefault();
        var zip = document.getElementsById('zip').value;
        var url = 'https://api.petfinder.com/pet.getRandom';
        // placeholder query
        $.ajax({
			url: url,
			jsonp: "callback",
			dataType: "jsonp",
			data: {
				key: apiKey,
				animal: 'cat',
				'location': zip,
				output: 'basic',
				format: 'json'
			},
    })
}