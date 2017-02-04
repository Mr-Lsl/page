/**
 * Created by Administrator on 2017/1/29.
 */
angular.module("myApp")
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("news");
        $stateProvider
            .state("news", {
                url: "/news",
                templateUrl: "views/news.html",
                controller: "news"
            })
            .state("news2", {
                url: "/news2",
                templateUrl: "views/news2.html"
            })
            .state("news3", {
                url: "/news3",
                templateUrl: "views/news3.html",
            })
    }])
