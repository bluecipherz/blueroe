'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('ProjectsCtrl', function (feedFactory, $stateParams, Project) {

      var vm = this;

      vm.feeds = [];

      feedFactory.setProject($stateParams.id);
      
      var updateFeeds = function() {
      	vm.feeds = feedFactory.getFeeds();
      	console.log('feedFecthing complete');
      	vm.feedLoader = true;
      }

      // if(feedFactory.feedsAlreadyFetched()) {
      //   console.log('feeds already fetched');
      //   updateFeeds();
      // } else {
      //   console.log('fetching feeds');
      //   vm.feedLoader = false;
        feedFactory.onFetchFeeds(updateFeeds);
      // }

      this.refreshFeeds = function(){
          // Put your update code here
          feedFactory.update();
      }


	var updateProjects = function() {
		vm.projects = Project.getProjects();
		// console.log($scope.projects);
	}

	if(Project.alreadyFetched()) {
		updateProjects();
	} else {
		Project.onFetchProjects(updateProjects);
	}

});
