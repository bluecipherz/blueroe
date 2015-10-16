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

  });
