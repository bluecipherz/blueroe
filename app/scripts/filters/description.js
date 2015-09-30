'use strict';

/**
 * @ngdoc filter
 * @name bluroeApp.filter:description
 * @function
 * @description
 * # description
 * Filter in the bluroeApp.
 */
angular.module('bluroeApp')
  .filter('description', function () {
    return function (input) {
      return 'description filter: ' + input;
    };
  });
