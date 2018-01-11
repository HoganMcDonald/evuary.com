// toggle classes on landing images
$('.landing-img').mouseenter(event=> {
  for (var i = 1; i <= 3; i++) {
    if ($('.landing-img').hasClass(`position${i}`)) {
      $('.landing-img').removeClass(`position${i}`).addClass(`position${(i === 3) ? 1 : i + 1}`);
      break;
    }
  }
})
