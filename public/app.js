"use strict";

var dmpcApp = angular.module('dmpcApp', [
    'ngRoute',
    'ngAnimate',
    'dmpcControllers',
    'mobileDetectorModule'
]);

dmpcApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'./views/home.html',
            controller: 'homeController'
        })
        .when('/home',{
            redirectTo: '/'
        })
        .when('/products', {
            templateUrl:'./views/products.html',
            controller: 'productsController'

        })
        .when('/about', {
            templateUrl:'./views/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl:'./views/contact.html',
            controller: 'contactController'
            
        })
        .otherwise({
            templateUrl:'./views/error.html'
        });
}]);