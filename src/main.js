window.onload = function () {

    var date = new Date();
    document.getElementById("copyright").innerHTML = "&copy; Abdul Moqueet | All Right Reserved "+date.getFullYear()+".";

};


function redirect (url) {

    setTimeout(function () {
        window.open(url,'_blank');
    },600);

}