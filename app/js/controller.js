'use strict';

/* Controllers */

var phonecatApp = angular.module('contactListApp', []);

phonecatApp.controller('ContactListCtrl', function($scope) {
  $scope.contacts = [
    {'first': 'Jim',
     'last': 'Cooper',
	 'extension': '3219'},
    {'first': 'Liane',
     'last': 'Cooper',
	 'extension': '3336'},
    {'first': 'Rick',
     'last': 'Brown',
	 'extension': '3376'},
	 {'first': 'Len',
     'last': 'Payne',
	 'extension': '3418'}
  ];
  $scope.orderProp = 'first';
});
