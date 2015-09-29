'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('ProjectsCtrl', function ($scope) {
        var projects = [{'name':'Bluroe','owner':'shaaji','task':'7','completedTask':'4','mileStone':'4','completedMileStone':'1'},
                        {'name':'Linkon','owner':'Basi','task':'5','completedTask':'3','mileStone':'15','completedMileStone':'11'},
                        {'name':'Urban Cartel','owner':'Roshan','task':'20','completedTask':'2','mileStone':'25','completedMileStone':'8'}];

        $scope.projectList = projects;
        console.log('hello');
    });
