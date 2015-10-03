'use strict';

describe('Controller: CreatepostCtrl', function () {

  // load the controller's module
  beforeEach(module('bluroeApp'));

  var CreatepostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatepostCtrl = $controller('CreatepostCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreatepostCtrl.awesomeThings.length).toBe(3);
  });
});
