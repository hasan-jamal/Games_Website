document.addEventListener(
  "DOMContentLoaded",
  function () {
    const mySwiper2_wrapper = document.querySelector(
        ".mySwiper2 .swiper-wrapper"
      ),
      mySwiper_container = document.querySelector(".mySwiper"),
      clone = mySwiper2_wrapper.cloneNode(true);
    mySwiper_container.appendChild(clone);

    const swiper = new Swiper(".mySwiper", {
      loop: false,
      spaceBetween: 10,
      slidesPerView: mySwiper2_wrapper.childNodes.length,
      freeMode: true,
      watchSlidesProgress: true,
    });
    const swiper2 = new Swiper(".mySwiper2", {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      loopedSlides: mySwiper2_wrapper.childNodes.length,
      spaceBetween: 10,
      speed: 800,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".slider__pagination",
        clickable: true,
      },
      thumbs: {
        swiper: swiper,
      },
    });
  },
  false
);
