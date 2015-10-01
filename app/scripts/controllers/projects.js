'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('ProjectsCtrl', function ($scope, Project) {

  		$scope.projectList = [];

  		if(Project.alreadyFetched()) {
  			console.log('projects already fetched');
  			updateProjects();
  		} else {
  			console.log('fetching projects');
	  		Project.onFetchProjects(updateProjects);
  		}

  		function updateProjects() {
  			$scope.projectList = Project.getProjects();
  		}
    });
