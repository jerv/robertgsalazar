$(function(){
  $('#toggleMenu').click(function(){
  	$(this).toggleClass('active');
  	$('nav').toggleClass('active');
  	$('nav .container > ul').toggleClass('active');
  });
});

