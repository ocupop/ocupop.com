import Barba from "barba.js/dist/barba.js";

const SecondTransition = Barba.BaseTransition.extend({
  start: function() {
    console.log("SecondTransition");
    Promise.all([this.newContainerLoading, this.transitionOut()]).then(
      this.transitionIn.bind(this)
    );
  },
  transitionOut: function() {
    return $(this.oldContainer)
      .animate({ opacity: 0 })
      .promise();
  },
  transitionIn: function() {
    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility: "visible",
      opacity: 0
    });

    $el.animate({ opacity: 1 }, 400, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });
  },

  valid: function() {
    var prev = Barba.HistoryManager.prevStatus();
    var next = Barba.HistoryManager.currentStatus();

    console.log(prev.namespace + " to " + JSON.stringify(next));

    //return prev.namespace === "home" && next.namespace === "page";
    return true;
  }
});

export default SecondTransition;
