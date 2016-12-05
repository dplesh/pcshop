'use strict';

var productsController = angular.module('dmpcControllers')
    .controller('productsController', ['$scope', 'mobileDetectorService' , function($scope){
        $scope.pageClass='page-products';
        }
    ]);