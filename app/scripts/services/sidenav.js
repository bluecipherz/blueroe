'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.sidenav
 * @description
 * # sidenav
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('sidenav', function () {
    // Service logic
    // ...

    var AsideListHome = [
        {'id':'1','type':'link','name':'Feeds','ngClick':' ','img':'icons/fb-50.png'},
        {'id':'2','type':'link','name':'News','ngClick':' ','img':'icons/gplus-50.png'},
        {'type':'linkList','name':'Extras','img':'icons/twitter-50.png','list': [
            {'id':'3','type':'link','name':'Extra 1','ngClick':' ','img':'icons/fb-50.png'},
            {'id':'4','type':'link','name':'Extra 2','ngClick':' ','img':'icons/gplus-50.png'},
            {'id':'5','type':'link','name':'Extra 3','ngClick':' ','img':'icons/twitter-50.png'},
        ]},
        {'id':'6','type':'link','name':'Settings','ngClick':' ','img':'icons/gplus-50.png'},
    ];

    var AsideListProject = [
        {'id':'1','type':'link','name':'Feeds','ngClick':' ','img':'icons/gplus-50.png'},
        {'id':'2','type':'link','name':'Task List','ngClick':' ','img':'icons/twitter-50.png'},
        {'id':'8','type':'link','name':'Task','ngClick':' ','img':'icons/twitter-50.png'},
        {'type':'linkList','name':'Project Tools','img':'icons/fb-50.png','list': [
            {'id':'3','type':'link','name':'Tools 1','ngClick':' ','img':'icons/fb-50.png'},
            {'id':'4','type':'link','name':'Tools 2','ngClick':' ','img':'icons/gplus-50.png'},
            {'id':'5','type':'link','name':'Tools 3','ngClick':' ','img':'icons/twitter-50.png'},
        ]},
        {'type':'linkList','name':'Other Details','img':'icons/fb-50.png','list': [
            {'id':'9','type':'link','name':'SRS','ngClick':' ','img':'icons/fb-50.png'},
            {'id':'10','type':'link','name':'Project Requirements','ngClick':' ','img':'icons/gplus-50.png'},
            {'id':'11','type':'link','name':'Project Policies','ngClick':' ','img':'icons/twitter-50.png'},
            {'id':'12','type':'link','name':'Project Rules','ngClick':' ','img':'icons/twitter-50.png'},
        ]},
        {'id':'7','type':'link','name':'Settings','ngClick':' ','img':'icons/gplus-50.png'},
    ];

    // Public API here
    return {
      getProjectNavs: function () {
        return AsideListProject;
      },
      getHomeNavs: function() {
        return AsideListHome;
      }
    };
  });
