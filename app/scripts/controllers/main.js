'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
    .controller('IndexCtrl', function ($scope, sidenav, $state) {

    $scope.currState = $state;
    $scope.$watch('currState.current.name', function(newValue, oldValue) {
      if(newValue == 'home') {
        $scope.asideList = sidenav.getHomeNavs();
      } else if(newValue == 'projects') {
        $scope.asideList = sidenav.getProjectNavs();
      }
    });  

    $scope.checkIsLink = function(message) {
        return message.type == 'link';
    }
    $scope.checkIsLinkList = function(message) {
        return message.type == 'linkList';
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
