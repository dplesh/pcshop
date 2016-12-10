'use strict';

var contactController = angular.module('dmpcControllers')
    .controller('contactController', ['$scope', 'mobileDetectorService', 'contactService' , function($scope, mobileDetectorService){
            $scope.pageClass='page-contact';
            $scope.isMobile = mobileDetectorService.isMobile;
        }
    ]);