'use strict';

var resumeStack = angular.module('resumeStack', ["ngRoute","chart.js","ngValidate","ngAnimate","ui.bootstrap"]);

	resumeStack.config(function($routeProvider,$validatorProvider){
		
		$routeProvider

			.when('/', {
	                templateUrl : 'templates/dashboardResumeList.html',
	                controller  : 'dashboardResumeListController'
	            })

			.when('/addProfile', {
				templateUrl: 'templates/addProfile.html',
				controller: 'addProfileController'
			})
			
			.when('/editProfile/:resumeId', {
				templateUrl: 'templates/editProfile.html',
				controller: 'editProfileController'
			})
			
			.when('/showDetails/:resumeId', {
				templateUrl: 'templates/showDetails.html',
				controller: 'showDetailsController'
			})
			
			.when('/chart', {
				templateUrl: 'templates/chart.html',
				controller: 'chartController'
			})

			.when('/resumeTemplates', {
				templateUrl: 'templates/resumeTemplates.html',
				controller: 'resumeTempalateController'
			});
			var r;
			$validatorProvider.addMethod("greaterThan", function (value, element) {
				var s = value.substring(0,4);
				r = value;
				return  parseInt(s) >= 1965;
			}, "Please give year greater than 1965");
			$validatorProvider.addMethod("isAfterStartDate", function(value, element) {
				return isAfterStartDate(r, value);
			}, "End date should be after start date");
	});

	
	var isAfterStartDate = function(startDateStr, endDateStr) {
            var inDate = new Date(startDateStr),
                eDate = new Date(endDateStr);
            if(inDate < eDate) {
                return true;
            }

        };