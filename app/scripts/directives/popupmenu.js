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
      scope:{
        required:'=required',
        showMenu:'=popupMenu'
      },
      link: function postLink(scope, element, attrs) {
        scope.showMenu = false;
        
        element.click(function(event) {
          if(attrs.required != undefined && scope.required == undefined && scope.showMenu == false) {
            alert(attrs.msg);
          } else {
            console.log('popsicle');
            if(element.find('.pop-child').first().find(event.target).length > 0) return;
            scope.showMenu = !scope.showMenu;
          }
        });

  	    $(document).bind('click', function(event) {
	        var isClickedElementChildOfPopup = element
            .find(event.target)
            .length > 0;

	        if (isClickedElementChildOfPopup)
            return;

	        scope.$apply(function(){
              scope.showMenu = false;
	        });
  	    });
      }
    };
  });

// })(document);