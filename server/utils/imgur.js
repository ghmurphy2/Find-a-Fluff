// format for imgur upload
// drag or image address upload
// post route for image, create ele, 
// data.link

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
    let div, table, img;
    div = this.createEls('div', {className: 'loading-modal'});
    table = this.createEls('table', {className: 'loading-table'});
    img = this.createEls('img', {className: 'loading-image', src: '../client/public/assets/loadinggif.gif'});

    div.appendChild(table);
    table.appendChild(img);
    document.body.appendChild(div);
},
status: function (el) {
    let div = this.createEls('div', {className: 'status'});

    this.insertAfter(el, div);
},
matchFiles: function (file, zone, fileCount) {
    let status = zone.nextSibling;
    if (file.type.match(/image/) && file.type !== 'image/svg+xml') {
        document.body.classList.add('loading');
        status.classList.remove('bg-success', 'bg-danger');
        status.innerHTML = '';

        let fd = new FormData();
        fd.append('image', file);

        this.post(this.endpoint, fd, function (data) {
            if (fileCount[0]+1 == fileCount[1]) {
                document.body.classList.remove('loading');
            }
            typeof this.callback === 'function' && this.callback.call(this, data);
        }.bind(this));
    } else {
        status.classList.remove('bg-success');
        status.classList.add('bg-danger');
        status.innerHTML = 'Invalid archive';
    }
},

upload: function (zone) {
    let events = ['dragenter', 'dragleave', 'dragover', 'drop'],
        file, target, i, len;

    zone.addEventListener('change', function (e) {
        if (e.target && e.target.nodeName === 'INPUT' && e.target.type === 'file') {
            target = e.target.files;

            for (i = 0, len = target.length; i < len; i += 1) {
                file = target[i];
                this.matchFiles(file, zone, [i, target.length]);
            }
        }
    }.bind(this), false);

    events.map(function (event) {
        zone.addEventListener(event, function (e) {
            if (e.target && e.target.nodeName === 'INPUT' && e.target.type === 'file') {
                if (event === 'dragleave' || event === 'drop') {
                    e.target.parentNode.classList.remove('dropzone-dragging');
                } else {
                    e.target.parentNode.classList.add('dropzone-dragging');
                }
            }
        }, false);
    });
},
run: function () {
    let loadingModal = document.querySelector('.loading-modal');

    if (!loadingModal) {
        this.loading();
    }
    this.createDragZone();
}
};

return Imgur;
}));