"use strict";
// require("../styles/app.css");

require("../styles/app.scss");
require("../../index.html");
require("./3rd-party/compressed/materialize.min.js");
require("./materializeEls");
require("./navControl");
require("./smoothScroll");
import NavController from "./navControl";
const newComponent = new NavController();
require('./scrollMagic')

//TODO:
// [X] add links to social icons
// [ ] images for mobile
// [X] add icons svg instead of material icons
// [X] add roboto font manually
// FIXME:
// []
