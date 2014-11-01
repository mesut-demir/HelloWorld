'use strict';

/**
 * @ngdoc function
 * @name helloworldApp.controller:FormExampleCtrl
 * @description
 * # FormExampleCtrl
 * Controller of the helloworldApp
 */
angular.module('helloworldApp')
	.controller('FormExampleCtrl', function($scope) {

		$scope.genderChanged = function() {
			console.log('user changed gender to ' + $scope.user.gender);
		};


		$scope.nameChanged = function() {
			console.log('user changed name to ' + $scope.user.name);
		};

	})
	.controller('MainCtrl', function($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	})
	.controller('nameCTRL', ['$scope',
		function(sc) {

			sc.option = true;

		}
	]);

/* jsformat = ctrl + alt + F*/