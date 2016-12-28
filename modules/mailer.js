var nodemailer = require('nodemailer');
var q = require('q');
var localConfig = require('../config/local.json');
var config = require('../config/config.json');



//Private functions
var inner = {
    //TEMP: Function mocks it's return values
    //TODO: Complete this function
    sendEmail : function sendEmail(name, email, phoneNumber, description){
        var deferred = q.defer();
        var transporter = nodemailer.createTransport({
            service: config.mailService,
            auth: {
                user: localConfig.auth.user,
                pass: localConfig.auth.pass
            }
        });
        var mailOptions = {
            from: config.srcEmailAddress,
            to: config.dstEmailAddress,
            subject: inner.generateMailSubject({name:name}),
            text: inner.generateMailContent({
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                description: description
            })
        };

        transporter.sendMail(mailOptions, function(err, info) {
            if (err){
                console.log(err);
                deferred.resolve(err);
            } else {
                console.log("Message sent:\n" + JSON.stringify(info));
                deferred.resolve({status : true});
            }
        });

        return deferred.promise;
    },
    
    generateMailSubject: function generateMailSubject(options){
        return "New detail submission: " + options.name;
    },

    generateMailContent: function generateMailContent(options){
        var content = "Name: " + options.name +
        "\nPhone Number: "+ options.phoneNumber +
        "\nE-Mail: " + options.email +
        "\nDescription: " + options.description;
        return content;
    }


};

var outer = {
    // return values:
    // on resolve- succession status
    // on reject- error message
    submitContactDetails : function submitContactDetails(name, email, phoneNumber, description){
        var deferred = q.defer();

        if (typeof name == 'undefined' || name == '' || 
        typeof phoneNumber == 'undefined' || phoneNumber == '' ||
        typeof description == 'undefined' || description == '' ){
            deferred.reject({ message: "One or more required fields were left blank."});
        }
        else{
            inner.sendEmail(name, email, phoneNumber, description)
            .then((data)=>{
                deferred.resolve(data);
            }).catch((err)=>{
                deferred.reject(err);
            });
        }
        return deferred.promise;
    }
};

module.exports = outer;
