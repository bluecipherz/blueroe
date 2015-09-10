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

    function feedFactory($resource) {

        // ngResource call to our static data
        var Feed = $resource('data/feeds.json');

        function getFeeds() {
            // $promise.then allows us to intercept the results
            // which we will use later
            return Feed.query().$promise.then(function(results) {

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
            getFeeds: getFeeds
        }
    }