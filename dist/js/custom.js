$(function(){
    // Feather Icon Init Js
    feather.replace();

    $(".toggle-minimize").on("click", function(){
        $(".sidebar").toggleClass("show-sidebar");
    });
});