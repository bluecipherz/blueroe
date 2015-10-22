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
    var timeOut, interval, charArray;
    vm.updateStatus = function(text,tickerTime,duration){
    	if(duration == undefined || duration == ''){duration = 20000; }
    	if(tickerTime == undefined ){tickerTime = 30; } 
    	charArray = text.split('');
    	if(tickerTime < 1){ $rootScope.statusMessage = text; }
    	else{  writeStatus(charArray,tickerTime); }
    	$timeout.cancel(timeOut);
    	timeOut = $timeout(function(){$rootScope.statusMessage = ''},duration);
    }
    function writeStatus(charArray,tickerTime){
    	$rootScope.statusMessage = '';
    	$interval.cancel(interval);
    	var count = 0;
    	var length = charArray.length;
 		interval = $interval(function(){
 			$rootScope.statusMessage += charArray[count];
 			count++;
 			if(count >= length ){$interval.cancel(interval);}
 		},tickerTime); 
    }
  });
