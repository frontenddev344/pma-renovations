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
    $(".feature-project").hover(function(){
        $(this).addClass("zoom-out");
    });
    $(".projects-gallery").hover(function(){
        $(this).addClass("zoom-out");
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
                300: { slidesPerView: 2 ,
                    spaceBetween: 15,
                },
                575: { 
                    slidesPerView: 2 ,
                    spaceBetween: 20,
                },
                768: { 
                    slidesPerView: 3 ,
                    spaceBetween: 20,
                },
                991: { slidesPerView: 4 },
                1200: { slidesPerView: 6 }
            }
        });

        // Initialize main swiper
        var pgMainSwiper = new Swiper(pgMainEl, {
            spaceBetween: 10,
            slidesPerView: 1,
            loop: false,
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
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
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


document.addEventListener('DOMContentLoaded', () => {
    if (window.gsap && window.SplitType) {

        const menuLinks = document.querySelectorAll('.menu-link');

        menuLinks.forEach(link => {
            const topText = link.querySelector('.top');
            const bottomText = link.querySelector('.bottom');

            // Split both texts into characters
            const splitTop = new SplitType(topText, { types: 'chars' });
            const splitBottom = new SplitType(bottomText, { types: 'chars' });

            const topChars = topText.querySelectorAll('.char');
            const bottomChars = bottomText.querySelectorAll('.char');

            // Initial positions
            gsap.set(topChars, { yPercent: 0, rotationX: 0, perspective: 400 });
            gsap.set(bottomChars, { yPercent: 100, rotationX: -60, perspective: 400 });

            // Hover animation
            link.addEventListener('mouseenter', () => {
                // Animate top chars up
                gsap.to(topChars, { yPercent: -100, rotationX: -90, duration: 0.5, stagger: 0.02, ease: "power3.out" });

                // Animate bottom chars up
                gsap.to(bottomChars, { yPercent: 0, rotationX: 0, duration: 0.5, stagger: 0.02, ease: "power3.out" });
            });

            // Mouse leave
            link.addEventListener('mouseleave', () => {
                // Animate top chars back
                gsap.to(topChars, { yPercent: 0, rotationX: 0, duration: 0.5, stagger: 0.02, ease: "power3.in" });

                // Animate bottom chars down
                gsap.to(bottomChars, { yPercent: 100, rotationX: -60, duration: 0.5, stagger: 0.02, ease: "power3.in" });
            });
        });
    }
});
