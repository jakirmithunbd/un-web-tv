
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

    $("document").on("click",function(e) { $.sidr('close','sidr-main'); });

    $('.closeMenu').on('click', function(){
        $.sidr('close', 'sidr-main');
    });

     // Mobile package Silder
    $(".live-slider-wrapper").slick({
        // dots: true,
        infinite: false,
        draggable: true,
        slidesToShow: 5,
        // autoplay: true,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4
          }
        },
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
        slidesToShow: 5,
        // autoplay: true,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4
          }
        },
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


    $('.hidden-cat-item').on('click', function(){
      $(this).parent().toggleClass('ShowSubCate');

    });

    // on filter click
    // $('#schedule-list').mixItUp({
      
    // });

    // filter for mobile
    $('#country-list').on('change', function(){
        $('#schedule-list').mixItUp('filter', this.value);
    });

    var tab = $('#data-wrapper');
    if(tab.length > 0){
        var tabLocationTop = tab.offset().top - $(window).scrollTop();
        console.log(tabLocationTop);
        if(tabLocationTop <= 140 ){

          tab.find('#data-wrapper').addClass('sticky');
        } else {
          tab.find('#data-wrapper').removeClass('sticky');
        }
    };

    /*** Sticky header */
    $(window).scroll(function() {

        if ($(window).scrollTop() > 0) {
          //$(".header").addClass("sticky");
        } 
        else {
          //$(".header").removeClass("sticky");
        }

        if ($(window).scrollTop() > 140) {
          $('.date-area').addClass('sticky');
        } 
        else {
          $('.date-area').removeClass('sticky');
        }
    });

    // $('#featured .slick-slider').hover(function(){
    //     var vidoe = $(this).children('video');
    //         vidoe.autoplay = true;
        
    // });

    $('#Change_Color').on('click', function(e){
        e.preventDefault();
      $(this).toggleClass('Color-Right');
      $('.advance-search-area').toggleClass('ShowAdvanceFields');
    });

})(jQuery);