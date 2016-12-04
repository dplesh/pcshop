'use strict';

var aboutController = angular.module('dmpcControllers')
    .controller('aboutController', ['$scope', function($scope){
        $scope.pageClass='page-about';
        }
    ]);