'use strict';

/**
 * @ngdoc directive
 * @name bluroeApp.directive:attachment
 * @description
 * # attachment
 */
angular.module('bluroeApp')
  .directive('attachment', function () {
    return {
      templateUrl: 'views/widgets/attachment.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the attachment directive');
      }
    };
  });
