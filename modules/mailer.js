var nodemailer = require('nodemailer');
var q = require('q');

//Private functions
var inner = {
    
    //TEMP: Function mocks it's return values
    //TODO: Complete this function
    sendEmail : function (name, email, phone, description){
        var deferred = q.defer();
        //nodemailer.sendblabla();
        deferred.resolve({status : true});
        return deferred.promise;
    }
};

var outer = {
    // return values:
    // on resolve- succession status
    // on reject- error message
    // TEMP: Function mocks it's return values
    // TODO: Complete this function
    submitContactDetails : function (name, email, phoneNumber, description){
        var deferred = q.defer();

        if (typeof name == 'undefined' || 
        typeof phoneNumber == 'undefined' ||
        typeof description == 'undefined' ){
            deferred.reject({ message: "One or more required fields were left blank."});
        }
        else{
            inner.sendEmail(name, email, phoneNumber, description)
            .then((data)=>{
                deferred.resolve(data);
            }, (err)=>{
                deferred.reject(err);
            });
        }
        return deferred.promise;
    }
};

module.exports = outer;
