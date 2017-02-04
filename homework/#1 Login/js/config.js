/**
 * Created by Administrator on 2017/1/25.
 */
angular.module("myApp")
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("home");
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "views/home.html",
                controller: "home"
            })
            .state("login", {
                url: "/login",
                templateUrl: "views/login.html"
            })
            .state("register", {
                url: "/register",
                templateUrl: "views/register.html"
            })
    }])
