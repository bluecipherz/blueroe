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

        var dailyNotesData = [ {'head':'Sorry man','description': 'I cant complete the whole shit you,ve told me to','foot':'08 Jan'},
            {'head':'You know ?','description': 'i worked till 4 and am im dissapointed cuz i cant complete it','foot':'08 Jan' },
            {'head':'Popup box','description': 'I have written some code for the stander popup box, so next time its gonna be easy','foot':'08 Jan' },
            {'head':'Yeah thats enough for today #Sleeping','description': 'zzz..!!!','foot':'08 Jan' },
            {'head':'Go get it !','description': 'Some times the Best gain is to loss','foot':'08 Jan' },
            {'head':'Angular','description': 'Taking too much time to learn, SORRY!!! :) ','foot':'08 Jan' }
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
        console.log('hell');
  });
