'use strict';

var homeController = angular.module('dmpcControllers')
    .controller('homeController', ['$scope', 'mobileDetectorService' , function($scope){
        $scope.pageClass='page-home';
        }
    ]);