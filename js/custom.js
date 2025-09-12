$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });
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


  
// Projects Gallery Swiper
if (typeof Swiper !== 'undefined') {
    var projectsEl = document.querySelector('.projects-slider');
    if (projectsEl) {
        new Swiper(projectsEl, {
            slidesPerView: 1.2,
            spaceBetween: 24,
            loop: true,
            navigation: {
                nextEl: '.projects-gallery .swiper-button-next',
                prevEl: '.projects-gallery .swiper-button-prev'
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 2.5 }
            }
        });
    }
}

  
  
// Projects Featured Swiper
if (typeof Swiper !== 'undefined') {
    var pfEl = document.querySelector('.pf-slider');
    if (pfEl) {
        new Swiper(pfEl, {
            slidesPerView: 1.0,
            spaceBetween: 24,
            loop: true,
            centeredSlides: true,
            loopedSlides: 10, // Ensures enough duplicated slides for infinite loop
            navigation: {
                nextEl: '.projects-featured .swiper-button-next',
                prevEl: '.projects-featured .swiper-button-prev'
            },
            breakpoints: {
                575: { slidesPerView: 1, loopedSlides: 10 },
                768: { slidesPerView: 1.2, loopedSlides: 10 },
                1200: { slidesPerView: 1.2, loopedSlides: 10 }
            }
        });
    }
}

  