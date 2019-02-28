//import 'bootstrap'
import App from './App'

// import ScrollMagic from 'ScrollMagic'
// import TimelineMax from 'TimelineMax'
// import 'animation.gsap'
// import 'debug.addIndicators'
// import Barba from 'barba.js/dist/barba.js'
import PageTransition from './transitions/PageTransition'
//import ProjectTransition from './transitions/ProjectTransition'
//import FocusTransition from './transitions/FocusTransition'
// import Cookies from 'js-cookie'

Barba.Pjax.start()

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  return PageTransition
}

// Barba.Pjax.getTransition = function() {
//   if (
//     lastClickEl !== undefined &&
//     lastClickEl.dataset.transition !== undefined
//   ) {
//     switch (lastClickEl.dataset.transition) {
//       case 'ProjectTransition':
//         lastClickEl.classList.add('active')
//         return PageTransition
//         break
//       case 'FocusTransition':
//         return FocusTransition
//         break
//       default:
//         return PageTransition
//     }
//   }

//   // if (FirstTransition.valid()) {
//   return PageTransition
//   //}
// }

// let lastClickEl
// Barba.Dispatcher.on('linkClicked', el => {
//   lastClickEl = el
// })

Barba.Dispatcher.on('newPageReady', function() {
  console.log('new page ready')
  // animSlideUp1()
  // animSlideUp2()
  // animSlideUp3()
  parallax()
  lazyLoad()
})

// const containerEl = document.getElementById('projectList')

// if (containerEl) {
//   var mixer = mixitup(containerEl)
// }

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
      offset: -300,
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

// function animFadeIn() {
//   $('.fade-in').each(function() {
//     var currentAnimation = this

//     var fadeInAnimation = new TimelineMax()
//       .from(currentAnimation, 0.4, { opacity: 0 }, 0.5)
//       .to(currentAnimation, 0.5, { opacity: 1 })

//     var scene = new ScrollMagic.Scene({
//       triggerElement: currentAnimation,
//       offset: -250,
//     })
//       .setTween(fadeInAnimation)
//       //.addIndicators({ name: 'fade in', colorEnd: '#000' })
//       .addTo(controller)
//   })
// }

// animFadeIn()

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
