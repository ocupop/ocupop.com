import Barba from 'barba.js/dist/barba.js'

// console.log(lastClickEl)
const ProjectTransition = Barba.BaseTransition.extend({
  start: function() {
    console.log('ProjectTransition')

    Promise.all([this.newContainerLoading, this.transitionOut()]).then(
      this.transitionIn.bind(this)
    )
  },
  transitionOut: function() {
    //Image expands to full browser window

    var el = $('.expand-full-screen.active')
    var el_image = $('.expand-full-screen.active .bg-image')
    var offset = el_image.offset()
    var left = offset.left
    var top = offset.top
    var image = el.data('image')
    var width = el_image.width()
    var height = el_image.innerHeight()

    return $(this.oldContainer)
      .append("<div class='full-screen-image'></div>")
      .find('.full-screen-image')
      .offset({ top: top, left: left })
      .width(width)
      .css('background-image', 'url(' + image + ')')
      .css({ height: height })
      .animate({ top: 0, left: 0, width: '100%', height: '100%' }, 750)
      .promise()
  },
  transitionIn: function() {
    //Image fades to new featured image
    //Page content slides in from bottom
    //Text transition (fades in ??)
    var _this = this
    var $el = $(this.newContainer)

    var image = $(this.oldContainer)
      .find('.full-screen-image')
      .css('background-image')

    $(this.oldContainer)
      .find('.full-screen-image')
      .animate('opacity', 0)
    window.scrollTo(0, 0)
    $(this.oldContainer).hide()

    var hero = $el.find('#project-hero')
    var offset = hero.offset()
    var left = offset.left
    var top = offset.top
    var width = $el.width()
    var height = $el.height()

    $el.find('.project-content').css({
      opacity: 0,
    })
    $el
      //.append("<div class='full-screen-image'></div>")
      .find('#project-hero')
      .css({
        backgroundImage: image,
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: '1001',
      })
      .animate({ opacity: 1 }, 1000)
      .animate({ top: '77px' }, 1000)
      .animate({ height: '0' }, 1000)
      .animate({ paddingTop: '32%' }, 750, function() {
        // alert('done')
        $('#project-hero').css({
          position: 'relative',
          left: 'auto',
          top: 'auto',
          zIndex: '1',
        })
        $('.project-content').animate(
          {
            opacity: 1,
          },
          250
        )
      })
    _this.done()
    // .animate(
    //   { left: left, width: width, top: '77px', paddingTop: '42%' },
    //   1250
    // )
    // .css({ position: 'relative', top: '0' })
    //.animate({ opacity: 0 })
    //.end()
    //.find('#project')
    //.delay(1600)
    // .animate({ opacity: 1, paddingTop: 0 }, 1000)

    console.log(hero, offset, left, top, image, width, height)

    // $el.find('#page-content').animate({ opacity: 1 }, 2000, function() {

    // })
  },

  valid: function() {
    var prev = Barba.HistoryManager.prevStatus()
    var next = Barba.HistoryManager.currentStatus()

    console.log(prev.namespace + ' to ' + JSON.stringify(next))

    //return prev.namespace === "home" && next.namespace === "page";
    return true
  },
})

export default ProjectTransition
