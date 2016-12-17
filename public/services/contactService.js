'use strict';

var contactModule = angular.module('contactModule', []);

var contactService = contactModule
    .service('contactService',['$http', function($http){
        this.submitDetails = function(name, email, phoneNumber, description){    
            var body = {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                description: description
            };
            $http.post("/api/submit", body).then((res) => {
                return res;    
            }, (errRes) => {
                return errRes;
            });
        };
    }]);