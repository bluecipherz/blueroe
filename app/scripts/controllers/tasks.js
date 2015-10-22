'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('TasksCtrl', function (navLine, Task, $scope, Hoster,statusBar) {

    statusBar.updateStatus('From here you can view user stories and add them to release backlogs');

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
        {'id':1,'title':'Refactoring Iceblocks', 'released':false,'description':'Cool tasks are always cool. So do this !!','priority':1,'startDate':'dec 10','endDate':'dec 30','duration':'7','durationUnit':'h'}, 
        {'id':2,'title':'Streaming section', 'released':false,'description':'This is one of the besttask ever i ve seen in my life time : )','priority':0,'startDate':'dec 13','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        {'id':3,'title':'Urgent Completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8','durationUnit':'h'}, 
        {'id':4,'title':'Elangent Model shift', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
        {'id':5,'title':'Bug trakking system', 'released':false,'description':'This task is for powerful people.. Yeah you..! ','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        {'id':6,'title':'Featured blog completion', 'released':false,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6','durationUnit':'h'}, 
        {'id':7,'title':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
        {'id':8,'title':'Trapped module refactoring', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        {'id':9,'title':'Smooth UI Design', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'4','durationUnit':'h'}, 
        {'id':10,'title':'Refactoring Iceblocks', 'released':false,'description':'Major refactor needed in the sublimentory section of zylanfuzku Masked version.Its all about the stuffs and stone of the rechard steven.','priority':0,'startDate':'dec 1','status':'Comleted','duration':'7','durationUnit':'h'}, 
        {'id':11,'title':'Urgent Completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8','durationUnit':'h'}, 
        {'id':12,'title':'Elangent Model shift', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
        {'id':13,'title':'Bug trakking system', 'released':false,'description':'This task is for powerful people.. Yeah you..! ','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        {'id':14,'title':'Featured blog completion', 'released':false,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6','durationUnit':'h'}, 
        {'id':15,'title':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
        {'id':16,'title':'Trapped module refactoring', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        {'id':17,'title':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
        {'id':18,'title':'Trapped module refactoring', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        {'id':19,'title':'Smooth UI Design', 'released':false,'description':'This is a urgent task . U should make the system flow for ever','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'4','durationUnit':'h'}, 
        {'id':20,'title':'Refactoring Iceblocks', 'released':false,'description':'Major refactor needed in the sublimentory section of zylanfuzku Masked version.Its all about the stuffs and stone of the rechard steven.','priority':0,'startDate':'dec 1','status':'Comleted','duration':'7','durationUnit':'h'}, 
        {'id':21,'title':'Urgent Completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8','durationUnit':'h'}, 
        {'id':22,'title':'Elangent Model shift', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
        {'id':23,'title':'Bug trakking system', 'released':false,'description':'This task is for powerful people.. Yeah you..! ','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        {'id':24,'title':'Featured blog completion', 'released':false,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6','durationUnit':'h'}, 
        {'id':25,'title':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
        {'id':26,'title':'Trapped module refactoring', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        {'id':27,'title':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
        {'id':28,'title':'Trapped module refactoring', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        
    ];

    vm.titleSave = function ($event,data){
        if($event.keyCode == 13){ 
            data.titleEdit = false; 
            data.title = $event.target.value;
            $event.target.blur();
        }  
        if($event.keyCode == 27){ 
            data.titleEdit = false;  
            $event.target.blur();
        }
    }
    vm.descSave = function ($event,data){
        if($event.keyCode == 13){   
            data.descEdit = false; 
            data.description = $event.target.value;
            $event.target.blur();
        }  
        if($event.keyCode == 27){  
            data.descEdit = false; 
            $event.target.blur();
        }
    }
    vm.markModeVar = false;
    vm.markedCart = [];
    var markedStoriesName = '';
    vm.markMode = function(){
        if(vm.markModeVar){  
            if(vm.selectedTab == 1){
                if(vm.markedCart.length < 1){
                    statusBar.updateStatus(markedStoriesName + '0 stories are added to the release log');
                }else{
                    angular.forEach(vm.markedCart, function (data, index) { 
                        data.marked = false;
                        data.released = true;
                    });
                    statusBar.updateStatus(markedStoriesName + ' are added to the release log'); 
                }
            }else if(vm.selectedTab == 2){
                if(vm.markedCart.length < 1){
                    statusBar.updateStatus(markedStoriesName + '0 stories are removed from the release log');
                }else{
                    angular.forEach(vm.markedCart, function (data, index) { 
                        data.marked = false;
                        data.released = false;
                    });
                    statusBar.updateStatus(markedStoriesName + ' are removed from the release log');
                }
            } 
            markedStoriesName = '';
            vm.markModeVar = false;
            vm.markedCart = [];
        }else{
            vm.markModeVar = true;
            statusBar.updateStatus('Mark mode is on');
        }
    } 
    vm.markBlock = function(data){
        if(vm.markModeVar){  
            data.marked = ! data.marked;
            var dataFound = false;
            angular.forEach(vm.markedCart, function (Markeddata, index) {  
                if(Markeddata.id == data.id){ dataFound = true; }; 
            });
            if(!dataFound){vm.markedCart.push(data);}   
            else{ 
                var index = vm.markedCart.indexOf(data);
                vm.markedCart.splice(index, 1);
            }
            markedStoriesName = '';
            angular.forEach(vm.markedCart, function (data, index) {  
                markedStoriesName += data.title + ', '; 
            }); 
            statusBar.updateStatus('Marked stories : ' + markedStoriesName,0);
        }
    } 
  });
