/**
 * Created by Administrator on 2017/1/27.
 */
angular.module("myApp")
    .controller("social", social);

function social() {
    new Swiper(".swiper-o", {
        pagination: ".home-box",
        direction: "horizontal",
        loop: true,
        paginationClickable: true,
        autoplay: 2000,
        touchRatio: 1
    })
}
