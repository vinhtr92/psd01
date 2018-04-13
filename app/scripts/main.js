// console.log('\'Allo \'Allo!');
$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
  });


  const newDiv = $("<div class='main-nav'><div class='row'><div class='col-12'></div></div>")

  const newDiv2 = $("<div class='main-logo'><div class='row'><div class='col-md-6'></div><div class='col-md-6'></div></div></div>")

  const newDiv3 = $("<div class='row'><div class='col-md-6'></div><div class='col-md-6'></div></div>")


  $(".main-menu__btn").click(function(){
    $(".main-menu__nav").slideToggle("fast")
  });



  if(screen.width >= 768){
    $(".top-bar").after(newDiv,newDiv2);
    $(".main-menu").prepend(newDiv3);

    $(".main-menu__btn").remove();
    // $(".main-menu__nav").remove();
    // $(".main-menu__logo img").remove();
    $(".top-links").appendTo($(".main-menu .row .col-md-6:nth-child(1)"));

    $(".social").appendTo($(".main-menu .row .col-md-6:nth-child(2)")).addClass("float-md-right");

    $(".main-menu__logo").appendTo(".main-logo .row .col-md-6:nth-child(1)");

    $(".search-form").appendTo(".main-logo .row .col-md-6:nth-child(2)");

    $(".main-menu__nav").appendTo(".main-nav .row .col-12" );

    $(".main-links li").click(function(){
      $(".main-links li ").removeClass("is-active");
      $(this).addClass("is-active");

    })
  };
});


