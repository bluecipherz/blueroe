'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:MilestonesCtrl
 * @description
 * # MilestonesCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('MilestonesCtrl', function () {
    
  	this.milestones = [
  		{id:1,name:'Shitzu',owner:'prickzen',start_date:'today',end_date:'tommorow',tasks:'10'},
  		{id:1,name:'Shitzu',owner:'prickzen',start_date:'today',end_date:'tommorow',tasks:'10'},
  		{id:1,name:'Shitzu',owner:'prickzen',start_date:'today',end_date:'tommorow',tasks:'10'},
  		{id:1,name:'Shitzu',owner:'prickzen',start_date:'today',end_date:'tommorow',tasks:'10'},
  		{id:1,name:'Shitzu',owner:'prickzen',start_date:'today',end_date:'tommorow',tasks:'10'}
  	];

  });
