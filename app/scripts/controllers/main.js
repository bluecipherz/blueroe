'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
    .controller('IndexCtrl', function ($scope ) {

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

        $scope.asideList = AsideListHome;

    $scope.tabHome = function() {
        $scope.asideList = AsideListHome;
        $scope.$apply();
    }
    $scope.tabProject = function() {
        $scope.asideList = AsideListProject;
        $scope.$apply();
    }

    $scope.checkIsLink = function(message) {
        if(message.type == 'link'){ return true; }else{ return false; }
    }
    $scope.checkIsLinkList = function(message) {
        if(message.type == 'linkList'){ return true; }else{ return false; }
    }



        this.tab = 1;

        this.selectTab = function (setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };


    }).controller('MainCtrl', function ($scope,$controller, feedFactory, AsideBarServ) {
        $scope.projects = [
            {'id':'1','name':'project 1'},
            {'id':'2','name':'project 2'},
            {'id':'3','name':'project 3'}
        ];

        $scope.feeds = [];

        // Fetches the time entries from the static JSON file
        // and puts the results on the vm.timeentries array
        feedFactory.getFeeds().then(function(results) {
            $scope.feeds = results;
            console.log($scope.feeds);
        }, function(error) { // Check for errors
            console.log(error);
        });

        AsideBarServ.setAside('Hello');

        $scope.loadNewFilter = function (){
            AsideBarServ.updateAside;
        }

        //
        //var testCtrl1ViewModel = $scope.$new(); //You need to supply a scope while instantiating.
        ////Provide the scope, you can also do $scope.$new(true) in order to create an isolated scope.
        ////In this case it is the child scope of this scope.
        //$controller('AsideCtrl',{$scope : testCtrl1ViewModel });
        //testCtrl1ViewModel.myMethod(); //And call the method on the newScope.

    }).controller('TabController', function (){
        this.tab = 1;

        this.selectTab = function (setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    }).controller('AsideController', function (){
        this.tab = 1;

        this.selectTab = function (setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });
