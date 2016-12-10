var fs = require('fs');
var path = require('path');
const express = require('express');
const mailer = require('nodemailer');

var http = require('http');

var app = express();

// TODO: Integrate a logging framework. 
// TODO: Integrate/Implement a log service to receive logs from clients. 
// TODO: Make this server a https-compliant server. 

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req,res){
    res.redirect('main.html');
});

var httpServer = http.createServer(app);

httpServer.listen(9090);
console.log("Listening on 127.0.0.1:9090");
