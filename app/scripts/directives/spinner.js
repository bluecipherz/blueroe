'use strict';

/**
 * @ngdoc directive
 * @name bluroeApp.directive:Spinner
 * @description
 * # Spinner
 */
angular.module('bluroeApp')
  .directive('spinner', function () {
        return {
            templateUrl: 'views/widgets/Spinner.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                // element.text('this is the attachment directive');
            }
        };
    });
