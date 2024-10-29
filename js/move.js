window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

let header__menu = document.querySelector(".header__menu");

function addShow() {
  header__menu.classList.toggle("show");
}

var logo__swiper = new Swiper(".logo__swiper", {
  loop: true,
  grabCursor: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 5,
    },

    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

var imgSlide__swiper = new Swiper(".imgSlide__swiper", {
  loop: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

});

  let btm = document.querySelector('.btm');
  let clip = document.querySelector('.clip');
  let close = document.querySelector('.close');
  let video = document.querySelector('video')
  btm.onclick = function(){
    btm.classList.add('active');
    clip.classList.add('active');
    video.play();
    video.currentTime = 0;
  }

  close.onclick = function(){
    btm.classList.remove('active');
    clip.classList.remove('active');
    video.pause();
  }

  var imgIcon__swiper = new Swiper(".imgIcon__swiper", {
    loop: true,
    grabCursor: true,

    keyboard: {
      enabled: true,
    },

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
  
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
  
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
  
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });