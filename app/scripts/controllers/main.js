'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
    .controller('MainCtrl', function ($scope, feedFactory, SliderService, Comment, TokenHandler, Status, Project ,Spinner,$interval) {

        var vm = this;

        vm.projects = [];
        vm.feeds = feedFactory.getFeeds; 

        var updateProjects = function() {
            vm.projects = Project.getProjects();
            // console.log($scope.projects);
        }

        if(Project.alreadyFetched()) {
            updateProjects();
        } else {
            Project.onFetchProjects(updateProjects);
        }
        
        var updateFeeds = function() {
            vm.feeds = feedFactory.getFeeds();
            console.log('feedFetching complete : ' + vm.feeds.length);
            vm.feedLoader = true;
        }

        // if(feedFactory.feedsAlreadyFetched()) {
            // console.log('feeds already fetched');
            // updateFeeds();
        // } else {
            // console.log('fetching feeds');
            // vm.feedLoader = false;
            feedFactory.onFetchFeeds(updateFeeds);
        // }

        this.refreshFeeds = function(){
            vm.feedLoader = false;
            feedFactory.update(updateFeeds);
        }

        $scope.postComment = function(feed) {
            console.log('MainCtrl');
            Comment.postComment({
                feedid:feed.id, comment:feed.comment
            }).$promise.then(function(result) {
                var comment = result.comment;
                comment.owner = TokenHandler.getUser();
                if(feed.additional_type != 'CommentPosted') {
                    feed.additional_type = 'CommentPosted';
                    // console.log(feed.additional_type)
                    feed.additional_subject_id = comment.id;
                    feed.additional_subject_type = 'App\\Comment';
                    feed.additional_origin = comment.owner;
                }
                feed.comments.push(comment);
            });
            feed.comment = "";
            feed.showDetails = false;
        }

        $scope.deleteComment = function(index, feed, comment) {
            Comment.deleteComment({
                feedid:feed.id, commentid:comment.id
            }).$promise.then(function(result) {
                if(feed.type == 'CommentPosted') {
                    feed.context.comments.splice(index, 1);
                } else {
                    feed.comments.splice(index, 1);
                }
            });
        }

        $scope.removeStatus = function(index, feed) {
            console.log('removing feed:');
            console.log(feed);
            var status = {
                statusid: feed.subject.id
            };
            if(feed.project) {
                status.projectid = feed.project.id;
            }
            Status.deleteStatus(status).$promise.then(function(result) {
                feedFactory.removeFeed(feed);
                updateFeeds();
            });
        }



        //
        //var testCtrl1ViewModel = $scope.$new(); //You need to supply a scope while instantiating.
        ////Provide the scope, you can also do $scope.$new(true) in order to create an isolated scope.
        ////In this case it is the child scope of this scope.
        //$controller('AsideCtrl',{$scope : testCtrl1ViewModel });
        //testCtrl1ViewModel.myMethod(); //And call the method on the newScope.

        /* Grid Stuffs */


         var dailyNotesData = [ {'head':'Sorry man','description': 'I cant complete the whole shit you,ve told me to','foot':'08 Jan'},
            {'head':'You know ?','description': 'i worked till 4 and am im dissapointed cuz i cant complete it','foot':'08 Jan' },
            {'head':'Popup box','description': 'I have written some code for the stander popup box, so next time its gonna be easy','foot':'08 Jan' },
            {'head':'Yeah thats enough for today #Sleeping','description': 'zzz..!!!','foot':'08 Jan' },
            {'head':'Go get it !','description': 'Some times the Best gain is to loss','foot':'08 Jan' },
            {'head':'Angular','description': 'Taking too much time to learn, SORRY!!! :) ','foot':'08 Jan' }
         ];

        $scope.dailyNotes = dailyNotesData;
        $(".Bslider .Bframe").first().show();

        var index = 0;
        var count = dailyNotesData.length;
        // console.log($('.Bslider').children().length);
        var SliderEngine = function() {
            $('.Bslider .Bframe').eq(index).fadeOut(function() {
                if (index+1 == count){
                    index = -1;
                }

                $('.Bslider .Bframe').eq(index + 1).fadeIn(function() {
                    index++;
                });
            });
        }
        $interval(SliderEngine, 10000);


    });