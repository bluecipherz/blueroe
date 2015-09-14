'use strict';

/**
 * @ngdoc directive
 * @name bluroeApp.directive:dropzone
 * @description
 * # dropzone
 */
angular.module('bluroeApp')
  .directive('dropzone', function () {
	return function (scope, element, attrs) {
	    var config, dropzone;

	    // console.log(attrs.dropzone);

	    config = scope[attrs.dropzone];

	    // create a Dropzone for the element with the given options
	    dropzone = new Dropzone(element[0], config.options);

	    // bind the given event handlers
	    angular.forEach(config.eventHandlers, function (handler, event) {
	      dropzone.on(event, handler);
	    });
  	};
  });
