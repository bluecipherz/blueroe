'use strict';

describe('Service: powerprogress', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var powerprogress;
  beforeEach(inject(function (_powerprogress_) {
    powerprogress = _powerprogress_;
  }));

  it('should do something', function () {
    expect(!!powerprogress).toBe(true);
  });

});
