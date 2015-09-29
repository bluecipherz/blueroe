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

    }).controller('MainCtrl', function ($scope, feedFactory, AsideBarServ, Comment) {
        $scope.projects = [
            {'id':'1','name':'project 1'},
            {'id':'2','name':'project 2'},
            {'id':'3','name':'project 3'}
        ];

        $scope.feeds = [];

        // Fetches the time entries from the static JSON file
        // and puts the results on the vm.timeentries array
        var updateFeeds = function() {
            feedFactory.getFeeds().then(function(results) {
                console.log(results);
                $scope.feeds = results;
            }, function(error) { // Check for errors
                console.log(error);
            });
        }

        feedFactory.onFetchFeeds(updateFeeds);
        
        AsideBarServ.setAside('Hello');

        $scope.loadNewFilter = function (){
            AsideBarServ.updateAside;
        }

        $scope.postComment = function(feed) {
            console.log('MainCtrl');
            Comment.postComment({
                feedid:feed.id, comment:feed.comment
            });
            feed.comment = "";
            feed.showDetails = false;
        }

        $scope.deleteComment = function(feed, comment) {
            var d = Comment.deleteComment({
                feedid:feed.id, commentid:comment.id
            });
            $scope.feed.comments.pop(comment);
        }
        //
        //var testCtrl1ViewModel = $scope.$new(); //You need to supply a scope while instantiating.
        ////Provide the scope, you can also do $scope.$new(true) in order to create an isolated scope.
        ////In this case it is the child scope of this scope.
        //$controller('AsideCtrl',{$scope : testCtrl1ViewModel });
        //testCtrl1ViewModel.myMethod(); //And call the method on the newScope.

    }).controller('TabController', function ($scope, Status){
        $scope.selectedTab = 1;

        $scope.selectTab = function(tab) {
            $scope.selectedTab = tab;
        }

        $scope.isSelected = function(tab) {
            return $scope.selectedTab == tab;
        }

        $scope.dropzoneConfig = {
            'options': { // passed into the Dropzone constructor
                'url': 'upload.php'
            },
            'eventHandlers': {
                'sending': function (file, xhr, formData) {
                    console.log('sending');
                },
                'success': function (file, response) {
                }
            }
        };

        $scope.postStatus = function() {
            console.log('poststatus');
            var data = {
                message: $scope.status.message,
                projectid: $scope.status.project
            };
            console.log(data);
            Status.postStatus(data);
        }

        $scope.addTask = function() {
            console.log('addtask')
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
        $scope.themes = [{'id':'1','name':'Orange' , 'url':'styles/css/themes/orange-theme.css','color':'#ec741a'},
                        {'id':'2','name':'Green' , 'url':'styles/css/themes/green-theme.css','color':'#55cc82'}];
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
