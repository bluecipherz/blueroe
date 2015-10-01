'use strict';

describe('Controller: ChatsystemCtrl', function () {

  // load the controller's module
  beforeEach(module('bluroeApp'));

  var ChatsystemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChatsystemCtrl = $controller('ChatsystemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChatsystemCtrl.awesomeThings.length).toBe(3);
  });
});
