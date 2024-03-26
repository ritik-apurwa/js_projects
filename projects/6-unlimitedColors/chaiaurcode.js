// document.addEventListener("DOMContentLoaded", function () {
//     const colorBox = document.getElementById("color_box");

//     const playButton = document.getElementById("play_button");

//     const endButton = document.getElementById("end_button");
//     let intervalId;
//     let isColorChanging = false;

//     const randomColor = function () {
//       const letters = "0123456789ABCDEF";
//       let color = "#";

//       for (let colorLetter = 0; colorLetter < 6; colorLetter++) {
//         color += letters[Math.floor(Math.random() * 16)];
//       }
//       return color;
//     };

//     const startChangingColor = function () {
//       if (!isColorChanging) {
//         intervalId = setInterval(() => {
//           colorBox.style.backgroundColor = randomColor();
//         }, 1000);
//         isColorChanging = true;
//       }
//     };

//     const stopChangingColor = function () {
//       clearInterval(intervalId);
//       isColorChanging = false;
//     };

//     playButton.addEventListener("click", startChangingColor);
//     endButton.addEventListener("click", stopChangingColor);
//   });

/// First setup take all elements by id or class carefully .

const colorChangingBox = document.querySelector("#color_box");
const startButton = document.querySelector("#play_button");
const endButton = document.querySelector("#end_button");

let isColorChanging = false;
let intervalName;

// let make a random number generator between 0-9 and A-F

const randomColor = function () {
  const letters = "0123456789ABCDEF";
  // first make a variable and give a string value of #
  let color = "#";
  // make a loop with get 6 random number from our letters it takes only random number first but we keep adding numbers till six

  // in this for loop we are first getting a radom value from our letters then
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// then we make a interval which will give a random color in each given time

const startColorChanging = function () {
  if (!isColorChanging) {
    intervalId = setInterval(() => {
      colorChangingBox.style.backgroundColor = randomColor();
    }, 1000);
    isColorChanging = true;
    setTimeout(stopColorChanging, 60000); 
  }
};

const stopColorChanging = function () {
  clearInterval(intervalId);
  isColorChanging = false;
};



startButton.addEventListener("click", startColorChanging);
endButton.addEventListener("click", stopColorChanging);
