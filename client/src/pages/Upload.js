
// import React, { useState, useEffect, Component } from 'react';
// import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
// import '../App.css';
// class App extends Component{
//  Upload() {
//    const client = '07570dccac51516'
//    const request = new XMLHttpRequest()
//    const form = new FormData()
//    const imageEl = document.getElementsByClassName('input-image')[0].files[0]
//    var imgurUrl


//    form.append('image', imageEl)


//    request.open( 'POST', 'https://api.imgur.com/3/image/')
//    request.setRequestHeader('Authorization', "Client-ID" + client);
//   request.onreadystatechange = function(){
//     if(request.status === 200 && request.readyState === 4)
//      let res = JSON.parse(request.responseText)
//     imgurUrl = 'https://i.imgur.com/${res.data.id}.png'
//     // return url
//     const form = document.createElement('div')
//     form.className = 'image'
//     document.getElementsByTagName('body')[0].appendChild(form)

//     const img = document.createElement('img')
//     img.className = 'image'
//     img.src = imgurUrl
//     // route to single page display from url
//     document.getElementsByClassName('image')[0].appendChild(img)
// // page display to grab url
//     const srcEl = document.createElement('image')
//     srcEl.className = 'image-src'
//     srcEl.src = imgurUrl

//     const link = document.createElement('link')
//     link.className = 'image-link'
//     link.href = imgurUrl
//     document.getElementsByClassName('image')[0].appendChild(link)

//     const displayUrl = document.createElement('displayUrl')
//     displayUrl.className = 'image-url'
//     displayUrl.innerHTML = imgurUrl
//     document.getElementsByClassName('image-link')[0].appendChild(displayUrl)
//   }

// request.send(form)
//   }
//   render(){
//     return (
//       <div className="App">
//             <input type="file" onChange={this.uploadImage.bind(this)}/>
//         <footer className="App-footer">
//           <p>Upload above</p>
//         </footer>
//       </div>
//     );
//   }
// }
//    export default Upload;