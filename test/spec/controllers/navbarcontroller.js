'use strict';

describe('Controller: NavbarcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('simpleAngularAppApp'));

  var NavbarcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavbarcontrollerCtrl = $controller('NavbarcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
