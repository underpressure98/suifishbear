// window scroll functions
$(window).scroll(function() {
  // Parallax rocket
  pxCtOceanLayer1 = $(document).scrollTop()/3;
  pxCtOceanLayer2 = $(document).scrollTop()/6;
  pxCtOceanLayer3 = $(document).scrollTop()/9;
  pxCtOceanLayer4 = $(document).scrollTop()/12;
  pxCtOceanLayer5 = $(document).scrollTop()/15;

  pxCtBubblesFast = $(document).scrollTop()/4;
  pxCtBubblesSlow = $(document).scrollTop()/8;

  pxCtFishTrio = $(document).scrollTop()/8;

  if (!(window.matchMedia('(prefers-reduced-motion)').matches)) {
    $("#ocean-layer-1").css({
      "bottom": "-"+pxCtOceanLayer1+"px",
    });

    $("#ocean-layer-2").css({
      "bottom": "-"+pxCtOceanLayer2+"px",
    });

    $("#ocean-layer-3").css({
      "bottom": "-"+pxCtOceanLayer3+"px",
    });

    $("#ocean-layer-4").css({
      "bottom": "-"+pxCtOceanLayer4+"px",
    });

    $(".bubbles-fast").css({
      "bottom": +pxCtBubblesFast+"px",
    });

    $(".bubbles-slow").css({
      "bottom": +pxCtBubblesSlow+"px",
    });

    $(".fish-trio").css({
      "left": +pxCtFishTrio+"px",
    });

    // step-content link bubbles
    $('.animate-in-out').each(function() {
      content = $(this);
      contentTop = content.offset().top-$(window).height()+75;
      viewportTop = $(window).scrollTop();
      if(contentTop < viewportTop) {
        content.addClass('content-visible');
        content.removeClass('content-hidden');
      } else {
        content.removeClass('content-visible');
        content.addClass('content-hidden');
      }
    });
  }

  // $("#ocean-layer-5").css({
  //   "bottom": "-"+pxCtOceanLayer5+"px",
  // });

  // Panel sections
  // $('.panel-section').each(function() {
  //   section = $(this);
  //   sectionTop = section.offset().top-$(window).height()+250;
  //   viewportTop = $(window).scrollTop();
  //   if(sectionTop < viewportTop) {
  //     section.addClass('section-visible');
  //     section.removeClass('section-hidden');
  //   } else {
  //     section.removeClass('section-visible');
  //     section.addClass('section-hidden');
  //   }
  // });

});

// });

$(document).ready(function() {
  // parallax ocean backgrounds


  // Toggle Main Menu Mobile
  // $('#toggle-menu').click(function () {
  //   var $toggle = $(this);
  //   var $body = $('body');
  //   var $navLink = $('#site-menu a');

  //   $('body').toggleClass('show-nav');

  //   if ($body.hasClass('show-nav')) {
  //     $toggle.attr('aria-expanded', 'true');
  //     $navLink.removeAttr('tabindex', -1);
  //     $('main, footer').attr('aria-hidden', true);

  //   } else {
  //     $toggle.attr('aria-expanded', 'false');
  //     $navLink.attr('tabindex', -1);
  //     $('main, footer').removeAttr('aria-hidden');
  //   }
  //   return false;
  // });

  // // Smooth scroll
  // $('a[href^="#"]').on('click', function(e) {

  //   var target = $( $(this).attr('href') );

  //   if( target.length ) {
  //     e.preventDefault();
  //     $('html, body').animate({
  //         scrollTop: target.offset().top
  //     }, 500);
  //   }
  // });


});