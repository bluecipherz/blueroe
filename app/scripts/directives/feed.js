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
        // element.text('this is the feed directive');

       //  scope.feed.showDropList = false;
       //  scope.feed.togglePopup = function() {
       //  	scope.feed.showDropList = ! scope.feed.showDropList;
       //  }
  	    // $(document).bind('click', function(event){
  	    //     var isClickedElementChildOfPopup = element
  	    //         .find(event.target)
  	    //         .length > 0;

  	    //     if (isClickedElementChildOfPopup)
  	    //         return;

  	    //     scope.$apply(function(){
  	    //         scope.feed.showDropList = false;
  	    //     });
	      //  });

        // scope.postComment = function(feed) {
        //     Comment.postComment({
        //         feedid:feed.id, comment:feed.comment
        //     }).$promise.then(function(result) {
        //         var comment = result.comment;
        //         comment.owner = TokenHandler.getUser();
        //         if(feed.additional_type != 'CommentPosted') {
        //             feed.additional_type = 'CommentPosted';
        //             // console.log(feed.additional_type)
        //             feed.additional_subject_id = comment.id;
        //             feed.additional_subject_type = 'App\\Comment';
        //             feed.additional_origin = comment.owner;
        //         }
        //         feed.comments.push(comment);
        //     });
        //     feed.comment = "";
        //     feed.showDetails = false;
        // }

        // scope.deleteComment = function(index, feed, comment) {
        // 	console.log('commentid ' + comment.id);
        //     Comment.deleteComment({
        //       feedid:feed.id, commentid:comment.id
        //     // }).$promise.then(function(result) {
        //     //   feed.comments.splice(index, 1);
        //     });
        // }

        // scope.removeStatus = function(index, feed) {
        //     console.log('removing feed:');
        //     console.log(feed);
        //     var status = {
        //         statusid: feed.subject.id
        //     };
        //     if(feed.project) {
        //         status.projectid = feed.project.id;
        //     }
        //     Status.deleteStatus(status).$promise.then(function(result) {
        //         feedFactory.removeFeed(feed);
        //         // updateFeeds();
        //     });
        // }


      }
    };
  });
