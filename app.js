// Content_1_Individuals
var nextBtn = document.querySelector(".next"),
  prevBtn = document.querySelector(".prev"),
  content1 = document.querySelector(".content1"),
  item1 = document.querySelector(".item1"),
  list = document.querySelectorAll(".list");

let timeRunning = 0;
let timeAutoNext = 10000;

// Add this function to randomize the quotes
function shuffleQuotes() {
  const listItems = Array.from(item1.querySelectorAll(".list"));
  for (let i = listItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    item1.appendChild(listItems[j]); // Move to random position
  }
}

// Call the shuffle function when the page loads
window.addEventListener("DOMContentLoaded", () => {
  shuffleQuotes();
});

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

// SEGMENT 2: FC_Quotes

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements1 = document.querySelectorAll(".FC");
hiddenElements1.forEach((el) => observer1.observe(el));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  });
});

const hiddenElements2 = document.querySelectorAll(".hidden");
hiddenElements2.forEach((el) => observer2.observe(el));

// Remove both existing DOMContentLoaded listeners and replace with this single one
document.addEventListener("DOMContentLoaded", function () {
  const fc = document.querySelector(".FC");
  const mainImage = document.querySelector(".main-image");
  const whiteBox = document.querySelector(".white-box");
  const leftImage = document.querySelector(".side-image.left");
  const rightImage = document.querySelector(".side-image.right");
  const fcQuotes = whiteBox.querySelector(".FC_Quotes");
  let hasClicked = false;

//Segment 2 Features

  function handleFCClick(event) {
    if (whiteBox.classList.contains("show-box")) return;

    hasClicked = true;
    mainImage.classList.add("hidden");
    leftImage.classList.remove("hidden");
    rightImage.classList.remove("hidden");
    whiteBox.classList.add("show-box");
    fcQuotes.style.visibility = "visible"; // Make quotes visible
    showRandomQuote();
  }

  function showRandomQuote() {
    const quotes = fcQuotes.querySelectorAll(".FC_Quote"); // Changed to query from fcQuotes
    if (quotes.length === 0) {
      console.error("No quotes found!");
      return;
    }
    quotes.forEach((quote) => quote.classList.remove("active"));
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quotes[randomIndex].classList.add("active");
    quotes[randomIndex].style.visibility = "visible"; // Make selected quote visible
  }

  function resetVisibility() {
    mainImage.classList.remove("hidden");
    whiteBox.classList.remove("show-box");
    leftImage.classList.add("hidden");
    rightImage.classList.add("hidden");
    fcQuotes.style.visibility = "hidden"; // Hide quotes container
    fcQuotes.querySelectorAll(".FC_Quote").forEach((quote) => {
      quote.classList.remove("active");
      quote.style.visibility = "hidden";
    });
  }

  // Event listeners
  mainImage.addEventListener("click", handleFCClick);
  fc.addEventListener("click", handleFCClick);
  fcQuotes.addEventListener("click", function (event) {
    event.stopPropagation();
    resetVisibility();
  });

  // Initialize quotes to be hidden
  resetVisibility();

  // Add the shake interval inside DOMContentLoaded
  const shakeInterval = setInterval(() => {
    if (!mainImage.classList.contains("hidden")) {
      mainImage.classList.add("shake");
      setTimeout(() => {
        mainImage.classList.remove("shake");
      }, 250);
    }
  }, 3000);

});

// Randomly profile img selector

// Function to set random profile pictures
function setRandomProfilePics() {
    const profilePics = document.querySelectorAll('.random-profile-pic');
    
    profilePics.forEach(pic => {
        const randomNum = Math.floor(Math.random() * 5) + 1;
        pic.src = `Profile_Pic/PersonWithBackground${randomNum}.png`;
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', setRandomProfilePics);