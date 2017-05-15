angular.module("App").service("tutorlistService", function ($http, $q, $state) {




    this.login = function (tutorparameter) {
        console.log("tutorparameter", tutorparameter);
        return $http.post("/api/confirmtutorlogin", tutorparameter).then(function (response) {
            console.log(response);
            if (response.data.length === 0) {
                alert("wrong username or password");
            } else {
             $state.go("tutorlist");
            return response;
            }
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
        return $http.post("/api/updatetutorsignup", tutorformparam).then(function (response) {
            $state.go("home");
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