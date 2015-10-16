'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.Hoster
 * @description
 * # Hoster
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('Hoster', function () {
    // Service logic
    // ...

    var host = 'http://localhost:8000/api';

    // Public API here
    return {
      getHost: function () {
        return host;
      }
    };
  });
