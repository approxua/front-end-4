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
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 994,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }]
    });

    $("#nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 70;
        $('body,html').animate({scrollTop: top}, 1000);
    });

});

var menu = document.getElementById('menu');
menu.onmousedown = function (e) {
    if (window.innerWidth < 720) {
        menu.style.transition = '0s';
        var curY = e.clientY;
        var top = menu.offsetTop;
        var oldCurY = 50;
        menu.onmousemove = function (e) {
            if (menu.offsetTop < 1 || e.clientY < oldCurY) {
                oldCurY = e.clientY;
                menu.style.top = top - (curY - e.clientY) + 'px';
            }
        };
        menu.onmouseup = function (e) {
            menu.style.transition = '0.2s';
            menu.style.top = (oldCurY < curY) ? -menu.offsetHeight + 50 + 'px' : '0px';
            menu.onmousemove = null;
        };
    }
};