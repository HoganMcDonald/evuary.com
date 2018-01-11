const nav = $('nav').offset().top;

function setScroll() {
  let bScroll = document.scrollingElement.scrollTop;

  // fix nav
  if (bScroll >= nav) {
    $('nav').addClass('nav-shadow');
  } else {
    $('nav').removeClass('nav-shadow');
  }
}

setScroll();

$(window).on('scroll', setScroll);

$("#navbarNav ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 400, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
