'use strict';

/**
 * @ngdoc function
 * @name helloworldApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloworldApp
 */
angular.module('helloworldApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.myMsg = 'Hello World';


    $scope.myJson = {
    	'name' : 'mesut',
    	'job' : 'developer'
    };

    $scope.myFunction = function (myParam) {
    	$scope.test = 12;
    	alert('My Name is ' + myParam);
    };


/*    this.myMsg = 'different Controller';

    this.myJson = {
    	'name' : 'mesut',
    	'job' : 'developer'
    };

    this.myFunction = function (myParam) {
    	$scope.test = 12;
    	alert('My Name is ' + myParam);
    };*/

  });
