import Barba from 'barba.js/dist/barba.js'

const PageTransition = Barba.BaseTransition.extend({
  start: function() {
    //console.log('PageTransition')
    Promise.all([this.newContainerLoading, this.transitionOut()]).then(
      this.transitionIn.bind(this)
    )
  },
  transitionOut: function() {
    //Page-content fades to white

    return $(this.oldContainer)
      .find('#page-content')
      .animate({ opacity: 0 }, 250)
      .promise()
  },
  transitionIn: function() {
    var _this = this
    var $el = $(this.newContainer)

    //make sure page is at top to show animation

    $el
      .find('#page-content')
      .css('opacity', 0)
      .animate({ opacity: 1 }, 750)
    window.scrollTo(0, 0)
    $(this.oldContainer).fadeOut('slow')
    $el.addClass('loading')

    $el.removeClass('loading')
    _this.done()
  },

  valid: function() {
    var prev = Barba.HistoryManager.prevStatus()
    var next = Barba.HistoryManager.currentStatus()

    console.log(prev.namespace + ' to ' + JSON.stringify(next))

    //return prev.namespace === "home" && next.namespace === "page";
    return true
  },
})

export default PageTransition
