(function ($) {
  "use strict";
  $('.menu').on('click', function () {
    $(".menu-items").fadeToggle();
    $(".menu-circle fs").toggle();
    $('.menu-circle, .menu, .menu-items').toggleClass('fs');
    $('.menu').text() == "☰" ? $('.menu').text('✕') : $('.menu').text('☰');
  });
}
)(jQuery);
