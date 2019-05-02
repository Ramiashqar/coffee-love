"use strict"

//SmoothScrolling
require("./3rd-party/smooth-scroll.polyfills");
const scroll = new SmoothScroll('a[href*="#"]', {
  easing: "easeOutCubic"
});
