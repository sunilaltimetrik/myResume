'use strict'

resumeStack.factory('dashboardResumeListServices', function($http, $log) {
	return {
		getResumeCollection: function(pageNumber,successCallback) {
			var skipVal = (pageNumber-1)*10;
			$http({method: 'GET', url:'http://127.0.0.1:5984/resumeengine/_all_docs?include_docs=true&skip='+skipVal+'&limit=10'}).
				success(function(data, status, header, config){
					successCallback(data);
					}).
				error(function(data, status, header, config){
					$log.warn(data, status, header, config)
					});
				}
			}
	}).factory('displayResumeDetailsServices', function($http, $log) {
	return {
		getResumeDetails: function(resumeId, successCallback) {
			$http({method: 'GET', url:'http://127.0.0.1:5984/resumeengine/'+resumeId}).
				success(function(data, status, header, config){
					successCallback(data);
				}).
				error(function(data, status, header, config){
					$log.warn(data, status, header, config)
				});
		}
	}
	}).factory('displayResumeTemplateServices', function($http, $log) {
		return {
			getResumeTemplates: function(successCallback) {
				$http({method: 'GET', url:'http://themes.jsonresume.org/themes.json'}).
					success(function(data, status, header, config){
						successCallback(data);
					}).
					error(function(data, status, header, config){
						$log.warn(data, status, header, config)
					});
			}
		}
	}).factory('displayResumeFormServices', function($http,$log){
		return {
			getResumeFormJson: function(successCallback){
				$http({method:'GET', url:'js/json-data/resumeJson.js'}).
					success(function(data, status, header, config){
						successCallback(data);
					}).
					error(function(data, status, header, config){
						$log.warn(data, status, header, config)
					});
			},
			getResumeEducationFormJson: function(successCallback){
				$http({method:'GET', url:'js/json-data/educationJson.js'}).
					success(function(data, status, header, config){
						successCallback(data);
					}).
					error(function(data, status, header, config){
						$log.warn(data, status, header, config)
					});
			},
			getResumeExperienceFormJson: function(successCallback){
				$http({method:'GET', url:'js/json-data/experienceJson.js'}).
					success(function(data, status, header, config){
						successCallback(data);
					}).
					error(function(data, status, header, config){
						$log.warn(data, status, header, config)
					});
			},
			getResumeProjectsFormJson: function(successCallback){
				$http({method:'GET', url:'js/json-data/projectsJson.js'}).
					success(function(data, status, header, config){
						successCallback(data);
					}).
					error(function(data, status, header, config){
						$log.warn(data, status, header, config)
					});
			},
			storeResume: function(resumeFormfields, successCallback){
				$http({method:'POST', url:'http://127.0.0.1:5984/resumeengine/', data: resumeFormfields}).
					success(function(data, status, header, config){
						successCallback(data);
					}).
					error(function(data, status, header, config){
						$log.warn(data, status, header, config);
					})
			},
			updateResume: function(resumeFormfields, successCallback){
				$http({method:'PUT', url:'http://127.0.0.1:5984/resumeengine/'+resumeFormfields._id, data: resumeFormfields}).
					success(function(data, status, header, config){
						successCallback(data);
					}).
					error(function(data, status, header, config){
						$log.warn(data, status, header, config);
					})
			}

		}
	})
