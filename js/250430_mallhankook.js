var Main_Swiper = new Swiper(".Main_Swiper", {
  effect: "fade",
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
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
  on: {
    slideChange: function () {
      document.querySelectorAll(".menu li").forEach(function (v) {
        v.querySelector("a").classList.remove("on");
      });
      document.querySelector(".nav_logo img").src = "./images/logo_black.png";
      // 현재 활성화된 슬라이드의 실제 인덱스를 가져옴
      var realIndex = this.realIndex;

      // 조건에 맞는 인덱스에서 메뉴 항목에 .on 클래스 추가
      if (realIndex === 0) {
        document.querySelectorAll(".menu li").forEach(function (v) {
          v.querySelector("a").classList.add("on");
        });
      } else if (realIndex === 1) {
        document.querySelector(".nav_logo img").src = "./images/logo_white.png";
      } else if (realIndex === 2) {
        document.querySelector(".nav_logo img").src = "./images/logo_white.png";
      } else if (realIndex === 3) {
        document.querySelectorAll(".menu li").forEach(function (v) {
          v.querySelector("a").classList.add("on");
        });
      } else if (realIndex === 4) {
        document.querySelector(".nav_logo img").src = "./images/logo_white.png";
      } else if (realIndex === 5) {
        document.querySelectorAll(".menu li").forEach(function (v) {
          v.querySelector("a").classList.add("on");
        });
      } else if (realIndex === 6) {
        document.querySelectorAll(".menu li").forEach(function (v) {
          v.querySelector("a").classList.add("on");
        });
      } else if (realIndex === 7) {
        document.querySelector(".nav_logo img").src = "./images/logo_white.png";
      }
    },
  },
});
