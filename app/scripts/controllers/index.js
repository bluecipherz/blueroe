'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')

    .controller('IndexCtrl', function ($rootScope, $scope, sidenav, $state) {

        $rootScope.$state = $state;
        $scope.currState = $state;
        // sidenav factory holds the sidebar data.
        // check for state change and display approriate sidebar
        $scope.$watch('currState.current.name', function(newValue, oldValue) {
            if(newValue == 'home') {
                $scope.asideList = sidenav.getHomeNavs();
                $scope.currView = 'home';
            } else if(newValue == 'projects') {
                $scope.asideList = sidenav.getProjectIndexNavs();
                $scope.currView = 'projects';
            } else if(newValue == 'projectShow') {
                $scope.asideList = sidenav.getProjectNavs();
                $scope.currView = 'projects';
            }else {
                $scope.asideList = sidenav.getHomeNavs(); // default
                $scope.currView = 'home';
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
    });
$(document).on('click','.selectGrp > .foot > span',function(){
    var that = $(this);
    var id = that.attr('value');
    var name = that.html();
    that.parent().parent().find('.text-slot').html(name);
    that.parent().parent().find('input').val(id);
});