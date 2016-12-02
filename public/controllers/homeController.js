'use strict';

var homeController = angular.module('dmpcControllers')
    .controller('homeController', ['$scope', function($scope){
        $scope.reply = 2+2;
    }
    ]);