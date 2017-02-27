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
      .when('/employees', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .when('/employees/add', {
        templateUrl: 'views/add.html',
        controller: 'AddEmployeeCtrl',
        controllerAs: 'add'
      })
      .otherwise({
        redirectTo: '/employees'
      });
  });
