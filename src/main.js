window.onload = function () {

    var date = new Date();
    document.getElementById("copyright").innerHTML = "&copy; Abdul Moqueet | All Right Reserved "+date.getFullYear()+".";

    setTimeout(() => {

        AOS.init({
            easing: 'ease-out-back',
            duration: 1200,
            delay: 100,
            mirror: true,
            anchorPlacement: 'bottom-bottom',
            offset: 160
        });

}, 100);


};


function redirect (url) {

    setTimeout(function () {
        window.open(url,'_blank');
    },600);

}