 $(function(){
 var swiper = new Swiper('.slide2 ', {
    loop: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    slidesPerView: "auto",
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 30,
      depth: 100,
      //modifier: 1,
      slideShadows: false,
    },
    navigation: {//화살표 버튼
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {//블릿 버튼
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});