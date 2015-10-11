'use strict';

describe('Directive: popupMenu', function () {

  // load the directive's module
  beforeEach(module('bluroeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<popup-menu></popup-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the popupMenu directive');
  }));
});
