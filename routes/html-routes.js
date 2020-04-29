// Requiring path to so we can use relative routes to our HTML files
// var path = require("path");
var db = require("../models");


// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("index")
  });


  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    } else {
      // res.sendFile(path.join(__dirname, "../public/login.html"));
      res.render("signup")
    }
  });

  app.get("/demo", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/administrator.html"));
    res.render("demo")
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    } else {
      // res.sendFile(path.join(__dirname, "../public/login.html"));
      res.render("login")
    }
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("members")
  });

  app.get("/members/dashboard", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("dashboard")
  });

  app.get("/members/jobboard", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("jobboard")
  });

  app.get("/members/maintain", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("maintain")
  });

  app.get("/members/company", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    db.Company.findAll({}).then(function (dbCompany) {
      // We locate companies
      console.log('/members/company GET', dbCompany)
      var obj = {
        company: dbCompany
      }
      // res.render("company", dbCompany);
      res.render("company", obj);
    });
  });

  app.get("/members/contact", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("contact")
  });

  app.get("/members/resume", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("resume")
  });


  app.get("/admin", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/administrator.html"));
    res.render("administrator")
  });


};
