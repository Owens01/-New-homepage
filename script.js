"use strict";

const hamburger = document.querySelector(".hamburger");
const closingNav = document.querySelector(".closing-nav");
const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile-nav");

const addHidden = function () {
  mobileNav.classList.add("hidden");
  overlay.classList.add("hidden");
};

const removeHidden = function () {
  mobileNav.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

hamburger.addEventListener("click", removeHidden);

closingNav.addEventListener("click", addHidden);

document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !mobileNav.classList.contains("hidden") &&
    !overlay.classList.contains("hidden")
  ) {
    addHidden();
  }
});
