import "bootstrap";
// Alternatively we can import features individually.
// Also make sure to update the project.config.js if you are going to take this approach
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

// import App from './App';
// import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";
import mixitup from "mixitup";
import Barba from "barba.js/dist/barba.js";
import FirstTransition from "./transitions/FirstTransition";
import SecondTransition from "./transitions/SecondTransition";

Barba.Pjax.start();

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
      case "FirstTransition":
        return FirstTransition;
        break;
      case "SecondTransition":
        return SecondTransition;
        break;
      default:
        return FirstTransition;
    }
  }

  // if (FirstTransition.valid()) {
  return FirstTransition;
  // }
};

let lastClickEl;
Barba.Dispatcher.on("linkClicked", el => {
  lastClickEl = el;
});

const containerEl = document.getElementById("projectList");

if (containerEl) {
  var mixer = mixitup(containerEl);
}
