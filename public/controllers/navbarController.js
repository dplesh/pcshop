'use strict';

var navbarController = angular.module('dmpcControllers')
    .controller('navbarController', ['$scope', 'mobileDetectorService', 
        function($scope, mobileDetectorService){
            $scope.isMobile = mobileDetectorService.isMobile;
        }]);