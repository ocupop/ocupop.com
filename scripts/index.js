import React from 'react';
import ReactDOM from 'react-dom';
import ContactCTA from './components/ContactCTA';
import Cookies from 'js-cookie'
const COMPONENTS = {
  ContactCTA
}

function renderComponentInElement(el) {
  var Component = COMPONENTS[el.dataset.component];
  if (!Component) return;
  // get props from elements data attribute, like the post_id
  const props = Object.assign({}, el.dataset);
  ReactDOM.render(<Component {...props} />, el);
}

document
  .querySelectorAll('.__react-component')
  .forEach(renderComponentInElement)

let visitorCookieConsent = Cookies.get('ocupop')

import PageTransition from './transitions/PageTransition'

Barba.Pjax.start()

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  return PageTransition
}

Barba.Dispatcher.on('newPageReady', function() {
  console.log('new page ready')
  parallax()
  lazyLoad()
  contactForm()
  videoModal()
})

//cookie management
let cookiePolicy = Cookies.get('ocu-cookie')
if (!cookiePolicy) {
  // console.log('no cookie')
  $('.cookie-policy').addClass('active')
} else {
  console.log('yes cookie')
  $('.cookie-policy').removeClass('active')
}

$('#confirm-cookie-consent').on('click touch', function() {
  Cookies.set('ocu-cookie', true)
  $('.cookie-policy').removeClass('active')
})

// Cookies.remove('cookie-policy')

// init scroll controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: { duration: 300 },
})

var controller = new ScrollMagic.Controller()

function lazyLoad() {
  $('.lazy-load').each(function() {
    var el = $(this)
    var imgSrc = el.data('image')
    var currentAnimation = this

    var lazyAnimation = new TimelineMax()
      .from(currentAnimation, 1, { opacity: 0 }, 0)
      .to(currentAnimation, 1, { opacity: 1 })

    var scene = new ScrollMagic.Scene({
      triggerElement: currentAnimation,
      offset: -500,
      reverse: false,
    })
      .on('enter', function(e) {
        el.css('background-image', 'url(' + imgSrc + ')')
      })
      .setTween(lazyAnimation)
      //.addIndicators({ name: 'slide up', colorEnd: '#0070ff' })
      .addTo(controller)
  })
}

lazyLoad()

//parallax effect
function parallax() {
  if ($('.parallax-window').length) {
    console.log('parallax present')
    $(document).scroll(function() {
      var scroll = $(window).scrollTop()
      $('.parallax-window .bg-image').css('top', '0' - scroll / 10 + 'px')
    })
  }
}

parallax()

$(function() {
  // time between image rotate
  var delay = 3500

  // for each list item in
  // the rotator ul,
  // show a random image
  $('#rotator > li').each(function() {
    // save images in an array
    var $imgArr = $(this).children()
    // show a random image
    $imgArr.eq(Math.floor(Math.random() * $imgArr.length)).show()
  })
  // run the changeImage function after every (delay) miliseconds
  setInterval(function() {
    changeImage()
  }, delay)

  function changeImage() {
    // save list items in an array
    var $liArr = $('#rotator > li')
    // select a random list item
    var $currLi = $liArr.eq(Math.floor(Math.random() * $liArr.length))
    // get the currently visible image
    var $currImg = $('.rotator-image:visible', $currLi)
    if ($currImg.next().length == 1) {
      var $next = $currImg.next()
    } else {
      var $next = $('.rotator-image:first', $currLi)
    }
    $currImg.fadeOut()
    $next.fadeIn()
  }
})

function contactForm() {
  if ($('#contact-page-form').length) {
    var scene = new ScrollMagic.Scene({
      triggerElement: '#contact-page-form',
      reverse: false,
      offset: -300,
    })
      .addTo(controller)
      .on('enter', function(e) {
        $.ajax({
          url: 'https://services.cognitoforms.com/s/bbN8iw1MJUqjPe6aHn-_rw',
          dataType: 'script',
          cache: true,
          success: function() {
            // Callback
            console.log('script ready')
            Cognito.load('forms', { id: '25' })
          },
        })
      })
  }
}

contactForm()

// $('.video-btn').click(function() {
//   var videoSrc = $(this).data('src')
//   console.log(videoSrc)
//   $('#video').attr('src', videoSrc + '?autoplay=1')
//   $('#video-modal').modal('show')
// })

$('.video-btn').on('click', function() {
  videoSrc = $('.video-btn').data('src')
  $('#video-modal').modal('show')
  $('#video').attr('src', videoSrc)
})

function videoModal() {
  var videoSrc
  $('#video-modal').on('show.bs.modal', function() {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    videoSrc = $('.video-btn').data('src')
    $('#video').attr('src', videoSrc)
    console.log(videoSrc)
  })
  $('#video-modal').on('hide.bs.modal', function(e) {
    // a poor man's stop video
    $('#video').attr('src', videoSrc)
  })
}

videoModal()