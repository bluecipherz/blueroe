'use strict';

describe('Service: Document', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var Document;
  beforeEach(inject(function (_Document_) {
    Document = _Document_;
  }));

  it('should do something', function () {
    expect(!!Document).toBe(true);
  });

});
