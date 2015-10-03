'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:DailystatsCtrl
 * @description
 * # DailystatsCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('DailystatsCtrl', function () {

        var arrayOfDataMulti = new Array(
            [[14,10],'1'],
            [[23,60],'2'],
            [[47,50],'3'],
            [[36,30],'4'],
            [[63,40],'5'],
            [[45,50],'6'],
            [[33,50],'7'],
            [[80,20],'8'],
            [[30,20],'9']
        );

        $('#dailyStats').jqBarGraph({
            data: arrayOfDataMulti,
            colors: ['#fff','#7dbde8'] ,
            legends: ['Done','Exp'],
            legend: true,
            width:300,
            height:150,
            showValuesColor:'#fff'
        });
        this.dailyStats = [
            {'bar1':'23','bar2':'10' , 'padding':'67','barWidth':'30'},
            {'bar1':'24','bar2':'12', 'padding':'64','barWidth':'30'},
            {'bar1':'36','bar2':'40', 'padding':'24','barWidth':'30'},
            {'bar1':'48','bar2':'3', 'padding':'49','barWidth':'30'},
            {'bar1':'69','bar2':'0', 'padding':'31','barWidth':'30'},
            {'bar1':'36','bar2':'18', 'padding':'46','barWidth':'30'},
            {'bar1':'58','bar2':'10', 'padding':'32','barWidth':'30'},
            {'bar1':'38','bar2':'45', 'padding':'32','barWidth':'30'},
            {'bar1':'68','bar2':'40', 'padding':'32','barWidth':'30'},
            {'bar1':'68','bar2':'56', 'padding':'32','barWidth':'30'},

            {'bar1':'33','bar2':'10' , 'padding':'67','barWidth':'30'},
            {'bar1':'42','bar2':'52', 'padding':'64','barWidth':'30'},
            {'bar1':'36','bar2':'30', 'padding':'24','barWidth':'30'},
            {'bar1':'58','bar2':'6', 'padding':'49','barWidth':'30'},
            {'bar1':'100','bar2':'0', 'padding':'31','barWidth':'30'},
            {'bar1':'100','bar2':'18', 'padding':'46','barWidth':'30'},
            {'bar1':'100','bar2':'10', 'padding':'32','barWidth':'30'},
            {'bar1':'100','bar2':'65', 'padding':'32','barWidth':'30'},
            {'bar1':'100','bar2':'80', 'padding':'32','barWidth':'30'},
            {'bar1':'100','bar2':'36', 'padding':'32','barWidth':'30'},

            {'bar1':'100','bar2':'40' , 'padding':'67','barWidth':'30'},
            {'bar1':'100','bar2':'32', 'padding':'64','barWidth':'30'},
            {'bar1':'100','bar2':'40', 'padding':'24','barWidth':'30'},
            {'bar1':'100','bar2':'5', 'padding':'49','barWidth':'30'},
            {'bar1':'100','bar2':'6', 'padding':'31','barWidth':'30'},
            {'bar1':'100','bar2':'38', 'padding':'46','barWidth':'30'},
            {'bar1':'100','bar2':'40', 'padding':'32','barWidth':'30'},
            {'bar1':'100','bar2':'65', 'padding':'32','barWidth':'30'},
            {'bar1':'100','bar2':'30', 'padding':'32','barWidth':'30'},
            {'bar1':'100','bar2':'56', 'padding':'32','barWidth':'30'},
        ]

    });
