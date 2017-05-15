angular.module("App").service("tutorlistService", function ($http, $q, $state) {
    // var tutors = [{
    //     tutor_id: 1,
    //     email: "kaleigh@gmail.com",
    //     password: "password",
    //     firstname: "Kaleigh",
    //     lastname: "Niemela",
    //     citystate: "Orem, Utah",
    //     picture_url: "",
    //     jobtitle: "Web Developer Tutor",
    //     bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
    //     rate: "$10/hr",
    //     skillone: "Angular.js",
    //     skilltwo: "Javascript",
    //     skillthree: "Node.js",
    //     skillfour: "React",
    //     skillfive: "SQL",
    //     skillsix: "GitHub",
    //     schoolone: "Brigham Young University",
    //     schooltwo: "DevMountain",
    //     schoolthree: "",
    //     degreeone: "BA English Linguistics",
    //     degreetwo: "",
    //     degreethree: "",
    //     rating: 3
    // }, {
    //     tutor_id: 2,
    //     email: "christopher@gmail.com",
    //     password: "password",
    //     firstname: "Christopher",
    //     lastname: "Vosters",
    //     citystate: "Orem, Utah",
    //     img: "",
    //     jobtitle: "Javascript Tutor",
    //     bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
    //     rate: "$10/hr",
    //     skillone: "Angular.js",
    //     skilltwo: "Javascript",
    //     skillthree: "Node.js",
    //     skillfour: "React",
    //     skillfive: "SQL",
    //     skillsix: "GitHub",
    //     schoolone: "Brigham Young University",
    //     schooltwo: "DevMountain",
    //     schoolthree: "",
    //     degreeone: "BA English Linguistics",
    //     degreetwo: "",
    //     degreethree: "",
    //     rating: 4
    // }, {
    //     tutor_id: 3,
    //     email: "oshion@gmail.com",
    //     password: "password",
    //     firstname: "Oshion",
    //     lastname: "Niemela",
    //     citystate: "Provo, Utah",
    //     img: "",
    //     jobtitle: "Python Tutor",
    //     bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
    //     rate: "$20/hr",
    //     skillone: "Angular.js",
    //     skilltwo: "Javascript",
    //     skillthree: "Node.js",
    //     skillfour: "React",
    //     skillfive: "SQL",
    //     skillsix: "GitHub",
    //     schoolone: "Brigham Young University",
    //     schooltwo: "DevMountain",
    //     schoolthree: "",
    //     degreeone: "BA English Linguistics",
    //     degreetwo: "",
    //     degreethree: "",
    //     rating: 5
    // }, {
    //     tutor_id: 4,
    //     email: "ed@gmail.com",
    //     password: "password",
    //     firstname: "Ed",
    //     lastname: "Smith",
    //     citystate: "Orem, Utah",
    //     img: "",
    //     jobtitle: "Angular Tutor",
    //     bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
    //     rate: "$12/hr",
    //     skillone: "Angular.js",
    //     skilltwo: "Javascript",
    //     skillthree: "Node.js",
    //     skillfour: "React",
    //     skillfive: "SQL",
    //     skillsix: "GitHub",
    //     schoolone: "Brigham Young University",
    //     schooltwo: "DevMountain",
    //     schoolthree: "",
    //     degreeone: "BA English Linguistics",
    //     degreetwo: "",
    //     degreethree: "",
    //     rating: 2
    // }, {
    //     tutor_id: 5,
    //     email: "anna@gmail.com",
    //     password: "password",
    //     firstname: "Anna",
    //     lastname: "Wright",
    //     citystate: "Orem, Utah",
    //     img: "",
    //     jobtitle: "Web Developer Tutor",
    //     bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
    //     rate: "$15/hr",
    //     skillone: "Angular.js",
    //     skilltwo: "Javascript",
    //     skillthree: "Node.js",
    //     skillfour: "React",
    //     skillfive: "SQL",
    //     skillsix: "GitHub",
    //     schoolone: "Brigham Young University",
    //     schooltwo: "DevMountain",
    //     schoolthree: "",
    //     degreeone: "BA English Linguistics",
    //     degreetwo: "",
    //     degreethree: "",
    //     rating: 1
    // }, {
    //     tutor_id: 6,
    //     email: "luis@gmail.com",
    //     password: "password",
    //     firstname: "Luis",
    //     lastname: "Jones",
    //     citystate: "Orem, Utah",
    //     img: "",
    //     jobtitle: "React Tutor",
    //     bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
    //     rate: "$10/hr",
    //     skillone: "Angular.js",
    //     skilltwo: "Javascript",
    //     skillthree: "Node.js",
    //     skillfour: "React",
    //     skillfive: "SQL",
    //     skillsix: "GitHub",
    //     schoolone: "Brigham Young University",
    //     schooltwo: "DevMountain",
    //     schoolthree: "",
    //     degreeone: "BA English Linguistics",
    //     degreetwo: "",
    //     degreethree: "",
    //     rating: 4
    // }, {
    //     tutor_id: 7,
    //     email: "miriam@gmail.com",
    //     password: "password",
    //     firstname: "Miriam",
    //     lastname: "Nelson",
    //     citystate: "Orem, Utah",
    //     img: "",
    //     jobtitle: "SQL Tutor",
    //     bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
    //     rate: "$25/hr",
    //     skillone: "Angular.js",
    //     skilltwo: "Javascript",
    //     skillthree: "Node.js",
    //     skillfour: "React",
    //     skillfive: "SQL",
    //     skillsix: "GitHub",
    //     schoolone: "Brigham Young University",
    //     schooltwo: "DevMountain",
    //     schoolthree: "",
    //     degreeone: "BA English Linguistics",
    //     degreetwo: "",
    //     degreethree: "",
    //     rating: 5
    // }, {
    //     tutor_id: 8,
    //     email: "laura@gmail.com",
    //     password: "password",
    //     firstname: "Laura",
    //     lastname: "Andrews",
    //     citystate: "Orem, Utah",
    //     img: "",
    //     jobtitle: "Web Developer Tutor",
    //     bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
    //     rate: "$20/hr",
    //     skillone: "Angular.js",
    //     skilltwo: "Javascript",
    //     skillthree: "Node.js",
    //     skillfour: "React",
    //     skillfive: "SQL",
    //     skillsix: "GitHub",
    //     schoolone: "Brigham Young University",
    //     schooltwo: "DevMountain",
    //     schoolthree: "",
    //     degreeone: "BA English Linguistics",
    //     degreetwo: "",
    //     degreethree: "",
    //     rating: 2
    // }]


    // this.login = function (tutorparameter) {
    //     console.log("tutorparameter", tutorparameter);
    //     for (var i = 0; i < tutors.length; i++) {
    //         if (tutors[i].email === tutorparameter.email && tutors[i].password === tutorparameter.password) {
    //             console.log("found user");
    //             $state.go("tutorlist")
    //             return;
    //         }
    //     }
    //     alert("incorrect password");
    // }



    this.login = function (tutorparameter) {
        console.log("tutorparameter", tutorparameter);
        return $http.post("/api/confirmtutorlogin", tutorparameter).then(function (response) {
            $state.go("tutorlist");
            return response;
        })
    }

 

    this.signup = function (tutorparam) {
        console.log("tutorlistService: tutorparam", tutorparam);
        return $http.post("/api/addtutorsignup", tutorparam).then(function (response) {
            $state.go("signupform");
            console.log("tutorlistService: response", response);
            return response;
        })
    }



    this.signupform = function (tutorformparam) {
        console.log(tutorformparam);
        return $http.post("/api/addtutorsignupform", tutorformparam).then(function (response) {
            $state.go("tutorlist");
            console.log("tutorlistService: signupform param", response);
            return response;
        })
    }



    this.getSpecificTutor = function (id) {
        return $http.get("/api/getspecifictutor/" + id).then(function (response) {
            return response.data;
        })
    }



})