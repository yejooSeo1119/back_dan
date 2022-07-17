 $(function(){
 var swiper = new Swiper('#event .slide ', {
    speed: 3000,//버튼을 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '#event .swiper-button-next',
        prevEl: '#event .swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '#event .swiper-pagination',
        clickable: true,
      },
    });
});