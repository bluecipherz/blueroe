'use strict';

/**
 * @ngdoc overview
 * @name todoappApp
 * @description
 * # todoappApp
 *
 * Main module of the application.
 */
angular
  .module('bluroeApp', [
    'ngMessages',
    'ngResource',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .state('themes', {
          url: '/home/themes',
          templateUrl: 'views/home/themes.html',
          controller: 'ThemesCtrl',
          controllerAs: 'Themes'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'views/projects.html',
            controller: 'ProjectsCtrl',
            controllerAs: 'projects'
        })
        .state('projectShow', {
            url: '/projects/:id',
            templateUrl: 'views/main.html',
            controller: 'ProjectsCtrl',
            controllerAs: 'projects'
        })
		.state('mytasks', {
			url: '/mytasks',
			templateUrl: 'views/tasks.html',
			controller: 'TasksCtrl',
			controllerAs: 'tasks'
		})
		.state('mymilestones', {
			url: '/mymilestones',
			templateUrl: 'views/milestones.html',
			controller: 'MilestonesCtrl',
			controllerAs: 'milestones'
		})
		.state('mybugs', {
			url: '/mybugs',
			templateUrl: 'views/bugs.html',
			controller: 'BugsCtrl',
			controllerAs: 'bugs'
		})
		.state('mycalendar', {
			url: '/mycalendar',
			templateUrl: 'views/calendar.html',
			controller: 'CalendarCtrl',
			controllerAs: 'calendar'
		});
  })
  .run(function($rootScope, powerProgress) {
	  $rootScope.$on('$stateChangeStart', function() {
		  powerProgress.loadProgress();
	  });

	  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

	  });
  }).filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});;
