'use strict';

describe('Service: navLine', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var navLine;
  beforeEach(inject(function (_navLine_) {
    navLine = _navLine_;
  }));

  it('should do something', function () {
    expect(!!navLine).toBe(true);
  });

});
