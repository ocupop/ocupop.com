import Barba from 'barba.js/dist/barba.js'

const PageTransition = Barba.BaseTransition.extend({
  start: function() {
    console.log('PageTransition')
    Promise.all([this.newContainerLoading, this.transitionOut()]).then(
      this.transitionIn.bind(this)
    )
  },
  transitionOut: function() {
    //Page-content fades to white

    return $(this.oldContainer)
      .find('#page-content')
      .animate({ opacity: 0 }, 500)
      .promise()
  },
  transitionIn: function() {
    //Link translates to center and zooms on page
    //Page-content fades out to reveal below the fold content
    //Link fades back into position in primarynav
    //Above the fold section slides in from top
    //content / copy fades in when height is set
    $('.parallax-mirror').remove()
    $('.parallax-window').remove()
    var _this = this
    var $el = $(this.newContainer)

    //make sure page is at top to show animation
    window.scrollTo(0, 0)
    $(this.oldContainer).hide()

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
