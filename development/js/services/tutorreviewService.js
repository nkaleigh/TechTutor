angular.module("App").service("tutorreviewService", function ($http, $q, $state) {
    var tutorReviews = [{
            id: 1,
            studentfirstname: "Cathleene",
            studentlastname: "Monson",
            tutor_id: 1,
            rating: "Excellent",
            review: "Great experience. Tutor was responsible and an excellent communicator. Would hire again."
        },
        {
            id: 2,
            studentfirstname: "Cathleene",
            studentlastname: "Monson",
            tutor_id: 2,
            rating: "Excellent",
            review: "Great experience. Tutor was responsible and an excellent communicator. Would hire again."
        },
        {
            id: 3,
            studentfirstname: "Cathleene",
            studentlastname: "Monson",
            tutor_id: 3,
            rating: "Excellent",
            review: "Great experience. Tutor was responsible and an excellent communicator. Would hire again."
        },
        {
            id: 4,
            studentfirstname: "Cathleene",
            studentlastname: "Monson",
            tutor_id: 4,
            rating: "Excellent",
            review: "Great experience. Tutor was responsible and an excellent communicator. Would hire again."
        },
        {
            id: 5,
            studentfirstname: "Cathleene",
            studentlastname: "Monson",
            tutor_id: 5,
            rating: "Excellent",
            review: "Great experience. Tutor was responsible and an excellent communicator. Would hire again."
        },
        {
            id: 6,
            studentfirstname: "Aaron",
            studentlastname: "Smith",
            tutor_id: 6,
            rating: "Poor",
            review: "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."
        },
        {
            id: 7,
            studentfirstname: "Aaron",
            studentlastname: "Smith",
            tutor_id: 7,
            rating: "Poor",
            review: "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."
        },
        {
            id: 8,
            studentfirstname: "Aaron",
            studentlastname: "Smith",
            tutor_id: 8,
            rating: "Poor",
            review: "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."
        },
        {
            id: 9,
            studentfirstname: "Aaron",
            studentlastname: "Smith",
            tutor_id: 1,
            rating: "Poor",
            review: "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."
        },
        {
            id: 10,
            studentfirstname: "Aaron",
            studentlastname: "Smith",
            tutor_id: 2,
            rating: "Poor",
            review: "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."
        },
        {
            id: 11,
            studentfirstname: "Aaron",
            studentlastname: "Smith",
            tutor_id: 3,
            rating: "Poor",
            review: "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."
        },
        {
            id: 12,
            studentfirstname: "Camry",
            studentlastname: "Nelson",
            tutor_id: 4,
            rating: "Average",
            review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
        },
        {
            id: 13,
            studentfirstname: "Camry",
            studentlastname: "Nelson",
            tutor_id: 5,
            rating: "Average",
            review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
        },
        {
            id: 14,
            studentfirstname: "Camry",
            studentlastname: "Nelson",
            tutor_id: 6,
            rating: "Average",
            review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
        },
        {
            id: 15,
            studentfirstname: "Camry",
            studentlastname: "Nelson",
            tutor_id: 7,
            rating: "Average",
            review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
        },
        {
            id: 16,
            studentfirstname: "Camry",
            studentlastname: "Nelson",
            tutor_id: 8,
            rating: "Average",
            review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
        },
        {
            id: 17,
            studentfirstname: "Camry",
            studentlastname: "Nelson",
            tutor_id: 1,
            rating: "Average",
            review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
        },
        {
            id: 18,
            studentfirstname: "Camry",
            studentlastname: "Nelson",
            tutor_id: 2,
            rating: "Average",
            review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
        }
    ]


    this.getTutorReview = function (id) {
        var review = tutorReviews.filter(function (a) {
            return a.tutor_id === parseInt(id);
        })
        return review;
    }

    this.writeTutorReview = function(reviewparam) {
        console.log("review made it to the service");
        if (reviewparam.writereview && reviewparam.yourfirstname && reviewparam.yourlastname) {
            tutorReviews.push(reviewparam);
            console.log("Review info pushed to array");
            console.log(reviewparam);
        }
    }
});