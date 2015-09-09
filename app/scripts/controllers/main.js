'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
    .controller('MainCtrl', function ($scope, feedFactory) {
        $scope.projects = [{'id':'1','name':'project 1'},
            {'id':'2','name':'project 2'},
            {'id':'3','name':'project 3'}
        ];

        $scope.feeds = [];

        // Fetches the time entries from the static JSON file
        // and puts the results on the vm.timeentries array
        feedFactory.getFeeds().then(function(results) {
            $scope.feeds = results;
            console.log($scope.feeds);
        }, function(error) { // Check for errors
            console.log(error);
        });

    });
