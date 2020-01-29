
(function($){
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);

    if ( !isIE ) {
        //IE specific code goes here
        "use strict";
    }

      /*** Sidr Menu */
    // $('.navbar-toggle').sidr({
    //     name: 'sidr-main',
    //     side: 'right',
    //     source: '#sidr',
    //     displace: false,
    //     renaming: false
    // });

    $('.navbar-toggle').on('click', function(){
        $(this).toggleClass('in');
    });

    /*** Header height = gutter height */
    function headersetGutterHeight(){
        var footer = document.querySelector('.header'),
            gutter = document.querySelector('.header_gutter');
            gutter.style.height = footer.offsetHeight + 'px';
    }

    window.onload = headersetGutterHeight;
    window.onresize = headersetGutterHeight;

    $("document").on("click",function(e) { $.sidr('close','sidr-main'); });

    $('.closeMenu').on('click', function(){
        $.sidr('close', 'sidr-main');
    });

    /*** Sticky header */
    $(window).scroll(function() {

        if ($(window).scrollTop() > 0) {
          $(".header").addClass("sticky");
        } 
        else {
          $(".header").removeClass("sticky");
        }
    });

     // Mobile package Silder
    $(".live-slider-wrapper").slick({
        // dots: true,
        infinite: false,
        draggable: true,
        slidesToShow: 4,
        // autoplay: true,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

     // Mobile package Silder
    $(".slider-wrapper").slick({
        // dots: true,
        infinite: false,
        draggable: true,
        slidesToShow: 4,
        // autoplay: true,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();

      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top - 120,
        }, 500);
    });

    $('.hidden-cat-item').on('click', function(){
      $(this).parent().toggleClass('ShowSubCate');

    });

})(jQuery);