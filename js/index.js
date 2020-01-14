$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container-slider-one', {
    slidesPerView: 1.5,
    speed: 600,
    spaceBetween: 25,
    loop: true,
    centeredSlides: true,
    touchRatio: 1,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      751: {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    }
  });
});

$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container-slider-two', {
    slidesPerView: 1.5,
    speed: 600,
    spaceBetween: 25,
    loop: true,
    centeredSlides: true,
    touchRatio: 1,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      751: {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    }
  });
});

if ($('.corners .swiper-pagination-bullet').hasClass('.swiper-pagination-bullet-active')) {
  console.log('true');
  $('.corners-wrapper .swiper-wrapper').css({
    'transform' : 'translate3d(-1200px, 0px, 0px)!important'
  });
}

$(document).ready(function () {
  var cornerSlider = new Swiper ('.universal-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });
});

$(document).ready(function () {
  var eventSwiper = new Swiper('.events-container', {
    slidesPerView: '1',
    loop: true,
    touchRatio: 1,
    spaceBetween: 20,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    breakpoints: {
      750: {
        direction: 'horizontal',
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 40
      },
    },
  });
});

$(document).ready(function () {
  var gallerySwiper = new Swiper('.gallery-swiper-container', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    loop: true,
    touchRatio: 1,
    speed: 600,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next.gallery',
      prevEl: '.swiper-button-prev.gallery',
    },
    pagination: {
      el: '.gallery-swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    breakpoints: {
      750: {
        direction: 'horizontal',
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 5,
        navigation: {
          nextEl: '.swiper-button-next.gallery',
          prevEl: '.swiper-button-prev.gallery',
        },
        pagination: {
          el: '.gallery-swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      },
    }
  });
});

$(document).ready(function(){
  $(".navigation").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);
  });
});

$(document).ready(function(){
  $('#pagination-list').on('click',"li", (function() {
      $('body,html').animate({scrollTop:0},500);
      // console.log('#pagination-list') 
  }));
});

$(document).ready(function(){
  $('#pagination-list').on('click',"div", (function() {
      $('body,html').animate({scrollTop:0},500);
  }));
});


document.addEventListener('DOMContentLoaded', function(){
  new Cocoen();
});

$('.hamburger').click(function() {
  $('.mob_menu').toggleClass('active');
});

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
    }, false);
  });
}

// food-navigation

$(window).on('scroll', function () {

  var corner = $('.corner--content-wrapper');
  var cornersList = $('.navigation');
  var cornersListHeight = cornersList.outerHeight();

  var cornerCurrentPosition = $(this).scrollTop();
  corner.each(function() {
    var borderTop = $(this).offset().top - cornersListHeight;
    var borderBottom = borderTop + $(this).outerHeight();
    
    if (cornerCurrentPosition >= borderTop && cornerCurrentPosition <= borderBottom) {
      cornersList.find('a').removeClass('nactive');
      cornersList.find('a[href="#'+$(this).attr('id')+'"]').addClass('nactive');
    }
  });
});