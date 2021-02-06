/* $(document) ensures that this code can only run after the document ha been loaded */
$(document).ready(function () {

    //    /* Anyone who will click an h1 element this function is what will happen */
    //    $('h1').click(function() {
    //        
    //        /* $(this) ==> "this" keyword here now means our h1 element because thats what we selected in the first place */
    //        $(this).css('background-color', '#ff0000');
    //    })

    /* For the sticky navigation */
    var waypoint = new Waypoint({
        element: $('.js--section-features'),
        handler: function (direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        },
        offset: '60px;'
    });

    /* Sroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    /* Navigation scroll */
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Mobile nav */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    /* Animations on scroll */
    var waypoint2 = new Waypoint({
        element: $('.js--wp-1'),
        handler: function (direction) {
            $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        },
        offset: '50%'
    });

    var waypoint3 = new Waypoint({
        element: $('.js--wp-2'),
        handler: function (direction) {
            $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
        },
        offset: '50%'
    });

    var waypoint4 = new Waypoint({
        element: $('.js--wp-3'),
        handler: function (direction) {
            $('.js--wp-3').addClass('animate__animated animate__fadeIn');
        },
        offset: '50%'
    });

    var waypoint5 = new Waypoint({
        element: $('.js--wp-4'),
        handler: function (direction) {
            $('.js--wp-4').addClass('animate__animated animate__pulse');
        },
        offset: '50%'
    });



});
