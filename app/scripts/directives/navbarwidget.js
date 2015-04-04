'use strict';

/**
 * @ngdoc directive
 * @name simpleAngularAppApp.directive:navbarWidget
 * @description
 * # navbarWidget
 */
angular.module('simpleAngularAppApp')
	.directive('navbarWidget', function() {
		return {
			templateUrl: 'views/navbar-widget.html',
			restrict: 'E',
			scope: {
				appname: '@'
			},
			transclude: true,
			controller: function($scope, $log) {
				$scope.navItems = [];
				$scope.activeItem = undefined; 

				$scope.addItem = function(item) {
					$log.debug('navbar.addItem: new item');
					$log.debug(item);
					$scope.navItems.push(item);
					if (item.active === true) {
						$scope.activeItem = item;
						$log.debug('navbar.addItem: found active item.');
					}
				};
				$scope.selectItem = function(item) {
					angular.forEach($scope.navItems, function(i) {
						i.active = false;
					});
					item.active = true;
					if ($scope.activeItem) {
						$scope.activeItem.active = false;
						$scope.activeItem = item;
					}
				};
			},
			replace: true
		};
	});