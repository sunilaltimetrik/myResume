'use strict';

resumeStack
    .controller('dashboardResumeListController',
        function dashboardResumeListController($scope, dashboardResumeListServices){
            $scope.title = "Resume Collection";
            $scope.tableHeaders = ["Phone", "Name", "Job Label", "Key Skills", "Experience", "References", "Actions"];
            /* dashboardResumeListServices.getResumeCollection(function(response){
                var responseObject = response.rows;
                var resumeCollection = [],
                    rowData = {};
                responseObject.forEach(function(resumeObject){
                    rowData = {};

                    rowData.recId = resumeObject.id;
                    rowData.recKey = resumeObject.key;
                    rowData.name = resumeObject.doc.basicInfo.sectionFields[0].value;
                    rowData.phone = resumeObject.doc.basicInfo.sectionFields[2].value;
					
					//TODO loop over the array and attach all data(now only one data is taken)
					
                    rowData.label=resumeObject.doc.skillsInfo.sectionFields[0].value;
					//rowData.label = label[0].value;
					rowData.skillsInfo = resumeObject.doc.skillsInfo.sectionFields[2].value;
					//rowData.skillsInfo = skillsInfo[2].value;
					rowData.referencesInfo = resumeObject.doc.referencesInfo.sectionFields[0].value;
					var exp = resumeObject.doc.jobExperienceInfo.sectionFields[0];
					rowData.experience = exp[0].value;

                    resumeCollection.push(rowData);
                });
                $scope.resumeCollection = resumeCollection;
            }); */
			
				//pagination
				// pagination controls
				$scope.currentPage = 1; 
				$scope.entryLimit = 10;
				
				

				// $watch search to update pagination
			$scope.pageChanged = function(page) {
				dashboardResumeListServices.getResumeCollection($scope.currentPage,function(response){
					$scope.totalItems = response.total_rows;
					$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
					var responseObject = response.rows;
					var resumeCollection = [],
                    rowData = {};
					responseObject.forEach(function(resumeObject){
                    rowData = {};

                    rowData.recId = resumeObject.id;
                    rowData.recKey = resumeObject.key;
                    rowData.name = resumeObject.doc.basicInfo.sectionFields[0].value;
                    rowData.phone = resumeObject.doc.basicInfo.sectionFields[2].value;
					
					//TODO loop over the array and attach all data(now only one data is taken)
					
					rowData.label=resumeObject.doc.skillsInfo.sectionFields[0].value;
					if(rowData.label[0] == 'undefined'){
						rowData.label = rowData.label[0].value;
					}	
						
					
                    
					rowData.skillsInfo = resumeObject.doc.skillsInfo.sectionFields[2].value;
					if(rowData.skillsInfo[2] == 'undefined'){
						rowData.skillsInfo = rowData.skillsInfo[2].value;
					}
					
					rowData.referencesInfo = resumeObject.doc.referencesInfo.sectionFields[0].value;
					var exp = resumeObject.doc.jobExperienceInfo.sectionFields[0];
					rowData.experience = exp[0].value;

                    resumeCollection.push(rowData);
                });
                $scope.resumeCollection = resumeCollection;
					});
				};
				//end pagination

            $scope.expirienceFilter = function(filterName, minExp, maxExp){
                return function(resume) {
                    var min = minExp,
                        max = maxExp,
                        keywordFilter = true,
                        expFilter = true;

                    if(filterName){
                        keywordFilter = (resume.name.indexOf(filterName) >= 0 ||
                                        resume.label.indexOf(filterName) >= 0 ||
                                        resume.skillsInfo.indexOf(filterName) >= 0) || 
										resume.referencesInfo.indexOf(filterName) >= 0 ? true : false;
                    }

                    if(min && max) {
                        expFilter = Number(resume.experience) >= Number(min) &&
                                     Number(resume.experience) <= Number(max) ? true : false;
                    } else if(min) {
                        expFilter = Number(resume.experience) >= Number(min) ? true : false;
                    } else if(max){
						expFilter = Number(resume.experience) <= Number(max) ? true : false;
					}

                    if(keywordFilter && expFilter){
                        return resume;
                    }
                }
            }

            $scope.routeToDownloadTemplate = function(resumeId){
                $location.path("/showDetails/"+resumeId);
            }
    })
    .controller('addProfileController',
        function addProfileController($scope,$routeParams, $location,displayResumeFormServices,displayResumeDetailsServices){
            $scope.title = "Add Profile";
			
			//Variables needed to add/remove recurring section
			var countForEducation = 1;
			var countForExp = 1;
			var countForProjects = 1;
			
			//For validation
			$scope.validationOptions = $('#news_action').validate({
				rules: {
					name: {
							required: true,
							minlength: 2
						},
					email: {
							required: true,
							email: true
						},
					phone: {
						required: true,
						minlength: 10,
						maxlength:10
					},
					postalcode: {
						minlength : 6,
						maxlength: 6
					},
					startdate: {
						greaterThan:true,
					},
					enddate:{
						isAfterStartDate:true,
					},
				},
				messages: {
					name:{
						required:"We need your name",
					},
					email: {
						required: "We need your email address to contact you",
						email: "Your email address must be in the format of name@domain.com"
					},
					phone: {
						required: "You must enter a phone number",
						minlength: "Your phone number must have a minimum length of 10 digits",
						maxlength: "Your phone number must have a maximum length of 10 digits"
					},
					postalcode: {
						minlength: "Your phone number must have a minimum length of 6 digits",
						maxlength: "Your phone number must have a maximum length of 6 digits"
					},
				},
				highlight: function (element) {
					$(element).parent().addClass('error')
				},
				unhighlight: function (element) {
					$(element).parent().removeClass('error')
        }
			});
			

            displayResumeFormServices.getResumeFormJson(function(response){
                $scope.resumeFormfields = response;
            });

            $scope.addField = function(fieldInfo, hashId, index){
				
				if(hashId == "educationInfo"){
					countForEducation++;
					displayResumeFormServices.getResumeEducationFormJson(function(response){
                 
						for (var fieldSection in $scope.resumeFormfields) {
						if(fieldSection === hashId){
							$scope.resumeFormfields[fieldSection].sectionFields.splice(index, 0, response);
						}
						}
					});
				}else if(hashId == "jobExperienceInfo"){
					countForExp++;
					displayResumeFormServices.getResumeExperienceFormJson(function(response){
                 
						for (var fieldSection in $scope.resumeFormfields) {
						if(fieldSection === hashId){
							$scope.resumeFormfields[fieldSection].sectionFields.splice(index, 0, response);
						}
						}
					});
				}else if(hashId == "projectDetails"){
					countForProjects++;
					displayResumeFormServices.getResumeProjectsFormJson(function(response){
                 
						for (var fieldSection in $scope.resumeFormfields) {
							if(fieldSection === hashId){
								$scope.resumeFormfields[fieldSection].sectionFields.splice(index, 0, response);
							}
						}
					});
				}   
            };
			
			 $scope.removeField = function(fieldInfo, hashId, index){
				if(hashId == "educationInfo"){
					if(countForEducation == 1){ alert("you cant delete");}else{
						for (var fieldSection in $scope.resumeFormfields) {
						if(fieldSection === hashId){
                        $scope.resumeFormfields[fieldSection].sectionFields.splice(countForEducation-1,1);
						}
					}
					countForEducation--;
					}
					
				}else if(hashId == "jobExperienceInfo"){
					if(countForExp == 1){ alert("you cant delete");}else{
						for (var fieldSection in $scope.resumeFormfields) {
						if(fieldSection === hashId){
                        $scope.resumeFormfields[fieldSection].sectionFields.splice(countForExp-1,1);
						}
					}
					countForExp--;
					}
				}else if(hashId == "ProjectDetails"){
					if(countForProjects == 1){ alert("you cant delete");}else{
						for (var fieldSection in $scope.resumeFormfields) {
						if(fieldSection === hashId){
                        $scope.resumeFormfields[fieldSection].sectionFields.splice(countForProjects-1,1);
						}
					}
					countForProjects--;
					}
				}
                
            };

            $scope.submitResume = function(form){
				var s = form.validate();
				console.log(s+"  form");
				if(form.validate()) {
					
					displayResumeFormServices.storeResume($scope.resumeFormfields, function(response){
						$scope.statusMsg = response.ok;
						toastr.success("Data stored successfully.......");
						$location.path('/');
					});
					// Form is valid!
				}    
            };
    })
    .controller('editProfileController',
        function editProfileController($scope,$routeParams,$location,displayResumeFormServices,displayResumeDetailsServices){
            $scope.title = "Edit Profile";
			
			//Variables needed to add/remove recurring section
			var countForEducation = 1;
			var countForExp = 1;
			var countForProjects = 1;
			

            displayResumeDetailsServices.getResumeDetails($routeParams.resumeId, function(response){
			console.log(response);
				
                $scope.resumeFormfields = response;
				$scope.resumeFormfields.basicInfo.sectionFields[0]._id = response._id;
				$scope.resumeFormfields.basicInfo.sectionFields[0]._rev = response._rev;
				delete $scope.resumeFormfields["_id"];
				delete $scope.resumeFormfields["_rev"];
				
            });

            $scope.updateResume = function(){
				$scope.resumeFormfields._id = $scope.resumeFormfields.basicInfo.sectionFields[0]._id;
				$scope.resumeFormfields._rev = $scope.resumeFormfields.basicInfo.sectionFields[0]._rev;
				delete $scope.resumeFormfields.basicInfo.sectionFields[0]._id;
				delete $scope.resumeFormfields.basicInfo.sectionFields[0]._rev;

                displayResumeFormServices.updateResume($scope.resumeFormfields, function(response){
                    $scope.statusMsg = response.ok;
					toastr.success("Data updated successfully.......");
					$location.path('/');
                });
            }
			$scope.addField = function(fieldInfo, hashId, index){
				if(hashId == "educationInfo"){
					countForEducation++;
					displayResumeFormServices.getResumeEducationFormJson(function(response){
                 
						for (var fieldSection in $scope.resumeFormfields) {
						if(fieldSection === hashId){
							$scope.resumeFormfields[fieldSection].sectionFields.splice(index, 0, response);
						}
						}
					});
				}else if(hashId == "jobExperienceInfo"){
					countForExp++;
					displayResumeFormServices.getResumeExperienceFormJson(function(response){
                 
						for (var fieldSection in $scope.resumeFormfields) {
						if(fieldSection === hashId){
							$scope.resumeFormfields[fieldSection].sectionFields.splice(index, 0, response);
						}
						}
					});
				}else if(hashId == "projectDetails"){
					countForProjects++;
					displayResumeFormServices.getResumeProjectsFormJson(function(response){
                 
						for (var fieldSection in $scope.resumeFormfields) {
						if(fieldSection === hashId){
							$scope.resumeFormfields[fieldSection].sectionFields.splice(index, 0, response);
						}
						}
					});
				}   
            };
			
			 $scope.removeField = function(fieldInfo, hashId, index){
				if(hashId == "educationInfo"){
					if(countForEducation == 1){ alert("you cant delete");}else{
						for (var fieldSection in $scope.resumeFormfields) {
						if(fieldSection === hashId){
                        $scope.resumeFormfields[fieldSection].sectionFields.splice(countForEducation-1,1);
						}
					}
					countForEducation--;
					}
					
				}else if(hashId == "jobExperienceInfo"){
					if(countForExp == 1){ alert("you cant delete");}else{
						for (var fieldSection in $scope.resumeFormfields) {
						if(fieldSection === hashId){
                        $scope.resumeFormfields[fieldSection].sectionFields.splice(countForExp-1,1);
						}
					}
					countForExp--;
					}
				}else if(hashId == "ProjectDetails"){
					if(countForProjects == 1){ alert("you cant delete");}else{
						for (var fieldSection in $scope.resumeFormfields) {
						if(fieldSection === hashId){
                        $scope.resumeFormfields[fieldSection].sectionFields.splice(countForProjects-1,1);
						}
					}
					countForProjects--;
					}
				}
                
            };
    })
	.controller('chartController',
        function chartController($scope,dashboardResumeListServices){
		    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
			$scope.data = [300, 500, 100];
			dashboardResumeListServices.getResumeCollection(function(response){
                var responseObject = response.rows;
                var resumeCollection = [],
                rowData = {};
				$scope.ResumeData = {};
                responseObject.forEach(function(resumeObject){
                    rowData = {};

                    rowData.recId = resumeObject.id;
                    rowData.recKey = resumeObject.key;
                    rowData.name = resumeObject.doc.basicInfo.sectionFields[0].value;
                    rowData.phone = resumeObject.doc.basicInfo.sectionFields[2].value;
                    rowData.label = resumeObject.doc.skillsInfo.sectionFields[0].value;
                    rowData.skillsInfo = resumeObject.doc.skillsInfo.sectionFields[2].value;
                    rowData.referencesInfo = resumeObject.doc.referencesInfo.sectionFields[0].value;
					rowData.experience = resumeObject.doc.jobExperienceInfo.sectionFields[1].value;
                    resumeCollection.push(rowData);
                });
			

            
            });

			
		})
    .controller('showDetailsController',
        function showDetailsController($scope, displayResumeDetailsServices, $routeParams,$http){
            $scope.title = "Profile Details";
			displayResumeDetailsServices.getResumeDetails($routeParams.resumeId, function(response){
				var skillKeyWords = [];
				$scope.resumeObject = response;
				$scope.skillsetLabels = $scope.resumeObject.skillsInfo.sectionFields[0].value;
				
				$scope.basics={};
				$scope.basics.name = $scope.resumeObject.basicInfo.sectionFields[0].value;
				$scope.basics.email = $scope.resumeObject.basicInfo.sectionFields[1].value;
				$scope.basics.phone = $scope.resumeObject.basicInfo.sectionFields[2].value;
				
				$scope.educations = [];
				for(var k = 0;k<$scope.resumeObject.educationInfo.sectionFields.length;k++){
					var obj = {};
					var temp = $scope.resumeObject.educationInfo.sectionFields[k];
					obj.label = temp[0].value;
					obj.startDate = temp[3].value;
					obj.endDate = temp[4].value;
					obj.place = temp[6].value;
					$scope.educations.push(obj); 
				}
				
				$scope.experiences = [];
				for(var k = 1;k<$scope.resumeObject.jobExperienceInfo.sectionFields.length;k++){
					var obj = {};
					var temp = $scope.resumeObject.jobExperienceInfo.sectionFields[k];
					obj.label=temp[0].value;
					obj.startDate = temp[2].value;
					obj.endDate = temp[3].value;
					obj.company = temp[4].value;
					obj.summary = temp[5].value;
					$scope.experiences.push(obj);
				}
				
				$scope.skillKeyWords = [];
				var skill = $scope.resumeObject.skillsInfo.sectionFields[2].value;
					skill = skill.split(',');
				var skillRating = $scope.resumeObject.skillsInfo.sectionFields[3].value;
					skillRating = skillRating.split(',');
				for(var i=0;i<skill.length;i++){
					var obj={};
					obj.skill = skill[i];
					obj.rate = skillRating[i];
					$scope.skillKeyWords.push(obj);
				}
				
				$scope.projects = [];
				for(var k = 0;k<$scope.resumeObject.projectDetails.sectionFields.length;k++){
					var obj = {};
					var temp = $scope.resumeObject.projectDetails.sectionFields[k];
					obj.name=temp[0].value;
					obj.technologies = temp[1].value;
					obj.description = temp[2].value;
					$scope.projects.push(obj);
				}
				
				//For career profile
				$scope.objective = {};
				var exp = $scope.resumeObject.jobExperienceInfo.sectionFields[0];
				$scope.objective.experience = exp[0].value;
				if($scope.objective.experience >= 1){
					$scope.objective.expType = "year";
				}else{
					$scope.objective.expType = "month";
				}
				$scope.objective.skill = skill.toString();
				console.log($scope.objective.skill);
				
				//Languages and Interests
				$scope.languages = $scope.resumeObject.basicInfo.sectionFields[3].value;
				$scope.languages = $scope.languages.split(',');
				$scope.interests = $scope.resumeObject.basicInfo.sectionFields[4].value;
				$scope.interests = $scope.interests.split(',');

				
				
				/* //download */
				var doc = new jsPDF();
				var specialElementHandlers = {
					'#editor': function (element, renderer) {
					return true;
					}
				};

				$('#cmd').click(function () {
					doc.fromHTML($('#content').html(), 15, 15, {
						'width': 170,
							'elementHandlers': specialElementHandlers
					});
					doc.save('resume.pdf');
				});
				/* //download end */
				
				
			});
    })
    .controller('resumeTempalateController',
        function resumeTempalateController($scope, displayResumeTemplateServices, $routeParams){
            $scope.title = "Resume Templates";
            displayResumeTemplateServices.getResumeTemplates(function(response){
                $scope.resumeTemplateObject = response;
            });
    });
