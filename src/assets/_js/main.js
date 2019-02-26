import App from './App'

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
        return PageTransition
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
  animSlideUp1()
  animSlideUp2()
  animSlideUp3()
  parallax()
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

function animSlideUp1() {
  $('.slide-up-1').each(function() {
    var currentAnimation = this

    var slideUpAnimation1 = new TimelineMax()
      .from(currentAnimation, 1, { opacity: 0 }, 0)
      .from(currentAnimation, 0.6, { y: 100 }, 0)
      .to(currentAnimation, 1, { opacity: 1 })
      .to(currentAnimation, 0.6, { y: 0 })

    var scene = new ScrollMagic.Scene({
      triggerElement: currentAnimation,
      offset: -300,
    })
      .setTween(slideUpAnimation1)
      //.addIndicators({ name: 'slide up', colorEnd: '#0070ff' })
      .addTo(controller)
  })
}

animSlideUp1()

function animSlideUp2() {
  $('.slide-up-2').each(function() {
    var currentAnimation = this

    var slideUpAnimation2 = new TimelineMax()
      .from(currentAnimation, 1, { opacity: 0 }, 0.5)
      .from(currentAnimation, 1, { y: 100 }, 0.5)
      .to(currentAnimation, 1, { opacity: 1 })
      .to(currentAnimation, 1, { y: 0 })

    var scene = new ScrollMagic.Scene({
      triggerElement: currentAnimation,
      offset: -300,
    })
      .setTween(slideUpAnimation2)
      //.addIndicators({ name: 'slide up', colorEnd: '#0070ff' })
      .addTo(controller)
  })
}

animSlideUp2()

function animSlideUp3() {
  $('.slide-up-3').each(function() {
    var currentAnimation = this

    var slideUpAnimation3 = new TimelineMax()
      .from(currentAnimation, 0.75, { opacity: 0 }, 1)
      .from(currentAnimation, 0.75, { y: 100 }, 1)
      .to(currentAnimation, 0.75, { opacity: 1 })
      .to(currentAnimation, 0.75, { y: 0 })

    var scene = new ScrollMagic.Scene({
      triggerElement: currentAnimation,
      offset: -300,
    })
      .setTween(slideUpAnimation3)
      //.addIndicators({ name: 'slide up', colorEnd: '#0070ff' })
      .addTo(controller)
  })
}

animSlideUp3()

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
      .setTween(lazyAnimation)
      //.addIndicators({ name: 'slide up', colorEnd: '#0070ff' })
      .addTo(controller)
      .on('enter', function(e) {
        console.log('enter')
        el.css('background-image', 'url(' + imgSrc + ')')
      })
  })
}

lazyLoad()

// function animSlideDown() {
//   $('.slide-down').each(function() {
//     var currentAnimation = this

//     var slideDownAnimation = new TimelineMax()
//       .from(currentAnimation, 0.4, { opacity: 0 }, 0.5)
//       .from(currentAnimation, 0.4, { y: -100 }, 0.5)
//       .to(currentAnimation, 0.4, { opacity: 1 }, 0.2)
//       .to(currentAnimation, 0.4, { y: 0 }, 0.2)

//     var scene = new ScrollMagic.Scene({
//       triggerElement: currentAnimation,
//       offset: -250,
//     })
//       .setTween(slideDownAnimation)
//       //.addIndicators({ name: 'slide down', colorEnd: 'ff1000' })
//       .addTo(controller)
//   })
// }

// animSlideDown()

// function animSlideLeft() {
//   $('.slide-left').each(function() {
//     var currentAnimation = this

//     var slideLeftAnimation = new TimelineMax()
//       .from(currentAnimation, 0.4, { opacity: 0 }, 0.5)
//       .from(currentAnimation, 0.4, { x: 100 }, 0.5)
//       .to(currentAnimation, 0.4, { opacity: 1 }, 0.2)
//       .to(currentAnimation, 0.4, { x: 0 }, 0.2)

//     var scene = new ScrollMagic.Scene({
//       triggerElement: currentAnimation,
//       offset: -250,
//     })
//       .setTween(slideLeftAnimation)
//       //.addIndicators({ name: 'slide left', colorEnd: '000fff' })
//       .addTo(controller)
//   })
// }

// animSlideLeft()

// function animSlideRight() {
//   $('.slide-right').each(function() {
//     var currentAnimation = this

//     var slideRightAnimation = new TimelineMax()
//       .from(currentAnimation, 0.4, { opacity: 0 }, 0.5)
//       .from(currentAnimation, 0.4, { x: -100 }, 0.5)
//       .to(currentAnimation, 0.4, { opacity: 1 }, 0.2)
//       .to(currentAnimation, 0.4, { x: 0 }, 0.2)

//     var scene = new ScrollMagic.Scene({
//       triggerElement: currentAnimation,
//       offset: -250,
//     })
//       .setTween(slideRightAnimation)
//       //.addIndicators({ name: 'slide right', colorEnd: '#FFF000' })
//       .addTo(controller)
//   })
// }

// animSlideRight()

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
      $('.parallax-window .bg-image').css('top', '0' - scroll / 5 + 'px')
    })
  }
}

parallax()
