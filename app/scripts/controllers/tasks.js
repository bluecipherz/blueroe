'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('TasksCtrl', function (navLine, Task) {

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

    Task.onFetch(function() {
        vm.tasklists = Task.getTaskLists();
        console.log(vm.tasklists);
    });

    vm.tlist = [
        {'title':'task 1', 'released':0,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':1,'startDate':'dec 10','endDate':'dec 30','duration':'7'}, 
        {'title':'task 1', 'released':1,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':0,'startDate':'dec 13','endDate':'dec 14','duration':'2'}, 
        {'title':'task 1', 'released':1,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':3,'startDate':'dec 10','endDate':'dec 14','duration':'8'}, 
        {'title':'task 1', 'released':0,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'5'}, 
        {'title':'task 1', 'released':0,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':1,'startDate':'dec 7','endDate':'dec 14','duration':'2'}, 
        {'title':'task 1', 'released':1,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':3,'startDate':'dec 10','endDate':'dec 23','duration':'6'}, 
        {'title':'task 1', 'released':1,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':0,'startDate':'dec 10','endDate':'dec 24','duration':'7'}, 
        {'title':'task 1', 'released':0,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':3,'startDate':'dec 02','endDate':'dec 14','duration':'2'}, 
        {'title':'task 1', 'released':1,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':2,'startDate':'dec 10','endDate':'dec 14','duration':'4'}, 
        {'title':'task 1', 'released':0,'description':'This task is a task that you cant even tast the task of the task, because you already know that this task is not the real task','priority':0,'startDate':'dec 1','status':'Comleted','duration':'7'}, 
    ];
  });
