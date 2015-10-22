'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:MilestonesCtrl
 * @description
 * # MilestonesCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('MilestonesCtrl', function (navLine) { 
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
 
    vm.tlist = [ 
        {'id':1,'title':'Awesome Sprint','children':[
            {'type':'TaskList','title':'shiju','children':[
                {'type':'Task','title':'task 2', 'released':0,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':0,'startDate':'dec 1','status':'Comleted','duration':7,'durationUnit':'h'}, 
                {'type':'Task','title':'task 5', 'released':0,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':0,'startDate':'dec 1','status':'Comleted','duration':7,'durationUnit':'h'}, 
                {'type':'Task','title':'task 1', 'released':0,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':0,'startDate':'dec 1','status':'Comleted','duration':7,'durationUnit':'h'}, 
            ]},
            {'type':'Task','title':'task asd', 'released':0,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':0,'startDate':'dec 1','status':'Comleted','duration':7,'durationUnit':'h'}, 
            {'type':'Task','title':'task asd', 'released':0,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':0,'startDate':'dec 1','status':'Comleted','duration':7,'durationUnit':'h'}, 
            {'type':'Task','title':'task asdasd', 'released':0,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':0,'startDate':'dec 1','status':'Comleted','duration':7,'durationUnit':'h'}, 
            
            ]
        }
    ];

  });
