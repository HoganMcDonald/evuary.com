const nav = $('nav').offset().top;

function setScroll() {
  let bScroll = document.scrollingElement.scrollTop;

  // fix nav
  if (bScroll >= nav) {
    $('nav').addClass('fixed-top');
  } else {
    $('nav').removeClass('fixed-top');
  }
}

setScroll();

$(window).on('scroll', setScroll);
