angular.module("App").service("tutorlistService", function ($http, $q, $state) {




    this.login = function (tutorparameter) {
        return $http.post("/api/confirmtutorlogin", tutorparameter).then(function (response) {
            if (response.data.length === 0) {
                alert("wrong username or password");
            } else {
             $state.go("tutorlist");
            return response;
            }
        })
    }

 

    this.signup = function (tutorparam) {
        return $http.post("/api/addtutorsignup", tutorparam).then(function (response) {
            $state.go("signupform");
            return response;
        })
    }



    this.signupform = function (tutorformparam) {
        return $http.post("/api/updatetutorsignup", tutorformparam).then(function (response) {
            $state.go("home");
            return response;
        })
    }



    this.getSpecificTutor = function (id) {
        return $http.get("/api/getspecifictutor/" + id).then(function (response) {
            return response.data;
        })
    }



})