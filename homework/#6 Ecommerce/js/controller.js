/**
 * Created by Administrator on 2017/1/31.
 */
angular.module("myApp")
    .controller("Ecommerce", Ecommerce)
    .controller("Ecommerce2",Ecommerce2)

function Ecommerce() {
    new Swiper(".swiper-o", {
        pagination: ".home-box",
        direction: "horizontal",
        loop: true,
        paginationClickable: true,
        autoplay: 3000,
        touchRatio: 1
    })
}
function Ecommerce2() {
    new Swiper(".swiper-o", {
        pagination: ".home-box",
        direction: "horizontal",
        loop: true,
        paginationClickable: true,
        autoplay: 3000,
        touchRatio: 1
    })
}
