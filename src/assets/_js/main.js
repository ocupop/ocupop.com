import 'bootstrap';
// Alternatively we can import features individually.
// Also make sure to update the project.config.js if you are going to take this approach
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

// import App from './App';
// import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";
import mixitup from 'mixitup';

const containerEl = document.getElementById('projectList')

var mixer = mixitup(containerEl);