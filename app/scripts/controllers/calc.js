'use strict';

/**
 * @ngdoc function
 * @name simpleAngularAppApp.controller:CalcCtrl
 * @description
 * # CalcCtrl
 * Controller of the simpleAngularAppApp
 */

var CalcCtrl = function($timeout, $scope) {
	$scope.memory = [];
	$scope.latest = 0;
	$scope.operators = {
		ADDITION: '+',
		SUBTRACTION: '-',
		MULTIPLICATION: '*',
		DIVISION: '/',
		MODULO: '%'
	};
	$scope.operator = $scope.operators.ADDITION;
	$scope.graphData = [{
		key: 'asdasd',
		values: []
	}];

	$scope.doAddition = function() {
		var times = 5;
		$scope.latest = '. ';
		$timeout(function tickslowly() {
			if (times === 0) {
				var latestResult;
				var first = parseInt($scope.first);
				var second = parseInt($scope.second);
				switch ($scope.operator) {
					case '+':
						latestResult = first + second;
						break;
					case '-':
						latestResult = first - second;
						break;
					case '*':
						latestResult = first * second;
						break;
					case '/':
						latestResult = first / second;
						break;
					case '%':
						latestResult = first % second;
						break;
				}
				$scope.memory.unshift({
					timestamp: new Date(),
					first: $scope.first,
					operator: $scope.operator,
					second: $scope.second,
					value: latestResult
				});
				$scope.graphData[0].values.push({
					i: ''+$scope.first + $scope.operator + $scope.second,
					value: latestResult
				});
				$scope.first = $scope.second = '';
				$scope.latest = latestResult;
			} else {
				$scope.latest += '. ';
				times--;
				$timeout(tickslowly, 300);
			}
		}, 300);
	};
	$scope.i = 0;
	$scope.options = {
		chart: {
			type: 'discreteBarChart',
			height: 450,
			margin: {
				top: 20,
				right: 20,
				bottom: 40,
				left: 55
			},
			x: function(d) {
				return d.i;
			},
			y: function(d) {
				return d.value;
			},
			useInteractiveGuideline: true,
			dispatch: {
				stateChange: function() {
					console.log('stateChange');
				},
				changeState: function() {
					console.log('changeState');
				},
				tooltipShow: function() {
					console.log('tooltipShow');
				},
				tooltipHide: function() {
					console.log('tooltipHide');
				}
			},
			xAxis: {
				axisLabel: 'n'
			},
			yAxis: {
				axisLabel: 'Resultado',
				axisLabelDistance: 30
			},
			callback: function() {
				console.log('!!! lineChart callback !!!');
			}
		},
		title: {
			enable: true,
			text: 'Title for Line Chart'
		}
	};
};
angular.module('simpleAngularAppApp')
	.controller('CalcCtrl', CalcCtrl);