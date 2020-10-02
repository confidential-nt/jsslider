const slider = document.querySelector(".slier__item");
const sliderBtn = document.querySelector(".sliderBtn");
const anotherBtn = document.querySelector(".anotherBtn");

let state = false;

function sliderBtnHandler() {
  const slideAct = setInterval(slide, 2000);
  if (!state) {
    clearInterval(slideAct);
  } else {
  }
}

function trueState() {
  state = true;
}

function falseState() {
  state = false;
}

function slide() {
  const currentSlide = document.querySelector(".showing");
  if (currentSlide) {
    if (!currentSlide.nextElementSibling) {
      slider.classList.add("showing");
    }
    currentSlide.classList.remove("showing");
    currentSlide.nextElementSibling.classList.add("showing");
  } else {
    slider.classList.add("showing");
  }
}

sliderBtn.addEventListener("click", trueState);
anotherBtn.addEventListener("click", falseState);
