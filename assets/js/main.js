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

// Request for Services--->

class ContactForm {
  
  constructor(el) {
    this.element = el || null
    this.action = el.action
    this.fields = Object.keys(el.elements).reduce((obj, key) => {
      if (key === el.elements[key].id) obj[key] = el.elements[key]
      return obj
    }, {})
    console.log('Contact Form:', this)
  }
  
  init() {
    this.element.addEventListener('submit', (event) => this.onSubmit(event))
  }
  
  onSubmit(event) {
    event.preventDefault()
    this.element.classList.remove('contact-form--errors')
    this.element.classList.remove('contact-form--sent')
    this.element.classList.add('contact-form--loading')
    this.sendFormData(this.getFormData())
      .then(response => {
        if (response.status === 200) {
          return response.json()
                  .then(res => this.onSent(res))
        } else {
          throw 'An error occured while submitting the form'
        }
      })
      .catch(err => this.onError(err))
  }
  
  onSent(response) {
    for (let i = 0; i < this.element.querySelectorAll('div').length; i++) {
      this.element.querySelectorAll('div')[i].classList.add('is-hidden')
    }
    
    let successElement = document.createElement('div')
    successElement.innerHTML = `Message sent successfully`
    this.element.appendChild(successElement)

    this.element.classList.remove('contact-form--loading')
    this.element.classList.add('contact-form--sent')
    console.log('Sent:', response.success)
  }
  
  onError(err = '') {
    this.element.classList.remove('contact-form--loading')
    this.element.classList.add('contact-form--errors')
    console.error('Error:', err)
  }
  
  sendFormData(data = {}) {
    return new Promise((resolve, reject) => {
      console.log('Send Data:', data)
      fetch(this.action, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => resolve(response))
      .catch(err => reject(err))
    })
  }
  
  getFormData() {
    let formData = {},
        values = []

    Object.keys(this.fields).forEach(key => {
      switch(this.fields[key].type) {
        case 'checkbox':
        case 'radio': {
          formData[key] = this.fields[key].checked
          break
        }
        case'select-one': {
          if (!this.fields[key][this.fields[key].selectedIndex].disabled) {
            formData[key] = this.fields[key][this.fields[key].selectedIndex].value
          } else {
            formData[key] = ''
          }
          break
        }
        case'select-multiple': {
          Object.keys(this.fields[key].options).forEach(i => {
            if (this.fields[key].options[i].selected && !this.fields[key].options[i].disabled) {
              values.push(this.fields[key].options[i].value)
            }
          })
          formData[key] = values.length > 0 ? values.join(', ') : ''
          break
        }
        default: {
          formData[key] = this.fields[key].value
          break
        }
      }
    })
    return formData
  }

}

// Create a new instance of the ContactForm class
const form = new ContactForm(document.querySelector('.contact-form'))

// Initialise our instance of the ContactForm class when document has loaded
window.onload = (event) => form.init()

// form.init()

// class ContactForm {
  
//   constructor(config = {}) {
//     this.elements = {
//       form: config.form || null,
//       fields: config.form.elements || null
//     }
//     this.action = config.form.getAttribute('action') || null
//   }
  
//   init() {
//     this.elements.form.addEventListener('submit', (event) => {
//       return this.onSubmit(event);
//     });
//   }
  
//   onSubmit(event) {
//     event.preventDefault();
//     let data = this.getFormData();

//     this.sendFormData(data)
//       .then(response => {
//         if (response.status === 200) {
//           this.onSent('Message sent successfully!')
//         } else {
//           throw 'An error occured while sending the message.'
//         }
//       })
//     .catch(err => {
//       this.onError(err);
//     })
//   }
  
//   getFormData() {
//     let data = {},
//         id;

//     for (let i = 0; i < this.elements.fields.length; i++) {
//       id = this.elements.fields[i].id;
//       if (id !== '') data[id] = this.getFieldValue(this.elements.fields[i]);
//     };

//     return data;
//   }
  
//   getFieldValue(field) {
//     let values = [],
//         value;

//     switch(nodfield.typeeType) {
//       case 'radio':
//       case 'checkbox': {
//         value = field.checked;
//         break;
//       }
        
//       case 'select-one': {
//         if (!field[field.selectedIndex].disabled) {
//           value = field.value;
//         } else {
//           value = '';
//         }
//         break;
//       }
        
//       case 'select-multiple': {
//         for (let i = 0; i < field.options.length; i++) {
//           if (field.options[i].selected && !field.options[i].disabled) {
//             values.push(field.options[i].value)
//           }
//         }
//         value = values;
//         break;
//       }
        
//       default: {
//         value = field.value;
//         break;
//       }
//     }

//     return value;
//   }
  
//   sendFormData(data = {}) {
//     return new Promise((resolve, reject) => {
//       this.updateState('sending', 'Sending message...');
      // fetch(this.action, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   method: 'POST',
      //   body: JSON.stringify(data)
      // })
      // .then(response => {
      //   resolve(response)
      // })
      // .catch(err => {
      //   reject(err)
      // })
//     })
//   }
  
//   onSent(message = '') {
//     let el = document.createElement('div');
//         el.classList.add('sent');
//         el.innerHTML = '<p>Message sent!</p>';
//     this.elements.form.appendChild(el);
//     this.updateState('sent');
//   }
  
//   onError(err = '') {
//     this.updateState('error', err);
//   }
  
//   updateState(state = 'default', message = '') {
//     this.elements.form.setAttribute('data-state', state);
//     this.elements.form.querySelector('small').textContent = message;
//   }

// }

// const form = new ContactForm({
//   form: document.querySelector('form')
// });

// form.init();














// WhatsApp

