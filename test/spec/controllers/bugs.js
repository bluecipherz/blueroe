'use strict';

describe('Controller: BugsCtrl', function () {

  // load the controller's module
  beforeEach(module('bluroeApp'));

  var BugsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BugsCtrl = $controller('BugsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BugsCtrl.awesomeThings.length).toBe(3);
  });
});
