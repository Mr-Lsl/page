/**
 * Created by Administrator on 2017/1/25.
 */
angular.module("myApp")
    .controller("home", home);

function home() {
    new Swiper(".swiper-o", {
        pagination: ".home-box",
        direction: "horizontal",
        loop: true,
        paginationClickable: true,
        autoplay: 2000,
        touchRatio: 1
    })
}
