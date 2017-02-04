/**
 * Created by Administrator on 2017/1/31.
 */
angular.module("myApp")
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("Ecommerce3");
        $stateProvider
            .state("Ecommerce", {
                url: "/Ecommerce",
                templateUrl: "views/Ecommerce.html",
                controller: "Ecommerce"
            })
            .state("Ecommerce2", {
                url: "/Ecommerce2",
                templateUrl: "views/Ecommerce2.html",
                controller: "Ecommerce2"
            })
            .state("Ecommerce3", {
                url: "/Ecommerce3",
                templateUrl: "views/Ecommerce3.html"
            })
    }]);
