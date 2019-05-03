"use strict";

import ColorThief from "./3rd-party/color-thief";
// CHECK IF IT IS SAFARI, BECAUSE CANVAS DOES NOT WORK WELL ON SAFARI
const isSafari =
  navigator.vendor &&
  navigator.vendor.indexOf("Apple") > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf("CriOS") == -1 &&
  navigator.userAgent.indexOf("FxiOS") == -1;
// MODALS
document.addEventListener("DOMContentLoaded", function() {
  const modalEl = document.querySelectorAll(".modal");
  const instances = M.Modal.init(modalEl, {
    opacity: 1,
    onOpenStart: () => {
      createNav();
      cloneImage();
    },
    onOpenEnd: () => {
      closeFromNav();
      overlayColor();
    },
    onCloseStart: () => {
      removeNav();
    }
  });
  //Create the back-nav
  const createNav = () => {
    const newNav = document.createElement("nav");
    newNav.className = "back waves-effect waves-light";
    newNav.innerHTML = `<h4> ← Back</h4>`;
    document.querySelector("body").appendChild(newNav);
  };
  //Close the modal from back-nav
  const closeFromNav = () => {
    const newNav = document.querySelector(".back");
    newNav.addEventListener("click", () => {
      modalEl.forEach(el => {
        const instance = M.Modal.getInstance(el);
        instance.close();
      });
    });
  };
  //Remove back-nav
  const removeNav = () => {
    const newNav = document.querySelector(".back");
    const clonedImage = document.querySelector(".top-image");
    document.querySelector("body").removeChild(newNav);
    document.querySelector("body").removeChild(clonedImage);
  };
  //Clone Image and change back-nav color
  const cloneImage = () => {
    const anchor = document.querySelectorAll("a");
    for (let i = 0; i < 9; i++) {
      if (instances[i].isOpen) {
        anchor.forEach(el => {
          if (el.href.includes(`#modal${i + 1}`)) {
            const newNav = document.querySelector(".back");
            const firstImage = el.firstElementChild;
            const topImage = firstImage.cloneNode(true);
            topImage.setAttribute("crossOrigin", "anonymous");
            topImage.classList.add("top-image");
            document.querySelector("body").appendChild(topImage);
            if (!isSafari) {
              const colorThief = new ColorThief();
              const newColor = colorThief.getPalette(topImage, 8);
              newNav.style.backgroundColor = `rgb(${newColor[2][0]}, ${
                newColor[2][1]
              }, ${newColor[2][2]})`;
            } else {
              newNav.style.backgroundColor = "#3cbefa";
            }
          }
        });
      }
    }
  };
  //Change overlay background color and clone Image
  const overlayColor = () => {
    const anchor = document.querySelectorAll("a");
    for (let i = 0; i < 9; i++) {
      anchor.forEach(el => {
        if (el.href.includes(`#modal${i + 1}`)) {
          const topImage = document.querySelector(".top-image");

          if (!isSafari) {
            const colorThief = new ColorThief();
            const newColor = colorThief.getPalette(topImage, 2);
            const modalOverlay = document.querySelector(".modal-overlay");
            modalOverlay.style.backgroundColor = `rgb(${newColor[0][0]}, ${
              newColor[0][1]
            }, ${newColor[0][2]})`;
          }
        }
      });
    }
  };
});

// TOOLTIPS
document.addEventListener("DOMContentLoaded", function() {
  const toolTip = document.querySelectorAll(".tooltipped");
  const instances = M.Tooltip.init(toolTip);
});

//SIDENAV

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});
