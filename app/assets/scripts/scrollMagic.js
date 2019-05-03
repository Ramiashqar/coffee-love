import ScrollMagic from "scrollmagic";
// initiate Scroll Magic Controller
const controller = new ScrollMagic.Controller();
const arrowEl = document.querySelector('.down-arrow')
const rocket = document.querySelector(".fixed-action-btn")
const scene1 = new ScrollMagic.Scene({
    triggerElement: '.header',
    offset: 400
  })
  const scene2 = new ScrollMagic.Scene({
    triggerElement: '.header',
    offset: 400
  })
  scene1.setClassToggle(arrowEl, "vanish")
  scene2.setClassToggle(rocket, "u-show")
controller.addScene([
    scene1,
    scene2
  ]);