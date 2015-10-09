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
    'ui.router',
    'nvd3',
    '720kb.datepicker',
    'ngAnimate'
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
    		.state('mytasks', {
    			url: '/home/mytasks',
    			templateUrl: 'views/home/tasks.html',
    			controller: 'TasksCtrl',
    			controllerAs: 'tasks'
    		})
    		.state('mymilestones', {
    			url: '/home/mymilestones',
    			templateUrl: 'views/home/milestones.html',
    			controller: 'MilestonesCtrl',
    			controllerAs: 'milestones'
    		})
    		.state('mybugs', {
    			url: '/home/mybugs',
    			templateUrl: 'views/home/bugs.html',
    			controller: 'BugsCtrl',
    			controllerAs: 'bugs'
    		})
    		.state('mycalendar', {
    			url: '/home/mycalendar',
    			templateUrl: 'views/home/calendar.html',
    			controller: 'CalendarCtrl',
    			controllerAs: 'calendar'
    		})
        .state('reports', {
    			url: '/home/reports',
    			templateUrl: 'views/home/reports.html',
    			controller: 'ReportsCtrl',
    			controllerAs: 'reports'
    		})
        .state('themes', {
            url: '/home/themes',
            templateUrl: 'views/home/themes.html',
            controller: 'ThemesCtrl',
            controllerAs: 'Themes'
        })

          /*project section*/

        .state('projects', {
            url: '/allprojects',
            templateUrl: 'views/projects.html',
            controller: 'AllprojectsCtrl',
            controllerAs: 'projects'
        })
        .state('projectShow', {
            url: '/projects/:id',
            templateUrl: 'views/main.html',
            controller: 'ProjectsCtrl',
            controllerAs: 'main'
        });
  })
  .run(function($rootScope, powerProgress) {
	  $rootScope.$on('$stateChangeStart', function() {
		  powerProgress.loadProgress();
	  });

	  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

	  });
  });
