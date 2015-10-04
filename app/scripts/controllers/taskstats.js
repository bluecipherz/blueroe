'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:TaskstatsCtrl
 * @description
 * # TaskstatsCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('TaskstatsCtrl', function ($scope) {
    
    $scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: false,
                transitionDuration: 500,
                labelThreshold: 0.01,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.data = [
            {
                key: "Completed",
                y: 5,
                color: '#fff'
            },
            {
                key: "Incomplete",
                y: 34,
                color:'rgba(255,255,255,0.3)'
            }
        ];
  });
