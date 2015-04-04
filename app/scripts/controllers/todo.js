'use strict';

/**
 * @ngdoc function
 * @name simpleAngularAppApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the simpleAngularAppApp
 */
angular.module('simpleAngularAppApp')
  .controller('TodoCtrl', function ($scope, $log, lodash) {
    var _ = lodash;
    $scope.todoTypes = [
      {id: 'urgente', desc: 'Urgente'},
      {id: 'normal', desc: 'Normal'},
      {id: 'cualquierita', desc: 'Cualquierita'}
    ];
    $scope.todoType = {};
    $scope.todoType.selected = undefined;
    $scope.disabled = undefined;
    $scope.todo = {};
    
    $scope.add = function() {
      $scope.todos.push($scope.todo);
      $scope.todo = {};
    };

    $scope.todos = [
      {text: 'cosa 1'}, {text: 'cosa 2'}
    ];

    $scope.delete = function(event) {
      $log.debug(event);
      _.remove($scope.todos, function(e) {return e.text === event.text;});
    };

  });
