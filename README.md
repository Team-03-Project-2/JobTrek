# Welcome to JobTrek 👋
![Version](https://img.shields.io/badge/version-0.9-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> There are many job application trackers, but we think they are difficult to use and are not flexible enough to track the right amount of information. So we wrote our own. We call it JobTrek.

### ✨ [Deployed Heroku Demo](https://project-2-team3.herokuapp.com/)

NOTE: This is NOT a secure demo. While the password field is encrypted by bCrypt and salted, the passport-local implementation is NOT scalable or secure. This is more of a proof of concept. 

## Notable Features

* Graphical display of "jobboard" shows progress of job, from wishlist to applied to response to interview to offer. 
* Contact log and task log that user can enter to remind oneself about follow-up tasks and contacts with prospects or companies. 
* Ability to store links to resumes so they can be linked to specific job applications
* Full use of sequelize ORM so no table was ever accessed directly
* (Fairly) consistent interface style through use of Bootstrap 4

## Expected Usage

* User, upon sign up, goes to main menu and reads short explanation of features. 
* User then adds a job s/he wants to wishlist, or apply to at the jobboard
* User can also add a resume to be used later in the application, and job board will track it with the job (application) it was used on. 
* User can add task reminders and contact log entries to remember specific contacts. 
* As job applications change status (responded, rejected, etc.) user can note change of status, and add follow-up dates if needed. 

## Wishlist features

The team made the decision to freeze features on SATURDAY morning and only perform bug fixes for the rest of the project work time, as the app already meets MVP. 

Drag and drop a job from column to column would have been nice to have. 

"Automatic tasks" and "automatic contactlog" were never implemented. For example, when a job changes from "applied" to "responded" it should automatically generate corresponding entries in contactlog such as "Received email from X indicating interest, will follow up to set interview time", and a matching entry in task "Reminder to followup for interview". That was left on the wishlist. 

The dashboard is also missing a lot of convenience features such as highlighting overdue items in red, or highlighting "almost there" items in yellow. 

Many of the data entry modal dialog boxes can also use a bit more user-friendly features like drop-doown menus. Also the fields are only minimally validated, when all of them should have full jQueryValidation incorporated. 

## Pie in Sky Stretch Goals

* Its own email server, both send and receive, so it can record applications sent and responses received automatically 
* Its own phone number, similar to Google Voice, so it can categorize outgoing and incoming responses automatically, through both voice calls (via call log) and SMS


## Internals

Internally, this is a node.js / express.js server using sequelize ORM driving a MySQL (or compatible) backend. It uses Passport / Passport-Local and express-sessions for authentication. A full suite of RESTful API calls had been implemented for the various tables. 

The client-side utilizes handlebars, moment.js, bootstrap 4, and jQuery to retrieve data via sequelize. 

For simplicity of debugging, many handlebars files contain both HTML and js, as not to load separate files and trying to match which one goes where. 


## Node Modules used

* sequelize and mysql2
* node.js and express.js
* express-sessions
* express-handlebars
* moment.js (serverside and client-side)
* passport and passport-local and bcryptjs
* Bootstrap4
* jQuery
* Fontawesome icons

## Interesting code snippets

The dashboard hbs utilized two partial hbs to implement to two separate panels

```
      <div class="row m-0 p-0">
        <div class="col-6 m-0 p-0">
          {{> dashboard/taskdash}}
        </div>
        <div class="col-6 m-0 p-0">
          {{>dashboard/contactlogdash}}
        </div>
      </div>
```

The corresponded to 2 separate hbs files under the partials/dashboard subdirectory. 

```
│
└───partials
    ├───dashboard
    │       contactlogdash.handlebars
    │       taskdash.handlebars
```

Each of which calls the RESTful API to pull its own data, and has its own button and modal dialog box to execute a post call to create a new record. 


## Authors

👤 **Team 3 ( Cristina Terry, Juliet George, Kasey Chang)**

* Logo designed by Cristina Terry, modified by Kasey Chang

* Jobboard designed by Juliet George

* Resume board designed by Cristina Terry

* Overall UI and other parts by Kasey Chang

* Github: [@https:\/\/github.com\/Team-03-Project-2\/JobTrek](https://github.com/https:\/\/github.com\/Team-03-Project-2\/JobTrek)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_