'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('ProjectsCtrl', function ($scope, Project, Users, feedFactory, $stateParams) {

      var vm = this;

  		vm.projectList = [];

  		if(Project.alreadyFetched()) {
  			console.log('projects already fetched');
  			updateProjects();
  		} else {
  			console.log('fetching projects');
	  		Project.onFetchProjects(updateProjects);
  		}

  		function updateProjects() {
  			vm.projectList = Project.getProjects();
  		}


      this.createProject = function() {
        var data = {
          name: vm.projectname,
          description: vm.projectoverview,
          private: vm.private
        };
        // console.log(data);
        Project.saveProject(data).$promise.then(function(results) {
          vm.projectList.push(results.project);
        });
      }

      this.loadProjectDetails = function() {
        Users.getUsers().$promise.then(function(results) {
          vm.users = results;
        });
      };

      // project show stuff below
      vm.feeds = [];

      feedFactory.setProject($stateParams.id);
      

      var updateFeeds = function() {
          vm.feeds = feedFactory.getFeeds();
          console.log('feedFecthing complete');
          vm.feedLoader = true;
      }

      if(feedFactory.feedsAlreadyFetched()) {
          console.log('feeds already fetched');
          updateFeeds();
      } else {
          console.log('fetching feeds');
          vm.feedLoader = false;
          feedFactory.onFetchFeeds(updateFeeds);
      }

      this.updateFeeds = function(){
          // Put your update code here
      }


    });
