/**
 * Created by Administrator on 2017/1/29.
 */
angular.module("myApp")
    .controller("news", news);

function news() {
    new Swiper(".swiper-o", {
        pagination: ".home-box",
        direction: "horizontal",
        loop: true,
        paginationClickable: true,
        autoplay: 2000,
        touchRatio: 1
    })
}
