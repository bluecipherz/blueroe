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
    'ngRoute',
    'ngResource'
  ])
  .config(function ($routeProvider, $locationProvider) {

        $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .otherwise({
        redirectTo: '/'
      });

        // enable html5Mode for pushstate ('#'-less URLs)
        if(window.history && window.history.pushState){
            $locationProvider.html5Mode(false);
        }

  })
  .run(function($rootScope, powerProgress) {
	  $rootScope.$on('$routeChangeStart', function() {
		powerProgress.loadProgress();
	  });

	  $rootScope.$on('$routeChangeSuccess', function() {
	  
	  });
  });
