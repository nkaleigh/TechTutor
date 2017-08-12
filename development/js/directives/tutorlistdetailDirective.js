angular.module("App").directive("tutorlistdetailDirective", function () {
    return {
        restrict: "E",
        templateUrl: "./views/tutorlistdetailDirective.html",
        scope: {
            tutor: "=",
            rd: "=",
            writereview: '&'
        },
        link: function (scope, elem, attrs) {
            console.log(scope.tutor); 
            // console.log('detail', scope)
            // console.log(scope.writereview)
        }
    }
})





