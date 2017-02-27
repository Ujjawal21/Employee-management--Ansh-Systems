angular.module('employeeCrudApp').factory('employee', function($resource) {
  return $resource('/api/employee/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
	},
	  save: {
		  method: 'POST'
	},
	  get: {
		  method: 'GET'
	}
  });
});
