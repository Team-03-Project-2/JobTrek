var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function (app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error

  app.get("/members/resume", function (req, res) {
    // console.log(req.user);
    db.Resume.findAll().then(function (data) {
      console.log("printing all from resume table", data[0].dataValues)
      res.render("resume", {
        resume: data
      })

    });
  })

  // app.get("/api/resume/id", function (req, res) {
  //   db.resume.findOne().then(function(data){
  //   res.json(data);
  //  });

  // });

  app.post("/api/resume/create", function (req, res) {
    console.log("I got called")
    let resumeDate;
    if (req.body.date == null || eq.body.date == undefined) {
      resumeDate = Date.now();
    } else {
      resumeDate = req.body.date;
    }

    let newResumeObject = {

      // user_id : req.user.id,
      user_id: 1,
      star: false,
      fileName: req.body.fileName,
      date: resumeDate,
      role: req.body.role,
      notes: req.body.note,
      fileLocation: req.body.fileLocation

    }
    console.log("create objec", newResumeObject);
    db.Resume.create(newResumeObject).then(function () { })

  })

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error

};