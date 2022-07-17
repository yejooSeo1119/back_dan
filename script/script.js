$(function(){
	$("#board li").click(function(){
		$(this).children("div").slideToggle()
		$(this).siblings().children("#board div").slideUp();
		$(this).toggleClass("on").siblings().removeClass("on")
	});
});