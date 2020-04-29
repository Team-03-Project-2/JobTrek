// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var roles = require("../config/roles.js")

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {

  // let test ={
  //   user_id:1, 
  //   star:true, 
  //   fileName : 'testName3', 
  //   date:Date.now(), 
  //   role:'software3'
  // }

  // db.Resume.create(test).then(()=>console.log("please print something")).catch(error => console.log(error));





    db.User.create({
      email: req.body.email,
      password: req.body.password,
      role: "Job Seeker"
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // app.get("/admin", function (req, res) {
  //   if (!req.user) {
  //     // kick them back out
  //     req.logout();
  //     res.redirect("/");
  //   } else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id,
  //       administrator: req.user.administrator
  //     });
  //   }
  // });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        role: req.user.role
      });
    }
  });
};