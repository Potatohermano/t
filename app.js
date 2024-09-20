// Content_1_Individuals
var nextBtn = document.querySelector(".next"),
  prevBtn = document.querySelector(".prev"),
  content1 = document.querySelector(".content1"),
  item1 = document.querySelector(".item1"),
  list = document.querySelectorAll(".list"),
  runningTime = document.querySelector(".content1 .timeRunning");

let timeRunning = 3000;
let timeAutoNext = 1000000;

nextBtn.onclick = function () {
  showSlider("next");
};

prevBtn.onclick = function () {
  showSlider("prev");
};

let runTimeOut;

let runNextAuto = setTimeout(() => {
  nextBtn.click();
}, timeAutoNext);

function resetTimeAnimation() {
  runningTime.style.animation = "none";
  runningTime.offsetHeight; /* trigger reflow */
  runningTime.style.animation = null;
  runningTime.style.animation = "runningTime 1000s linear 1 forwards";
}

function showSlider(type) {
  let sliderItemsDom = item1.querySelectorAll(".content1 .item1 .list");
  if (type === "next") {
    item1.appendChild(sliderItemsDom[0]);
    content1.classList.add("next");
  } else {
    item1.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
    content1.classList.add("prev");
  }

  clearTimeout(runTimeOut);

  runTimeOut = setTimeout(() => {
    content1.classList.remove("next");
    content1.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);

  resetTimeAnimation(); // Reset the running time animation
}

// Content2 material

function _f(className) {
  return document.getElementsByClassName(className);
}

let divs = _f("content2");
let btns = _f("btn2");

if (divs.length > 0 && btns.length > 0) {
  let div = divs[0];
  let btn = btns[0];

  btn.onclick = function () {
    if (div.classList.contains("cls")) {
      div.classList.remove("cls");
      btn.innerHTML = "▼";
    } else {
      div.classList.add("cls");
      btn.innerHTML = "▲";
    }
  };
}
