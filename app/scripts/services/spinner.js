'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.spinner
 * @description
 * # spinner
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('Spinner', function () {
    function Spinner(selector) {
        this.selector = selector;
    }
    Spinner.prototype.stopSpin = function() {
        var sel = this.selector;
        $('#'+sel).find('.spinner').removeClass('act');
        $('#'+sel).find('.cover').removeClass('contCover');
    }
    Spinner.prototype.startSpin = function() {
        var sel = this.selector;
        $('#'+sel).find('.spinner').addClass('act');
        $('#'+sel).find('.cover').addClass('contCover');
        console.log(sel);
    }
    return Spinner;
  });
