'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('TasksCtrl', function (navLine, Task, $scope, Hoster) {

    var vm = this;

    vm.selectedTab = 1; 
    navLine.navLine($('#myTasksNavLine'),vm.selectedTab);  
  	vm.selectTab = function(tab) {
        vm.selectedTab = tab; 
        var ele =  $('#myTasksNavLine');
        navLine.navLine(ele,tab); 
    } 

    vm.isSelected = function(tab) {
        return vm.selectedTab == tab;
    }

    $scope.dropzoneConfig = {
        options: { // passed into the Dropzone constructor
            url: Hoster.getHost() + '/api/tempupload'
        },
        eventHandlers: {
            sending: function (file, xhr, formData) {
                // formData.append('token', TokenHandler.getToken())
                xhr.setRequestHeader('Authorization', 'Bearer: ' + TokenHandler.getToken());
                console.log('uploading');
            },
            success: function (file, response) {
                console.log('upload success, tempfile : ' + response.file);
            },
            fail: function(response) {
                console.log('upload failed');
                console.log(response)
            }
        }
    };

    Task.onFetch(function() {
        vm.tasklists = Task.getTaskLists();
        console.log(vm.tasklists);
    });
  });
