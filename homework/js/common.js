
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(49.42, 26.98),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
myMap();
$(function () {
    $('.main-slider').slick({
        infinite: true,
        slidesToShow:4,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false
    });

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top-70;
        $('body,html').animate({scrollTop: top}, 1000);
    });

});