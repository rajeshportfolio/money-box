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

    $(".owl-carousel-marketplaces-flash").owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: false,
        items: 4,
        responsive : {
            0 : {
                items: 2,
                margin: 16,
            },
            768 : {
                items: 3,
                margin: 24,
            },
            992 : {
                items: 4,
                margin: 24,
            }
        }
    });

    $(".owl-carousel-popularbrands").owlCarousel({
        loop: true,
        margin: 16,
        nav: false,
        dots: false,
        items: 5,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive : {
            0 : {
                items: 1,
            },
            575 : {
                items: 2,
            }
        }
    });

    $(".owl-carousel-TopDeals").owlCarousel({
        loop: true,
        margin: 16,
        center: true,
        nav: true,
        dots: false,
        items: 6,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive : {
            0 : {
                items: 1,
            },
            435 : {
                items: 2,
            },
            991 : {
                items: 4,
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


    $(".filter-drop").click(function () {
        if ($(".drop-filter-down").hasClass("d-none")) {
            $(".drop-filter-down").removeClass("d-none").hide().fadeIn();
        } else {
            $(".drop-filter-down").fadeOut(function () {
                $(this).addClass("d-none");
            });
        }
    });

    const phoneInput = document.querySelector("#PhoneNumber");
    window.intlTelInput(phoneInput, {
        initialCountry: "in",  // Default to India
        separateDialCode: false, // Show country code separately
        preferredCountries: ["us", "gb", "in", "au", "ca"], // Preferred countries
    });

    const phoneInputnew = document.querySelector("#PhoneNumbernew");
    window.intlTelInput(phoneInputnew, {
        initialCountry: "au",  // Default to India
        separateDialCode: false, // Show country code separately
        preferredCountries: ["us", "gb", "in", "au", "ca"], // Preferred countries
    });
    
});