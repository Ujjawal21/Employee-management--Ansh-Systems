'use strict';

/**
 * @ngdoc function
 * @name employeeCrudApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the employeeCrudApp
 */
angular.module('employeeCrudApp')
  .controller('OperationCtrl', '$scope', '$http', 'employee', '$routeProvider',
  		function ($scope, $http, employee, $routeProvider) {

	  $scope.employee = {};
	  if ($routeProvider.resource) {
		  $scope.employeeService = new employee();
		  employeeService.get(function mySucces(response) {
	          $scope.employee = response.data;
	      }, function myError(response) {
	          console.log(response.statusText);
	      });
	  }

});
