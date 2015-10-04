'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:AllprojectsCtrl
 * @description
 * # AllprojectsCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
  .controller('AllprojectsCtrl', function (Project, Users) {
    	
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

  });
