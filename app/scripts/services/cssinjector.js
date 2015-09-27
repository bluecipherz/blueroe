'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.cssInjector
 * @description
 * # cssInjector
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('cssInjector', function () {
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
