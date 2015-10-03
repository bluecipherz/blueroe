'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
    .controller('MainCtrl', function ($scope, feedFactory, SliderService, Comment, TokenHandler, Status, Project ,Spinner) {
        $scope.projects = [];
        $scope.feeds = [];
        var feedSpinner = new Spinner('feedSpinner');

        var StateSpinner = new Spinner('StatsSpinner');
        StateSpinner.startSpin();


        var updateProjects = function() {
            $scope.projects = Project.getProjects();
            // console.log($scope.projects);
        }

        if(Project.alreadyFetched()) {
            updateProjects();
        } else {
            Project.onFetchProjects(updateProjects);
        }
        
        var updateFeeds = function() {
            $scope.feeds = feedFactory.getFeeds();
            console.log('feedFecthing complete');
            feedSpinner.stopSpin();
        }

        if(feedFactory.feedsAlreadyFetched()) {
            console.log('feeds already fetched');
            updateFeeds();
        } else {
            console.log('fetching feeds');
            feedSpinner.startSpin();
            feedFactory.onFetchFeeds(updateFeeds);
        }

        $scope.updateFeeds = function(){
            // Put your update code here
        }

        $scope.postComment = function(feed) {
            console.log('MainCtrl');
            Comment.postComment({
                feedid:feed.id, comment:feed.comment
            }).$promise.then(function(result) {
                var comment = result.comment;
                comment.owner = TokenHandler.getUser();
                if(feed.type == 'CommentPosted') {
                    feed.context.comments.push(comment);
                } else {
                    feed.comments.push(comment);
                }
            });
            feed.comment = "";
            feed.showDetails = false;
        }

        $scope.deleteComment = function(index, feed, comment) {
            var d = Comment.deleteComment({
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
            var status = {
                statusid: feed.subject.id
            };
            if(feed.project) {
                status.projectid = feed.project.id;
            }
            Status.deleteStatus(status).$promise.then(function(result) {
                $scope.feeds.splice(index, 1);
                console.log($scope.feeds);
            });
        }



        //
        //var testCtrl1ViewModel = $scope.$new(); //You need to supply a scope while instantiating.
        ////Provide the scope, you can also do $scope.$new(true) in order to create an isolated scope.
        ////In this case it is the child scope of this scope.
        //$controller('AsideCtrl',{$scope : testCtrl1ViewModel });
        //testCtrl1ViewModel.myMethod(); //And call the method on the newScope.

    });
