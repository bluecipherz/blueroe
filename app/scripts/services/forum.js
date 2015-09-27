'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.Forum
 * @description
 * # Forum
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('Forum', function () {
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
