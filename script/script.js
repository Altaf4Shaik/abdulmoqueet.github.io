$(document).ready(function () {

    var currentSection = "";

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

        if(currentSection!="")
            helightCurrentSection();

        $(".nav-burger .line-1, .nav-burger .line-3").toggleClass("nav-burger-active");
        $(".nav-burger .line-2").toggleClass("nav-burger-active-line-2");
        $(".mobile-nav ul").toggleClass("left-nav-peek");


        function helightCurrentSection(){
            
            var mobileNavLinks = $(".mobile-nav .mob-nav");

            mobileNavLinks.each(function(){
                $(this).removeClass('nav-active');
                if($(this).attr("href")=="#"+currentSection.attr('id'))
                    $(this).addClass("nav-active");
            });
        }

    });


    // Isotope --------------
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

    // Heighlight Nav Menus-------------------------------

    var $navigationLinks = $('.desktop-nav > ul > li > a');
    var $sections = $($(".section").get().reverse());

    var sectionIdTonavigationLink = {};
    $sections.each(function () {
        var id = $(this).attr('id');
        sectionIdTonavigationLink[id] = $('.desktop-nav > ul > li > a[href=\\#' + id + ']');
    });

    function throttle(fn, interval) {
        var lastCall, timeoutId;
        return function () {
            var now = new Date().getTime();
            if (lastCall && now < (lastCall + interval)) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                    lastCall = now;
                    fn.call();
                }, interval - (now - lastCall));
            } else {
                lastCall = now;
                fn.call();
            }
        };
    }

    function highlightNavigation() {
        var scrollPosition = $(window).scrollTop();

        $sections.each(function () {
            currentSection = $(this);
            var sectionTop = currentSection.offset().top - 55;

            if (scrollPosition >= sectionTop) {
                var id = currentSection.attr('id');
                var $navigationLink = sectionIdTonavigationLink[id];
                if (!$navigationLink.hasClass('nav-active')) {
                    $navigationLinks.removeClass('nav-active');
                    $navigationLink.addClass('nav-active');
                    console.log($navigationLink);
                }
                return false;
            }
        });
    }

    $(window).scroll(throttle(highlightNavigation, 100));

});