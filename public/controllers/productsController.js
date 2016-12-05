'use strict';

var productsController = angular.module('dmpcControllers')
    .controller('productsController', ['$scope', 'mobileDetectorService' , function($scope, mobileDetectorService){
            $scope.pageClass='page-products';
            $scope.isMobile = mobileDetectorService.isMobile;
        }
    ]);