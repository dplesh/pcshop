'use strict';

var homeController = angular.module('dmpcControllers')
    .controller('homeController', ['$scope', 'mobileDetectorService' , function($scope, mobileDetectorService){
            $scope.pageClass='page-home';
            $scope.isMobile = mobileDetectorService.isMobile;
            
        }
    ]);