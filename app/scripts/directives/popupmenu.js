'use strict';
// (function(document) {

/**
 * @ngdoc directive
 * @name bluroeApp.directive:popupMenu
 * @description
 * # popupMenu
 */
angular.module('bluroeApp')
  .directive('popupMenu', function () {
    return {
      // template: '<div></div>',
      // replace: true,
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the feedMenu directive');
        // console.log(attrs.feedMenu); // F1T1
        // console.log(element);
        // scope.showF1T1 = true;
        // console.log(scope['show' + attrs.feedMenu]); // true
        scope['show' + attrs.popupMenu] = false;

        scope.toggleMenu = function(menu) {
        	scope['show' + menu] = !scope['show' + menu];
        	// console.log(attrs.feedMenu + ' ' + scope['show' + attrs.feedMenu]);
        }

  	    $(document).bind('click', function(event) {
	        var isClickedElementChildOfPopup = element
            .find(event.target)
            .length > 0;

	        if (isClickedElementChildOfPopup)
            return;

	        scope.$apply(function(){
	            scope['show' + attrs.popupMenu] = false;
	        });
  	    });
      }
    };
  });

// })(document);