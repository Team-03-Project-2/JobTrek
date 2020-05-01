
// html route to job board
//renders jobboard.handlebars
// api route to job board
// posts to database when new job has been added 
// gets 
var path = require("path")
var db = require("../models");
var passport = require("../config/passport");

var isAuthenticated = require("../config/middleware/isAuthenticated");


// HTML 

module.exports = function (app) {

    app.post("/api/signup", function (req, res) {
        db.user.create({
            email: req.body.email,
            password: req.body.password,
            role: "Job Seeker"
        }).then(function () {
            // console.log('/api/signup', " ", req.body)
            res.redirect(307, "/api/login");
        })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    app.get("/api/user_data", function (req, res) {
        res.json({
            email: req.user.email,
            id: req.user.id,
            role: req.user.role
        });
    });

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });

    app.get("/members", isAuthenticated, function (req, res) {
        var reqUser = req.user.id
        console.log("reqUser = ", reqUser)
        res.render("members", { reqUser: reqUser })
    });

    app.get("/members/jobboard", function (req, res) {
        db.Job.findAll({
            //user_id:req.user.id
            user_id: req.user_id,
            where: { status: "wishlist" }
        }).then(function (wishlistData) {
            //console.log(wishlistData)
            db.Job.findAll({
                user_id: req.user_id,
                where: { status: "applied" }
            }).then(function (appliedData) {
                db.Job.findAll({
                    user_id: req.user_id,
                    where: { status: "response" }
                }).then(function (responseData) {
                    res.render("jobboard", {
                        wishlist: wishlistData,
                        applied: appliedData,
                        response: responseData
                    })
                })

            })


        });
    })

        app.get("/members/jobinfo", function (req, res) {

            res.render("jobinfo")
        });

        app.get("/members/findjobs", isAuthenticated, function (req, res) {

            res.sendFile(path.join(__dirname, '../public', 'jobapi.html'));
            //res.json("something good is coming")

        });

        // app.get("/api/jobboard", function (req, res) {


        //     db.Job.findAll({

        //         user_id: req.user.id
        //     }).then(function (dbJobboard) {

        //         res.json(dbJobboard);
        //     });
        // });

        app.get("/api/jobboard/company", function (req, res) {
            db.Company.findAll({ user_id: 1 }

            ).then(function (data) {


                res.render("addjob", { companies: data })

            })
        })

        app.get("/api/jobboard/resume", function (req, res) {
            db.Resume.findAll({ user_id: 1 }).then(function (data) {
                //res.json(data);
                res.render("addjob", { resumes: data })
                //console.log(data)
            })
        })


        //create
        app.post("/api/jobboard", function (req, res) {
            console.log("post method")

            //user_id: req.user.id,
            var jobObject = {
                user_id: req.user_id,
                job_title: req.body.job_title,
                description: req.body.describe,
                requirement: req.body.require,
                location: req.body.locate,
                //status:req.body.status
                //company:req.body.company, querycompany table
                notes: req.body.note,

                url: req.body.jobUrl
            }
            //console.log(jobObject)
            db.Job.create(jobObject).then(function (jobDB) {
                res.json(jobDB)
            })


        });

        //update
        app.put("/api/jobboard", isAuthenticated, function (req, res) {

            db.Job.findOne({
                where: {
                    id: req.body.id
                }
            }).then((updateJob) => {
                updateJob.update({
                    job_title: req.body.job_title,
                    description: req.body.description,
                    requirement: req.body.requirement,
                    location: req.body.location,
                    // company://company_id:ref
                    // contact://contact_id:ref
                    // resume:// resume_id:ref
                    // status://status:ref
                    notes: req.body.notes,
                    url: req.body.url
                }).then(updatedJob => {
                    res.json(updatedJob)
                })
                    .catch(err => {
                        throw err
                    })
            })
        });


        app.delete("/api/jobboard", function (req, res) {

            db.Job.destroy({

                where: {

                    id: req.body.id,
                    user_id: req.body.user_id
                }
            })
                .then(deletedJob => {
                    res.json(deletedJob)
                })
                .catch(err => {
                    // throw err;
                    throw err
                })
        });





    }



