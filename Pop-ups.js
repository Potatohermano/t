// Pop-up

function showPopLayout(popLayout) {
  popLayout.classList.add("show");
}

function hidePopLayout(popLayout) {
  popLayout.classList.remove("show");
}

// Button and pop-up layouts
const Popbtn1 = document.getElementById("Popbtn1");
const Popbtn2 = document.getElementById("Popbtn2");
const Popbtn3 = document.getElementById("Popbtn3");
const Popbtn4 = document.getElementById("Popbtn4");
const Popbtn5 = document.getElementById("Popbtn5");
const Popbtn6 = document.getElementById("Popbtn6");
const Popbtn7 = document.getElementById("Popbtn7");
const Popbtn8 = document.getElementById("Popbtn8");
const Popbtn9 = document.getElementById("Popbtn9");
const Popbtn10 = document.getElementById("Popbtn10");
const Popbtn11 = document.getElementById("Popbtn11");
const Popbtn12 = document.getElementById("Popbtn12");
const Popbtn13 = document.getElementById("Popbtn13");
const Popbtn14 = document.getElementById("Popbtn14");
const Popbtn15 = document.getElementById("Popbtn15");
const Popbtn16 = document.getElementById("Popbtn16");

const PopLayout1 = document.getElementById("PopLayout1");
const PopLayout2 = document.getElementById("PopLayout2");
const PopLayout3 = document.getElementById("PopLayout3");
const PopLayout4 = document.getElementById("PopLayout4");
const PopLayout5 = document.getElementById("PopLayout5");
const PopLayout6 = document.getElementById("PopLayout6");
const PopLayout7 = document.getElementById("PopLayout7");
const PopLayout8 = document.getElementById("PopLayout8");
const PopLayout9 = document.getElementById("PopLayout9");
const PopLayout10 = document.getElementById("PopLayout10");
const PopLayout11 = document.getElementById("PopLayout11");
const PopLayout12 = document.getElementById("PopLayout12");
const PopLayout13 = document.getElementById("PopLayout13");
const PopLayout14 = document.getElementById("PopLayout14");
const PopLayout15 = document.getElementById("PopLayout15");
const PopLayout16 = document.getElementById("PopLayout16");

// Elements that should trigger pop-ups
const blockcard1 = document.getElementsByClassName("blockcard 1");
const ProfilePic1 = document.getElementsByClassName("Carlo_Aguila1");
const Marquee1 = document.getElementsByClassName("Carlo_Aguila2");

const blockcard2 = document.getElementsByClassName("blockcard 2");
const ProfilePic2 = document.getElementsByClassName("Amir_Alexander1");
const Marquee2 = document.getElementsByClassName("Amir_Alexander2");

const blockcard3 = document.getElementsByClassName("blockcard 3");
const ProfilePic3 = document.getElementsByClassName("Salvador_Cebreros1");
const Marquee3 = document.getElementsByClassName("Salvador_Cebreros2");

const blockcard4 = document.getElementsByClassName("blockcard 4");
const ProfilePic4 = document.getElementsByClassName("Bruce_Hsu1");
const Marquee4 = document.getElementsByClassName("Bruce_Hsu2");

const blockcard5 = document.getElementsByClassName("blockcard 5");
const ProfilePic5 = document.getElementsByClassName("Michael_Lofchie1");
const Marquee5 = document.getElementsByClassName("Michael_Lofchie2");

const blockcard6 = document.getElementsByClassName("blockcard 6");
const ProfilePic6 = document.getElementsByClassName("Bryan_Ly1");
const Marquee6 = document.getElementsByClassName("Bryan_Ly2");

const blockcard7 = document.getElementsByClassName("blockcard 7");
const ProfilePic7 = document.getElementsByClassName("Mustafa_Siddiqui1");
const Marquee7 = document.getElementsByClassName("Mustafa_Siddiqui2");

const blockcard8 = document.getElementsByClassName("blockcard 8");
const ProfilePic8 = document.getElementsByClassName("Junjie_Ye1");
const Marquee8 = document.getElementsByClassName("Junjie_Ye2");

const blockcard9 = document.getElementsByClassName("blockcard 9");

const blockcard10 = document.getElementsByClassName("blockcard 10");

const blockcard11 = document.getElementsByClassName("blockcard 11");

const blockcard12 = document.getElementsByClassName("blockcard 12");

const blockcard13 = document.getElementsByClassName("blockcard 13");

const blockcard14 = document.getElementsByClassName("blockcard 14");

const blockcard15 = document.getElementsByClassName("blockcard 15");

const blockcard16 = document.getElementsByClassName("blockcard 16");

// Function to show a specific pop-up
function showPopLayout(popLayout) {
  popLayout.style.display = "flex";
  popLayout.style.height = "600px";
}

// Function to hide a specific pop-up
function hidePopLayout(popLayout) {
  popLayout.style.display = "none";
  popLayout.style.height = "0px";
}

// Event listeners for showing pop-ups - three different locations (ProfilePic, blockcard, and Marquee)
Array.from(Marquee1).forEach((item) => {
  item.addEventListener("click", () => {
    showPopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(ProfilePic1).forEach((pic) => {
  pic.addEventListener("click", () => {
    showPopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(blockcard1).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    showPopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

Array.from(Marquee2).forEach((item) => {
  item.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    showPopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(ProfilePic2).forEach((pic) => {
  pic.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    showPopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(blockcard2).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    showPopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

Array.from(Marquee3).forEach((item) => {
  item.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    showPopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(ProfilePic3).forEach((pic) => {
  pic.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    showPopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(blockcard3).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    showPopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

Array.from(Marquee4).forEach((item) => {
  item.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    showPopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(ProfilePic4).forEach((pic) => {
  pic.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    showPopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(blockcard4).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    showPopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

Array.from(Marquee5).forEach((item) => {
  item.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    showPopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(ProfilePic5).forEach((pic) => {
  pic.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    showPopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(blockcard5).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    showPopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

Array.from(Marquee6).forEach((item) => {
  item.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    showPopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(ProfilePic6).forEach((pic) => {
  pic.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    showPopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(blockcard6).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    showPopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

Array.from(Marquee7).forEach((item) => {
  item.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    showPopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(ProfilePic7).forEach((pic) => {
  pic.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    showPopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(blockcard7).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    showPopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

Array.from(Marquee8).forEach((item) => {
  item.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    showPopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(ProfilePic8).forEach((pic) => {
  pic.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    showPopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

Array.from(blockcard8).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    showPopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

// Array.from(Marquee9).forEach((item) => {
//   item.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     showPopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     hidePopLayout(PopLayout14);
//     hidePopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

// Array.from(ProfilePic9).forEach((pic) => {
//   pic.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     showPopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     hidePopLayout(PopLayout14);
//     hidePopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

Array.from(blockcard9).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    showPopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

// Array.from(Marquee10).forEach((item) => {
//   item.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     showPopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     hidePopLayout(PopLayout14);
//     hidePopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

// Array.from(ProfilePic10).forEach((pic) => {
//   pic.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     showPopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     hidePopLayout(PopLayout14);
//     hidePopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

Array.from(blockcard10).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    showPopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

// Array.from(Marquee11).forEach((item) => {
//   item.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     showPopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     hidePopLayout(PopLayout14);
//     hidePopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

// Array.from(ProfilePic11).forEach((pic) => {
//   pic.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     showPopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     hidePopLayout(PopLayout14);
//     hidePopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

Array.from(blockcard11).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    showPopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

// Array.from(Marquee12).forEach((item) => {
//   item.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     showPopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     hidePopLayout(PopLayout14);
//     hidePopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

// Array.from(ProfilePic12).forEach((pic) => {
//   pic.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     showPopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     hidePopLayout(PopLayout14);
//     hidePopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

Array.from(blockcard12).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    showPopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

// Array.from(Marquee13).forEach((item) => {
//   item.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     showPopLayout(PopLayout13);
//     hidePopLayout(PopLayout14);
//     hidePopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

// Array.from(ProfilePic13).forEach((pic) => {
//   pic.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     showPopLayout(PopLayout13);
//     hidePopLayout(PopLayout14);
//     hidePopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

Array.from(blockcard13).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    showPopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

// Array.from(Marquee14).forEach((item) => {
//   item.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     showPopLayout(PopLayout14);
//     hidePopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

// Array.from(ProfilePic14).forEach((pic) => {
//   pic.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     showPopLayout(PopLayout14);
//     hidePopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

Array.from(blockcard14).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    showPopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

// Array.from(Marquee15).forEach((item) => {
//   item.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     hidePopLayout(PopLayout14);
//     showPopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

// Array.from(ProfilePic15).forEach((pic) => {
//   pic.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     hidePopLayout(PopLayout14);
//     showPopLayout(PopLayout15);
//     hidePopLayout(PopLayout16);
//   });
// });

Array.from(blockcard15).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    showPopLayout(PopLayout15);
    hidePopLayout(PopLayout16);
  });
});

// Break

// Array.from(Marquee16).forEach((item) => {
//   item.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     hidePopLayout(PopLayout14);
//     hidePopLayout(PopLayout15);
//     showPopLayout(PopLayout16);
//   });
// });

// Array.from(ProfilePic16).forEach((pic) => {
//   pic.addEventListener("click", () => {
//     hidePopLayout(PopLayout1);
//     hidePopLayout(PopLayout2);
//     hidePopLayout(PopLayout3);
//     hidePopLayout(PopLayout4);
//     hidePopLayout(PopLayout5);
//     hidePopLayout(PopLayout6);
//     hidePopLayout(PopLayout7);
//     hidePopLayout(PopLayout8);
//     hidePopLayout(PopLayout9);
//     hidePopLayout(PopLayout10);
//     hidePopLayout(PopLayout11);
//     hidePopLayout(PopLayout12);
//     hidePopLayout(PopLayout13);
//     hidePopLayout(PopLayout14)5
//     hidePopLayout(PopLayout15);
//     showPopLayout(PopLayout16);
//   });
// });

Array.from(blockcard16).forEach((blockcard) => {
  blockcard.addEventListener("click", () => {
    hidePopLayout(PopLayout1);
    hidePopLayout(PopLayout2);
    hidePopLayout(PopLayout3);
    hidePopLayout(PopLayout4);
    hidePopLayout(PopLayout5);
    hidePopLayout(PopLayout6);
    hidePopLayout(PopLayout7);
    hidePopLayout(PopLayout8);
    hidePopLayout(PopLayout9);
    hidePopLayout(PopLayout10);
    hidePopLayout(PopLayout11);
    hidePopLayout(PopLayout12);
    hidePopLayout(PopLayout13);
    hidePopLayout(PopLayout14);
    hidePopLayout(PopLayout15);
    showPopLayout(PopLayout16);
  });
});

// Break

// Event listeners for closing pop-ups
Popbtn1.addEventListener("click", () => {
  hidePopLayout(PopLayout1);
});

Popbtn2.addEventListener("click", () => {
  hidePopLayout(PopLayout2);
});

Popbtn3.addEventListener("click", () => {
  hidePopLayout(PopLayout3);
});

Popbtn4.addEventListener("click", () => {
  hidePopLayout(PopLayout4);
});

Popbtn5.addEventListener("click", () => {
  hidePopLayout(PopLayout5);
});

Popbtn6.addEventListener("click", () => {
  hidePopLayout(PopLayout6);
});

Popbtn7.addEventListener("click", () => {
  hidePopLayout(PopLayout7);
});

Popbtn8.addEventListener("click", () => {
  hidePopLayout(PopLayout8);
});

Popbtn9.addEventListener("click", () => {
  hidePopLayout(PopLayout9);
});

Popbtn10.addEventListener("click", () => {
  hidePopLayout(PopLayout10);
});

Popbtn11.addEventListener("click", () => {
  hidePopLayout(PopLayout11);
});

Popbtn12.addEventListener("click", () => {
  hidePopLayout(PopLayout12);
});

Popbtn13.addEventListener("click", () => {
  hidePopLayout(PopLayout13);
});

Popbtn14.addEventListener("click", () => {
  hidePopLayout(PopLayout14);
});

Popbtn15.addEventListener("click", () => {
  hidePopLayout(PopLayout15);
});

Popbtn16.addEventListener("click", () => {
  hidePopLayout(PopLayout16);
});

// Break
