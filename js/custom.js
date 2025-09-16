$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });

    $(".proof-projects-grid").hover(function(){
        $(this).addClass("active");
    });

    $('.open-mega-menu').click(function(){
        $(".mega-menu").fadeIn(300);
    })
    $(".mega-closed-menu").click(function(){
        $(".mega-menu").fadeOut(300);
    })
  });

  
// Testimonials Swiper
if (typeof Swiper !== 'undefined') {
    var testimonialsEl = document.querySelector('.testimonials-slider');
    if (testimonialsEl) {
        new Swiper(testimonialsEl, {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            navigation: {
                nextEl: '.testimonials .swiper-button-next',
                prevEl: '.testimonials .swiper-button-prev'
            },
            breakpoints: {
                575: { slidesPerView: 1 },
                768: { slidesPerView: 2.2 },
                1200: { slidesPerView: 2.5 }
            }
        });
    }
}


  
// Projects Gallery Swiper (main + thumbs)
if (typeof Swiper !== 'undefined') {
    var pgThumbsEl = document.querySelector('.projects-gallery .pg-thumbs');
    var pgMainEl = document.querySelector('.projects-gallery .pg-main');

    if (pgThumbsEl && pgMainEl) {
        // Initialize thumbs swiper
        var pgThumbsSwiper = new Swiper(pgThumbsEl, {
            spaceBetween: 30,
            slidesPerView: 6,
            freeMode: true,
            watchSlidesProgress: true,
            watchSlidesVisibility: true, // important for looped thumbs
            breakpoints: {
                300: { slidesPerView: 1 },
                575: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                991: { slidesPerView: 4 },
                1200: { slidesPerView: 6 }
            }
        });

        // Initialize main swiper
        var pgMainSwiper = new Swiper(pgMainEl, {
            spaceBetween: 10,
            slidesPerView: 1,
            loop: false, // disable loop to fix thumb click issue
            navigation: {
                nextEl: '.projects-gallery .swiper-button-next',
                prevEl: '.projects-gallery .swiper-button-prev'
            },
            thumbs: {
                swiper: pgThumbsSwiper
            }
        });
    }
}



  


var projectCardSliderEl = document.querySelector(".project-card-slider");
if (projectCardSliderEl && typeof Swiper !== 'undefined') {
    var projectCardSlider = new Swiper(projectCardSliderEl, {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

