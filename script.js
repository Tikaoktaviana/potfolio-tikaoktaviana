/*
$("#about").onclick(function() {
  $('html,body').animate({
    scrollTop: $("#about").offset().top
  }, 800);
});
$("#portfolio").onclick(function() {
  $('body,html').animate({
    scrollTop: $("#portfolio").offset().top
  }, 800);
});
$("#contact").onclick(function() {
  $('html,body').animate({
    scrollTop: $("#contact").offset().top
  }, 800);
});
*/
$(".navbar-nav li").on('click',function(e) {
    var ahref = $(e.target).attr('href');
    var scrollHeight = $(ahref).offset().top;
  $('html,body').animate({
      scrollTop: scrollHeight+'px'
    }, 1500);
  });