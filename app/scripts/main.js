// console.log('\'Allo \'Allo!');
$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
  });


  const newDiv = $("<div class='main-nav'><div class='row'></div></div>")
  const newDiv2 = $("<div class='main-logo'><div class='row'></div></div>")


  $(".main-menu__btn").click(function(){
    $(".main-menu__nav").slideToggle("fast")
  });

  if(screen.width >= 768){
    $(".main-menu__btn").remove();
    // $(".main-menu__logo img").remove();
    $(".top-links").appendTo($(".main-menu"));
    $(".social").appendTo($(".main-menu"));
    $(".main-menu__logo img").appendTo(".main-logo");



  };
});


