"use strict";

class NavController {
  constructor() {
    // MAIN DOM ELEMENTS
    this.navigationEl = document.querySelector(".navigation");
    this.headerEl = document.querySelector(".header");
    this.productsEl = document.querySelector(".products");
    this.pricingEl = document.querySelector(".pricing");
    this.suggestEl = document.querySelector(".suggest");
    this.contactEl = document.querySelector(".contact");
    // NAV BUTTONS
    this.pricingBtn = document.querySelectorAll(".pricing-btn");
    this.contactBtn = document.querySelectorAll(".contact-btn");
    this.suggestBtn = document.querySelectorAll(".suggest-btn");
    // BACk NAVIGATION
    this.backNavPricing = document.querySelector(".pricing");
    this.backNavContact = document.querySelector(".go-back-contact");
    this.backNavSuggest = document.querySelector(".go-back-suggest");
    // CLICK HANDLERS
    this.pricingClick();
    this.suggestClick();
    this.contactClick();
  }
  pricingClick() {
    this.pricingBtn.forEach(el => {
      el.addEventListener("click", () => {
        this.toggleHide(this.pricingEl);
      });
    });
    this.backNavPricing.addEventListener("click", () => {
      this.toggleHide(this.pricingEl);
    });
  }
  suggestClick() {
    this.suggestBtn.forEach(el => {
      el.addEventListener("click", () => {
        this.toggleHide(this.suggestEl);
      });
    });
    this.backNavSuggest.addEventListener("click", () => {
      this.toggleHide(this.suggestEl);
    });
  }
  contactClick() {
    this.contactBtn.forEach(el => {
      el.addEventListener("click", () => {
        this.toggleHide(this.contactEl);
      });
    });
    this.backNavContact.addEventListener("click", () => {
      this.toggleHide(this.contactEl);
    });
  }
  // HIDING HANDLER
  toggleHide(toggler) {
    this.navigationEl.classList.toggle("hide");
    this.headerEl.classList.toggle("hide");
    this.productsEl.classList.toggle("hide");
    toggler.classList.toggle("hide");
    window.scrollTo("0px", "0px");
  }
}

export default NavController;
