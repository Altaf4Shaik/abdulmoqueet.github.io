$(document).ready(() => {

    $('#section-about-me').waypoint(() => $("#main-nav-container").toggleClass("main-nav-active"), {
        offset: '100px'
    });

    $('#section-about-me').waypoint((direction) => {

        if (direction === 'down')
            $("#main-nav-container").css("top", "0");
        else
            $("#main-nav-container").css("top", "-80px");

    }, {
        offset: '55px'
    });

    $("#to").floatingLabel();
    $("#sub").floatingLabel();
    $("#msg").floatingLabel();

    $(".nav-burger").click(function(){
        $(".nav-burger .line-1").toggleClass("nav-burger-active");
        $(".nav-burger .line-2").toggleClass("nav-burger-active-line-2");
        $(".nav-burger .line-3").toggleClass("nav-burger-active");

        $(".mobile-nav ul").toggleClass("left-nav-peek");
        $("body").toggleClass("body-scroll-disable");
    });

});