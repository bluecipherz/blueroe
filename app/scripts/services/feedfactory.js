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

    var reloadEverytime = false;

    var fetched = false;

    var feeds;

    var params = {};

    var Feed = TokenHandler.wrapActions(
        $resource(Hoster.getHost() + '/api/me/feeds/:project'),
        ['query']
    );

    if(TokenHandler.isTempLogged()) {
        fetchFeeds({});
    } else {
        TokenHandler.onTempLogin(fetchFeeds);
    }

    var notifyObservers = function() {
        angular.forEach(observerCallbacks, function(callback) {
            callback();
        });
    };

    function fetchFeeds() {
        console.log('params')
        console.log(params)
        Feed.query(params).$promise.then(function(results) {
            feeds = results;
            fetched = true;
            notifyObservers();
        });
    }

    function getFeeds() {
        return feeds;
    }

    return {
        getFeeds: getFeeds,
        onFetchFeeds: function(callback) {
            observerCallbacks.push(callback);
        },
        feedsAlreadyFetched: function() {
            if(reloadEverytime) return false;
            return fetched;
        },
        setProject: function(projectid) {
            params = {project:projectid};
            // params['project'] = projectid;
        }
    }

}