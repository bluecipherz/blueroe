'use strict';

/**
 * @ngdoc directive
 * @name bluroeApp.directive:feedMenu
 * @description
 * # feedMenu
 */
angular.module('bluroeApp')
  .directive('feedMenu', function () {
    return {
      templateUrl: 'views/widgets/feedMenu.html',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the popupMenu directive');
        scope.feed.showDropList = false;
        scope.feed.togglePopup = function() {
        	scope.feed.showDropList = ! scope.feed.showDropList;
        }
  	    $(document).bind('click', function(event){
  	        var isClickedElementChildOfPopup = element
  	            .find(event.target)
  	            .length > 0;

  	        if (isClickedElementChildOfPopup)
  	            return;

  	        scope.$apply(function(){
  	            scope.feed.showDropList = false;
  	        });
	        });
      }
    };
  });
