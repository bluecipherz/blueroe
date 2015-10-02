'use strict';

describe('Service: SliderService', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var SliderService;
  beforeEach(inject(function (_SliderService_) {
    SliderService = _SliderService_;
  }));

  it('should do something', function () {
    expect(!!SliderService).toBe(true);
  });

});
