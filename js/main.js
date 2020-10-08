const popularityFigures = document.querySelectorAll("#popularity-list a");
const lastChild = popularityFigures[popularityFigures.length - 1];
let resizable = false;

// Verification of the window and image width in order to apply (or not) the maximized-width css class
const resize = () => {
  if (window.innerWidth > 615 && window.innerWidth < 1012) {
    if (lastChild.offsetWidth > 450) {
      lastChild.style.flexGrow = "0";
      resizable = true;
    }
    if (resizable) {
      lastChild.style.width = popularityFigures[0].offsetWidth + "px";
    }
  } else {
    lastChild.removeAttribute("style");
    resizable = false;
  }
};

// Events
window.addEventListener("resize", resize);
window.addEventListener("load", resize);
