'use strict';

describe('Service: Forum', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var Forum;
  beforeEach(inject(function (_Forum_) {
    Forum = _Forum_;
  }));

  it('should do something', function () {
    expect(!!Forum).toBe(true);
  });

});
