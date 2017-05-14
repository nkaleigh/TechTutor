angular.module("App", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('about', {
                templateUrl: './views/about.html',
                controller: 'aboutCtrl',
                url: '/about'
            })
            .state('home', {
                templateUrl: './views/home.html',
                controller: 'homeCtrl',
                url: '/'
            })
            .state('login', {
                templateUrl: './views/login.html',
                controller: 'loginCtrl',
                url: '/login'
            })
            .state('signup', {
                templateUrl: './views/signup.html',
                controller: 'signupCtrl',
                url: '/signup'
            })
            
            .state('signupform', {
                templateUrl: './views/signupform.html',
                controller: 'signupformCtrl',
                url: '/signupform'
            })

            .state('tutorlist', {
                templateUrl: './views/tutorlist.html',
                controller: 'tutorlistCtrl',
                url: '/tutorlist',
                resolve: {
                    getAllTutors: function ($http) {
                        return $http.get("/api/gettutors").then(function (response) {
                            console.log(response)
                            return response.data;
                        })
                    }
                }
            })
            .state('tutorlistdetail', {
                templateUrl: './views/tutorlistdetail.html',
                controller: 'tutorlistdetailCtrl',
                url: '/tutorlist/:id'
            })


    });