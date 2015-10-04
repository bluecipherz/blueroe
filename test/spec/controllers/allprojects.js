'use strict';

describe('Controller: AllprojectsCtrl', function () {

  // load the controller's module
  beforeEach(module('bluroeApp'));

  var AllprojectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllprojectsCtrl = $controller('AllprojectsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AllprojectsCtrl.awesomeThings.length).toBe(3);
  });
});
