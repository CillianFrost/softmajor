$(document).ready(function(){
console.log('works');

// Внутренний текст

$('input').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
         .attr('placeholder','');
}).blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});

$('textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
         .attr('placeholder','');
}).blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});

// Текст над полями

$('.elements_name').find('input').focus(function(){
	$('.elements_name_hide').show();
}).blur(function(){
	$('.elements_name_hide').hide();
}); 

$('.elements_req_phone').find('input').focus(function(){
	$('.elements_req_phone_hide').show();
}).blur(function(){
	$('.elements_req_phone_hide').hide();
}); 

$('.elements_req_email').find('input').focus(function(){
	$('.elements_req_email_hide').show();
}).blur(function(){
	$('.elements_req_email_hide').hide();
}); 

$('.elements_captcha_text').find('input').focus(function(){
	$('.elements_captcha_text_hide').show();
}).blur(function(){
	$('.elements_captcha_text_hide').hide();
}); 

// Страницы

$('.pages_block_number').click(function(){
	$('.pages_block_number').css('background', 'white');
	$('.pages_block_number').css('border-color', '#65b4f6');
	$('.pages_block_number').css('width', '34px');
	$('.pages_block_number').css('height', '34px');
	$('.pages_block_number').css('color', 'black');
	$(this).css('background', '#f03230');
	$(this).css('border-color', '#f03230');
	$(this).css('width', '50px');
	$(this).css('height', '50px');
	$(this).css('color', 'white');
});

$('.pages_block_next').click(function(){
	$('.pages_block').eq(1).hide();
	$('.pages_block').eq(2).hide();
	var dots_this = '<div class="pages_block_dots_this"></div>'
	var dots = '<div class="pages_block_dots">' + dots_this + dots_this + dots_this + '</div>'
	$('pages_block_number').html(dots);
});

// Подняться наверх

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $(".up_page").scrollToTop();
});

// Версия для слабовидящих

$('#vision').click(function(){
	if($('#vision').hasClass('header_main_titles_vision_text')){
		$(this).removeClass('header_main_titles_vision_text');
		$(this).addClass('header_main_titles_vision_text_blind')
		$('a').addClass('vision_link');
		$('.question_block_text').css('color', 'black');
		$('.aboutus_content_main_today').css('background', 'white');
		$('.aboutus_content_main_today').css('color', 'black');
		$('.news_center_block_data_day').css('border-color', 'blue');
		$('.workpage_text').css('border-color', 'black');
		$('.elements_name_hide').css('color', 'black');
		$('.elements_req_email_hide').css('color', 'black');
		$('.elements_captcha_text_hide').css('color', 'black');
		$('.elements_send').css('background', 'blue');
		$('.pages_block_number').css('border-color', 'blue');
		$('.aboutus_content_main_aboutus').css('color', 'black');
	}
	else{
		$(this).removeClass('header_main_titles_vision_text_blind');
		$(this).addClass('header_main_titles_vision_text')
		$('a').removeClass('vision_link');
		$('.question_block_text').css('color', '#f03230');
		$('.aboutus_content_main_today').css('background', 'white');
		$('.aboutus_content_main_today').css('color', '#2cc96a');
		$('.news_center_block_data_day').css('border-color', '#59aef5');
		$('.workpage_text').css('border-color', 'gold');
		$('.elements_name_hide').css('color', '#737373');
		$('.elements_req_email_hide').css('color', '#f03230');
		$('.elements_captcha_text_hide').css('color', '#f03230');
		$('.elements_send').css('background', '#59aef5');
		$('.pages_block_number').css('border-color', '#65b4f6');
		$('.aboutus_content_main_aboutus').css('color', '#2dcb6b');
	}
});


// Маска телефона

$("#phone").mask("+9(999)999-9999");

});