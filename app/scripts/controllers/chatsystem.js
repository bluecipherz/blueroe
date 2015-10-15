'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:ChatsystemCtrl
 * @description
 * # ChatsystemCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('ChatsystemCtrl', function ($rootScope,navLine) { 
  	var vm = this;

  	vm.VChats = true;

  	this.selected = 2;

    navLine.navLine($('#chatNavLine'),this.selected);

  	this.selectTab = function(tab) {
  		vm.selected = tab;
    	navLine.navLine($('#chatNavLine'),tab);
  	}

  	this.isSelected = function(tab) {
  		return tab == vm.selected;
  	}


  });
