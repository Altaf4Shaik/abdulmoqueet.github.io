window.onload = function () {

    var date = new Date();
    document.getElementById("copyright").innerHTML = "Abdul Moqueet &copy; Copyright "+date.getFullYear()+".";

};


function redirect (url) {

    setTimeout(function () {
        window.open(url,'_blank');
    },600);

}