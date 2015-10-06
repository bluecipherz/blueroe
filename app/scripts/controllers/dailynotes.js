'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:DailynotesCtrl
 * @description
 * # DailynotesCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('DailynotesCtrl', function ($scope,$interval) {

        var dailyNotesData = [ {'head':'Enth kundi aneda ith ???','description': 'Puller onnum ponnilla bellatha kali','foot':'03 Oct'},
            {'head':'Ninte andi njan nale kanchera...!!!','description': 'shaaji','foot':'03 Oct' },
            {'head':'baaa baa ','description': 'sagaav basi','foot':'03 Oct' },
        ];

        this.dailyNotes = dailyNotesData;
        $(".Bslider .Bframe").first().show();

        var index = 0;
        var count = dailyNotesData.length;
        var SliderEngine = function() {
            $('.Bslider .Bframe').eq(index).fadeOut(function() {
                if (index+1 == count){
                    index = -1;
                }

                $('.Bslider .Bframe').eq(index + 1).fadeIn(function() {
                    index++;
                });
            });
        }
        $interval(SliderEngine, 10000);
        // console.log('hell');
  });
