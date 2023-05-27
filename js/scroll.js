function fadeIn() {
   $('.fadeUpTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
}

$(window).scroll(function () {
  fadeIn();
});

function turnAround() {
   $('.turnRightTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 90;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('turnRight');
    } else {
      $(this).removeClass('turnRight');
    }
  });
}

$(window).scroll(function () {
  turnAround();
});