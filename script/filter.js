//이벤트 페이지


$(function(){
  $('#tab02 .all').click(function () {
    $('#econt .now, #econt .before').show();//서서히 나타나게 만들고 싶다면 .fadeIn()을 사용한다.
  });
  $('#tab02 .now').click(function () {
    $('#econt .now').show();
    $('#econt .before').hide();//서서히 사라지게 만들고 싶다면 .fadeOut()을 사용한다.
  });
  $('#tab02 .before').click(function () {
    $('#econt .before').show();
    $('#econt .now').hide();
  });

  $('#tab02 > ul > li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

});

