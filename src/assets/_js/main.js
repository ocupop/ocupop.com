import 'bootstrap'
// Alternatively we can import features individually.
// Also make sure to update the project.config.js if you are going to take this approach
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

import App from './App'
// import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";
import mixitup from 'mixitup'
import parallax from 'jquery-parallax.js'
import ScrollMagic from 'ScrollMagic'
import TimelineMax from 'TimelineMax'
import 'animation.gsap'
import 'debug.addIndicators'
import Barba from 'barba.js/dist/barba.js'
import PageTransition from './transitions/PageTransition'
import ProjectTransition from './transitions/ProjectTransition'
import FocusTransition from './transitions/FocusTransition'
import Cookies from 'js-cookie'

Barba.Pjax.start()

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */
  if (
    lastClickEl !== undefined &&
    lastClickEl.dataset.transition !== undefined
  ) {
    switch (lastClickEl.dataset.transition) {
      case 'ProjectTransition':
        lastClickEl.classList.add('active')
        return ProjectTransition
        break
      case 'FocusTransition':
        return FocusTransition
        break
      default:
        return PageTransition
    }
  }

  // if (FirstTransition.valid()) {
  return PageTransition
  //}
}

let lastClickEl
Barba.Dispatcher.on('linkClicked', el => {
  lastClickEl = el
})

Barba.Dispatcher.on('newPageReady', function() {
  console.log('new page ready')
  animSlideUp()
  animSlideDown()
  animSlideLeft()
  animSlideRight()
  animFadeIn()
  // initParallax()
})

const containerEl = document.getElementById('projectList')

if (containerEl) {
  var mixer = mixitup(containerEl)
}

//cookie management
let cookiePolicy = Cookies.get('cookie-policy')
if (!cookiePolicy) {
  console.log('no cookie')
  $('.cookie-policy').addClass('active')
} else {
  console.log('yes cookie')
  $('.cookie-policy').removeClass('active')
}

$('#confirm-cookie-consent').on('click', function() {
  Cookies.set('cookie-policy', true)
  $('.cookie-policy').removeClass('active')
})

// Cookies.remove('cookie-policy')

// init scroll controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: { duration: 300 },
})

var controller = new ScrollMagic.Controller()

function animSlideUp() {
  $('.slide-up').each(function() {
    var currentAnimation = this

    var slideUpAnimation = new TimelineMax()
      .from(currentAnimation, 0.4, { opacity: 0 }, 0.5)
      .from(currentAnimation, 0.4, { y: 100 }, 0.5)
      .to(currentAnimation, 0.4, { opacity: 1 })
      .to(currentAnimation, 0.4, { y: 0 })

    var scene = new ScrollMagic.Scene({
      triggerElement: currentAnimation,
      offset: -300,
    })
      .setTween(slideUpAnimation)
      //.addIndicators({ name: 'slide up', colorEnd: '#0070ff' })
      .addTo(controller)
  })
}

animSlideUp()

function animSlideDown() {
  $('.slide-down').each(function() {
    var currentAnimation = this

    var slideDownAnimation = new TimelineMax()
      .from(currentAnimation, 0.4, { opacity: 0 }, 0.5)
      .from(currentAnimation, 0.4, { y: -100 }, 0.5)
      .to(currentAnimation, 0.4, { opacity: 1 }, 0.2)
      .to(currentAnimation, 0.4, { y: 0 }, 0.2)

    var scene = new ScrollMagic.Scene({
      triggerElement: currentAnimation,
      offset: -250,
    })
      .setTween(slideDownAnimation)
      //.addIndicators({ name: 'slide down', colorEnd: 'ff1000' })
      .addTo(controller)
  })
}

animSlideDown()

function animSlideLeft() {
  $('.slide-left').each(function() {
    var currentAnimation = this

    var slideLeftAnimation = new TimelineMax()
      .from(currentAnimation, 0.4, { opacity: 0 }, 0.5)
      .from(currentAnimation, 0.4, { x: 100 }, 0.5)
      .to(currentAnimation, 0.4, { opacity: 1 }, 0.2)
      .to(currentAnimation, 0.4, { x: 0 }, 0.2)

    var scene = new ScrollMagic.Scene({
      triggerElement: currentAnimation,
      offset: -250,
    })
      .setTween(slideLeftAnimation)
      //.addIndicators({ name: 'slide left', colorEnd: '000fff' })
      .addTo(controller)
  })
}

animSlideLeft()

function animSlideRight() {
  $('.slide-right').each(function() {
    var currentAnimation = this

    var slideRightAnimation = new TimelineMax()
      .from(currentAnimation, 0.4, { opacity: 0 }, 0.5)
      .from(currentAnimation, 0.4, { x: -100 }, 0.5)
      .to(currentAnimation, 0.4, { opacity: 1 }, 0.2)
      .to(currentAnimation, 0.4, { x: 0 }, 0.2)

    var scene = new ScrollMagic.Scene({
      triggerElement: currentAnimation,
      offset: -250,
    })
      .setTween(slideRightAnimation)
      //.addIndicators({ name: 'slide right', colorEnd: '#FFF000' })
      .addTo(controller)
  })
}

animSlideRight()

function animFadeIn() {
  $('.fade-in').each(function() {
    var currentAnimation = this

    var fadeInAnimation = new TimelineMax()
      .from(currentAnimation, 0.4, { opacity: 0 }, 0.5)
      .to(currentAnimation, 0.5, { opacity: 1 })

    var scene = new ScrollMagic.Scene({
      triggerElement: currentAnimation,
      offset: -250,
    })
      .setTween(fadeInAnimation)
      //.addIndicators({ name: 'fade in', colorEnd: '#000' })
      .addTo(controller)
  })
}

animFadeIn()

//parallax windows

function initParallax() {
  if ($('.parallax-window').length) {
    $('.parallax-mirror').remove()
    // var parallaxImage = $('.parallax-window').data('image-src')
    // console.log(parallaxImage)
    $('.parallax-window').parallax({
      speed: '0.8',
      // mirrorContainer: '#barba-wrapper',
      naturalWidth: '100%',
    })
  }
}

initParallax()
