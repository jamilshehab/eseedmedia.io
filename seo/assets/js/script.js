// testimonial //
$('.our-work-slider-owl-carousel2').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    // navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    items: 10,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 3000,
    responsiveClass: true,

    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 2,
            nav: false,

        },
        1000: {
            items: 4,
            nav: true,

        }
    }
});
$('.our-work-slider-owl-carousel2').owlCarousel();
// Go to the next item
$('.owl-next').click(function () {
    $('.our-work-slider-owl-carousel2').trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    $('.our-work-slider-owl-carousel2').trigger('prev.owl.carousel', [300]);
})


// testimonial //
$('.testimonial4-slider-area').owlCarousel({
    loop: true,
    margin: 30,
    // nav: true,
    dots: false,
    mouseDrag: true,
    items: 10,
    autoplay: true,
    // navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    smartSpeed: 3000,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});

// testimonial //
$('.our-services-carousel1').owlCarousel({
    loop: true,
    // nav: true,
    dots: true,
    mouseDrag: true,
    items: 10,
    autoplay: true,
    // navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    smartSpeed: 3000,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});
$('.testimonial4-slider-area1').owlCarousel({
    loop: true,
    // nav: true,
    dots: true,
    mouseDrag: true,
    items: 10,
    autoplay: true,
    margin: 30,
    // navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    smartSpeed: 3000,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});
$('.owl-test-next').click(function () {
    $('.testimonial4-slider-area1').trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-test-prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    $('.testimonial4-slider-area1').trigger('prev.owl.carousel');
})


$('.our-blog-carousel1').owlCarousel({
    loop: true,
    // nav: true,
    dots: true,
    mouseDrag: true,
    items: 10,
    autoplay: true,
    margin: 30,
    // navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    smartSpeed: 3000,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});
$('.owl-next-nav').click(function () {
    $('.testimonial4-slider-area1').trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev-nav').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    $('.testimonial4-slider-area1').trigger('prev.owl.carousel');
})


$('.team-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    items: 10,
    autoplay: true,
    smartSpeed: 3000,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 1,
        }
    }
});


$('.blog-section-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    items: 10,
    autoplay: true,
    smartSpeed: 3000,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 1,
        }
    }
});


$('.service-owl-slider-mobile-section-service').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    items: 10,
    autoplay: true,
    smartSpeed: 3000,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 1,
        }
    }
});

$('.pricing-carousel-mobile').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    items: 10,
    autoplay: true,
    smartSpeed: 3000,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 1,
        }
    }
});

$(document).ready(function () {
    $('.our-services-carousel1 .service-boxarea').matchHeight();
})
$(document).ready(function () {
    $('.service-owl-slider-mobile-section-service  .service-item').matchHeight();
})