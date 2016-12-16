const fs = require('fs');
const path = require('path');
const express = require('express');
const mailer = require('./modules/mailer.js');

const http = require('http');

var bodyParser = require('body-parser');
var app = express();

// TODO: Integrate a logging framework. 
// TODO: Integrate/Implement a log service to receive logs from clients. 
// TODO: Make this server a https-compliant server. 

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
    },(data)=> {
        res.json({
            status: false,
            message: data.message
        });
        res.status(500);
    });
    
});

var httpServer = http.createServer(app);

httpServer.listen(9090);
console.log("Listening on 127.0.0.1:9090");
