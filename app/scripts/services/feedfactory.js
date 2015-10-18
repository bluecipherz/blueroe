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

    var fetching = false;

    var feeds = [];

    // default params, used for initial loading
    // and occasionally for reloading
    var params = {};

    var Feed = TokenHandler.wrapActions(
        $resource(Hoster.getHost() + '/me/feeds/:project'),
        ['query']
    );

    // automatic initial loading with params
    // set params using setProject() method
    if(TokenHandler.isTempLogged()) {
        fetchFeeds(params);
    } else {
        fetching = true;
        TokenHandler.onTempLogin(function() {
            fetchFeeds(params)
        });
    }

    var notifyObservers = function() {
        // console.log('feeds notifying observers');
        angular.forEach(observerCallbacks, function(callback, key) {
            callback();
            observerCallbacks.splice(key, 1);
        });
    };

    function fetchFeeds(params) {
        console.log('params')
        console.log(params)
        fetching = true;
        Feed.query(params).$promise.then(function(results) {
            feeds = results;
            fetching = false;
            notifyObservers();
        });
    }

    return {
        getFeeds: function() {
            return feeds;
        },
        onFetchFeeds: function(callback) {
            observerCallbacks.push(callback);
            // new auto refresh on every page load "implementation"
            if(TokenHandler.isTempLogged()) {
                fetchFeeds(params); // if parameters are null, then use default params
            } // end
            // console.log('feedFactory callbacks : ' + observerCallbacks.length);
        },
        setParams: function(data) {
            params = data;
            // params['project'] = projectid;
        },
        pushFeed: function(feed) {
            // console.log('pushing feed');
            // console.log(feed);
            feeds.push(feed);
        },
        update: function(callback) {
            observerCallbacks.push(callback);
            fetchFeeds(params);
        },
        removeFeed: function(feed) {
            // console.log('splicing ' + feeds.indexOf(feed) + ' feed');
            feeds.splice(feeds.indexOf(feed), 1);
        },
        isFetching: function() {
            return fetching;
        },
        updateFeed: function(oldFeed, newFeed) { // not so constructive
            oldFeed.origin = TokenHandler.getUser();
            oldFeed.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');
            oldFeed.type = newFeed.type;
            console.log(newFeed.type);
            if(newFeed.subject_type == 'App\\Task') {
                oldFeed.subject.progress = newFeed.subject.progress;
                oldFeed.subject.name = newFeed.subject.name;
            }
        }
    }

}