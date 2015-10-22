'use strict';

describe('Service: statusBar', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var statusBar;
  beforeEach(inject(function (_statusBar_) {
    statusBar = _statusBar_;
  }));

  it('should do something', function () {
    expect(!!statusBar).toBe(true);
  });

});
