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
    }










    }
}
)