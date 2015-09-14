'use strict';

describe('Service: sidenav', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var sidenav;
  beforeEach(inject(function (_sidenav_) {
    sidenav = _sidenav_;
  }));

  it('should do something', function () {
    expect(!!sidenav).toBe(true);
  });

});
