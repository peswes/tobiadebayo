(function ($) {
    'use strict';

    var mona_window = $(window);

    // *******************************
    // :: 1.0 Preloader Active Code
    // *******************************

    mona_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // *******************************
    // :: 2.0 ClassyNav Active Code
    // *******************************

    if ($.fn.classyNav) {
        $('#monaNav').classyNav();
    }

    // ***********************************
    // :: 3.0 Welcome Carousel Active Code
    // ***********************************

    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            autoplayTimeout: 7000,
            nav: true,
            navText: ['', '<i class="fa fa-angle-left" aria-hidden="true"></i>']
        })
        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });
        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });
        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });
        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    // ***********************************
    // :: 4.0 Post Carousel Active Code
    // ***********************************
    if ($.fn.owlCarousel) {
        var slidePost = $('.slide-post');
        slidePost.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500
        });
    }

    // ***********************************
    // :: 5.0 Model Carousel Active Code
    // ***********************************
    if ($.fn.owlCarousel) {
        var sliderPost = $('.mona-all-model-slide, .mona-models-slide, .mona-actor-slide, .mona-singer-slide');
        sliderPost.owlCarousel({
            items: 5,
            margin: 10,
            loop: true,
            autoplay: true,
            autoplayTimeout: 10000,
            smartSpeed: 1500,
            nav: true,
            navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    // ***********************************
    // :: 6.0 ImagesLoaded Active Code
    // ***********************************
    if ($.fn.imagesLoaded) {
        $('.mona-portfolio').imagesLoaded(function () {
            // init Isotope
            var $grid = $('.mona-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // ***********************************
    // :: 7.0 Slick Slider Active Code
    // ***********************************
    if ($.fn.slick) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            slide: 'div',
            autoplay: true,
            centerMode: true,
            centerPadding: '30px',
            mobileFirst: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'
        });
    }

    // ***********************************
    // :: 8.0 Magnific Popup Active Code
    // ***********************************
    if ($.fn.magnificPopup) {
        $('.video-play-btn').magnificPopup({
            type: 'iframe'
        });
    }


    // ***********************************
    // :: 9.0 Tooltip Active Code
    // ***********************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************************
    // :: 10.0 WOW Active Code
    // ***********************************
    if (mona_window.width() > 767) {
        new WOW().init();
    }

    // ***********************************
    // :: 11.0 Jarallax Active Code
    // ***********************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // ***********************************
    // :: 12.0 Scrollup Active Code
    // ***********************************
    if ($.fn.scrollUp) {
        mona_window.scrollUp({
            scrollSpeed: 2000,
            scrollText: '<i class="fa fa-angle-up"</i>'
        });
    }

    // ***********************************
    // :: 13.0 Sticky Active Code
    // ***********************************
    mona_window.on('scroll', function () {
        if (mona_window.scrollTop() > 0) {
            $('.main-header-area').addClass('sticky');
        } else {
            $('.main-header-area').removeClass('sticky');
        }
    });

    // ***********************************
    // :: 14.0 Prevent Default 'a' Click
    // ***********************************
    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

})(jQuery);
// This is a custom script for the FAQs.

  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const currentlyActive = document.querySelector(".faq-question.active");
      if (currentlyActive && currentlyActive !== question) {
        currentlyActive.classList.remove("active");
        currentlyActive.nextElementSibling.style.maxHeight = null;
      }

      question.classList.toggle("active");
      const answer = question.nextElementSibling;

      if (question.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

// This is a custom script for the commission slider.

 document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.cat-img-slider');
  const slides = document.querySelectorAll('.cat-imgm');
  const dots = document.querySelectorAll('.cat-slider-dots .dot');

  if (!slider) return;

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const slide = slides[index];
      if (!slide) return;

      const slideLeft = slide.offsetLeft;
      slider.scrollTo({
        left: slideLeft,
        behavior: 'smooth'
      });

      dots.forEach(dot => dot.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  // Listen for scroll to update active dot
  slider.addEventListener('scroll', function() {
    const scrollLeft = slider.scrollLeft;
    const slideWidth = slides[0].offsetWidth;
    const index = Math.round(scrollLeft / slideWidth);

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  });
});


$(document).ready(function () {
  $(".nonloop-block-3").owlCarousel({
    loop: true, // Enable infinite looping
    margin: 10, // Space between items
    nav: true, // Enable navigation arrows
    dots: false, // Disable dots
    autoplay: true, // Enable auto-scroll
    autoplayTimeout: 3000, // Set auto-scroll interval (3000ms = 3 seconds)
    autoplayHoverPause: true, // Pause on hover
    navText: [
      '<span class="icon-arrow_back"></span>', // Left arrow
      '<span class="icon-arrow_forward"></span>'  // Right arrow
    ],
    responsive: {
      0: { items: 1 }, // Show 1 item on small screens
      600: { items: 2 }, // Show 2 items on medium screens
      1000: { items: 3 } // Show 3 items on large screens
    }
  });
});