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
                angular.forEach(results , function(value, key) {
                    value.filtered = {};
                    if(value.type == 'ProjectCreated') {
                        value.filtered.description = value.subject.description;
                    } else if(value.type == 'UserRemovedFromProject') {
                        // value.filtered.description = value.context.description;
                    } else if(value.type == 'TaskCompleted') {
                        value.filtered.description = value.subject.description;
                    } else if(value.type == 'TaskCreated') {
                        value.filtered.description = value.subject.description;
                    } else if(value.type == 'StatusPosted') {
                        value.filtered.description = value.subject.message;
                    } else {
                        // value.filtered.description = value.context.description;
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