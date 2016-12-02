"use strict";

var dmpcApp = angular.module('dmpcApp', [
    'ngRoute',
    'dmpcControllers',
    'dmpcServices'
]);

dmpcApp.config('$routeProvider', function($routeProvider){
    $routeProvider
        .when("/",{
            //TOVERIFY: Relativity of path.
            templateUrl:'./partials/home.html',
            controller: 'homeController'
        })
        .otherwise({
            templateUrl:'./partials/error.html'
        });
});