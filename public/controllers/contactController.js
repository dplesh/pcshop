'use strict';

var contactController = angular.module('dmpcControllers')
    .controller('contactController', ['$scope', 'mobileDetectorService' , function($scope){
        $scope.pageClass='page-contact';
        }
    ]);