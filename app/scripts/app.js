'use strict';

/**
 * @ngdoc overview
 * @name helloworldApp
 * @description
 * # helloworldApp
 *
 * Main module of the application.
 */
angular
  .module('helloworldApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/hello-world', {
        templateUrl: 'views/hello-world.html',
        controller: 'HelloWorldCtrl'
      })
      .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
