var myProjects = [
    {
        isLive: true,
        title: "Music Player Web-App",
        desc: "A fully responsive Music Player, works best on phones/tabs not suitable for laptops/desktops.",
        isotopeCategory: "web",
        dataSrcThumb: "music_player.png",
        githubLink: "",
        liveUrl: "music-player/"
    },

    {
        isLive: true,
        title: "My Portfolio",
        desc: "A fully responsive grid based portfolio website, Yes the one which you are already on.",
        isotopeCategory: "web",
        dataSrcThumb: "portfolio.png",
        githubLink: "",
        liveUrl: ""
    },

    {
        isLive: false,
        title: "Institute Management System",
        desc: "A javaFX project, Using JavaFX framework, FXML as frontend. SQLite DataBase as backend",
        isotopeCategory: "javaFX",
        dataSrcThumb: "institute.png",
        githubLink: "https://google.com"
    },

    {
        isLive: true,
        title: "My Anime Web",
        desc: "A Website with super smooth animations and transitions, Dedicated to anime",
        isotopeCategory: "web",
        dataSrcThumb: "anime-web.png",
        githubLink: "",
        liveUrl: "my-anime-web"
    },

    {
        isLive: false,
        title: "Find My Phone",
        desc: "An Android App, using XML as frontend and JAVA as backend. I have used android.telephony api. This app can find a lost with just a SMS",
        isotopeCategory: "android",
        dataSrcThumb: "find_my_phone.png",
        githubLink: "https://google.com"
    },

    {
        isLive: false,
        title: "Library Management System",
        desc: "A javaFX project, Using JavaFX framework, FXML as frontend. Oracle DataBase as backend",
        isotopeCategory: "javaFX",
        dataSrcThumb: "library_management.png",
        githubLink: "https://google.com"
    },

    {
        isLive: false,
        title: "Live Currency Converter",
        desc: "An Android App Live Currency Converter, using XML as frontend, Live Currency Api for data source and JAVA as backend.",
        isotopeCategory: "android",
        dataSrcThumb: "live_currency_converter.png",
        githubLink: "https://google.com"
    }

];

function generateMyProjects() {

    var projects = "";

    for (var i = 0; i < myProjects.length; i++) {

        if (myProjects[i].isLive) {

            projects += `<div class="project-tile col-sm-6 col-md-4 ${myProjects[i].isotopeCategory}">
            <div class="card">
                <div class="image" style="background-image: url(${"img/thumbs/"+myProjects[i].dataSrcThumb});" 
                data-fancybox data-type="iframe" data-src="${"https://abdulmoqueet.github.io/"+myProjects[i].liveUrl}" href="javascript:;">
                </div>

                <div class="flex-wrapper">
                    <div class="project-desc-box">
                        <div class="title">${myProjects[i].title}</div>
                        <div class="desc">${myProjects[i].desc}</div>
                    </div>

                    <div class="button-holder">
                        <a class="button" data-fancybox data-type="iframe" data-src="${"https://abdulmoqueet.github.io/"+myProjects[i].liveUrl}" href="javascript:;">Live Preview</a>
                        <a href="${myProjects[i].githubLink}" class="button" target="_blank">Source Code</a>
                    </div>
                </div>

            </div>
        </div>`;

        } else {

            projects += `<div class="project-tile col-sm-6 col-md-4 ${myProjects[i].isotopeCategory}">
        <div class="card" >
            <div class="image" style="background-image: url(${"img/thumbs/"+myProjects[i].dataSrcThumb});" 
            data-fancybox data-src="${"img/"+myProjects[i].dataSrcThumb}"  data-caption="${myProjects[i].title}">
                <img src="${"img/thumbs/"+myProjects[i].dataSrcThumb}" >
            </div>

            <div class="flex-wrapper">
                <div class="project-desc-box">
                    <div class="title">${myProjects[i].title}</div>
                    <div class="desc">${myProjects[i].desc}</div>
                </div>

                <div class="button-holder">
                    <a class="button" data-fancybox data-src="${"img/"+myProjects[i].dataSrcThumb}" 
                    data-caption="${myProjects[i].title}">
                    ScreenShots
                    <img class="live-thumb" src="${myProjects[i].dataSrcThumb}"> 
                </a>
                    <a href="${myProjects[i].githubLink}" class="button" target="_blank">Source Code</a>
                </div>
            </div>

        </div>
    </div>`;

        }

        $(".project-items").html(projects);

    }

}