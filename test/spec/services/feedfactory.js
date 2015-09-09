'use strict';

describe('Service: feedFactory', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var feedFactory;
  beforeEach(inject(function (_feedFactory_) {
    feedFactory = _feedFactory_;
  }));

  it('should do something', function () {
    expect(!!feedFactory).toBe(true);
  });

});
