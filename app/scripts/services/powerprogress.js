'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.powerprogress
 * @description
 * # powerprogress
 * Service in the bluroeApp.
 */
angular.module('bluroeApp')
    .service('powerProgress', function () {
        var timex;
        this.loadProgress = function() {
            clearTimeout(timex);
            $('#powerProgress').css({
                'transition':'width 0s',
                'width':'0'
            });
            $('#powerProgress').css({
                'transition':'width 1s',
                'width':'100%'
            });
            timex = setTimeout( function(){
                $('#powerProgress').css({
                    'transition':'width 0s',
                    'width':'0'
                });
            },1000);
        }
    });
