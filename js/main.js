$(window).on('load', function () {
    $('#load-animation').fadeOut(750);
});

$(window).scroll(function () {
    $(".navbar").css("opacity", 1 - $(window).scrollTop() / 160);
});

$(document).ready(function () {
    "use strict";

    // Configuration of the pie chart
    $('#skills').waypoint(function () {
        $('.chart').easyPieChart({
            barColor: '#366cfe',
            trackColor: '#ced4da',
            scaleColor: false,
            lineWidth: 6,
            animate: 1000,
            onStep: function (from, to, percent) {
                $(this.el).find('span').text(Math.round(percent));
            }
        });
    },
        {
            triggerOnce: true, offset: '50%'
        });

    // Animate social buttons on mouse hover event
    $('.social-buttons').children().each(function () {
        $(this).hover(
            function () {
                $(this).find('a').css({ '-webkit-transition': 'all 0.3s', 'transition': 'all 0.3s', transform: 'translateY(-5px)' });
                $(this).find('p').css({ '-webkit-transition': 'all 0.3s', 'transition': 'all 0.3s', color: '#366cfe' });
            },
            function () {
                $(this).find('a').css({ '-webkit-transition': 'all 0.3s', 'transition': 'all 0.3s', transform: 'none' });
                $(this).find('p').css({ '-webkit-transition': 'all 0.3s', 'transition': 'all 0.3s', color: '#6a6a6a' });
            }
        );
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({ scrollTop: (target.offset().top - 54) }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#navigation',
        offset: 60
    });

    // Collapse navbar
    var navbarCollapse = function () {
        if ($("#navigation").offset().top > 1000) {
            $("#navigation").removeClass("navbar-hover").addClass("navbar-shrink navbar-active");
            $(".navbar").css("opacity", 1);
        } else {
            $("#navigation").addClass("navbar-hover").removeClass("navbar-shrink navbar-active");
        }
    };
    navbarCollapse();

    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
});
