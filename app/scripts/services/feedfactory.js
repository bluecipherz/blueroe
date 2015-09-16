'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.feedFactory
 * @description
 * # feedFactory
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('feedFactory', feedFactory);

    function feedFactory($resource, $http) {

        var observerCallbacks = [];

        var token;

        // ngResource call to our static data
        var Feed;

        var notifyObservers = function() {
            angular.forEach(observerCallbacks, function(callback) {
                callback();
            });
        };

        $http.post('http://localhost:8000/api/authenticate', {email:'asd@g.com',password:'asdasd'})
            .then(function(response, status, header, config) {
                token = response.data.token;
                console.log('token : ' + token);
                Feed = $resource('http://localhost:8000/api/me/feeds', {token:token});
                notifyObservers();
            }, function(data, status, header, config) {
                console.log('feeds error')
            });

        function getFeeds() {
            // $promise.then allows us to intercept the results
            // which we will use later
            return Feed.query().$promise.then(function(results) {
                console.log(results);
                angular.forEach(results , function(value, key) {
                    value.filtered = {};
                    if(value.type == 'ProjectCreated'){

                        value.filtered.description = value.subject.description ;

                    }else if(value.type == 'UserRemovedFromProject'){

                        value.filtered.description = value.context.description ;

                    }else if(value.type == 'TaskCreated'){

                        value.filtered.description = value.context.description ;

                    }else{

                        value.filtered.description = value.context.description ;

                    }

                });

                return results;
            }, function(error) { // Check for errors
                console.log(error);
            });
        }

        return {
            getFeeds: getFeeds,
            onFetchFeeds: function(callback) {
                observerCallbacks.push(callback);
            }
        }
    }