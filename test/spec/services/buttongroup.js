'use strict';

describe('Service: buttongroup', function () {

  // load the service's module
  beforeEach(module('bluroeApp'));

  // instantiate service
  var buttongroup;
  beforeEach(inject(function (_buttongroup_) {
    buttongroup = _buttongroup_;
  }));

  it('should do something', function () {
    expect(!!buttongroup).toBe(true);
  });

});
