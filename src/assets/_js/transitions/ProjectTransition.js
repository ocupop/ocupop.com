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
    var offset = el.offset()
    var left = offset.left
    var top = offset.top
    var image = el.data('image')
    var width = el.width()

    return $(this.oldContainer)
      .append("<div class='full-screen-image'></div>")
      .find('.full-screen-image')
      .offset({ top: top, left: left })
      .width(width)
      .css('background-image', 'url(' + image + ')')
      .css('height', width)
      .animate({ top: 0, left: 0, width: '100%', height: '100%' }, 2000)
      .promise()
  },
  transitionIn: function() {
    //Image fades to new featured image
    //Page content slides in from bottom
    //Text transition (fades in ??)
    var _this = this
    var $el = $(this.newContainer)

    $(this.oldContainer).hide()

    $el.css({
      visibility: 'visible',
      opacity: 0,
    })

    $el.animate({ opacity: 1 }, 2000, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done()
    })
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
