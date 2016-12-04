'use strict';

var productsController = angular.module('dmpcControllers')
    .controller('productsController', ['$scope', function($scope){
        $scope.pageClass='page-products';
        }
    ]);