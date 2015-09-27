'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.Status
 * @description
 * # Status
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('Status', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
