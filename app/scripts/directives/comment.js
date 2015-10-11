'use strict';

/**
 * @ngdoc directive
 * @name bluroeApp.directive:comment
 * @description
 * # comment
 */
angular.module('bluroeApp')
  .directive('comment', function () {
    return {
      templateUrl: 'views/widgets/comment.html',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the comment directive');
      }
    };
  });
