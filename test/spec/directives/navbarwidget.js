'use strict';

describe('Directive: navbarWidget', function () {

  // load the directive's module
  beforeEach(module('simpleAngularAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navbar-widget></navbar-widget>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the navbarWidget directive');
  }));
});
