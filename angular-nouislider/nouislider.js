'use strict';
angular.module('ui.nouislider', []).directive('slider', function() {
	return {
		restrict: 'A',
		scope: {
			start: '@',
			step: '@',
			end: '@',
			callback: '@',
			behaviour: '@',
			margin: '@',
			disableHandle: '@',
			ngModel: '=',
			ngFrom: '=',
			ngTo: '=',
		},
		link: function(scope, element, attrs) {
			var callback, fromParsed, parsedValue, slider, toParsed;
			slider = $(element);
			callback = scope.callback ? scope.callback : 'slide';

			if (scope.ngFrom != null && scope.ngTo != null) {
				fromParsed = null;
				toParsed = null;
				slider.noUiSlider({
					start: [
						parseFloat(scope.ngFrom) || parseFloat(scope.start),
						parseFloat(scope.ngTo) || parseFloat(scope.end),
					],
					step: parseFloat(scope.step || 1),
					connect: true,
					behaviour: scope.behaviour || 'drag',
					margin: parseFloat(scope.margin || 0),
					range: {
						min: [parseFloat(scope.start)],
						max: [parseFloat(scope.end)],
					},
				});
				slider.on(callback, function() {
					var from, to, _ref;
					(_ref = slider.val()), (from = _ref[0]), (to = _ref[1]);
					fromParsed = parseFloat(from);
					toParsed = parseFloat(to);
					return scope.$apply(function() {
						scope.ngFrom = fromParsed;
						return (scope.ngTo = toParsed);
					});
				});
				// To disable one handle
				if (scope.disableHandle) {
					var origins = element[0].getElementsByClassName('noUi-origin');
					origins[0].setAttribute('disabled', true);
				}
				scope.$watch('ngFrom', function(newVal, oldVal) {
					if (newVal !== fromParsed) {
						return slider.val([newVal, null]);
					}
				});
				return scope.$watch('ngTo', function(newVal, oldVal) {
					if (newVal !== toParsed) {
						return slider.val([null, newVal]);
					}
				});
			} else {
				parsedValue = null;
				slider.noUiSlider({
					start: [scope.ngModel || scope.start],
					step: parseFloat(scope.step || 1),
					range: {
						min: [parseFloat(scope.start)],
						max: [parseFloat(scope.end)],
					},
				});
				slider.on(callback, function() {
					parsedValue = parseFloat(slider.val());
					return scope.$apply(function() {
						return (scope.ngModel = parsedValue);
					});
				});
				return scope.$watch('ngModel', function(newVal, oldVal) {
					if (newVal !== parsedValue) {
						return slider.val(newVal);
					}
				});
			}
		},
	};
});
