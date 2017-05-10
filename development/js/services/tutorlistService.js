angular.module("App").service("tutorlistService", function ($http, $q, $state) {
    var tutors = [{
        tutorId: 1,
        email: "kaleigh@gmail.com",
        password: "password",
        firstname: "Kaleigh",
        lastname: "Niemela",
        zipcode: "Orem, Utah",
        img: "x",
        jobtitle: "Web Developer Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        skills: ["Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub"],
        education: [{
            school: "Brigham Young University",
            degree: "BA English Linguistics"
        }, {
            school: "DevMountain"
        }],
        rate: "free",
        rating: 5
    }, {
        tutorId: 2,
        email: "christopher@gmail.com",
        password: "password",
        firstname: "Christopher",
        lastname: "Vosters",
        zipcode: "Orem, Utah",
        img: "x",
        jobtitle: "Javascript Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$10/hr",
        skills: ["Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub"],
        education: [{
            school: "Brigham Young University",
            degree: "BA English Linguistics"
        }, {
            school: "DevMountain"
        }],
        rate: "$10/hr",
        rating: 4
    }, {
        tutorId: 3,
        email: "oshion@gmail.com",
        password: "password",
        firstname: "Oshion",
        lastname: "Niemela",
        zipcode: "Provo, Utah",
        img: "x",
        jobtitle: "Python Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$20/hr",
        skills: ["Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub"],
        education: [{
            school: "Brigham Young University",
            degree: "BA English Linguistics"
        }, {
            school: "DevMountain"
        }],
        rate: "15/hr",
        rating: 5
    }, {
        tutorId: 4,
        email: "ed@gmail.com",
        password: "password",
        firstname: "Ed",
        lastname: "Smith",
        zipcode: "Orem, Utah",
        img: "x",
        jobtitle: "Angular Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$12/hr",
        skills: ["Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub"],
        education: [{
            school: "Brigham Young University",
            degree: "BA English Linguistics"
        }, {
            school: "DevMountain"
        }],
        rate: "$100/hr",
        rating: 2
    }, {
        tutorId: 5,
        email: "anna@gmail.com",
        password: "password",
        firstname: "Anna",
        lastname: "Wright",
        zipcode: "Orem, Utah",
        img: "x",
        jobtitle: "Web Developer Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$15/hr",
        skills: ["Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub"],
        education: [{
            school: "Brigham Young University",
            degree: "BA English Linguistics"
        }, {
            school: "DevMountain"
        }],
        rate: "$20/hr",
        rating: 1
    }, {
        tutorId: 6,
        email: "luis@gmail.com",
        password: "password",
        firstname: "Luis",
        lastname: "Jones",
        zipcode: "Orem, Utah",
        img: "x",
        jobtitle: "React Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$10/hr",
        skills: ["Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub"],
        education: [{
            school: "Brigham Young University",
            degree: "BA English Linguistics"
        }, {
            school: "DevMountain"
        }],
        rate: "10/hr",
        rating: 4
    }, {
        tutorId: 7,
        email: "miriam@gmail.com",
        password: "password",
        firstname: "Miriam",
        lastname: "Nelson",
        zipcode: "Orem, Utah",
        img: "x",
        jobtitle: "Node.js Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$100/hr",
        skills: ["Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub"],
        education: [{
            school: "Brigham Young University",
            degree: "BA English Linguistics"
        }, {
            school: "DevMountain"
        }],
        rate: "free",
        rating: 4
    }, {
        tutorId: 8,
        email: "laura@gmail.com",
        password: "password",
        firstname: "Laura",
        lastname: "Andrews",
        zipcode: "Orem, Utah",
        img: "x",
        jobtitle: "Web Developer Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$70/hr",
        skills: ["Angular.js", "Javascript", "Node.js", "React", "SQL", "GitHub"],
        education: [{
            school: "Brigham Young University",
            degree: "BA English Linguistics"
        }, {
            school: "DevMountain"
        }],
        rate: "$25/hr",
        rating: 2
    }]


    this.login = function (tutorparameter) {
        console.log(tutorparameter);
        for (var i = 0; i < tutors.length; i++) {
            // console.log("for loop running");
            if (tutors[i].email === tutorparameter.email && tutors[i].password === tutorparameter.password) {
                console.log("found user");
                $state.go("tutorlist")
                return;
            }
        }
        alert("incorrect password");
    }

    this.signup = function (tutorparam) {
        console.log("test");
        if (tutorparam.firstname && tutorparam.lastname && tutorparam.email && tutorparam.password) {
            console.log(tutors);
            tutors.push(tutorparam);
            $state.go("signupform");
        }
    }

    this.signupform = function (tutorformparam) {
        console.log("made it to the service");
        if (tutorformparam.zipcode && tutorformparam.rate && tutorformparam.jobtitle && tutorformparam.bio) {
            console.log("tutors before", tutors);
            tutors.push(tutorformparam);
            console.log("tutors after", tutors);
            $state.go("tutorlist");
        }
    }

    this.getData = function (id) {
        console.log(id);
        return tutors;
    }

    this.getSpecificData = function (id) {
        var tutor = tutors.filter(function (a) {
            return a.tutorId === parseInt(id);
        })
        return tutor[0];
    }
})