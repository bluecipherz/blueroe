'use strict';

/**
 * @ngdoc directive
 * @name bluroeApp.directive:feed
 * @description
 * # feed
 */
angular.module('bluroeApp')
  .directive('feed', function () {
    return {
      replace: true,
      templateUrl: 'views/widgets/feedSet.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the feed directive');
      }
    };
  });
