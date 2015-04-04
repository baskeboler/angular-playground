'use strict';

/**
 * @ngdoc directive
 * @name simpleAngularAppApp.directive:myVideoRecorder
 * @description
 * # myVideoRecorder
 */
angular.module('simpleAngularAppApp')
	.directive('myVideoRecorder', function($log) {
		return {
			template: '<video id="{{id}}" class="video-js vjs-default-skin"></video>',
			restrict: 'EA',
			scope: true,
			link: function(scope, element, attrs) {
				var vid = $(element);
				scope.id = attrs.id;
				$log.debug(vid);
				scope.player = videojs(scope.id, {
					controls: true,
					loop: false,
					width: 320,
					height: 240,
					plugins: {
						record: {
							image: false,
							audio: false,
							video: true,
							maxLength: 5
						}
					}
				});
			},
			replace: true
		};
	});