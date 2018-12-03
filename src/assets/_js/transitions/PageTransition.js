import Barba from "barba.js/dist/barba.js";

const PageTransition = Barba.BaseTransition.extend({
  start: function() {
    console.log("PageTransition");
    Promise.all([this.newContainerLoading, this.transitionOut()]).then(
      this.transitionIn.bind(this)
    );
  },
  transitionOut: function() {
    //Page-content fades to white

    return $(this.oldContainer)
      .find("#page-content")
      .animate({ opacity: 0 }, 500)
      .promise();
  },
  transitionIn: function() {
    //Link translates to center and zooms on page
    //Page-content fades out to reveal below the fold content
    //Link fades back into position in primarynav
    //Above the fold section slides in from top
    //content / copy fades in when height is set
    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el
      .find("#page-content")
      .css({
        visibility: "visible",
        opacity: 0
      })
      .end()
      .find("#page-intro")
      .css({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        visibility: "visible"
      })
      .end()
      .find("#page-intro .content")
      .css({
        opacity: 0
      });

    $el
      .find("#page-content")
      .animate({ opacity: 1 }, 500, function() {
        /**
         * Do not forget to call .done() as soon your transition is finished!
         * .done() will automatically remove from the DOM the old Container
         */
      })
      .end()
      .find("#page-intro")
      .delay(500)
      .animate({ height: 530, paddingTop: 75, paddingBottom: 75 }, 1000)
      .end()
      .find("#page-intro .content")
      .delay(1800)
      .animate({ opacity: 1 }, 500);
    _this.done();
  },

  valid: function() {
    var prev = Barba.HistoryManager.prevStatus();
    var next = Barba.HistoryManager.currentStatus();

    console.log(prev.namespace + " to " + JSON.stringify(next));

    //return prev.namespace === "home" && next.namespace === "page";
    return true;
  }
});

export default PageTransition;
