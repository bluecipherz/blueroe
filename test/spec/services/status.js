'use strict';

describe('Service: Status', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var Status;
  beforeEach(inject(function (_Status_) {
    Status = _Status_;
  }));

  it('should do something', function () {
    expect(!!Status).toBe(true);
  });

});
