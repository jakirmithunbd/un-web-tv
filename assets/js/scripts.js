
(function ($) {
  var ua = window.navigator.userAgent;
  var isIE = /MSIE|Trident/.test(ua);

  if (!isIE) {
    //IE specific code goes here
    "use strict";
  }

  $(document).ready(function () {

    /*** Sticky header */
    $(window).scroll(function () {

      if ($(window).scrollTop() > 0) {
        $(".header").addClass("sticky");
      }
      else {
        $(".header").removeClass("sticky");
      }
    });

    // hide search filters initially where they are not longer column display
    if ($(window).width() < 992) { // window size breakpoint
      $('#search-filters').collapse('hide');
    }

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

    // Mobile package Silder
    $(".ul-for-date").slick({
      // dots: true,
      infinite: false,
      draggable: true,
      slidesToShow: 13,
      // autoplay: true,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 13
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 13
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 10
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 7
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('#selected-search .filter-btn').click(function() {
      var $el = $(this);
      var name = $el.attr('data-filter-name');
      var value = $el.attr('data-filter-value').trim();
      // console.log('Name='+name+', value='+value);

      // find form control and clear value

      // for checkboxes/radios
      $('#filter-'+name+'-'+value).removeAttr('checked');

      // for text input
      $('#filter-'+name).val('');

      $el.remove();

      $('#search-form').submit();
    });

    // Categories page sub-categories selector
    $('.hidden-cat-item').on('click', function () {
      $(this).parent().toggleClass('ShowSubCate');

    });

    // on filter click
    $('#schedule-list').mixItUp({

    });

    // filter for mobile
    $('#country-list').on('change', function () {
      $('#schedule-list').mixItUp('filter', this.value);
    });

    $('#Change_Color').on('click', function () {
      $(this).toggleClass('Color-Right');
      $('.advance-search-area').toggleClass('ShowAdvanceFields');
    });

  });


})(jQuery);