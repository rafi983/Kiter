$(function ($) {
  "use strict";

  // menufix and top to bottom button

  var toptoBottom = 300;
  var gapresult = $(".menupart").offset().top;
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll > gapresult) {
      $(".menupart").addClass("menufixed");
    } else {
      $(".menupart").removeClass("menufixed");
    }

    // top to bottom button

    if (scroll >= toptoBottom) {
      $("#up_btn").fadeIn();
    } else {
      $("#up_btn").fadeOut();
    }
  });

  $("#up_btn").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // sidemenu

  $(".sidebtn").on("click", function () {
    $(".menu").slideToggle("toggle");
    $(".sidebtn").toggleClass("clickbtn");
  });

  // banner slider use owlcarousel

  $(".full_page_slider .owl-carousel").owlCarousel({
    items: 1,
    autoplay: false,
    animateOut: "fadeOut",
    loop: true,
    autoplayHoverPause: false,
  });

  // food packages

  $(".packages_section .owl-carousel").owlCarousel({
    items: 1,
    autoplay: false,
    loop: true,
    autoplayHoverPause: false,
  });

  // customer testimonials

  $(".testimonial_section .owl-carousel").owlCarousel({
    items: 3,
    autoplay: false,
    loop: true,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });

  // counter for stacticits

  $(".counter").counterUp({
    delay: 8,
    time: 2000,
  });

  $(".counter").addClass("animated fadeInDownBig");
  $("h3").addClass("animated fadeIn");

  // mixitup for food gallery part

  var filterList = {
    init: function () {
      // https://mixitup.kunkalabs.com/
      $("#gallery").mixItUp({
        selectors: {
          target: ".gallery-item",
          filter: ".filter",
        },
        load: {
          filter: ".breakfast, .lunch, .dinner, .drinks",
          // show all items on page load.
        },
      });
    },
  };

  // Filter ALL the things
  filterList.init();
});

// kitchen vartical slider

var swiper = new Swiper(".kitchen-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: false,
  mousewheel: false,
  // autoHeight: true,
  pagination: {
    el: ".kitchen-slider__pagination",
    clickable: true,
  },
});
