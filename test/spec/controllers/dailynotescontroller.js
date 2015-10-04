'use strict';

describe('Controller: DailynotescontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('bluroeApp'));

  var DailynotescontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DailynotescontrollerCtrl = $controller('DailynotescontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DailynotescontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
