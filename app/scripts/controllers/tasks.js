'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('TasksCtrl', function (navLine) {

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

    this.tasks = [
    	{'name':'Shizu','type':'taskList','children':[
            {'name':'Shit happening','owner':'shaji','start':'-','due':'-','duration':'3','progress':20,'createdBy':'basi'},
            {'name':'Get ready','owner':'shaji','start':'-','due':'-','duration':'2','progress':30,'createdBy':'alma'},
            {'name':'Make the crowd','owner':'shaji','start':'-','due':'-','duration':'5','progress':40,'createdBy':'soshi'},
        ]}, 
        {'name':'Rozario','type':'taskList','children':[ 
            {'name':'Make the crowd','owner':'shaji','start':'-','due':'-','duration':'5','progress':40,'createdBy':'soshi'},
        ]}, 
        {'name':'Pragdo','type':'taskList','children':[
            {'name':'Make the crowd','owner':'shaji','start':'-','due':'-','duration':'5','progress':40,'createdBy':'soshi'},
            {'name':'Man on fire','owner':'shaji','start':'-','due':'-','duration':'3','progress':20,'createdBy':'basi'},
            {'name':'Get ready','owner':'shaji','start':'-','due':'-','duration':'2','progress':30,'createdBy':'alma'},
        ]}, 
        {'name':'Seamleass','type':'taskList','children':[
            {'name':'Blue ride','owner':'shaji','start':'-','due':'-','duration':'3','progress':20,'createdBy':'basi'},
            {'name':'Get ready','owner':'shaji','start':'-','due':'-','duration':'2','progress':30,'createdBy':'alma'},
            {'name':'Make the crowd','owner':'shaji','start':'-','due':'-','duration':'5','progress':40,'createdBy':'soshi'},
            {'name':'Man on fire','owner':'shaji','start':'-','due':'-','duration':'3','progress':20,'createdBy':'basi'},
            {'name':'Get ready','owner':'shaji','start':'-','due':'-','duration':'2','progress':30,'createdBy':'alma'},
        ]}, 
        {'name':'Sample ready','type':'task','owner':'shaji','start':'-','due':'-','duration':'2','progress':30,'createdBy':'alma'},
        {'name':'yeah ready','type':'task','owner':'shaji','start':'-','due':'-','duration':'2','progress':30,'createdBy':'alma'},
        {'name':'Shitzu ready','type':'task','owner':'shaji','start':'-','due':'-','duration':'2','progress':30,'createdBy':'alma'},
    ]
  });
