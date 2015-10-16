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
      $resource(Hoster.getHost() + '/users'),
      ['query']
    );

    var observerCallbacks = [];

    var users = [];

    var fetchUsers = function() {
      Users.query().$promise.then(function(results) {
        // console.log(results);
        users = results;
        notifyObservers();
      });
    }

    if(TokenHandler.isTempLogged()) {
        fetchUsers();
    } else {
        TokenHandler.onTempLogin(fetchUsers);
    }

    var notifyObservers = function() {
      angular.forEach(observerCallbacks, function(callback) {
        callback();
      })
    }


    // Public API here
    return {
      getUsers : function() {
        // console.log('users count ' + users.length)
        return users;
      },
      onFetchUsers : function(callback) {
        observerCallbacks.push(callback);
      }
    };
  });
