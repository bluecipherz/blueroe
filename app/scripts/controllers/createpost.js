'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:CreatepostCtrl
 * @description
 * # CreatepostCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('CreatepostCtrl', function ($scope, Status, Hoster, TokenHandler){
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
                    formData.append('token', TokenHandler.getToken())
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
