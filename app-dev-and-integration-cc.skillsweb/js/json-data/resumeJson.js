{
	"basicInfo":{
		"sectionLabel":"Basic Information",
		"sectionFields": [
		{ 
	        "label": "Name",
	        "fieldName": "name",
	        "controlType": "text",
	        "placeholder": "Name",
	        "name":"name",
	        "value":""
		},
		{ 
	        "label": "Email",
	        "fieldName": "email",
	        "controlType": "email",
	        "placeholder": "Email",
	        "value":"",
			"name":"email"
	    },
	    { 
	        "label": "Phone",
	        "fieldName": "phone",
	        "controlType": "number",
	        "placeholder": "Phone",
	        "required" : true,
	        "value":"",
			"name":"phone"
		},
		{ 
	        "label": "Languages",
	        "fieldName": "languages",
	        "controlType": "text",
	        "placeholder": "languages you know",
	        "value":""
		},
		{ 
	        "label": "Interests",
	        "fieldName": "interests",
	        "controlType": "text",
	        "placeholder": "Interests you have",
	        "value":""
		},
		{ 
	        "label": "Summary",
	        "fieldName": "summary",
	        "controlType": "textarea",
	        "placeholder": "Summary",
	        "recurring" : true,
	        "value":""
		}
		]
	},
	"locationInfo":{
		"sectionLabel":"Location",
		"sectionFields": [
		{ 
	        "label": "Address",
	        "fieldName": "adress",
	        "controlType": "adress",
	        "recurring" : true,
	        "placeholder": "Address",
	        "value":""
		},
		{ 
	        "label": "Postal Code",
	        "fieldName": "postalcode",
	        "controlType": "text",
	        "placeholder": "Postal Code",
	        "value":"",
			"name":"postalcode"
	    },
	    { 
	        "label": "City",
	        "fieldName": "city",
	        "controlType": "text",
	        "placeholder": "City",
	        "value":""
		},
		{ 
	        "label": "State",
	        "fieldName": "state",
	        "controlType": "text",
	        "placeholder": "State",
	        "value":""
		}
		]
	},
	"educationInfo":{
		"sectionLabel":"Education",
		 "recurring" : true,
		"sectionFields": [[{ 
	        "label": "Institution",
	        "controlType": "text",
	        "placeholder": "Institution",
	        "value":""
		},
		{ 
	        "label": "Area",
	        "controlType": "text",
	        "placeholder": "CS, IS, MBA..",
	        "value":""
	    },
	    { 
	        "label": "Study Type",
	        "controlType": "text",
	        "placeholder": "BE, MCA, MTec..",
	        "value":""
		},
		{ 
	        "label": "Start Date",
	        "controlType": "date",
	        "placeholder": "DD-MM-YYYY",
	        "value":"",
			"name":"startdate",
			"class":"greaterThan",
			"id":"txtStartDate"
		},
		{ 
	        "label": "End Date",
	        "controlType": "date",
	        "placeholder": "DD-MM-YYYY",
	        "value":"",
			"name":"enddate",
			"class":"isAfterStartDate"
		},
		{ 
	        "label": "Aggrigate / GPA",
	        "controlType": "text",
	        "placeholder": "",
	        "value":""
		},
		{ 
	        "label": "Place",
	        "fieldName": "place",
	        "controlType": "place",
	        "recurring" : true,
	        "placeholder": "Place",
	        "value":""
		},
		{ 
	        "label": "Specialized Courses",
	        "controlType": "text",
	        "placeholder": "Basic SQL, Java, C++..",
	        "value":""
		}
		]]
	},
	"recognitionInfo":{
		"sectionLabel": "Awards",
		"sectionFields": [
		{ 
	        "label": "Title",
	        "controlType": "text",
	        "placeholder": "Title",
	        "value":""
		},
		{ 
	        "label": "Date",
	        "controlType": "date",
	        "placeholder": "DD-MM-YYYY",
	        "value":""
		},
	    { 
	        "label": "Awarder",
	        "controlType": "text",
	        "placeholder": "BE, MCA, MTec..",
	        "value":""
		},
	    { 
	        "label": "Summary",
	        "controlType": "text",
	        "placeholder": "",
	        "value":""
		}
		]
	},
	"skillsInfo":{
		"sectionLabel": "Skills",
		"sectionFields": [
		{ 
	        "label": "Name",
	        "fieldName": "job label",
	        "controlType": "text",
	        "placeholder": "Web Development, Backend Development..",
	        "value":""
		},
		{ 
	        "label": "Level",
	        "controlType": "text",
	        "placeholder": "Fundamentals, Basic, Master..",
	        "value":""
	    },
	    { 
	        "label": "Key Words",
	        "fieldName": "key skills",
	        "controlType": "text",
	        "placeholder": "HTML, CSS, Javascript, Python..",
	        "value":"",
			"name":"checkdelimiter",
			"class":"checkdelimiter"
		},
		{ 
	        "label": "How would you rate your skill(select 1-10,1 is low,10 is high)",
	        "fieldName": "rating",
	        "controlType": "text",
	        "placeholder": "Give Ratings On Your Skills",
	        "value":""
		},
	    { 
	        "label": "Summary",
	        "controlType": "text",
	        "placeholder": "",
	        "value":""
		}
		]
	},
	"jobExperienceInfo": {
       "sectionLabel": "Work Experience",
	   "recurring" : true,
       "sectionFields": [[{
               "label": "Experience",
               "controlType": "number",
               "placeholder": "Total Experience In Years",
               "value": ""
           }],[
           {
               "label": "Designation",
               "controlType": "text",
               "placeholder": "Designation",
               "value": ""
           },
           {
               "label": "Experience",
               "controlType": "number",
               "placeholder": "Experience In Years",
               "value": ""
           },
           {
               "label": "Start Date",
               "controlType": "date",
               "placeholder": "DD-MM-YYYY",
               "value": "",
			   "name":"startdate",
			   "class":"greaterThan",
			   "id":"txtStartDate"
           },
           {
               "label": "End Date",
               "controlType": "date",
               "placeholder": "DD-MM-YYYY",
               "value": "",
			   "name":"enddate",
			   "class":"isAfterStartDate"
           },
           {
               "label": "Company Name",
               "controlType": "text",
               "placeholder": "Company Name",
               "value": ""
           },
           {
               "label": "Summary",
               "controlType": "text",
               "placeholder": "",
               "value": ""
           }
       ]]
   },
   	"projectDetails":{
		"sectionLabel": "Project Details",
		"recurring" : true,
		"sectionFields": [[
		{ 
	        "label": "Title",
	        "fieldName": "Project Name",
	        "controlType": "text",
	        "placeholder": "Project Name",
	        "value":""
		},
		{ 
	        "label": "Technologies ",
	        "controlType": "text",
	        "placeholder": "Technologies Used In Your Project ",
	        "value":""
	    },
	    { 
	        "label": "Description",
	        "fieldName": "Description",
	        "controlType": "text ",
	        "placeholder": "Explain about project",
	        "value":""
		}
		]]
	},
	"referencesInfo":{
		"sectionLabel": "References",
		"sectionFields": [
		{ 
	        "label": "Name",
	        "controlType": "text",
	        "placeholder": "Name",
	        "value":""
		},
		{ 
	        "label": "Designation",
	        "controlType": "text",
	        "placeholder": "",
	        "value":""
		},
		{ 
	        "label": "Comments",
	        "controlType": "text",
	        "placeholder": "",
	        "value":""
		}
		]
	}
}
