// HomeController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('mostPopularListingsApp.login', ['ngRoute'])

	// Routing configuration for this module
	.config(['$routeProvider', function ($routeprovider) {
		$routeprovider.when('/login', {
			controller: 'LoginController',
			templateUrl: 'components/views/loginView.html'
		});
	}])

	// Controller definition for this module
	.controller('LoginController', function ($scope) {

		$scope.user = {};

		// Just a housekeeping.
		// In the init method we are declaring all the
		// neccesarry settings and assignments to be run once
		// controller is invoked
		init();

		function init() { };

		$scope.echoForm = function () {
			console.log($scope.user);
		}

		$scope.reset = function () {
			this.user = {};
		}
	});
