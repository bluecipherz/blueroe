'use strict';

describe('Service: injectCSS', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var injectCSS;
  beforeEach(inject(function (_injectCSS_) {
    injectCSS = _injectCSS_;
  }));

  it('should do something', function () {
    expect(!!injectCSS).toBe(true);
  });

});
