// create function for reporting image information
// function for addimg
// check for link throw back and display to div
// new imgur api call, include client id for anonymous hosting

function report(vars, showType = false){
    if (showType ===true) console.log( vars);
    // default no display, append on img display true
}

function addImg(e, content){
    var imageDiv = document.querySelector(e);
    var newImageDiv = document.createElement('div');
    // append image with new child
    newContent.innerHTML = content;

    while (newContent.firstChild){
        imageDiv.appendChild(newImageDiv)
    }
}
// image reference link for display
let feedback = function(res){
    report(res, true);
    if (res.success === true){
        let get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        // bootstrap required
        document.querySelector('.status').classList.add('bg-info');
        let content = 
        'Image : ' + '<br><input class="image-url" value=\"' + get_link + '\"/>' 
             + '<img class="img" alt="Imgur-Upload" src=\"' + get_link + '\"/>';
             addImg('.status', content);
    }
};

new Imgur({
    // anonymous upload, no auth needed
    clientid: "07570dccac51516",
    callback: feedback

})