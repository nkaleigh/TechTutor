angular.module("App").service("tutorlistService", function ($http, $q, $state) {
    var tutors = [{
        name: "Kaleigh Niemela",
        location: "Orem, Utah",
        img: "x",
        title: "Web Developer Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "free"
    }, {
        name: "Christopher Vosters",
        location: "Orem, Utah",
        img: "x",
        title: "Javascript Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$10/hr"
    }, {
        name: "Oshion Niemela",
        location: "Provo, Utah",
        img: "x",
        title: "Python Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$20/hr"
    }, {
        name: "Ed Smith",
        location: "Orem, Utah",
        img: "x",
        title: "Angular Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$12/hr"
    }, {
        name: "Anna Wright",
        location: "Orem, Utah",
        img: "x",
        title: "Web Developer Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$15/hr"
    }, {
        name: "Luis Jones",
        location: "Orem, Utah",
        img: "x",
        title: "React Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$10/hr"
    }, {
        name: "Miriam Nelson",
        location: "Orem, Utah",
        img: "x",
        title: "Node.js Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$100/hr"
    }, {
        name: "Laura Andrews",
        location: "Orem, Utah",
        img: "x",
        title: "Web Developer Tutor",
        bio: "I recently completed Dev Mountain's Web Development course. I have grown to love coding and also teaching others more about code. I am available most evening hours and I am flexible with transportation.",
        rate: "$70/hr"
    }]

    this.getData = function () {
        return tutors;
    }
})