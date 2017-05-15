var app = require("./server");
var db = app.get('db');

module.exports = {

    tutorsignup: function (req, res) {
        console.log("serverCtrl: req.body", req.body);
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let password = req.body.password;
        db.add_tutor_signup([firstname, lastname, email, password], function (err, response) {
            if (err) {
                console.log(err)
                res.send(err);
            } else {
                req.session.user = response[0];
                                console.log(response, req.session);

                res.status(200).send(response);
            }
        })
    },

    tutorsignupform: function (req, res) {
        console.log(req.body);
        let location = req.body.citystate;
        let rate = req.body.rate;
        let title = req.body.jobtitle;
        let bio = req.body.bio;
        let skill1 = req.body.skillone;
        let skill2 = req.body.skilltwo;
        let skill3 = req.body.skillthree;
        let skill4 = req.body.skillfour;
        let skill5 = req.body.skillfive;
        let skill6 = req.body.skillsix;
        let school1 = req.body.schoolone;
        let school2 = req.body.schooltwo;
        let school3 = req.body.schoolthree;
        let degree1 = req.body.degreeone;
        let degree2 = req.body.degreetwo;
        let degree3 = req.body.degreethree;
        db.update_tutor_signup([location, rate, title, bio, skill1, skill2, skill3, skill4, skill5, skill6, school1, school2, school3, degree1, degree2, degree3, req.session.user.id], function (err, response) {
            if (err) {
                console.log("err", err)
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        })
    },


    confirmTutorLogin: function (req, res) {
        let email = req.body.email;
        let password = req.body.password;
        db.post_tutor_login([email, password], function (err, response) {
            console.log("ERROR OBJECT", err);
            if (err) { //TODO: figure out why err isn't getting set if the credentials are invalid
                res.send(err);
            } else {
                req.session.user = response[0];
                console.log(response, req.session);

                res.status(200).send(response);
            }
        })
    },




    getTutors: function (req, res) {
        db.get_tutors(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        })
    },

    writeReview: function (req, res) {
        let review = req.body.writereview;
        let first = req.body.yourfirstname;
        let last = req.body.yourlastname;
        let id = req.body.tutorid;
        db.add_review([review, first, last, id], function (err, response) {
            if (err) {
                console.log(err)
                res.send(err);
            } else {
                console.log(response)
                res.status(200).send(response);
            }
        })
    },

    getSpecificTutor: function (req, res) {
        db.get_one_tutor([req.params.id], function (err, response) {
            if (err) {
                console.log(err)
                res.send(err);
            } else {
                console.log(response)
                res.status(200).send(response);
            }
        })
    },

    getTutorReviews: function (req, res) {
        console.log(req.params.reviewid);
        db.get_review([req.params.reviewid], function (err, response) {
            if (err) {
                console.log(err)
                res.send(err);
            } else {
                console.log(response)
                res.status(200).send(response);
            }
        })

    }
}