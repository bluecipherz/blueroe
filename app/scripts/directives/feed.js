'use strict';

/**
 * @ngdoc directive
 * @name bluroeApp.directive:feed
 * @description
 * # feed
 */
angular.module('bluroeApp')
  .directive('feed', function (feedFactory, Comment, Status, TokenHandler) {
    return {
      replace: true,
      templateUrl: 'views/widgets/feedSet.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.feed.showDetails = false;
        scope.feed.showPostComment = (scope.feed.comments.length > 0); // nocomments = false

        scope.feed.toggleCommentDetails = function() {
          scope.feed.showDetails = ! scope.feed.showDetails;
          if(!scope.feed.showDetails && scope.feed.comments.length == 0) scope.feed.showPostComment = false;
          else scope.feed.showPostComment = ! scope.feed.showDetails;
        }
        scope.feed.toggleCommentPost = function() {
          scope.feed.showDetails = true;
          scope.feed.showPostComment = false
        }

      }
    };
  });
