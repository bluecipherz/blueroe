'use strict';

describe('Service: Hoster', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var Hoster;
  beforeEach(inject(function (_Hoster_) {
    Hoster = _Hoster_;
  }));

  it('should do something', function () {
    expect(!!Hoster).toBe(true);
  });

});
