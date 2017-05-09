angular.module("App").service("tutorreviewService", function ($http, $q, $state) {
            var tutorReviews = [{
                    id: 1,
                    studentfirstname: "Cathleene",
                    studentlastname: "Monson",
                    tutorId: 1,
                    rating: 5,
                    review: "Great experience. Tutor was responsible and an excellent communicator. Would hire again."
                },
                {
                    id: 2,
                    studentfirstname: "Cathleene",
                    studentlastname: "Monson",
                    tutorId: 2,
                    rating: 5,
                    review: "Great experience. Tutor was responsible and an excellent communicator. Would hire again."
                },
                {
                    id: 3,
                    studentfirstname: "Cathleene",
                    studentlastname: "Monson",
                    tutorId: 3,
                    rating: 5,
                    review: "Great experience. Tutor was responsible and an excellent communicator. Would hire again."
                },
                {
                    id: 4,
                    studentfirstname: "Cathleene",
                    studentlastname: "Monson",
                    tutorId: 4,
                    rating: 5,
                    review: "Great experience. Tutor was responsible and an excellent communicator. Would hire again."
                },
                {
                    id: 5,
                    studentfirstname: "Cathleene",
                    studentlastname: "Monson",
                    tutorId: 5,
                    rating: 5,
                    review: "Great experience. Tutor was responsible and an excellent communicator. Would hire again."
                },
                {
                    id: 6,
                    studentfirstname: "Aaron",
                    studentlastname: "Smith",
                    tutorId: 6,
                    rating: 1,
                    review: "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."
                },
                {
                    id: 7,
                    studentfirstname: "Aaron",
                    studentlastname: "Smith",
                    tutorId: 7,
                    rating: 1,
                    review: "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."
                },
                {
                    id: 8,
                    studentfirstname: "Aaron",
                    studentlastname: "Smith",
                    tutorId: 8,
                    rating: 1,
                    review: "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."
                },
                {
                    id: 9,
                    studentfirstname: "Aaron",
                    studentlastname: "Smith",
                    tutorId: 1,
                    rating: 1,
                    review: "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."
                },
                {
                    id: 10,
                    studentfirstname: "Aaron",
                    studentlastname: "Smith",
                    tutorId: 2,
                    rating: 1,
                    review: "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."
                },
                {
                    id: 11,
                    studentfirstname: "Aaron",
                    studentlastname: "Smith",
                    tutorId: 3,
                    rating: 1,
                    review: "Terrible experience. Tutor was not responsible and was a poor communicator. Would not hire again."
                },
                {
                    id: 12,
                    studentfirstname: "Camry",
                    studentlastname: "Nelson",
                    tutorId: 4,
                    rating: 3,
                    review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
                },
                {
                    id: 13,
                    studentfirstname: "Camry",
                    studentlastname: "Nelson",
                    tutorId: 5,
                    rating: 3,
                    review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
                },
                {
                    id: 14,
                    studentfirstname: "Camry",
                    studentlastname: "Nelson",
                    tutorId: 6,
                    rating: 3,
                    review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
                },
                {
                    id: 15,
                    studentfirstname: "Camry",
                    studentlastname: "Nelson",
                    tutorId: 7,
                    rating: 3,
                    review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
                },
                {
                    id: 16,
                    studentfirstname: "Camry",
                    studentlastname: "Nelson",
                    tutorId: 8,
                    rating: 3,
                    review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
                },
                {
                    id: 17,
                    studentfirstname: "Camry",
                    studentlastname: "Nelson",
                    tutorId: 1,
                    rating: 3,
                    review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
                },
                {
                    id: 18,
                    studentfirstname: "Camry",
                    studentlastname: "Nelson",
                    tutorId: 2,
                    rating: 3,
                    review: "Tutor was a good listener and very nice; however, the tutor had a hard time explaining concepts.",
                }
            ]


            this.getTutorReview = function (id) {
                var review = tutorReviews.filter(function(a) {
                    return a.tutorId === parseInt(id);
                })
                return review;
            }
});