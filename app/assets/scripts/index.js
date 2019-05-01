// require("../styles/app.css");
require("../styles/app.scss");
require("../../index.html");
// //3rd party libs

// // MaterializeCSS.js
require("./3rd-party/materialize");
// require("./3rd-party/color-thief")
require("./instances/modals");
// //Sortable.js
// require("./Sortable");
// //ScrollMagic.js
// import ScrollMagic from "scrollmagic";
//SomoothScrolling.js
require("./3rd-party/smooth-scroll.polyfills");
const scroll = new SmoothScroll('a[href*="#"]', {
  easing: "easeOutCubic"
});


//TODO:
// []
// FIXME:
// []
