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
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
document.querySelectorAll(".mySwiper3 .swiper-slide").forEach(function (v, k) {
  const img = v.querySelector("img");
  const originalSrc = img.src;

  v.onmouseenter = function () {
    img.src = `./images/new_item_0${k + 1}_hover.png`;
  };
  v.onmouseleave = function () {
    img.src = originalSrc;
  };
});
var mySwiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
document.querySelectorAll(".mySwiper4 .swiper-slide").forEach(function (v, k) {
  const img = v.querySelector("img");
  const originalSrc = img.src;

  v.onmouseenter = function () {
    img.src = `./images/new_item_0${k + 1}_hover.png`;
  };
  v.onmouseleave = function () {
    img.src = originalSrc;
  };
});
