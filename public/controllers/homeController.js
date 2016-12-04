'use strict';

var homeController = angular.module('dmpcControllers')
    .controller('homeController', ['$scope', function($scope){
        $scope.pageClass='page-home';
        }
    ]);