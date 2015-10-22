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

    vm.tlist = [ 
        {'title':'task 1', 'released':false,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':1,'startDate':'dec 10','endDate':'dec 30','duration':'7','durationUnit':'h'}, 
        {'title':'task 2', 'released':true,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':0,'startDate':'dec 13','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        {'title':'task 3', 'released':true,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8','durationUnit':'h'}, 
        {'title':'task 4', 'released':false,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
        {'title':'task 5', 'released':false,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        {'title':'task 6', 'released':true,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6','durationUnit':'h'}, 
        {'title':'task 7', 'released':true,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
        {'title':'task 8', 'released':false,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        {'title':'task 9', 'released':true,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'4','durationUnit':'h'}, 
        {'title':'task 10', 'released':false,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':0,'startDate':'dec 1','status':'Comleted','duration':'7','durationUnit':'h'}, 
    ];

    vm.keypress = function ($event,data){
        if($event.keyCode == 13){ 
            data.titleEdit = false; 
            data.descEdit = false; 
            $event.target.blur();
        }
        console.log($event.keyCode);
        if($event.keyCode == 13){ 
            data.titleEdit = false; 
            data.descEdit = false; 
            $event.target.blur();
        }
    }
    vm.markModeVar = false;
    vm.markMode = function(){
        if(vm.markModeVar){
            console.log('adding shits');
            vm.markModeVar = false;
        }else{
            vm.markModeVar = true;
        }
    }
    vm.markBlock = function(data){
        if(vm.markModeVar){ 
            data.released = ! data.released;
            console.log('adding man');
        }
    } 
  });
