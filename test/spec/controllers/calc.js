'use strict';

describe('Controller: CalcCtrl', function () {

  // load the controller's module
  beforeEach(module('simpleAngularAppApp'));

  var CalcCtrl,
    scope, $timeout;

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$timeout_) {
    scope = $rootScope.$new();
    $timeout = _$timeout_;
    CalcCtrl = $controller('CalcCtrl', {
      $scope: scope
    });
  }));

  it('debe sumar 1 + 2 = 3', function () {
    scope.first = 1;
    scope.second = 2;
    scope.doAddition();
    $timeout.flush();
    $timeout.flush();
    $timeout.flush();
    $timeout.flush();
    $timeout.flush();
    $timeout.flush();
    $timeout.verifyNoPendingTasks();
    expect(scope.latest).toEqual(3);
  });
});
