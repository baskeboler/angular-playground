'use strict';

/**
 * @ngdoc directive
 * @name simpleAngularAppApp.directive:navbarItem
 * @description
 * # navbarItem
 */
angular.module('simpleAngularAppApp')
  .directive('navbarItem', function () {
    return {
      require: '^navbarWidget',
      restrict: 'E',
      scope: {
      	title: '@',
      	url: '@',
      	active: '@'
      },
      controller: function($scope, $log) {
      	$scope.item = {
      		title: $scope.title,
      		url: $scope.url,
      		active: ($scope.active == 'true')?true:false
      	};
      	$log.debug($scope.item);
      	$scope.$parent.$parent.addItem($scope.item);
      	
      	$scope.toggle = function() {
          $scope.$parent.$parent.selectItem($scope.item);
      	};
      },
      transclude: false,
      templateUrl: 'views/navbar-item.html',
      replace: true
    };
  });
