import $ from 'node_modules/jquery';
$(document).ready(function() {
    $(".mobile-menu-button").on("click", function() {
        if($("ul.main-menu").hasClass("show")) {
            $("ul.main-menu").removeClass("show");
        } else {
            $("ul.main-menu").addClass("show");
        }
    })        
});

$(document).ready(function(){
    $(".banner-slider-container").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
});
});
$(document).ready(function(){
    $('.banner-slider-container').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });