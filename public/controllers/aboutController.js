'use strict';

var aboutController = angular.module('dmpcControllers')
    .controller('aboutController', ['$scope', 'mobileDetectorService' ,function($scope, mobileDetectorService){
            $scope.pageClass='page-about';
       
        }
    ]);