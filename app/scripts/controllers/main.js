'use strict';

/**
 * @ngdoc function
 * @name simpleAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleAngularAppApp
 */
angular.module('simpleAngularAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
