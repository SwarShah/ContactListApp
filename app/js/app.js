'use strict';

// Declare app level module which depends on views, and components
var contactListApp = angular.module('contactListApp', [
  'ngRoute',
  'contactListControllers'
]);

contactListApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/contacts', {
	templateUrl: 'partials/contact-list.html',
	controller: 'ContactListCtrl'
  }).
  when('/contacts/:contactId', {
	templateUrl: ' partials/contact-detail.html',
	controller: 'ContactDetailCtrl'
  }).
  otherwise({redirectTo: '/contacts'});
}]);
