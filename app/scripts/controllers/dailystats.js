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
                type: 'historicalBarChart',
                // height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 50
                },
                x: function(d){return d[0];},
                y: function(d){return d[1];},
                showValues: true,
                transitionDuration: 500,
                valueFormat: function(d){
                    return d3.format(',1f')(d);
                },
                xAxis: {
                    axisLabel: 'X Axis',
                    tickFormat: function(d) {
                        return moment.unix(d).format('DD-MM-YYYY')
                    },
                    rotateLabels: 50,
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 35,
                    tickFormat: function(d){
                        return d3.format(',1f')(d);
                    }
                }
            }
    };

    $scope.git_data = [
            {
                "key" : "Quantity" ,
                "bar": true,
                "values" : [ [ 1136005200000 , 1271000.0] , [ 1138683600000 , 1271000.0] , [ 1141102800000 , 1271000.0] , [ 1143781200000 , 0] , [ 1146369600000 , 0] , [ 1149048000000 , 0] , [ 1151640000000 , 0] , [ 1154318400000 , 0] , [ 1156996800000 , 0] , [ 1159588800000 , 3899486.0] , [ 1162270800000 , 3899486.0] , [ 1164862800000 , 3899486.0] , [ 1167541200000 , 3564700.0] , [ 1170219600000 , 3564700.0] , [ 1172638800000 , 3564700.0] , [ 1175313600000 , 2648493.0] , [ 1177905600000 , 2648493.0] , [ 1180584000000 , 2648493.0] , [ 1183176000000 , 2522993.0] , [ 1185854400000 , 2522993.0] , [ 1188532800000 , 2522993.0] , [ 1191124800000 , 2906501.0] , [ 1193803200000 , 2906501.0] , [ 1196398800000 , 2906501.0] , [ 1199077200000 , 2206761.0] , [ 1201755600000 , 2206761.0] , [ 1204261200000 , 2206761.0] , [ 1206936000000 , 2287726.0] , [ 1209528000000 , 2287726.0] , [ 1212206400000 , 2287726.0] , [ 1214798400000 , 2732646.0] , [ 1217476800000 , 2732646.0] , [ 1220155200000 , 2732646.0] , [ 1222747200000 , 2599196.0] , [ 1225425600000 , 2599196.0] , [ 1228021200000 , 2599196.0] , [ 1230699600000 , 1924387.0] , [ 1233378000000 , 1924387.0] , [ 1235797200000 , 1924387.0] , [ 1238472000000 , 1756311.0] , [ 1241064000000 , 1756311.0] , [ 1243742400000 , 1756311.0] , [ 1246334400000 , 1743470.0] , [ 1249012800000 , 1743470.0] , [ 1251691200000 , 1743470.0] , [ 1254283200000 , 1519010.0] , [ 1256961600000 , 1519010.0] , [ 1259557200000 , 1519010.0] , [ 1262235600000 , 1591444.0] , [ 1264914000000 , 1591444.0] , [ 1267333200000 , 1591444.0] , [ 1270008000000 , 1543784.0] , [ 1272600000000 , 1543784.0] , [ 1275278400000 , 1543784.0] , [ 1277870400000 , 1309915.0] , [ 1280548800000 , 1309915.0] , [ 1283227200000 , 1309915.0] , [ 1285819200000 , 1331875.0] , [ 1288497600000 , 1331875.0] , [ 1291093200000 , 1331875.0] , [ 1293771600000 , 1331875.0] , [ 1296450000000 , 1154695.0] , [ 1298869200000 , 1154695.0] , [ 1301544000000 , 1194025.0] , [ 1304136000000 , 1194025.0] , [ 1306814400000 , 1194025.0] , [ 1309406400000 , 1194025.0] , [ 1312084800000 , 1194025.0] , [ 1314763200000 , 1244525.0] , [ 1317355200000 , 475000.0] , [ 1320033600000 , 475000.0] , [ 1322629200000 , 475000.0] , [ 1325307600000 , 690033.0] , [ 1327986000000 , 690033.0] , [ 1330491600000 , 690033.0] , [ 1333166400000 , 514733.0] , [ 1335758400000 , 514733.0]]
            }];

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
            bar: true,
            values: []
        };
        angular.forEach(data, function(value, key) {
            // var dkey = moment().day("Monday").week(value.week);
            ret_data['values'][key] = [
                value.week,
                value.total
            ];
        });
        console.log(ret_data);
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
