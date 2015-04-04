'use strict';

/**
 * @ngdoc function
 * @name simpleAngularAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simpleAngularAppApp
 */
angular.module('simpleAngularAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
