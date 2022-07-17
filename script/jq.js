// 메뉴 슬라이드

$(document).ready(function(){

    $(".nav_inner .nav > li").hover(

        function(){
            $(this).find(".sub_nav").stop().slideDown();
        },function(){
            $(this).find(".sub_nav").stop().slideUp();

    });

});



// 메뉴 클릭

$(document).ready(function(){

    $('.menu_open').click(function(){

        $('#nav').show(300);
        $('.menu_open').hide();
    });

    $('.menu_close').click(function(){

        $('#nav').hide(300);
        $('.menu_open').show();
    });

});




 // Scroll Animation (sa, 스크롤 애니메이션)
const saDefaultMargin = 300;
let saTriggerMargin = 0;
let saTriggerHeight = 0;
const saElementList = document.querySelectorAll('.img,.img2, #benefit ul:nth-child(1),#benefit li:nth-child(2),#benefit li:nth-child(3), .mtop img,.top img, .identity_inner li, .review_inner > img, .with_inner> img, #qna > .qna_inner > img');

const saFunc = function() {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
      if (element.dataset.saMargin) {
        saTriggerMargin = parseInt(element.dataset.saMargin);
      } else {
        saTriggerMargin = saDefaultMargin;
      }

      if (element.dataset.saTrigger) {
        saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
      } else {
        saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
      }

      if (window.innerHeight > saTriggerHeight) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);




// 폼태그 상단 창
$(document).ready(function(){
  
  $('.cancle').click(function(){

    alert("취소되었습니다.");
  });

  $('.done').click(function(){

    alert("등록되었습니다.");
  });


});



//popup

$(document).ready(function(){

  $(".shippingbanner a").click(function(){

    $("aside").stop().fadeIn(300);
    $("#nav").stop().fadeOut(0);
    

  });
  $(".slideClose").click(function(){

    $("aside").stop().fadeOut(300);
    $(".menu_open").stop().show();

  });
});
/*
//상품 리스트 tab
$(document).ready(function(){

  $(".tab02 a").click(function({

    $(".tab02 a").removeClass(".active");
    $(this).addClass(".active");

      var i = $(this).parent().index(1);

      $("#tabcontent .all").hide(0);
      $$("#tabcontent .best").show(0);
  });

});
*/
/*
 //공지사항 탭 메뉴
 var tabMenu = $("#tabcontent");
        
 //컨텐츠 내용을 숨겨주세요!
 tabMenu.find(".best, .perfume, .life").hide();
 tabMenu.find(".body").show();
 
 function tabList(e){
     e.preventDefault();     //#의 기능을 차단
     var target = $(this);
     target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
     //버튼을 클릭하면 ~ul를 보여주고
     //부모의 li태그에 클래스 추가하고
     //형제의 li태그에 클래스 제거하고
     //제거한 자식의 ul 태그를 숨겨줌
 }
 
 tabMenu.find("ul > li > a").click(tabList).focus(tabList);*/


// 전체메뉴 탭 
/*$(function(){
	$('.tabcontent > div').hide();
	$('.tabnav a').click(function () {
		$('.tabcontent > div').hide().filter(this.hash).fadeIn();
		$('.tabnav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
  });*/





  // 이벤트메뉴 탭 
  /*
$(function(){
	$('.tab a').click(function () {
		$('.tab a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
  }); */

