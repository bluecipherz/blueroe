'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.statusBar
 * @description
 * # statusBar
 * Service in the bluroeApp.
 */
angular.module('bluroeApp')
  .service('statusBar', function ($rootScope,$timeout,$interval) {
    var vm = this;
    // BOTTOM
    var timeOut, interval, charArray;
    vm.updateStatus = function(text,tickerTime,duration){
    	if(duration == undefined){duration = 20000; }
    	if(tickerTime == undefined ){tickerTime = 30; } 
    	charArray = text.split('');
    	if(tickerTime < 1){ $rootScope.statusMessage = text; }
    	else{  writeStatus(charArray,tickerTime,2); }
    	$timeout.cancel(timeOut);
    	timeOut = $timeout(function(){$rootScope.statusMessage = ''},duration);
    }
    function writeStatus(charArray,tickerTime,section){
    	$interval.cancel(interval);
    	var count = 0;
    	var length = charArray.length;
    	if(section == 1){
    		$rootScope.notifyMessage = '';
    		interval = $interval(function(){
				$rootScope.notifyMessage += charArray[count];
				console.log($rootScope.notifyMessage);
				count++;
				if(count >= length ){$interval.cancel(interval);}
			},tickerTime); 
    	}else if(section == 2){
    		$rootScope.statusMessage = '';
			interval = $interval(function(){
				$rootScope.statusMessage += charArray[count];
				count++;
				if(count >= length ){$interval.cancel(interval);}
			},tickerTime); 
		}
    }

    // TOP 
    var nTimeOut,nTimeOut2, nCharArray; 
    $rootScope.notificationBar = false;

    vm.notify = function(text,tickerTime,duration){
    	$rootScope.viewTop = 80;
    	$rootScope.notificationBar = true;

    	if(duration == undefined){duration = 12000; }
    	if(tickerTime == undefined ){tickerTime = 30; } 
    	nCharArray = text.split('');
    	if(tickerTime < 1){ $rootScope.notifyMessage = text; }
    	else{  writeStatus(nCharArray,tickerTime,1); }
    	$timeout.cancel(nTimeOut);
    	$timeout.cancel(nTimeOut2);
    	nTimeOut = $timeout(function(){
    		$rootScope.viewTop = 50; 
    		$rootScope.notificationBar = false;
    	},duration);
    	nTimeOut2 = $timeout(function(){ 
    		$rootScope.notifyMessage = '';
    	},duration+2000);
    }
  });
