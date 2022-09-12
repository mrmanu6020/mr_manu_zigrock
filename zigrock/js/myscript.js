/*======================================
           preloader
========================================*/
$(window).on('load', function () {
    $('#preloader_status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});



/*======================================
          team-owl carousel
========================================*/

$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-chevron-left"></i></span>', '<span><i class="fas fa-chevron-right"></i></span>']
    });
});

/*======================================
           progress bar
========================================*/

$(function () {
    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/*======================================
           responsive-tabs
========================================*/
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/*======================================
           Isotope - portfolio
========================================*/

$(window).on('load', function () {
    // init Isotope
    var $grid = $('.grid').isotope({});
    // filter items on button click
    $('.portfolio-buttons').on('click', 'button', function () {

        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });

        /*adding active class*/
        $('.portfolio-buttons').find('.active').removeClass('active');
        $(this).addClass('active');
    });

});


/*======================================
           magnific popup
========================================*/
$(function () {
    $('.portfolio-item').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*======================================
       testimonial-owl carousel
========================================*/

$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-chevron-left"></i></span>', '<span><i class="fas fa-chevron-right"></i></span>']
    });
});

/*======================================
              counter
========================================*/

$(function () {
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
});

/*======================================
       clients-owl carousel
========================================*/

$(document).ready(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-chevron-left"></i></span>', '<span><i class="fas fa-chevron-right"></i></span>']
    });
});

/*======================================
       navigation
========================================*/

$(function () {

    showHideWhiteNav();

    $(window).scroll(function () {
        showHideWhiteNav();
    });

    function showHideWhiteNav() {
        if ($(window).scrollTop() > 50) {
            //show white nav
            $("nav").addClass("white-nav-top");
            //show back to top button
            $("#back-to-top").fadeIn();
        } else {
            //hide white nav
            $("nav").removeClass("white-nav-top");
            //hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

/*smooth scrolling*/
$(function () {
    $(a.smooth - scroll).click(function (event) {
        event.preventDefault();

        var section_id = $(this).attr("href");


        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 65
        }, 1250, "easeInOutQuint");
    });
});
