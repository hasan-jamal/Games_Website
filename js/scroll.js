$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
      $("#nav-one").css("transition", "0.5s");
      $(".navbar").css("height", "80px");
      $("#nav-one").css("display", "none");
      $(".logo .logo1").css("width", "42px");
      $(".logo .logo1").css("height", "42px");
      $(".logo .logo2").css("width", "92px");
      $(".logo .logo2").css("height", "30px");
      $(".hamburger").css("margin-top", "-1rem");
      $(".hamburger").css("margin-right", "1rem");
    } else {
      $(".navbar").css("height", "120px");
      $("#nav-one").css("display", "flex");
      $(".logo .logo1").css("width", "84px");
      $(".logo .logo1").css("height", "84px");
      $(".logo .logo2").css("width", "184px");
      $(".logo .logo2").css("height", "60px");
      $(".hamburger").css("margin-top", "-2rem");
    }
  });
});
