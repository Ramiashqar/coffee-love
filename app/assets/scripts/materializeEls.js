"use strict";
// require("./3rd-party/vibrant");
import Vibrant from 'node-vibrant/dist/vibrant.worker.min';
// MODALS
document.addEventListener("DOMContentLoaded", function() {
  const DOMBody = document.querySelector("body");
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
      setTimeout(() => {
        removeCanvas();
      }, 0);
      
    },
    onCloseStart: () => {
      removeNav();
      removeCanvas(); //REMOVE CANVAS CREATED BY VIBRANT.JS
    }
  });
  //Create the back-nav
  const createNav = () => {
    const newNav = document.createElement("nav");
    newNav.className = "back waves-effect waves-light";
    newNav.innerHTML = `<h4> ← Back</h4>`;
    DOMBody.appendChild(newNav);
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
    DOMBody.removeChild(newNav);
    DOMBody.removeChild(clonedImage);
  };
  //Clone Image and change back-nav color
  const cloneImage = () => {
    const anchor = document.querySelectorAll("a");
    const newNav = document.querySelector(".back");
    let topImage;
    for (let i = 0; i < 9; i++) {
      if (instances[i].isOpen) {
        anchor.forEach(el => {
          if (el.href.includes(`#modal${i + 1}`)) {
            const firstImage = el.firstElementChild;
            topImage = firstImage.cloneNode(true);
            topImage.setAttribute("crossOrigin", "anonymous");
            topImage.classList.add("top-image");
            topImage.crossOrigin = "anonymous";
            DOMBody.appendChild(topImage);
          }
        });
      }
    }
    let v = new Vibrant(topImage.src);
    v.getPalette((err, palette) => {
      const newColors = palette.Muted._rgb;
      newNav.style.backgroundColor = `rgb(${newColors[0]}, ${newColors[1]}, ${
        newColors[2]
      })`;
    });
  };
  //Change overlay background color and clone Image
  const overlayColor = () => {
    const anchor = document.querySelectorAll("a");
    const topImage = document.querySelector(".top-image");
    for (let i = 0; i < 9; i++) {
      anchor.forEach(el => {
        if (el.href.includes(`#modal${i + 1}`)) {
        }
      });
    }
    let v = new Vibrant(topImage.src);
    v.getPalette((err, palette) => {
      const newColors = palette.Vibrant._rgb;
      const modalOverlay = document.querySelector(".modal-overlay");
      modalOverlay.style.backgroundColor = `rgb(${newColors[0]}, ${
        newColors[1]
      }, ${newColors[2]})`;
    });
  };
  const removeCanvas = ()=>{
    const canvas= document.querySelectorAll('canvas')
    canvas.forEach((el)=>{
      el.remove()
    })
  }
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
