'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.Project
 * @description
 * # Project
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('Project', function ($resource, TokenHandler, Hoster) {
    // Service logic
    // ...

    var projectFactory = {};

    var observers = [];

    var projects = [];

    var fetched = false;

    var reloadEverytime = false;

    var Project = TokenHandler.wrapActions(
      $resource(Hoster.getHost() + '/projects/:projectid'),
      ['query', 'save', 'update', 'delete']
    );
    
    var MeProject = TokenHandler.wrapActions(
      $resource(Hoster.getHost() + '/me/projects'),
      ['query']
    )

    var notifyObservers = function() {
      angular.forEach(observers, function(callback) {
        callback();
      });
    };

    var setProjects = function(projectList) {
      projects = projectList;
      // Final calculations and touchings before the render
      angular.forEach(projects, function(project) {
        // find project owner
        project.owner = project.users.filter(function(user) {
          return user.pivot.type == 'owner';
        })[0];
        // find no.of completed tasks
        project.completedTasks = project.tasks.filter(function(task) {
          return task.percentage_completed == 100;
        }).length;
        // find no.of completed milestones
        project.completedMilestones = project.milestones.filter(function(milestone) {
          var completed = true;
          angular.forEach(milestone.tasks, function(task) {
            completed = (task.percentage_completed == 100);
            if(!completed) return;
          });
          return completed;
        }).length;
        // find total project completion using completed tasks
        project.projectCompletion = project.completedTasks / project.tasks.length * 100;
      });
    }

    projectFactory.getProjects = function() {
      // console.log('projects count ' + projects.length)
      return projects;
    }

    projectFactory.fetchProjects = function() {
      MeProject.query().$promise.then(function(results) {
        setProjects(results);
        fetched = true;
        notifyObservers();
      })
    }

    projectFactory.onFetchProjects = function(callback) {
      observers.push(callback);
    }

    projectFactory.alreadyFetched = function() {
      if(reloadEverytime) return false;
      return fetched;
    }

    if(TokenHandler.isTempLogged()) {
      projectFactory.fetchProjects();
    } else {
      TokenHandler.onTempLogin(projectFactory.fetchProjects);
      // TokenHandler.onTempLogin(function() {
      //   projectFactory.setProjects(TokenHandler.getProjects());
      // });
    }
    
    projectFactory.saveProject = function(data) {
      return Project.save(data);
    };

    return projectFactory;
  });
