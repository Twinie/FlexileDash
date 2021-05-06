$(function () {
    // Feather Icon Init Js
    feather.replace();

    $(".toggle-minimize").on("click", function () {
        $(".sidebar").toggleClass("show-sidebar");
        $('body').toggleClass("hide");
    });

    // responsive js
    var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
    if(width < 1024) {
        $('body').addClass("mini-sidebar");
    }
    else {
        $('body').removeClass("mini-sidebar");
    }
});