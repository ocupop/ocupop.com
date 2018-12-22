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
import Barba from 'barba.js/dist/barba.js'
import PageTransition from './transitions/PageTransition'
import ProjectTransition from './transitions/ProjectTransition'
import FocusTransition from './transitions/FocusTransition'
import Cookies from 'js-cookie'

//Barba.Pjax.start()

// Barba.Pjax.getTransition = function() {
/**
 * Here you can use your own logic!
 * For example you can use different Transition based on the current page or link...
 */
// if (
//   lastClickEl !== undefined &&
//   lastClickEl.dataset.transition !== undefined
// ) {
//   switch (lastClickEl.dataset.transition) {
//     case 'ProjectTransition':
//       lastClickEl.classList.add('active')
//       return ProjectTransition
//       break
//     case 'FocusTransition':
//       return FocusTransition
//       break
//     default:
//       return PageTransition
//   }
// }

// if (FirstTransition.valid()) {
// return PageTransition
//}
// }

// let lastClickEl
// Barba.Dispatcher.on('linkClicked', el => {
//   lastClickEl = el
// })

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

// if (document.getElementsByClassName('rellax').length) {
//   var rellax = new Rellax('.rellax', { center: true, speed: 2 })
// }

// init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: { duration: 100 },
})

var controller = new ScrollMagic.Controller()

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
    .addTo(controller)
})

$('.slide-down').each(function() {
  var currentAnimation = this

  var slideDownAnimation = new TimelineMax()
    .from(currentAnimation, 0.4, { opacity: 0 }, 0.5)
    .from(currentAnimation, 0.4, { y: -100 }, 0.5)
    .to(currentAnimation, 0.4, { opacity: 1 })
    .to(currentAnimation, 0.4, { y: 0 })

  var scene = new ScrollMagic.Scene({
    triggerElement: currentAnimation,
    offset: -250,
  })
    .setTween(slideDownAnimation)
    .addTo(controller)
})

$('.slide-left').each(function() {
  var currentAnimation = this

  var slideLeftAnimation = new TimelineMax()
    .from(currentAnimation, 0.4, { opacity: 0 }, 0.5)
    .from(currentAnimation, 0.4, { x: 100 }, 0.5)
    .to(currentAnimation, 0.4, { opacity: 1 })
    .to(currentAnimation, 0.4, { x: 0 })

  var scene = new ScrollMagic.Scene({
    triggerElement: currentAnimation,
    offset: -250,
  })
    .setTween(slideLeftAnimation)
    .addTo(controller)
})

$('.slide-right').each(function() {
  var currentAnimation = this

  var slideRightAnimation = new TimelineMax()
    .from(currentAnimation, 0.4, { opacity: 0 }, 0.5)
    .from(currentAnimation, 0.4, { x: -100 }, 0.5)
    .to(currentAnimation, 0.4, { opacity: 1 })
    .to(currentAnimation, 0.4, { x: 0 })

  var scene = new ScrollMagic.Scene({
    triggerElement: currentAnimation,
    offset: -250,
  })
    .setTween(slideRightAnimation)
    .addTo(controller)
})

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
    .addTo(controller)
})
