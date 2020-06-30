$(document).ready(function () {

    var currentSection = "";

    var professionalSkills = [
        {
            name: "HTML5 &amp; CSS3",
            percentage: "95%"
        },
        {
            name: "JavaScript",
            percentage: "85%"
        },
        {
            name: "React.js",
            percentage: "80%"
        },
        {
            name: "Node.js",
            percentage: "80%"
        },
        {
            name: "Express.js",
            percentage: "80%"
        },
        {
            name: "MongoDB",
            percentage: "70%"
        },
        {
            name: "JQuery",
            percentage: "85%"
        },
        {
            name: "Core Java",
            percentage: "90%"
        },
        {
            name: "MySQL",
            percentage: "70%"
        },
        {
            name: "Git and Github",
            percentage: "70%"
        },
        {
            name: "Restful API",
            percentage: "60%"
        },
        {
            name: "WordPress",
            percentage: "80%"
        },
        {
            name: "UI/UX",
            percentage: "85%"
        }
    ];

    var personalSkills = [
        {
            name: "Communication",
            percentage: "80%"
        },
        {
            name: "Team Work",
            percentage: "80%"
        },
        {
            name: "Self Motivation",
            percentage: "75%"
        },
        {
            name: "Speed",
            percentage: "70%"
        }
    ];


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

        if (currentSection != "")
            helightCurrentSection();

        $(".nav-burger .line-1, .nav-burger .line-3").toggleClass("nav-burger-active");
        $(".nav-burger .line-2").toggleClass("nav-burger-active-line-2");
        $(".mobile-nav ul").toggleClass("left-nav-peek");


        function helightCurrentSection() {

            var mobileNavLinks = $(".mobile-nav .mob-nav");

            mobileNavLinks.each(function () {
                $(this).removeClass('nav-active');
                if ($(this).attr("href") == "#" + currentSection.attr('id'))
                    $(this).addClass("nav-active");
            });
        }

    });

    // Skill Buttons Click-------------
    $(".skill-type .professional").click(function () {
        $(this).addClass("active");
        $(".skill-type .personal").removeClass("active");
        populateSkills(true);
    });

    $(".skill-type .personal").click(function () {
        $(this).addClass("active");
        $(".skill-type .professional").removeClass("active");
        populateSkills(false);
    });

    function populateSkills(isProfessional) {

        var skills = "";

        if (isProfessional) {

            for (var i = 0; i < professionalSkills.length; i++) {
                skills += `<div class="progress-container">
                <div class="progress-bar" style="width: ${professionalSkills[i].percentage};"></div>
                <h4>${professionalSkills[i].name}<span>${professionalSkills[i].percentage}</span></h4>
            </div>`
            }

        } else {

            for (var i = 0; i < personalSkills.length; i++) {
                skills += `<div class="progress-container">
                <div class="progress-bar" style="width: ${personalSkills[i].percentage};"></div>
                <h4>${personalSkills[i].name}<span>${personalSkills[i].percentage}</span></h4>
            </div>`
            }
        }

        $(".skills-list").html(skills);

    }

    populateSkills(true);

    // Send Mail--------------------
    $('#sendMail').click(function () {
        var email = 'moqueetabdul@gmail.com';
        var subject = $("#sub").val();
        var msg = $("#msg").val();
        document.location = "mailto:" + email + "?subject=" + subject + "&body=" + msg;
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
        $(this).addClass("activ");
        var filterValue = $(this).attr("data-filter");
        grid.isotope({ filter: filterValue });

        $(".project-filter li").each(function () {
            $(this).removeClass('nav-active');
        });

        $(this).addClass("nav-active");

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
                }
                return false;
            }
        });
    }

    $(window).scroll(throttle(highlightNavigation, 100));

});

function redirect(url) {

    setTimeout(function () {
        window.open(url, '_blank');
    }, 500);

}