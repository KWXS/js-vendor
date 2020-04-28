angular.module('mentio').run([
	'$templateCache',
	function($templateCache) {
		$templateCache.put(
			'mentio-menu.tpl.html',
			'<ul class="dropdown-menu" style="display:block">\n    <li mentio-menu-item="item" ng-repeat="item in items track by $index">\n        <a class="text-primary" ng-bind-html="item.label | mentioHighlight:triggerText:\'menu-highlighted\' | unsafe"></a>\n    </li>\n</ul>'
		);
	},
]);
