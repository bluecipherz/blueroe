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
        vm.feeds = []; 

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
            console.log('feedFecthing complete');
            vm.feedLoader = true;
        }

        if(feedFactory.feedsAlreadyFetched()) {
            console.log('feeds already fetched');
            updateFeeds();
        } else {
            console.log('fetching feeds');
            vm.feedLoader = false;
            feedFactory.onFetchFeeds(updateFeeds);
        }

        this.updateFeeds = function(){
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
        console.log($('.Bslider').children().length);
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


    }).controller('TabController', function ($scope, Status, Hoster, TokenHandler, Document){
        $scope.selectedTab = 1;

        var vm = this;

        $scope.selectTab = function(tab) {
            $scope.selectedTab = tab;
        }

        $scope.isSelected = function(tab) {
            return $scope.selectedTab == tab;
        }

        // DROPZONE
        $scope.dropzoneConfig = {
            options: { // passed into the Dropzone constructor
                url: Hoster.getHost() + '/api/tempupload',
                 
                // paramName: 'file'
            },
            eventHandlers: {
                sending: function (file, xhr, formData) {
        			// formData.append('token', TokenHandler.getToken());
                    xhr.setRequestHeader('Authorization', 'Bearer: ' + TokenHandler.getToken());
                    console.log('sending');
                },
                success: function (file, response) {
                    console.log('tempfile : ' + response.file);
                    vm.file = response.file;
                },
                error: function(response) {
                    console.log(response);
                }
            }
        };

        $scope.postStatus = function() {
            console.log('poststatus ' + $scope.status.project);
            var data = {
                message: $scope.status.message,
                projectid: $scope.status.project
            };
            console.log(data);
            Status.postStatus(data).$promise.then(function(results) {
                $scope.feeds.push(results.feed);
                $scope.status.message = "";
            });
        }

        $scope.addTask = function() {
            console.log('addtask')
        }

        $scope.addMilestone = function() {
            console.log('addmilestone')
        }

        $scope.uploadFile = function() {
            console.log('uploadfile');
            var data = {
                file: vm.file,
                projectid: $scope.uploadfile.project,
                description: $scope.uploadfile.description
            };
            Document.uploadFile(data).$promise.then(function(response) {
                $scope.feeds.push(response.feed);
                // console.log(response);
            }, function(response) {
                console.log("errr")
            });
        }

        $scope.postForum = function() {
            console.log('postforum')
        }

    }).controller('AsideController', function (){
        this.tab = 1;

        this.selectTab = function (setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    })
    .controller('ThemesCtrl', function ($scope, sidenav, $state) {
        $scope.themes = [{'id':'1','name':'Orange' , 'url':'styles/css/theme/orange-theme.css','color':'#ec741a'},
                        {'id':'2','name':'Green' , 'url':'styles/css/theme/green-theme.css','color':'#55cc82'}];
            var loadedTheme = new Array();
        $scope.changeTheme = function($url,$id){
            $('#cssHead link').attr("disabled", "disabled");
            $('link','#cssHead').each(function(){
                loadedTheme.push($(this).attr('id'));
            });
            
            $('#cssHead').append( $('<link rel="stylesheet" type="text/css" />').attr('href', $url) );

        }
        $scope.disableTheme = function(){
            $('#cssHead link').attr("disabled", "disabled");
        }
    });
