/**
 * Created by Administrator on 2017/1/27.
 */
angular.module("myApp")
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("social");
        $stateProvider
            .state("social", {
                url: "/social",
                templateUrl: "views/social.html",
                controller: "social"
            })
            .state("social.social2", {
                url: "social/social2",
                templateUrl: "views/social2.html"
            })
            .state("social3", {
                url: "/social3",
                templateUrl: "views/social3.html"
            })
    }]);
