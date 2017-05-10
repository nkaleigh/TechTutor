angular.module("App").service("tutorlistService", function ($http, $q, $state) {
    var tutors = [{
        tutorId: 1,
        email: "kaleigh@gmail.com",
        password: "password",
        firstname: "Kaleigh",
        lastname: "Niemela",
        location: "Orem, Utah",
        img: "x",
        title: "Web Developer Tutor",
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
        location: "Orem, Utah",
        img: "x",
        title: "Javascript Tutor",
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
        location: "Provo, Utah",
        img: "x",
        title: "Python Tutor",
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
        location: "Orem, Utah",
        img: "x",
        title: "Angular Tutor",
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
        location: "Orem, Utah",
        img: "x",
        title: "Web Developer Tutor",
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
        location: "Orem, Utah",
        img: "x",
        title: "React Tutor",
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
        location: "Orem, Utah",
        img: "x",
        title: "Node.js Tutor",
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
        location: "Orem, Utah",
        img: "x",
        title: "Web Developer Tutor",
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
        if(tutorparam.firstname && tutorparam.lastname && tutorparam.email && tutorparam.password) {
            tutors.push(tutorparam);
            $state.go("signupform");
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