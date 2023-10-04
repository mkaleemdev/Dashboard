$(document).ready(function () {
  $(".dropdown > .li").click(function () {
    $(this).next().slideToggle();
    $(this).find(".toolbar-ul").toggle();
    $(this).find("i").toggleClass("rotate-90");
  });
});

// ==== mobile navbar

$(document).ready(function () {
  $(".mobile-menu-icon i").click(function () {
    $(".side-bar, .responsive-bg").animate({
      width: "toggle",
    });
  });
});

$(document).ready(function () {
  $(".responsive-bg").click(function () {
    $(".side-bar, .responsive-bg").hide();
  });
});
