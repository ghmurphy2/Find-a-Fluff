// format for imgur upload
// drag or image address upload
// post route for image, create ele, 

(function (root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Imgur = factory();
    }
}(this, function(){
        "use strict";
        var Imgur = function (options) {
            if(!this || !(this instanceof Imgur)){
            return new Imgur(options);
        }
        if(!options){
            options = {}
        }
        if (!options.clientid){
            throw "Please use a valid Client ID"
        }
        this.clientid = options.clientid;
        this.endpoint = 'https://api.imgur.com/sortaface';

        //  https://api.imgur.com/3/ upload url
        // throws no image if not hosted, communicating with server and client id
        this.callback = options.callback || undefined;
        this.upload = document.querySelectorAll('.upload');
        this.info = document.querySelectorAll('.info');
        this.run();
}
Imgur.prototype = {
    createEl: function( name, props, text){
        let el = document.createElement(name), p;
    for (p in props){
        if(props.hasOwnProperty(p)) {
            el[p] = props[p];
        }
    }
        if (text) {
            el.appendchild(document.createTextNode(text));
        }
        return el;
    },
    insertAfter: function (referenceNode, newNode){
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSIbling);
    },
    post: function (path,data, callback){
        var xhttp = new XMLHttpRequest();
        xhttp.open('POST', path, true);
        xhttp.setRequestHeader('Authorization', "Client-ID" + this.client);
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4){
                if (this.sttatus >= 200 && this.status < 300){
                    var response = '';
                    try {
                        response = JSON.parse(this.responseText);
                    } catch(error){
                        console.logf(error)
                    }
                    callback.call(window, response);
                }else{
                    throw new Error(this.status)
                }

            }
        };
        xhttp.send(data);
        xhttp = null;
    },
    createUploadArea: function () {
        let dropArea, clickArea, input;
        dropArea = this.createEls('p', {}, 'Drop Image File Here');
        clickArea = this.createEls('p', {}, 'Or click here to select image');
        input = this.createEls('input', {type: 'file', multiple: 'multiple', className: 'input', accept: 'image/*'});

    Array.prototype.forEach.call(this.info, function (area) {
        area.appendChild(p1);
        area.appendChild(p2);
    }.bind(this));
    Array.prototype.forEach.call(this.dropzone, function (zone) {
        zone.appendChild(input);
        this.status(zone);
        this.upload(zone);
    }.bind(this));
},
loading: function(){
    var div, table, img;
    div = this.createEls('div', {className: 'loading-modal'});
    table = this.createEls('table', {className: 'loading-table'});
    img = this.createEls('img', {className: 'loading-image', src: '../client/public/assets/loadinggif.gif'});

    div.appendChild(table);
    table.appendChild(img);
    document.body.appendChild(div);
},
}
)