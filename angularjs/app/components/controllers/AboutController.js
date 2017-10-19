// AboutController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('mostPopularListingsApp.about', ['ngRoute'])

	// Routing configuration for this module
	.config(['$routeProvider', function ($routeprovider) {
		$routeprovider.when('/about', {
			controller: 'AboutController',
			templateUrl: 'components/views/aboutView.html'
		});
	}])

	// Controller definition for this module
	.controller('AboutController', ['$scope', function ($scope) {

		// Just a housekeeping.
		// In the init method we are declaring all the
		// neccesarry settings and assignments to be run once
		// controller is invoked
		init();

		function init() {

		};
		$scope.people = 'hello';
		// $scope.people = [{
		// 	name: 'Harry Potter',
		// 	role: 'Engineer'
		// }, {
		// 	name: 'Hermione Granger',
		// 	role: 'Public Relations'
		// }, {
		// 	name: 'Ron Weasley',
		// 	role: 'Donut-Fetching Intern'
		// }, {
		// 	name: 'Albus Dumbledore',
		// 	role: 'Generic Boss'
		// }, {
		// 	name: 'Severus Snape',
		// 	role: 'Sidekick'
		// }, {
		// 	name: 'Rubeus Hagrid',
		// 	role: 'Rhubarb?'
		// }, {
		// 	name: 'Leo Martinez',
		// 	role: 'Systems Administrator - bless his soul.'
		// }];

	}]);
