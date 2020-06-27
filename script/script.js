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

});