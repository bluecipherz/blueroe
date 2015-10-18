'use strict';

/**
 * @ngdoc filter
 * @name bluroeApp.filter:moment
 * @function
 * @description
 * # moment
 * Filter in the bluroeApp.
 */
angular.module('bluroeApp')
  .filter('moment', function () {
    return function(dateString, format) {
        return moment(dateString).format(format);
    };
  });
