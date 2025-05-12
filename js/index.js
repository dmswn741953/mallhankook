/*---------------------*/
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
      document
        .querySelectorAll(".service li")[0]
        .querySelectorAll("a")
        .forEach((v) => {
          v.classList.remove("on");
        });
      document
        .querySelectorAll(".service li")[1]
        .querySelector("a")
        .classList.remove("on");
      document.querySelector(".nav_logo img").src = "./images/logo_black.png";

      document.querySelectorAll(".nav_icon").forEach((v) => {
        v.classList.remove("on");
      });
      document.querySelectorAll(".mainBg .slide_txt").forEach((v) => {
        v.querySelector("button").classList.remove("on");
      });
      document.querySelector(".swiper-button-prev").classList.remove("on");
      document.querySelector(".swiper-button-next").classList.remove("on");
      // 현재 활성화된 슬라이드의 실제 인덱스를 가져옴
      var realIndex = this.realIndex;

      // 조건에 맞는 인덱스에서 메뉴 항목에 .on 클래스 추가
      if (realIndex === 0) {
        document.querySelectorAll(".menu li").forEach((v) => {
          v.querySelector("a").classList.add("on");
        });
        document
          .querySelectorAll(".service li")[0]
          .querySelectorAll("a")
          .forEach((v) => {
            v.classList.add("on");
          });
        document
          .querySelectorAll(".service li")[1]
          .querySelector("a")
          .classList.add("on");
        document.querySelectorAll(".nav_icon").forEach((v) => {
          v.classList.add("on");
        });
      } else if (realIndex === 1) {
        document.querySelector(".nav_logo img").src = "./images/logo_white.png";
        document.querySelector(".swiper-button-prev").classList.add("on");
        document.querySelector(".swiper-button-next").classList.add("on");
        document.querySelectorAll(".mainBg .slide_txt").forEach((v) => {
          v.querySelector("button").classList.add("on");
        });
      } else if (realIndex === 2) {
        document.querySelector(".nav_logo img").src = "./images/logo_white.png";
        document.querySelector(".swiper-button-prev").classList.add("on");
        document.querySelector(".swiper-button-next").classList.add("on");
        document.querySelectorAll(".mainBg .slide_txt").forEach((v) => {
          v.querySelector("button").classList.add("on");
        });
      } else if (realIndex === 3) {
        document.querySelectorAll(".menu li").forEach(function (v) {
          v.querySelector("a").classList.add("on");
        });
        document
          .querySelectorAll(".service li")[0]
          .querySelectorAll("a")
          .forEach((v) => {
            v.classList.add("on");
          });
        document
          .querySelectorAll(".service li")[1]
          .querySelector("a")
          .classList.add("on");
        document.querySelectorAll(".nav_icon").forEach((v) => {
          v.classList.add("on");
        });
      } else if (realIndex === 4) {
        document.querySelector(".nav_logo img").src = "./images/logo_white.png";
        document.querySelector(".swiper-button-prev").classList.add("on");
        document.querySelector(".swiper-button-next").classList.add("on");
        document.querySelectorAll(".mainBg .slide_txt").forEach((v) => {
          v.querySelector("button").classList.add("on");
        });
      } else if (realIndex === 5) {
        document.querySelectorAll(".menu li").forEach(function (v) {
          v.querySelector("a").classList.add("on");
        });
        document
          .querySelectorAll(".service li")[0]
          .querySelectorAll("a")
          .forEach((v) => {
            v.classList.add("on");
          });
        document
          .querySelectorAll(".service li")[1]
          .querySelector("a")
          .classList.add("on");
        document.querySelectorAll(".nav_icon").forEach((v) => {
          v.classList.add("on");
        });
      } else if (realIndex === 6) {
        document.querySelectorAll(".menu li").forEach(function (v) {
          v.querySelector("a").classList.add("on");
          document
            .querySelectorAll(".service li")[0]
            .querySelectorAll("a")
            .forEach((v) => {
              v.classList.add("on");
            });
          document
            .querySelectorAll(".service li")[1]
            .querySelector("a")
            .classList.add("on");
          document.querySelectorAll(".nav_icon").forEach((v) => {
            v.classList.add("on");
          });
        });
      } else if (realIndex === 7) {
        document.querySelector(".nav_logo img").src = "./images/logo_white.png";
        document.querySelector(".swiper-button-prev").classList.add("on");
        document.querySelector(".swiper-button-next").classList.add("on");
        document.querySelectorAll(".mainBg .slide_txt").forEach((v) => {
          v.querySelector("button").classList.add("on");
        });
      }
    },
  },
});

function best1() {
  document.querySelectorAll(".best_txt").forEach(function (v, k) {
    v.classList.remove("on");
  });
}

var mySwiper2 = new Swiper(".mySwiper2", {
  grabCursor: true,
  loop: true,
  effect: "creative",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  pagination: {
    el: ".best_con .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".best_con .swiper-button-next",
    prevEl: ".best_con .swiper-button-prev",
  },
  on: {
    slideChange: function () {
      const realIndex2 = this.realIndex;
      const BestTxt = document.querySelectorAll(".txt_wrap");
      BestTxt.forEach(function (v, k) {
        if (realIndex2 == k) {
          BestTxt[k].classList.add("on");
          v.querySelectorAll("p").forEach(function (v, k) {
            v.classList.add("on");
          });
        } else {
          v.classList.remove("on");
          v.querySelectorAll("p").forEach(function (v, k) {
            v.classList.remove("on");
          });
        }
      });
    },
  },
});

var mySwiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".new .swiper-button-next",
    prevEl: ".new .swiper-button-prev",
  },
  breakpoints: {
    590: { slidesPerView: 3 },
    770: { slidesPerView: 4 },
  },
});

var mySwiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".set .swiper-button-next",
    prevEl: ".set .swiper-button-prev",
  },
  breakpoints: {
    590: { slidesPerView: 3 },
    770: { slidesPerView: 4 },
  },
});
var mySwiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".mug .swiper-button-next",
    prevEl: ".mug .swiper-button-prev",
  },
  breakpoints: {
    590: { slidesPerView: 3 },
    770: { slidesPerView: 4 },
  },
});
var mySwiper6 = new Swiper(".mySwiper6", {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".white .swiper-button-next",
    prevEl: ".white .swiper-button-prev",
  },
  breakpoints: {
    590: { slidesPerView: 3 },
    770: { slidesPerView: 4 },
  },
});
