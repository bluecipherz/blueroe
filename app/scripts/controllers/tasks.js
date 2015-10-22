'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('TasksCtrl', function (navLine, Task, $scope,TokenHandler, Hoster,statusBar,Story,Project, $resource) {

    statusBar.updateStatus('From here you can view user stories and add them to release backlogs');

    var vm = this; 

    //Prjects
    vm.projects = Project.getProjects();


    vm.selectedTab = 1;  

    navLine.navLine($('#myTasksNavLine'),vm.selectedTab);  
  	vm.selectTab = function(tab) {
        vm.selectedTab = tab; 
        var ele =  $('#myTasksNavLine');
        navLine.navLine(ele,tab); 
        if (tab == 2) {vm.slist = slist;};
    } 

    vm.isSelected = function(tab) {
        return vm.selectedTab == tab; 
        if (tab == 2) {vm.slist = slist; $scope.$apply; console.log('shit'); };
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

    // Task.onFetch(function() {
    //     vm.tasklists = Task.getTaskLists(); 
    // });

    vm.tlist = [ 
        // {'id':1,'name':'Refactoring Iceblocks', 'released':false,'description':'Cool tasks are always cool. So do this !!','priority':1,'startDate':'dec 10','endDate':'dec 30','duration':'7','durationUnit':'h'}, 
        // {'id':2,'name':'Streaming section', 'released':false,'description':'This is one of the besttask ever i ve seen in my life time : )','priority':0,'startDate':'dec 13','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        // {'id':3,'name':'Urgent Completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8','durationUnit':'h'}, 
        // {'id':4,'name':'Elangent Model shift', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
        // {'id':5,'name':'Bug trakking system', 'released':false,'description':'This task is for powerful people.. Yeah you..! ','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        // {'id':6,'name':'Featured blog completion', 'released':false,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6','durationUnit':'h'}, 
        // {'id':7,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
        // {'id':8,'name':'Trapped module refactoring', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        // {'id':9,'name':'Smooth UI Design', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'4','durationUnit':'h'}, 
        // {'id':10,'name':'Refactoring Iceblocks', 'released':false,'description':'Major refactor needed in the sublimentory section of zylanfuzku Masked version.Its all about the stuffs and stone of the rechard steven.','priority':0,'startDate':'dec 1','status':'Comleted','duration':'7','durationUnit':'h'}, 
        // {'id':11,'name':'Urgent Completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8','durationUnit':'h'}, 
        // {'id':12,'name':'Elangent Model shift', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
        // {'id':13,'name':'Bug trakking system', 'released':false,'description':'This task is for powerful people.. Yeah you..! ','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        // {'id':14,'name':'Featured blog completion', 'released':false,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6','durationUnit':'h'}, 
        // {'id':15,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
        // {'id':16,'name':'Trapped module refactoring', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        // {'id':17,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
        // {'id':18,'name':'Trapped module refactoring', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        // {'id':19,'name':'Smooth UI Design', 'released':false,'description':'This is a urgent task . U should make the system flow for ever','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'4','durationUnit':'h'}, 
        // {'id':20,'name':'Refactoring Iceblocks', 'released':false,'description':'Major refactor needed in the sublimentory section of zylanfuzku Masked version.Its all about the stuffs and stone of the rechard steven.','priority':0,'startDate':'dec 1','status':'Comleted','duration':'7','durationUnit':'h'}, 
        // {'id':21,'name':'Urgent Completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8','durationUnit':'h'}, 
        // {'id':22,'name':'Elangent Model shift', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
        // {'id':23,'name':'Bug trakking system', 'released':false,'description':'This task is for powerful people.. Yeah you..! ','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        // {'id':24,'name':'Featured blog completion', 'released':false,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6','durationUnit':'h'}, 
        // {'id':25,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
        // {'id':26,'name':'Trapped module refactoring', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        // {'id':27,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
        // {'id':28,'name':'Trapped module refactoring', 'released':false,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
        
    ];
    
    TokenHandler.onTempLogin(function() {
        TokenHandler.wrapActions($resource(Hoster.getHost() + '/projects/6/stories'), ['query'])
            .query().$promise.then(function(response) {
                vm.tlist = response;
                console.log(response);
                console.log('recieved items ' + response.length);
            });
    });
    // $resource(Hoster.getHost() + '/projects/6/stories').query().$promise.then(function() {
    //     console.log('cee cee fly');
    // });

    var slist = [ 
        {'id':1,'title':'Awesome Sprint','children':
            [ 
                {'id':1,'name':'Refactoring Iceblocks', 'released':true,'description':'Cool tasks are always cool. So do this !!','priority':1,'startDate':'dec 10','endDate':'dec 30','duration':'7','durationUnit':'h'}, 
                {'id':2,'name':'Streaming section', 'released':true,'description':'This is one of the besttask ever i ve seen in my life time : )','priority':0,'startDate':'dec 13','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':3,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
                {'id':4,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
            ]
        }  ,
        {'id':2,'title':'Strom roni','children':
            [ 
                {'id':4,'name':'Elangent Model shift', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
                {'id':5,'name':'Bug trakking system', 'released':true,'description':'This task is for powerful people.. Yeah you..! ','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':6,'name':'Featured blog completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6','durationUnit':'h'}, 
                {'id':7,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
                {'id':8,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
            ]
        }  ,
        {'id':3,'title':'Zedgo max','children':
            [ 
                {'id':1,'name':'Urgent Completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8','durationUnit':'h'}, 
                {'id':2,'name':'Elangent Model shift', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
                {'id':3,'name':'Bug trakking system', 'released':true,'description':'This task is for powerful people.. Yeah you..! ','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':4,'name':'Featured blog completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6','durationUnit':'h'}, 
                {'id':5,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
                {'id':6,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
            ]
        }  ,
        {'id':4,'title':'Dromex ','children':
            [ 
                {'id':1,'name':'Refactoring Iceblocks', 'released':true,'description':'Cool tasks are always cool. So do this !!','priority':1,'startDate':'dec 10','endDate':'dec 30','duration':'7','durationUnit':'h'}, 
                {'id':2,'name':'Streaming section', 'released':true,'description':'This is one of the besttask ever i ve seen in my life time : )','priority':0,'startDate':'dec 13','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':3,'name':'Urgent Completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8','durationUnit':'h'}, 
                {'id':4,'name':'Elangent Model shift', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
                {'id':5,'name':'Elangent Model shift', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
                {'id':6,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':7,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
                {'id':8,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
            ]
        } ,
        {'id':1,'title':'Awesome Sprint','children':
            [ 
                {'id':1,'name':'Refactoring Iceblocks', 'released':true,'description':'Cool tasks are always cool. So do this !!','priority':1,'startDate':'dec 10','endDate':'dec 30','duration':'7','durationUnit':'h'}, 
                {'id':2,'name':'Streaming section', 'released':true,'description':'This is one of the besttask ever i ve seen in my life time : )','priority':0,'startDate':'dec 13','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':3,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
                {'id':4,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
            ]
        }  ,
        {'id':2,'title':'Strom roni','children':
            [ 
                {'id':4,'name':'Elangent Model shift', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
                {'id':5,'name':'Bug trakking system', 'released':true,'description':'This task is for powerful people.. Yeah you..! ','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':6,'name':'Featured blog completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6','durationUnit':'h'}, 
                {'id':7,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
                {'id':8,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
            ]
        }  ,
        {'id':3,'title':'Zedgo max','children':
            [ 
                {'id':1,'name':'Urgent Completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8','durationUnit':'h'}, 
                {'id':2,'name':'Elangent Model shift', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
                {'id':3,'name':'Bug trakking system', 'released':true,'description':'This task is for powerful people.. Yeah you..! ','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':4,'name':'Featured blog completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6','durationUnit':'h'}, 
                {'id':5,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
                {'id':6,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
            ]
        }  ,
        {'id':4,'title':'Dromex ','children':
            [ 
                {'id':1,'name':'Refactoring Iceblocks', 'released':true,'description':'Cool tasks are always cool. So do this !!','priority':1,'startDate':'dec 10','endDate':'dec 30','duration':'7','durationUnit':'h'}, 
                {'id':2,'name':'Streaming section', 'released':true,'description':'This is one of the besttask ever i ve seen in my life time : )','priority':0,'startDate':'dec 13','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':3,'name':'Urgent Completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8','durationUnit':'h'}, 
                {'id':4,'name':'Elangent Model shift', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
                {'id':5,'name':'Elangent Model shift', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
                {'id':6,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':7,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
                {'id':8,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
            ]
        } ,
        {'id':1,'title':'Awesome Sprint','children':
            [ 
                {'id':1,'name':'Refactoring Iceblocks', 'released':true,'description':'Cool tasks are always cool. So do this !!','priority':1,'startDate':'dec 10','endDate':'dec 30','duration':'7','durationUnit':'h'}, 
                {'id':2,'name':'Streaming section', 'released':true,'description':'This is one of the besttask ever i ve seen in my life time : )','priority':0,'startDate':'dec 13','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':3,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
                {'id':4,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
            ]
        }  ,
        {'id':2,'title':'Strom roni','children':
            [ 
                {'id':4,'name':'Elangent Model shift', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
                {'id':5,'name':'Bug trakking system', 'released':true,'description':'This task is for powerful people.. Yeah you..! ','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':6,'name':'Featured blog completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6','durationUnit':'h'}, 
                {'id':7,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
                {'id':8,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
            ]
        }  ,
        {'id':3,'title':'Zedgo max','children':
            [ 
                {'id':1,'name':'Urgent Completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8','durationUnit':'h'}, 
                {'id':2,'name':'Elangent Model shift', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
                {'id':3,'name':'Bug trakking system', 'released':true,'description':'This task is for powerful people.. Yeah you..! ','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':4,'name':'Featured blog completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6','durationUnit':'h'}, 
                {'id':5,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
                {'id':6,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
            ]
        }  ,
        {'id':4,'title':'Dromex ','children':
            [ 
                {'id':1,'name':'Refactoring Iceblocks', 'released':true,'description':'Cool tasks are always cool. So do this !!','priority':1,'startDate':'dec 10','endDate':'dec 30','duration':'7','durationUnit':'h'}, 
                {'id':2,'name':'Streaming section', 'released':true,'description':'This is one of the besttask ever i ve seen in my life time : )','priority':0,'startDate':'dec 13','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':3,'name':'Urgent Completion', 'released':true,'description':'This is a urgent task . U should make the system flow for ever','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8','durationUnit':'h'}, 
                {'id':4,'name':'Elangent Model shift', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
                {'id':5,'name':'Elangent Model shift', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5','durationUnit':'h'}, 
                {'id':6,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
                {'id':7,'name':'Quick finish', 'released':true,'description':'Super awesome task you will love it i know it, can you just finish this.. ? sothat we can move On..','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7','durationUnit':'h'}, 
                {'id':8,'name':'Trapped module refactoring', 'released':true,'description':'Super awesome task you will love it i know ...!!','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2','durationUnit':'h'}, 
            ]
        } ,
    ];

    //vm.tlist = vm.projects[0].stories;
    //console.log( vm.tlist);
    vm.selectSprint = false;
    vm.keyPressed = false;
    vm.quickView = false;
    vm.nameSave = function ($event,data){
        if($event.keyCode == 13){ 
            data.nameEdit = false; 
            $event.target.blur();
            vm.keyPressed = true; 
            Story.updateStory({story:data.id,name:data.name},function(){
                statusBar.notify('Name saved',30,4000);
                data.name = $event.target.value;
            },function(){
                statusBar.notify('SERVER ERROR : Name is not saved',0,5000);
                statusBar.updateStatus('SERVER ERROR : Name is not saved',0,5000);
                data.name = data.tempName; 
            });
        }else
        if($event.keyCode == 27){ 
            data.nameEdit = false;  
            $event.target.blur(); 
            vm.keyPressed = true;
            data.name = data.tempName;  
            statusBar.updateStatus('Name is not saved');
        }else{
            statusBar.updateStatus('Press "Enter" to save or "Esc" to cancel',0);
        } 
    }
    vm.descSave = function ($event,data){
        if($event.keyCode == 13){   
            data.descEdit = false; 
            $event.target.blur();
            vm.keyPressed = true;
            Story.updateStory({story:data.id,name:data.description},function(){
                statusBar.notify('Description saved',30,4000);
                data.description = $event.target.value;
            },function(){
                statusBar.notify('SERVER ERROR : Description is not saved',0,5000);
                statusBar.updateStatus('SERVER ERROR : Description is not saved',0,5000);
                data.description = data.tempDesc; 
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
    vm.cancelNameEdit = function(data){
        if(!vm.keyPressed){
            data.nameEdit = false;  
            data.name = data.tempName;  
            statusBar.updateStatus('Name is not saved'); 
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
    vm.nameClick = function(data){
        data.tempName = data.name;
        data.nameEdit = true; 
        statusBar.updateStatus('Now you can edit the Name');
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
            if(vm.markedCart.length > 0){
                vm.selectSprint = true;
                statusBar.updateStatus('Select sprint');
            }else{ 
                statusBar.updateStatus('Select atleast 1 story');
            }
        }else{
            vm.markModeVar = true;
            statusBar.updateStatus('Mark mode is on');
        } 
    } 
    vm.updateBacklog = function(sprintId){
        vm.selectSprint = false; // Severe performance issue on GUI.  
        console.log("this is var "+vm.selectSprint);
        if(vm.selectedTab == 1){
            if(vm.markedCart.length < 1){
                statusBar.updateStatus( 'Nothing was added to the release log');
            }else{ 
                vm.processingMB = true;
                var StoryList = vm.markedCart.map(function(value,index) { return value['id']; });
                Story.addToSprint({sprint:sprintId,stories:StoryList},function(){
                    statusBar.notify(vm.markedCart.length + ' stories were added to the release log',30,7000);
                    statusBar.updateStatus("done!");
                    angular.forEach(vm.markedCart, function (data, index) { 
                        data.marked = false;
                        data.released = true; 
                    });  
                    vm.markedCart = [];
                    vm.processingMB = false;
                },function(){
                    statusBar.notify('SERVER ERROR : Stories were not added to the release log',0,5000); 
                    statusBar.updateStatus("done!");
                    vm.processingMB = false;
                });
            }
        }else if(vm.selectedTab == 2){ 
            if(vm.markedCart.length < 1){
                statusBar.updateStatus('Nothing was removed from the release log');
            }else{ 
                Story.removeFromSprint({sprint:sprintId,stories:storyList},function(){
                    statusBar.notify(vm.markedCart.length + ' stories were removed to the release log',30,7000);
                    statusBar.updateStatus("done!");
                    angular.forEach(vm.markedCart, function (data, index) { 
                        data.marked = false;
                        data.released = true; 
                    });  
                    vm.markedCart = [];
                    vm.processingMB = false;
                },function(){
                    statusBar.notify('SERVER ERROR : Stories were not removed to the release log',0,5000); 
                    statusBar.updateStatus('SERVER ERROR : Stories were not removed to the release log',0,5000); 
                    vm.processingMB = false;
                });
            }
        } 
        markedStoriesName = '';
        vm.markModeVar = false;
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
        statusBar.updateStatus(data.name + ' are added to release backlogs');
    }
    vm.removeFromReleaseBacklog = function(data){
        data.released = false; 
        statusBar.updateStatus(data.name + ' are removed from release backlogs');}
    vm.cancelMarkMode = function(){
        vm.markModeVar = false;
        angular.forEach(vm.markedCart, function (data, index) { 
            data.marked = false; 
            vm.markedCart = [];
        });  
    }
  });
