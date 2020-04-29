// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
// var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

// var roles = require("../config/roles.js")

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // console.log('/api/login', " ", req.user)
    console.log("/api/login called apiroute")
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      role: "Job Seeker"
    })
      .then(function () {
        // console.log('/api/signup', " ", req.body)
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
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    // console.log('/api/user_data', " ", req.user)
    res.json({
      email: req.user.email,
      id: req.user.id,
      role: req.user.role
    });
  });
  //--- api functions for company
  // need get(read), post(create), put (update), and delete

  app.get("/api/company", function (req, res) {
    // Otherwise send back 
    console.log("At /api/company GET...")
    db.Company.findAll({
      // only this user's items, not all...
      // need where... 
      user_id: req.user.id
    }).then(function (dbCompany) {
      // We locate companies
      // console.log('/api/company GET', dbCompany)
      res.json(dbCompany);
    });
  });


  //create
  app.post("/api/company", function (req, res) {
    console.log('/api/company POST')
    //, " ", req.body)
    db.Company.create({
      user_id: req.body.user_id1,
      company: req.body.company,
      notes: req.body.notes,
      rating: parseFloat(req.body.rating)
    })
      .then(newCompany => {
        res.json(newCompany)
      })
      .catch(err => {
        throw err
      })
    // if (err) throw err;
  });

  //update
  app.put("/api/company", function (req, res) {
    console.log('/api/company PUT', " ", req.body)
    db.Company.updateAttributes({
      user_id: req.body.user_id,
      company: req.body.company,
      notes: req.body.notes,
      rating: parseFloat(req.body.rating)
    })
      .then(updatedCompany => {
        res(updatedCompany)
      })
    if (err) throw err;
    res.redirect('/members/company');
  });

  app.delete("/api/company", function (req, res) {
    console.log('/api/company DELETE', " ", req.body)
    db.Company.destroy({
      // id:
      where: {
        user_id: req.body.user_id,
        id: req.body.id
      }
    })
      .then(deletedCompany => {
        res(deletedCompany)
      })
      .catch(() => {
        // throw err;
        throw "Error in sequelize delete company !"
      })
  });


  //-- api functions for contacts





  //-- api functions for resumes. 




  //-- end of all apis
};

