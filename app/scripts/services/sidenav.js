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
        {'id':'1','type':'link','name':'DASHBOARD','ngClick':'home','img':'icons/fb-50.png', 'icon':'fa fa-television'},
        {'id':'2','type':'link','name':'STORIES','ngClick':'mytasks','img':'icons/twitter-50.png', 'icon':'fa fa-file-text'},
        {'id':'3','type':'link','name':'SPRINTS','ngClick':'mymilestones','img':'icons/gplus-50.png', 'icon':'fa fa-th-list'},
        {'id':'4','type':'link','name':'KANBAN','ngClick':'mybugs','img':'icons/twitter-50.png', 'icon':'fa fa-clone '},
        {'id':'5','type':'link','name':'BUGS','ngClick':'mycalendar','img':'icons/fb-50.png', 'icon':'fa fa-bug'},
        {'id':'6','type':'link','name':'CALENDAR ','ngClick':'reports','img':'icons/gplus-50.png', 'icon':'fa fa-calendar'},
        {'id':'7','type':'link','name':'CHATS ','ngClick':'','img':'icons/gplus-50.png', 'icon':'fa fa-comments'},
        {'id':'8','type':'link','name':'GITHUB ','ngClick':'','img':'icons/gplus-50.png', 'icon':'fa fa-github'},
        {'id':'9','type':'link','name':'TIMESHEETS ','ngClick':'','img':'icons/gplus-50.png', 'icon':'fa fa-clock-o'},
        //{'type':'linkList','name':'Extras','img':'icons/twitter-50.png','list': [
        //    {'id':'7','type':'link','name':'Themes','ngClick':'themes','img':'icons/fb-50.png'},
        //    {'id':'8','type':'link','name':'Templates','ngClick':' ','img':'icons/gplus-50.png'},
        //]},

        {'id':'7','type':'link','name':'THEMES','ngClick':'themes','img':'icons/fb-50.png', 'icon':'fa fa-sliders'},
    ];

        var AsideListProjectIndex = [
            {'id':'1','type':'link','name':'Active projects','ngClick':'projects','img':'icons/gplus-50.png', 'icon':'fa fa-play'},
            {'id':'2','type':'link','name':'Public projects','ngClick':' ','img':'icons/twitter-50.png', 'icon':'fa fa-building'},
        ];

    var AsideListProject = [
        {'id':'1','type':'link','name':'Feeds','ngClick':' ','img':'icons/gplus-50.png', 'icon':'fa fa-feed'},
        {'id':'2','type':'link','name':'Task List','ngClick':' ','img':'icons/twitter-50.png', 'icon':'fa fa-tasks'},
        {'id':'8','type':'link','name':'Task','ngClick':' ','img':'icons/twitter-50.png', 'icon':'fa fa-check'},
        {'type':'linkList','name':'Project Tools','img':'icons/fb-50.png','icon':'fa fa-wrench','list': [
            {'id':'3','type':'link','name':'Tools 1','ngClick':' ','img':'icons/fb-50.png'},
            {'id':'4','type':'link','name':'Tools 2','ngClick':' ','img':'icons/gplus-50.png'},
            {'id':'5','type':'link','name':'Tools 3','ngClick':' ','img':'icons/twitter-50.png'},
        ]},
        {'type':'linkList','name':'Other Details','img':'icons/fb-50.png', 'icon':'fa fa-list', 'list': [
            {'id':'9','type':'link','name':'SRS','ngClick':' ','img':'icons/fb-50.png'},
            {'id':'10','type':'link','name':'Project Requirements','ngClick':' ','img':'icons/gplus-50.png'},
            {'id':'11','type':'link','name':'Project Policies','ngClick':' ','img':'icons/twitter-50.png'},
            {'id':'12','type':'link','name':'Project Rules','ngClick':' ','img':'icons/twitter-50.png'},
        ]},
        {'id':'7','type':'link','name':'Settings','ngClick':' ','img':'icons/gplus-50.png', 'icon':'fa fa-cog'},
    ];



    // Public API here
    return {
        getProjectNavs: function () {
            return AsideListProject;
        },
        getProjectIndexNavs: function () {
            return AsideListProjectIndex;
        },
        getHomeNavs: function() {
            return AsideListHome;
        }
    };
  });
