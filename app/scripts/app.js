'use strict';

/**
 * @ngdoc overview
 * @name employeeCrudApp
 * @description
 * # employeeCrudApp
 *
 * Main module of the application.
 */
var angularApp = angular
  .module('employeeCrudApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
	.when('/employees/add', {
	  templateUrl: 'views/detail.html',
	  controller: 'OperationCtrl',
	  controllerAs: 'add',
	  action: 'addEmployee'
	})
      .when('/employees', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
	  .when('/employees/:resource/edit', {
        templateUrl: 'views/detail.html',
        controller: 'OperationCtrl',
        controllerAs: 'add',
		action: 'editEmployee'
      })
      .otherwise({
        redirectTo: '/employees'
      });
  });
