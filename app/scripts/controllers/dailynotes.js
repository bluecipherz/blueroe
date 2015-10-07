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

        var dailyNotesData = [ {'head':'I never thought i ill be here','description': 'But somehow..Here iam','foot':'03 Oct'},
            {'head':'Still you are felling unconfirtable ?? ','description': 'Im damn sure you got wrongs concepts in your mind','foot':'03 Oct' },
            {'head':'Stay there tight','description': 'yeah i know you will','foot':'03 Oct' },
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
