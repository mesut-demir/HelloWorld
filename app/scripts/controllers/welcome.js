'use strict';

/**
 * @ngdoc function
 * @name helloworldApp.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the helloworldApp
 */
angular.module('helloworldApp')
  .controller('WelcomeCtrl', function ($scope){
  		
  		$scope.fname = function(argument) {
  			alert('Hi ' + argument)
  		}
  });
