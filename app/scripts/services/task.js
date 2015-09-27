'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.Task
 * @description
 * # Task
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('Task', function () {
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
