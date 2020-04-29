var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function (app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error

  app.get("/resume",isAuthenticated, function (req, res) {
    console.log(req.user);
    
    db.Resume.findAll().then(function (data) {
     
      console.log("printing all from resume table",data[0].dataValues)
      res.render("resume", {
        resume: data
      })

    });
  })

  app.get("/api/resume/id", function (req, res) {
    db.resume.findOne().then(function(data){
    res.json(data);
   });

  });

  app.post("/api/resume/create", isAuthenticated, function (req, res) {
    
    
    let id = req.body.userId;
    let star = false;
    let role = req.body.role;
    let fileName = req.body.file;

    // create folder if it doesn't exists docs  
    // fs save file location
  })

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error

};