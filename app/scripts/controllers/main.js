'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
    .controller('MainCtrl', function ($scope) {
        $scope.projects = [{'id':'1','name':'project 1'},
            {'id':'2','name':'project 2'},
            {'id':'3','name':'project 3'}
        ];
    });
