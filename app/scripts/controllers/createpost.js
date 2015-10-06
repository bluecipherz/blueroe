'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:CreatepostCtrl
 * @description
 * # CreatepostCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('CreatepostCtrl', function ($scope, Status, Hoster, TokenHandler, $state, $stateParams, Document, feedFactory){
        
        var vm = this;

        vm.selectedTab = 2;

        vm.selectTab = function(tab) {
            vm.selectedTab = tab;
        }

        vm.isSelected = function(tab) {
            return vm.selectedTab == tab;
        }

        if($state.current.name == 'projectShow') {
            vm.status = {project: $stateParams.id};
            vm.task = {project: $stateParams.id};
            vm.milestone = {project: $stateParams.id};
            vm.fileupload = {project: $stateParams.id};
            vm.forum = {project: $stateParams.id};
            vm.bug = {project: $stateParams.id};
        }

        $scope.dropzoneConfig = {
            options: { // passed into the Dropzone constructor
                url: Hoster.getHost() + '/api/tempupload'
            },
            eventHandlers: {
                sending: function (file, xhr, formData) {
                    // formData.append('token', TokenHandler.getToken())
                    xhr.setRequestHeader('Authorization', 'Bearer: ' + TokenHandler.getToken());
                    console.log('sending');
                },
                success: function (file, response) {
                    console.log('tempfile : ' + response.file);
                },
                fail: function(response) {
                    console.log('upload failed');
                }
            }
        };

        vm.postStatus = function() {
            console.log('poststatus ' + vm.status.project);
            var data = {
                message: vm.status.message,
                projectid: vm.status.project
            };
            console.log(data);
            Status.postStatus(data).$promise.then(function(results) {
                feedFactory.pushFeed(results.feed)
                vm.status.message = "";
            });
        }

        vm.addTask = function() {
            console.log('addtask')
        }

        vm.addMilestone = function() {
            console.log('addmilestone')
        }

        vm.uploadFile = function() {
            console.log('uploadfile')
            var data = {
                file: vm.file,
                projectid: vm.uploadfile.project,
                description: vm.uploadfile.description
            };
            Document.uploadFile(data).$promise.then(function(response) {
                feedFactory.push(response.feed);
                // console.log(response);
            }, function(response) {
                console.log("errr")
            });
        }

        vm.postForum = function() {
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
