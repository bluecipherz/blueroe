'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.TokenHandler
 * @description
 * # TokenHandler
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('TokenHandler', function ($http, Hoster) {
    // Service logic
    // ...

    var tokenHandler = {};
    var token;

    var observerCallbacks = [];

    // temp login
    $http.post(Hoster.getHost() + '/api/authenticate', {email:'asd@g.com',password:'asdasd'})
        .then(function(response, status, header, config) {
            token = response.data.token;
            console.log('token : ' + token);
            notifyObservers();
        }, function(data, status, header, config) {
            console.log('login error')
        });
    // end temp login

    var notifyObservers = function() {
        angular.forEach(observerCallbacks, function(callback) {
            callback();
        });
    };

    tokenHandler.set = function(newToken) {
      token = newToken;
    }

    tokenHandler.get = function() {
      return token;
    }

    var wrapActions = function(resource, actions) {
      var wrappedResource = resource;
      for(var i=0; i < actions.length; i++) {
        tokenWrapper(wrappedResource, actions[i]);
      }
      // return modified copy of resource
      return wrappedResource;
    };

    // wraps resource action to send request with auth token
    var tokenWrapper = function(resource, action) {
      // copy original action
      resource['_' + action] = resource[action];
      resource[action] = function(data, success, error) {
        return resource['_' + action](
          angular.extend({}, data || {}, {token: tokenHandler.get()}),
          success,
          error
        );
      };
    };

    var onTempLogin = function(callback) {
      observerCallbacks.push(callback);
    }

    // Public API here
    return {
      tokenHandler : tokenHandler,
      onTempLogin : onTempLogin,
      wrapActions : wrapActions
    };
  });
