'use strict';

describe('Controller: DailynotesCtrl', function () {

  // load the controller's module
  beforeEach(module('bluroeApp'));

  var DailynotesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DailynotesCtrl = $controller('DailynotesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DailynotesCtrl.awesomeThings.length).toBe(3);
  });
});
