$(document).ready(function () {
    $(".owl-carousel-banner").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1, 
        autoplay: true,
        autoplayTimeout: 2500,
    });

    $(".owl-carousel-earn-while").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1, 
        autoplay: true,
        autoplayTimeout: 2500,
    });

    $(".owl-carousel-Featured").owlCarousel({
        loop: true,
        margin: 16,
        nav: false,
        dots: false,
        items: 5, 
        autoplay: true,
        autoplayTimeout: 3000,
        responsive : {
            0 : {
                items: 2,
            },
            575 : {
                items: 3,
            },
            767 : {
                items: 4,
            },
            1200 : {
                items: 5,
            }
        }
    });

    $(".owl-carousel-feedback").owlCarousel({
        loop: true,
        center: true,
        margin: 25,
        nav: false,
        dots: false,
        items: 4,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive : {
            0 : {
                items: 1,
            },
            767 : {
                items: 2,
            },
            1200 : {
                items: 4,
            }
        }
    });
});