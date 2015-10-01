'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
    .controller('IndexCtrl', function ($scope, sidenav, $state) {

        $scope.currState = $state;
        // sidenav factory holds the sidebar data.
        // check for state change and display approriate sidebar
        $scope.$watch('currState.current.name', function(newValue, oldValue) {
          if(newValue == 'home') {
            $scope.asideList = sidenav.getHomeNavs();
          } else if(newValue == 'projects') {
            $scope.asideList = sidenav.getProjectNavs();
          } else {
            $scope.asideList = sidenav.getHomeNavs(); // default
          }
        });  

        $scope.checkIsLink = function(message) {
            return message.type == 'link';
        }
        $scope.checkIsLinkList = function(message) {
            return message.type == 'linkList';
        }

            this.tab = 1;

            this.selectTab = function (setTab){
                this.tab = setTab;
            };
            this.isSelected = function(checkTab) {
                return this.tab === checkTab;
            };

    }).controller('MainCtrl', function ($scope, feedFactory, AsideBarServ, Comment, TokenHandler, Status, Project) {
        $scope.projects = [];

        $scope.feeds = [];

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
            console.log(feedFactory.getFeeds());
        }

        if(feedFactory.feedsAlreadyFetched()) {
            console.log('feeds already fetched');
            updateFeeds();
        } else {
            console.log('fetching feeds');
            feedFactory.onFetchFeeds(updateFeeds);
        }

        $scope.loadNewFilter = function (){
            AsideBarServ.updateAside;
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

    }).controller('TabController', function ($scope, Status, Hoster){
        $scope.selectedTab = 1;

        $scope.selectTab = function(tab) {
            $scope.selectedTab = tab;
        }

        $scope.isSelected = function(tab) {
            return $scope.selectedTab == tab;
        }

        $scope.dropzoneConfig = {
            options: { // passed into the Dropzone constructor
                url: Hoster.getHost() + '/api/attachments'
            },
            eventHandlers: {
                sending: function (file, xhr, formData) {
                    console.log('sending');
                },
                success: function (file, response) {
                },
                fail: function(response) {
                    console.log('upload failed');
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
                $scope.feeds.push(results.feed)
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
            console.log('uploadfile')
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
