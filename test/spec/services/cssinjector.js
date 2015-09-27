'use strict';

describe('Service: cssInjector', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var cssInjector;
  beforeEach(inject(function (_cssInjector_) {
    cssInjector = _cssInjector_;
  }));

  it('should do something', function () {
    expect(!!cssInjector).toBe(true);
  });

});
