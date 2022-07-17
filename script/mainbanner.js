//메인배너 페이드 
$(document).ready(function(){

    var swiper = new Swiper(" #banner .mySwiper", {
        autoplay: {
            delay: 3500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
          },
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      pagination: {
        el: "#banner .swiper-pagination",
        clickable: true,
      },
    });

});
