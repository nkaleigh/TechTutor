var app = require("./server");
var db = app.get('db');

module.exports = {
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
        console.log(req.body);
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

    getSpecificTutor: function(req, res) {
        console.log(req.params);
        db.get_one_tutor([req.params.id], function(err, response) {
            if(err) {
                console.log(err)
                res.send(err);
            } else {
                console.log(response)
                res.status(200).send(response);
            }
        })
    },

    getTutorReviews: function(req, res) {
        console.log(req.params.reviewid);
        db.get_review([req.params.reviewid], function(err, response) {
            if(err) {
                console.log(err)
                res.send(err);
            } else {
                console.log(response)
                res.status(200).send(response);
            }
        })

    }
}