"use strict";

var dmpcApp = angular.module('dmpcApp', [
    'ngRoute',
    'ngAnimate',
    'dmpcControllers'

]);

dmpcApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            //TOVERIFY: Relativity of path.
            templateUrl:'./views/home.html',
            controller: 'homeController'
        })
        .when('/home',{
            redirectTo: '/'
        })
        .when('/products', {
            templateUrl:'./views/products.html'
        })
        .when('/about', {
            templateUrl:'./views/about.html'
        })
        .when('/contact', {
            templateUrl:'./views/contact.html'
        })
        .otherwise({
            templateUrl:'./views/error.html'
        });
}]);