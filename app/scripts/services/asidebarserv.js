'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.AsideBarServ
 * @description
 * # AsideBarServ
 * Service in the bluroeApp.
 */
angular.module('bluroeApp')
  .service('AsideBarServ', function () {
        this.setAside = function(text){
            console.log(text);

        };

        this.updateAside = function(){
            this.proj = [
                {'id':'1','name':'project 1'},
                {'id':'3','name':'project 3'}
            ];

        };


        this.proj = [
            {'id':'1','name':'project 1'},
            {'id':'2','name':'project 2'},
            {'id':'3','name':'project 3'}
        ];


    });
