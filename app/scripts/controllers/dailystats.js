'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:DailystatsCtrl
 * @description
 * # DailystatsCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('DailystatsCtrl', function ($scope, $http, $resource) {

    $scope.git_options = {
        chart: {
            type: 'multiBarChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 45
            },
            clipEdge: true,
            staggerLabels: true,
            transitionDuration: 500,
            stacked: true,
            xAxis: {
                axisLabel: 'Time (ms)',
                showMaxMin: false,
                tickFormat: function(d){
                    return d3.format(',f')(d);
                }
            },
            yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: 40,
                tickFormat: function(d){
                    return d3.format(',f')(d);
                }
            }
        }
    };

    $scope.git_data = [
        {
            key:'schnitzel',
            values:[
                {
                    // key:'shit',
                    // size:1.2,
                    y:1.2,
                    // y1:1.2,
                    x:0
                },
                {
                    // key:'shit',
                    // size:1.56,
                    y:1.56,
                    // y1:1.56,
                    x:1
                },
                {
                    // key:'shit',
                    // size:2.45,
                    y:2.45,
                    // y1:2.45,
                    x:2
                }
            ]
        }
    ];

    var git_url = 'http://api.github.com/repos/bluecipherz/bluroe/stats/commit_activity';

    // github.query()
    //     .$promise.then(function(results) {
    //         // success
    //         console.log('github success')
    //     }, function(results) {
    //         // error
    //         console.log('github fail')
    //     });
    
    function convertData(data) {
        var ret_data = {
            key: 'shitzem',
            values: []
        }
        angular.forEach(data, function(value, key) {
            // var dkey = moment().day("Monday").week(value.week);
            ret_data['values'][key] = {
                x: key,
                y: value.total
            }
        });
        // console.log(ret_data)
        return [ret_data];
    }

    function getStuff() {
        $http.get(git_url).then(function(results) {
            // success
            // console.log('git success, trying again')
            $http.get(git_url).then(function(results) {
                // console.log(results)
                $scope.git_data = convertData(results.data);
                // console.log(graphdata)
            }, function(results) {
                console.log('git failed')
            })
        }, function(results) {
            // error
            console.log('git error')
        });
    }

    function getStuff2() {
        $resource('data/git_data.json').query()
            .$promise.then(function(results) {
                // console.log('opening git_data.json')
                // console.log(results)
                $scope.git_data = convertData(results)
            },function() {
                console.log('git_data.json error')
            });
    }

    getStuff2()

    $scope.options = {
        chart: {
            type: 'multiBarChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 45
            },
            clipEdge: true,
            staggerLabels: true,
            transitionDuration: 500,
            stacked: true,
            xAxis: {
                axisLabel: 'Time (ms)',
                showMaxMin: false,
                tickFormat: function(d){
                    return d3.format(',f')(d);
                }
            },
            yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: 40,
                tickFormat: function(d){
                    return d3.format(',.1f')(d);
                }
            }
        }
    };

    $scope.data = generateData();
    console.log($scope.data)

    /* Random Data Generator (took from nvd3.org) */
    function generateData() {
        return stream_layers(3,50+Math.random()*50,.1).map(function(data, i) {
            return {
                key: 'Stream' + i,
                values: data
            };
        });
    }

    /* Inspired by Lee Byron's test data generator. */
    function stream_layers(n, m, o) {
        if (arguments.length < 3) o = 0;
        function bump(a) {
            var x = 1 / (.1 + Math.random()),
                y = 2 * Math.random() - .5,
                z = 10 / (.1 + Math.random());
            for (var i = 0; i < m; i++) {
                var w = (i / m - y) * z;
                a[i] += x * Math.exp(-w * w);
            }
        }
        return d3.range(n).map(function() {
            var a = [], i;
            for (i = 0; i < m; i++) a[i] = o + o * Math.random();
            for (i = 0; i < 5; i++) bump(a);
            return a.map(stream_index);
        });
    }

    /* Another layer generator using gamma distributions. */
    function stream_waves(n, m) {
        return d3.range(n).map(function(i) {
            return d3.range(m).map(function(j) {
                var x = 20 * j / m - i / 3;
                return 2 * x * Math.exp(-.5 * x);
            }).map(stream_index);
        });
    }

    function stream_index(d, i) {
        return {x: i, y: Math.max(0, d)};
    }
    // console.log('its calling');

});
