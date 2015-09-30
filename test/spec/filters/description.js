'use strict';

describe('Filter: description', function () {

  // load the filter's module
  beforeEach(module('bluroeApp'));

  // initialize a new instance of the filter before each test
  var description;
  beforeEach(inject(function ($filter) {
    description = $filter('description');
  }));

  it('should return the input prefixed with "description filter:"', function () {
    var text = 'angularjs';
    expect(description(text)).toBe('description filter: ' + text);
  });

});
