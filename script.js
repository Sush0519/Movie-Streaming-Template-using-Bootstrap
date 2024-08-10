var swiper = new Swiper(".card_slider", {
  spaceBetween: 15,
  loop: true,
  speed: 1000,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  autoplay: {
    delay: 2000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    220: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".movieCards_swiper", {
  effect: "cards",
  grabCursor: true,
  autoHeight: true,
  loop: true,
  speed: 1000,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});

// *****************Search Bar**********************

document.getElementById("searchBtn").addEventListener("click", () => {
  var searchBar = document.getElementById("searchBar");
  searchBar.classList.toggle("open");
});

// **********************Login Page*******************

const SignUp_Btn = document.getElementById("signup_btn");
SignUp_Btn.addEventListener("click", () => {
  window.location.href = "LoginPage.html";
});
