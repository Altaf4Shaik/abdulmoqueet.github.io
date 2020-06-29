$(document).ready(function () {

    $('#about').waypoint(function () {
        $("#main-nav-container").toggleClass("main-nav-active");
    }, {
        offset: '100px'
    });

    $('#about').waypoint(function (direction) {

        if (direction === 'down') {
            $("#main-nav-container").css("top", "0");
        } else {
            $("#main-nav-container").css("top", "-80px");
        }

    }, {
        offset: '55px'
    });

    $("#to").floatingLabel();
    $("#sub").floatingLabel();
    $("#msg").floatingLabel();

    $(".nav-burger").click(function () {
        $(".nav-burger .line-1, .nav-burger .line-3").toggleClass("nav-burger-active");
        $(".nav-burger .line-2").toggleClass("nav-burger-active-line-2");

        $(".mobile-nav ul").toggleClass("left-nav-peek");
    });


    // Isotope Scritp--------------
    var projectItems = $(".project-items"),
        projectFilter = $(".project-filter");

    var grid = projectItems.isotope({
        itemSelector: ".project-tile",
        percentPosition: true,
        masonry: {
            columnWidth: ".project-tile",
        },
    });
    projectFilter.on("click", "li", function () {
        projectFilter.find(".active").removeClass("active");
        $(this).addClass("active");
        var filterValue = $(this).attr("data-filter");
        grid.isotope({ filter: filterValue });
    });
    // ----------------------------------------

    // jQuery Scrolling--------------------
    $(document).on("click", "a.scroll-easing", function () {
        var anchor = $(this);

        if (anchor.hasClass("mob-nav")) {

            $(".nav-burger .line-1, .nav-burger .line-3").toggleClass("nav-burger-active");
            $(".nav-burger .line-2").toggleClass("nav-burger-active-line-2");
            $(".mobile-nav ul").toggleClass("left-nav-peek");

            setTimeout(function () {
                scrollOn();
            }, 500);

        } else {
            scrollOn();
        }

        function scrollOn() {
            $("html, body").stop().animate(
                {
                    scrollTop: $(anchor.attr("href")).offset().top,
                },
                1250,
                "easeInOutExpo"
            );
        }

        event.preventDefault();
    });

});