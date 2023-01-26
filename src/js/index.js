import "../css/style.css";

// import $ from "jquery";

import "tw-elements";
import "slider-pro";
import "slider-pro/dist/css/slider-pro.min.css";
import 'magnific-popup/dist/jquery.magnific-popup.js';
import "magnific-popup/dist/magnific-popup.css";

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// JQUERY START
$(document).ready(function () {
  $(window).scroll(function (e) {
    //navbar shrink
    var siteHeader = $("#siteHeader");
    $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
        siteHeader.addClass("site-header--shrinked");
      } else {
        siteHeader.removeClass("site-header--shrinked");
      }

      // Scroll Top fade in out
      if ($(document).scrollTop() > 300) {
        $(".btn--scroll-top").addClass("btn--scroll-top-visible");
      } else {
        $(".btn--scroll-top").removeClass("btn--scroll-top-visible");
      }

      if ($(document).scrollTop() > 300) {
        $(".btn--fixed-direct-call").addClass("btn--fixed-direct-call-visible");
      } else {
        $(".btn--fixed-direct-call").removeClass("btn--fixed-direct-call-visible");
      }

      if ($(document).scrollTop() > 300) {
        $(".social-icons").addClass("social-icons--visible");
      } else {
        $(".social-icons").removeClass("social-icons--visible");
      }
    });
  });

  $(".btn--scroll-top").on("click", function () {
    scrollToTop(0, 500);
  });

  function scrollToTop(offset, duration) {
    $("html, body").animate({ scrollTop: offset }, duration);
    return false;
  }

  // Hero Swiper
  var swiperHero = new Swiper(".hero-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: true,
    pauseOnMouseEnter: true,
    speed: 3000,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderCustom: function (swiper, current, total) {
        var names = [];
        $(".swiper-wrapper .swiper-slide").each(function (i) {
          names.push($(this).data("name"));
        });
        var text = "<ul>";
        for (let i = 1; i <= total; i++) {
          if (current == i) {
            text += `<li class="swiper-pagination-bullet active">${names[i]}</li>`;
          } else {
            text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
          }
        }
        text += "</ul>";
        return text;
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Testimonial Swiper
  var swiperProducts = new Swiper(".categories-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderCustom: function (swiper, current, total) {
        var names = [];
        $(".swiper-wrapper .swiper-slide").each(function (i) {
          names.push($(this).data("name"));
        });
        var text = "<ul>";
        for (let i = 1; i <= total; i++) {
          if (current == i) {
            text += `<li class="swiper-pagination-bullet active">${names[i]}</li>`;
          } else {
            text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
          }
        }
        text += "</ul>";
        return text;
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // Testimonial Swiper
  var swiperTestimonial = new Swiper(".testimonial-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderCustom: function (swiper, current, total) {
        var names = [];
        $(".swiper-wrapper .swiper-slide").each(function (i) {
          names.push($(this).data("name"));
        });
        var text = "<ul>";
        for (let i = 1; i <= total; i++) {
          if (current == i) {
            text += `<li class="swiper-pagination-bullet active">${names[i]}</li>`;
          } else {
            text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
          }
        }
        text += "</ul>";
        return text;
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // $('input[type="checkbox"]').each(function () {
  //   $(this).on("change", function () {
  //     if ($(this).attr('checked', true)) {
  //       $(this).attr('checked', false);
  //       //  console.log('unchecked');
  //     } else {
  //       $(this).attr('checked', true);
  //       // console.log('checked');
  //     }
  //   });
  // });

  // Header Mobile Nav Dropdown Menu
  var navLinks = $(".site-header__mobile-nav > ul li a");
  navLinks.each(function () {
    $(this).next().first().slideUp(0);
  });
  navLinks.each(function () {
    $(this).on("click", function (e) {
      if ($(this).hasClass("has-dropdown")) {
        e.preventDefault();
        $(this).parent().siblings().find("ul").slideUp(300);
        $(this).parent().siblings().find("svg").removeClass("fa-minus").addClass("fa-plus");
        $(this).next().first().slideToggle(300);
        if ($(this).find("svg").hasClass("fa-plus")) {
          $(this).find("svg").removeClass("fa-plus").addClass("fa-minus");
        } else {
          $(this).find("svg").removeClass("fa-minus").addClass("fa-plus");
        }
      }
    });
  });

  // Accordion
  $(".set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").slideUp(200);
      $(".set > a svg").removeClass("fa-minus").addClass("fa-plus");
    } else {
      $(".set > a svg").removeClass("fa-minus").addClass("fa-plus");
      $(this).find("svg").removeClass("fa-plus").addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this).siblings(".content").slideDown(200);
    }
  });

  // show password button function
  var showPasswordButtons = $(".form .button--show-password");
  var showPassFlag = false;
  showPasswordButtons.each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      if (!showPassFlag) {
        $(this).siblings("input").attr("type", "text");
        $(this).find("i").removeClass("bi-eye").addClass("bi-eye-slash");
        showPassFlag = true;
      } else {
        $(this).siblings("input").attr("type", "password");
        $(this).find("i").removeClass("bi-eye-slash").addClass("bi-eye");
        showPassFlag = false;
      }
    });
  });

  // FILTER ON PRODUCTS ARCHIVE PAGE
  $(".filter__btn--control").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(this).closest(".filter-block").find(".filter-block__body").slideToggle(300);
    });
  });

  // PRICE RANGE FILTER
  const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
  let priceGap = 1000;

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }

      // console.log(minVal, maxVal);
    });
  });

  // PRODUCT SINGLE THUMBNAIL GALLERY
  $("#productSingleSlider").sliderPro({
    // Width of the slide
    width: 500,

    // Height of the slide
    height: 500,

    // Indicates if the slider is responsive
    responsive: true,

    // The aspect ratio of the slider (width/height)
    aspectRatio: -1,

    // The scale mode for images (cover, contain, exact and none)
    imageScaleMode: "cover",

    // Indicates if the image will be centered
    centerImage: true,

    // Indicates if the image can be scaled up more than its original size
    allowScaleUp: true,

    // Indicates if height of the slider will be adjusted to the
    // height of the selected slide
    autoHeight: false,

    // Will maintain all the slides at the same height, but will allow the width of the slides to be variable if the orientation of the slides is horizontal and vice-versa if the orientation is vertical.
    autoSlideSize: false,

    // Indicates the initially selected slide
    startSlide: 0,

    // Indicates if the slides will be shuffled
    shuffle: false,

    // Indicates whether the slides will be arranged horizontally
    // or vertically. Can be set to 'horizontal' or 'vertical'.
    orientation: "horizontal",

    // Indicates if the size of the slider will be forced to 'fullWidth' or 'fullWindow'
    forceSize: "none",

    // Indicates if the slider will be loopable
    loop: true,

    // The distance between slides
    slideDistance: 0,

    // The duration of the height animation
    heightAnimationDuration: 700,

    // Sets the size of the visible area, allowing the increase of it in order
    // to make more slides visible.
    // By default, only the selected slide will be visible.
    visibleSize: "auto",

    // Breakpoints for allowing the slider's options to be changed
    // based on the size of the window.
    breakpoints: {
      1199: {
        thumbnailsPosition: "bottom",
        width: 400,
        height: 400
      }
    },

    // Indicates whether the selected slide will be in the center of the slider, when there are more slides visible at a time.
    // If set to false, the selected slide will be in the left side of the slider.
    centerSelectedSlide: true,

    // Indicates if the direction of the slider will be from right to left, instead of the default left to right.
    rightToLeft: false,

    // Indicates if fade will be used.
    fade: "true",

    // Indicates if the previous slide will be faded out (in addition to the next slide being faded in).
    fadeOutPreviousSlide: true,

    // Sets the duration of the fade effect.
    fadeDuration: 500,

    // Indicates whether or not autoplay will be enabled.
    autoplay: true,

    // Sets the delay/interval (in milliseconds) at which the autoplay will run.
    autoplayDelay: 5000,

    // Indicates whether autoplay will navigate to the next slide or previous slide.
    // 'normal' and 'backwards'
    autoplayDirection: "normal",

    // Indicates if the autoplay will be paused or stopped when the slider is hovered.
    // 'pause', 'stop' and 'none'
    autoplayOnHover: "pause",

    // Indicates whether the arrow buttons will be created.
    arrows: true,

    // Indicates whether the arrows will fade in only on hover.
    fadeArrows: true,

    // Indicates whether the buttons will be created.
    buttons: false,

    // Indicates whether keyboard navigation will be enabled.
    keyboard: true,

    // Indicates whether the slider will respond to keyboard input only when the slider is in focus.
    keyboardOnlyOnFocus: false,

    // Indicates whether the touch swipe will be enabled for slides.
    touchSwipe: true,

    // Sets the minimum amount that the slides should move.
    touchSwipeThreshold: 50,

    // Indicates whether or not the captions will be faded.
    fadeCaption: true,

    // Sets the duration of the fade animation.
    captionFadeDuration: 500,

    // Indicates whether the full-screen button is enabled.
    fullScreen: false,

    // Indicates whether the button will fade in only on hover.
    fadeFullScreen: true,

    // Indicates whether the slider will wait for the layers to disappear before going to a new slide.
    waitForLayers: false,

    // Indicates whether the layers will be scaled automatically.
    autoScaleLayers: true,

    // Sets a reference width which will be compared to the current slider width in order to determine how much the layers need to scale down.
    // By default, the reference width will be equal to the slide width.
    // However, if the slide width is set to a percentage value, then it's necessary to set a specific value for 'autoScaleReference'.
    autoScaleReference: -1,

    // If the slider size is below this size, the small version of the images will be used.
    smallSize: 480,

    // If the slider size is below this size, the medium version of the images will be used.
    mediumSize: 768,

    // If the slider size is below this size, the large version of the images will be used.
    largeSize: 1024,

    // Indicates whether the hash will be up<a href="https://www.jqueryscript.net/time-clock/">date</a>d when a new slide is selected.
    updateHash: false,

    // Sets the action that the video will perform when its slide container is selected.
    // 'playVideo' and 'none'
    reachVideoAction: "none",

    // Sets the action that the video will perform when another slide is selected.
    // 'stopVideo', 'pauseVideo', 'removeVideo' and 'none'
    leaveVideoAction: "pauseVideo",

    // Sets the action that the slider will perform when the video starts playing
    // 'stopAutoplay' and 'none'
    playVideoAction: "stopAutoplay",

    // Sets the width of the thumbnail.
    thumbnailWidth: 100,

    // Sets the height of the thumbnail.
    thumbnailHeight: 100,

    // 'top', 'bottom', 'right' and 'left'
    thumbnailsPosition: "left",

    // Indicates if a pointer will be displayed for the selected thumbnail
    thumbnailPointer: false,

    // Indicates whether the thumbnail arrows will be enabled
    thumbnailArrows: true,

    // Indicates whether the touch swipe will be enabled for thumbnails
    thumbnailTouchSwipe: true,
  });

  $('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});


  function loadJS(FILE_URL) {
    let scriptEle = document.createElement("script");

    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", "text/javascript");
    // scriptEle.setAttribute("async", async);

    document.body.appendChild(scriptEle);
  }
  loadJS("js/backend-script.js");
});
