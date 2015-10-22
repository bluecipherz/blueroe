'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('TasksCtrl', function (navLine, Task, $scope, Hoster,statusBar,story) {

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
 
    vm.keyPressed = false;
    vm.titleSave = function ($event,data){
        if($event.keyCode == 13){ 
            data.titleEdit = false; 
            data.title = $event.target.value;
            $event.target.blur();
            vm.keyPressed = true; 
            story.updateStory({story:data.id,name:data.title},function(){
                statusBar.updateStatus('Title saved')
            },function(){
                statusBar.updateStatus('SERVER ERROR : Title is not saved')
            });
        }else
        if($event.keyCode == 27){ 
            data.titleEdit = false;  
            $event.target.blur(); 
            vm.keyPressed = true;
            data.title = data.tempTitle;  
            statusBar.updateStatus('Title is not saved');
        }else{
            statusBar.updateStatus('Press "Enter" to save or "Esc" to cancel',0);
        } 
    }
    vm.descSave = function ($event,data){
        if($event.keyCode == 13){   
            data.descEdit = false; 
            data.description = $event.target.value;
            $event.target.blur();
            vm.keyPressed = true;
            story.updateStory({story:data.id,name:data.description},function(){
                statusBar.updateStatus('Description saved')
            },function(){
                statusBar.updateStatus('SERVER ERROR : Description is not saved')
            });
        }else
        if($event.keyCode == 27){  
            data.descEdit = false; 
            $event.target.blur(); 
            vm.keyPressed = true;
            data.description = data.tempDesc;  
            statusBar.updateStatus('Description in not saved');
        }else{
            statusBar.updateStatus('Press "Enter" to save or "Esc" to cancel',0);
        } 
    }
    vm.cancelTitleEdit = function(data){
        if(!vm.keyPressed){
            data.titleEdit = false;  
            data.title = data.tempTitle;  
            statusBar.updateStatus('Title is not saved'); 
        } 
        vm.keyPressed = false;  
    }
    vm.cancelDescEdit = function(data){
        if(!vm.keyPressed){
            data.descEdit = false;  
            data.description = data.tempDesc;   
            statusBar.updateStatus('Description is not saved');
        } 
        vm.keyPressed = false;  
    }
    vm.titleClick = function(data){
        data.tempTitle = data.title;
        data.titleEdit = true; 
        statusBar.updateStatus('Now you can edit the Title');
    }
    vm.descClick = function(data){
        data.tempDesc = data.description;
        data.descEdit = true
        statusBar.updateStatus('Now you can edit the Description');
    }
    vm.markModeVar = false;
    vm.processingMB = false;
    vm.markedCart = [];
    var markedStoriesName = '';
    vm.markMode = function(){
        if(vm.markModeVar){  
            if(vm.selectedTab == 1){
                if(vm.markedCart.length < 1){
                    statusBar.updateStatus( 'Nothing was added to the release log');
                }else{ 
                    vm.processingMB = true;
                    var storyList = vm.markedCart.map(function(value,index) { return value['id']; });
                    story.addToSprint({sprint:1,stories:storyList},function(){
                        statusBar.updateStatus(vm.markedCart.length + ' stories were added to the release log');
                        angular.forEach(vm.markedCart, function (data, index) { 
                            data.marked = false;
                            data.released = true; 
                        });  
                        vm.markedCart = [];
                        vm.processingMB = false;
                    },function(){
                        statusBar.updateStatus('SERVER ERROR : Stories were not added to the release log'); 
                        vm.processingMB = false;
                    });
                }
            }else if(vm.selectedTab == 2){
                if(vm.markedCart.length < 1){
                    statusBar.updateStatus('Nothing was removed from the release log');
                }else{
                    angular.forEach(vm.markedCart, function (data, index) { 
                        data.marked = false;
                        data.released = false;  
                        vm.markedCart = [];
                    }); 
                    story.removeFromSprint({sprint:1,stories:storyList},function(){
                        statusBar.updateStatus(vm.markedCart.length + ' stories were removed to the release log');
                        angular.forEach(vm.markedCart, function (data, index) { 
                            data.marked = false;
                            data.released = true; 
                        });  
                        vm.markedCart = [];
                        vm.processingMB = false;
                    },function(){
                        statusBar.updateStatus('SERVER ERROR : Stories were not removed to the release log'); 
                        vm.processingMB = false;
                    });
                }
            } 
            markedStoriesName = '';
            vm.markModeVar = false;
        }else{
            vm.markModeVar = true;
            statusBar.updateStatus('Mark mode is on');
        }
    } 
    vm.markBlock = function(data){
        if(vm.markModeVar){
            data.marked = ! data.marked;
            var index = vm.markedCart.indexOf(data);
            if(index > -1) vm.markedCart.splice(index, 1);
            else vm.markedCart.push(data);
            statusBar.updateStatus('Marked stories : ' + vm.markedCart.length,0);
        }
    } 
    vm.addToReleaseBacklog = function(data){ 
        data.released = true; 
        statusBar.updateStatus(data.title + ' are added to release backlogs');
    }
    vm.removeFromReleaseBacklog = function(data){
        data.released = false; 
        statusBar.updateStatus(data.title + ' are removed from release backlogs');}
    vm.cancelMarkMode = function(){
        vm.markModeVar = false;
        statusBar.updateStatus('Mark mode is off');
    }
  });
