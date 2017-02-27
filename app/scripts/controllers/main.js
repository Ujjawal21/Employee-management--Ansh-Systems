'use strict';

/**
 * @ngdoc function
 * @name employeeCrudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the employeeCrudApp
 */
angular.module('employeeCrudApp')
  .controller('ListCtrl', ['$scope', '$http', function ($scope, $http) {
	  $scope.employeeList = [];
    $http({
        method : "GET",
        url : "/listUsers"
    }).then(function mySucces(response) {
        $scope.employeeList = response.data;
    }, function myError(response) {
        console.log(response.statusText);
    });
}]);
