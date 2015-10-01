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
          });
  })
  .run(function($rootScope, powerProgress) {
	  $rootScope.$on('$stateChangeStart', function() {
		  powerProgress.loadProgress();
	  });

	  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

	  });
  });
