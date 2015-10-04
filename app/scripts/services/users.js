'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.Users
 * @description
 * # Users
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('Users', function ($resource, TokenHandler, Hoster) {
    // Service logic
    // ...

    var Users = TokenHandler.wrapActions(
      $resource(Hoster.getHost() + '/api/users'),
      ['query']
    );

    // Public API here
    return {
      getUsers : function() {
        return Users.query();
      }
    };
  });
