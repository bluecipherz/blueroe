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

        var dailyNotesData = [ {'head':'Sorry man','description': 'I cant complete the whole shit you,ve told me to','foot':'03 Oct'},
            {'head':'You know ?','description': 'i worked till 4 and am im dissapointed cuz i cant complete it','foot':'03 Oct' },
            {'head':'Popup box','description': 'I have written some code for the stander popup box, so next time its gonna be easy','foot':'03 Oct' },
            {'head':'Yeah thats enough for today #Sleeping','description': 'zzz..!!!','foot':'03 Oct' },
            {'head':'Go get it !','description': 'Some times the Best gain is to loss','foot':'03 Oct' },
            {'head':'Angular','description': 'Taking too much time to learn, SORRY!!! :) ','foot':'03 Oct' },
            {'head':'Grow a dick!','description': 'Stop crying like a baby...','foot':'04 Oct' },
            {'head':'EAT! SLEEP! CODE!','description': 'Thats our way baby!!! :D','foot':'04 Oct' },
            {'head':'Relax','description': 'Try to get some heat off your ass.., i also got shit to take care of mahn..','foot':'04 Oct' },
            {'head':'False Pretense!','description': 'The worlds got a funny way of turning round on you...','foot':'04 Oct' }
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
