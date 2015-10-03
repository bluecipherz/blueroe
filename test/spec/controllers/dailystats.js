'use strict';

describe('Controller: DailystatsCtrl', function () {

  // load the controller's module
  beforeEach(module('bluroeApp'));

  var DailystatsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DailystatsCtrl = $controller('DailystatsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DailystatsCtrl.awesomeThings.length).toBe(3);
  });
});
