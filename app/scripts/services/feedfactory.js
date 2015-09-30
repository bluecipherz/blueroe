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

 function feedFactory(TokenHandler, $resource, Hoster) {

    var observerCallbacks = [];

    var Feed = $resource(Hoster.getHost() + '/api/me/feeds');

    TokenHandler.onTempLogin(function() {
        Feed = TokenHandler.wrapActions(Feed, ['query']); // auto inject auth token to requests
        notifyObservers();
    });

    var notifyObservers = function() {
        angular.forEach(observerCallbacks, function(callback) {
            callback();
        });
    };


    function getFeeds() {
            // $promise.then allows us to intercept the results
            // which we will use later
            return Feed.query().$promise.then(function(results) {
                console.log(results);
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