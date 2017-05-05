angular.module("App").service("tutorlistService", function ($http, $q, $state) {
    var tutors = [{
        firstname: "Kaleigh",
        lastname: "Niemela",
        tutorId: 1,
        location: "Orem, Utah",
        img: "x",
        title: "Web Developer Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "free",
        rating: 5
    }, {
        firstname: "Christopher",
        lastname: "Vosters",
        tutorId: 2,
        location: "Orem, Utah",
        img: "x",
        title: "Javascript Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$10/hr",
        rating: 4,
    }, {
        firstname: "Oshion",
        lastname: "Niemela",
        tutorId: 3,
        location: "Provo, Utah",
        img: "x",
        title: "Python Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$20/hr",
        rating: 5,

    }, {
        firstname: "Ed",
        lastname: "Smith",
        tutorId: 4,
        location: "Orem, Utah",
        img: "x",
        title: "Angular Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$12/hr",
        rating: 2,

    }, {
        firstname: "Anna",
        lastname: "Wright",
        tutorId: 5,
        location: "Orem, Utah",
        img: "x",
        title: "Web Developer Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$15/hr",
        rating: 1,

    }, {
        firstname: "Luis",
        lastname: "Jones",
        tutorId: 6,
        location: "Orem, Utah",
        img: "x",
        title: "React Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$10/hr",
        rating: 4,

    }, {
        firstname: "Miriam",
        lastname: "Nelson",
        tutorId: 7,
        location: "Orem, Utah",
        img: "x",
        title: "Node.js Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$100/hr",
        rating: 4,

    }, {
        firstname: "Laura",
        lastname: "Andrews",
        tutorId: 8,
        location: "Orem, Utah",
        img: "x",
        title: "Web Developer Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$70/hr",
        rating: 2,

    }]

    this.getData = function (id) {
        console.log(id);
        return tutors;
    }

    this.getSpecificData = function(id) {
        var tutor = tutors.filter(function(a){
            return a.tutorId === parseInt(id);
        })
        return tutor[0];
    }

    this.getSpecificData();
})