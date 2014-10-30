'use strict';

/**
 * @ngdoc function
 * @name helloworldApp.controller:HelloWorldCtrl
 * @description
 * # HelloWorldCtrl
 * Controller of the helloworldApp
 */
angular.module('helloworldApp')
  .controller('HelloWorldCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
