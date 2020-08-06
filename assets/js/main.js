/**
* Template Name: Squadfree - v2.2.0
* Template URL: https://bootstrapmade.com/squadfree-free-bootstrap-template-creative/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header-1').outerHeight()
  if (window.matchMedia("(max-width: 991px)").matches) {
    scrolltoOffset += 30;
  }
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      e.preventDefault();
      if (target.length) {

        var scrollto = target.offset().top - scrolltoOffset;
        if ($(this).attr("href") == '#header-1') {
          scrollto = 0;
        }
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  
  
// Readmore
$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});

$(document).ready(function() {
  $("#toggle1").click(function() {
    var elem = $("#toggle1").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle1").text("Read Less");
      $("#text1").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle1").text("Read More");
      $("#text1").slideUp();
    }
  });
});

$(document).ready(function() {
  $("#toggle2").click(function() {
    var elem = $("#toggle2").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle2").text("Read Less");
      $("#text2").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle2").text("Read More");
      $("#text2").slideUp();
    }
  });
});


$(document).ready(function() {
  $("#toggle3").click(function() {
    var elem = $("#toggle3").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle3").text("Read Less");
      $("#text3").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle3").text("Read More");
      $("#text3").slideUp();
    }
  });
});


$(document).ready(function() {
  $("#toggle4").click(function() {
    var elem = $("#toggle4").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle4").text("Read Less");
      $("#text4").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle4").text("Read More");
      $("#text4").slideUp();
    }
  });
});


$(document).ready(function() {
  $("#toggle5").click(function() {
    var elem = $("#toggle5").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle5").text("Read Less");
      $("#text5").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle5").text("Read More");
      $("#text5").slideUp();
    }
  });
});


$(document).ready(function() {
  $("#toggle6").click(function() {
    var elem = $("#toggle6").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle6").text("Read Less");
      $("#text6").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle6").text("Read More");
      $("#text6").slideUp();
    }
  });
});


$(document).ready(function() {
  $("#toggle7").click(function() {
    var elem = $("#toggle7").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle7").text("Read Less");
      $("#text7").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle7").text("Read More");
      $("#text7").slideUp();
    }
  });
});

$(document).ready(function() {
  $("#toggle8").click(function() {
    var elem = $("#toggle8").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle8").text("Read Less");
      $("#text8").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle8").text("Read More");
      $("#text8").slideUp();
    }
  });
});

$(document).ready(function() {
  $("#toggle9").click(function() {
    var elem = $("#toggle9").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle9").text("Read Less");
      $("#text9").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle9").text("Read More");
      $("#text9").slideUp();
    }
  });
});


$(document).ready(function() {
  $("#toggle10").click(function() {
    var elem = $("#toggle10").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle10").text("Read Less");
      $("#text10").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle10").text("Read More");
      $("#text10").slideUp();
    }
  });
});


$(document).ready(function() {
  $("#toggle11").click(function() {
    var elem = $("#toggle11").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle11").text("Read Less");
      $("#text11").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle11").text("Read More");
      $("#text11").slideUp();
    }
  });
});










  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#headermain').addClass('header-scrolled');
    } else {
      $('#headermain').removeClass('header-scrolled');
    }
  });
 

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

// Request for Services


// WhatsApp

