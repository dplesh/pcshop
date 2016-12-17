'use strict';

var contactController = angular.module('dmpcControllers')
    .controller('contactController', ['$scope', 'mobileDetectorService', 'contactService' , function(
        $scope, 
        mobileDetectorService,
        contactService){
            $scope.pageClass='page-contact';
            $scope.isMobile = mobileDetectorService.isMobile;
            $scope.submitDetails = function(){
                var result = contactService.submitDetails($scope.name, $scope.email, $scope.phoneNumber, $scope.description);
            };
        }
    ]);