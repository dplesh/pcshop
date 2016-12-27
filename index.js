const fs = require('fs');
const path = require('path');
const express = require('express');
const mailer = require('./modules/mailer.js');

const config = require('./config/config.json');
const privateConfig = require('./config/local.json');

const http = require('http');
const https = require('https');

var bodyParser = require('body-parser');
var app = express();


// TODO: Integrate a logging framework. 
// TODO: Integrate/Implement a log service to receive logs from clients. 

var keyPath;
var crtPath;

if (config.dev){
    // Uses self-signed certificate (broken HTTPS)
    keyPath = config.ssl.key.dev;
    crtPath = config.ssl.crt.dev;
} else {
    keyPath = config.ssl.key.prod;
    crtPath = config.ssl.crt.prod;
}

var httpsOptions = {
    key: fs.readFileSync(keyPath),
    passphrase: privateConfig.ssl.passphrase,
    cert: fs.readFileSync(crtPath)
};

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
    res.redirect('main.html');
});

app.post('/api/submit', function(req, res){
    var name = req.body.name;
    var phoneNumber = req.body.phoneNumber;
    var email = req.body.email;
    var description = req.body.description;

    mailer.submitContactDetails(name, email, phoneNumber, description)
    .then((data)=> {
        res.json({
            status: data.status
        });
        res.status(201);
    }).catch((data)=> {
        res.json({
            status: false,
            message: data.message
        });
        res.status(500);
    });
    
});


// TODO: make a http to https redirection server
//var httpServer = http.createServer(app);
//httpServer.listen(9090);
//console.log("Listening on 127.0.0.1:9090");

var secureServer = https.createServer(httpsOptions, app);
secureServer.listen(config.port.https);
console.log("HTTPS Server listening on https://localhost:"+ secureServer.address().port);