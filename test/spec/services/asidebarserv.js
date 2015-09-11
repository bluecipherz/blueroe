'use strict';

describe('Service: AsideBarServ', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var AsideBarServ;
  beforeEach(inject(function (_AsideBarServ_) {
    AsideBarServ = _AsideBarServ_;
  }));

  it('should do something', function () {
    expect(!!AsideBarServ).toBe(true);
  });

});
