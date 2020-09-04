// the amount of scroll after which social-button will be shown
const pxCutoff = 600,
  fadeTime = 300;
let socialBtn = $("#social__scroll");
//scrolling event listener for social button
$(window).on("scroll", function () {
  if ($(window).scrollTop() >= pxCutoff) {
    socialBtn.fadeIn(fadeTime);
  } else {
    socialBtn.fadeOut(fadeTime);
  }
});
