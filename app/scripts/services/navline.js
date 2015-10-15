'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.navLine
 * @description
 * # navLine
 * Service in the bluroeApp.
 */
angular.module('bluroeApp')
  .service('navLine', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

        this.navLine = function ($ele,$tab){  
            var parent = $ele.parent();
            var currEle = parent.find('.navLH:nth-child('+$tab+')');
            var lineWidth = currEle.outerWidth(); 
            var left = 0,$i;
            for($i = 1; $i < $tab; $i++){
                left = left + parent.find('.navLH:nth-child('+$i+')').outerWidth(); 
            }
            $ele.css({'width':lineWidth , 'margin-left':left});  
        }
  });
