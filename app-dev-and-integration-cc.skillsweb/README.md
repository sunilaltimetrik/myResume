# Resume Engine Application

This project is an application typical used internally in Altimetrik to handle all the resumes related operations.

This Application is end to end tool in handling a resume. Starting cycle from creating, editing, updating, searching to downloading a resume.   

Application has been built using AngularJs and Bootstrap frameworks. For server side CouchDb has been implemented for quick and SQL free database.

## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

####Install below listed Softwares
```
  -Git
  -npm
  -CouchDB
```
####Few setups in installed softwares

1 - In CouchDB
    Add the below attributes in config.html (http://127.0.0.1:5984/_utils/config.html)
    ```
    [httpd]
      enable_cors = true

    [cors]
      origins = *
      credentials = true
      methods = GET, PUT, POST, HEAD, DELETE
      headers = accept, authorization, content-type, origin, referer, x-csrf-token
    ```

####Cloning the Code
You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).


### Install Dependencies

```
npm install
```

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

## Directory Layout

```
app/                    --> all of the source files for the application
  css/                  --> stylesheet folder
      app-theme.css               --> bootstrap over write stylesheet
      bootstrap.css               --> bootstrap stylesheet
      resume.css                  --> Application stylesheet

  js/           --> all app specific javascript files
    controllers/         --> application controller 
      displayList.js              --> resumeStack controller
    modules/             --> application modules 
      displayList.js              --> resumeStack mapping module
    resources/           --> framework libraries
      angular-resources.js        --> angular resource library
      angular-route.js            --> angular route resource
      angular.js                  --> bootstrap library
      bootstrap.js                --> resumeStack mapping module
    services/            --> Web services folder
      resumeServices.js           --> Related ajax call services registered

  template/              --> Templates and Logic
    addProfile.html            --> Template for add resume page
    dashboardResumeList.html   --> Template for dashboard view
    resumeTemplates.html       --> Template for downloading resume page
    showDetails.html           --> Template for showing more details of resume
  index.html             --> The main html template file of the app
```

## Contact

For more information or help ping the below details

```
[Assembla]: https://www.assemble.com/spaces/app-dev-and-integration-cc/git-2/source
[npm]: https://www.npmjs.org/
[AngularJS]: https://angularjs.org
[CouchDB]: http://www.couchdb.apache.org
[node]: http://nodejs.org
[http-server]: https://github.com/nodeapps/http-server
```