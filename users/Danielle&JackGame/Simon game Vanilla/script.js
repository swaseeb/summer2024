const buttonColours = ["red", "green", "blue", "yellow"];

let gamePattern = [];

let userPattern = [];

let timesClicked = [];

let gameLevel = 1;

const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const yellowButton = document.getElementById("yellow");
const startButton = document.getElementById("start-button");
const redAudio = document.getElementById("red_button_sound");
const greenAudio = document.getElementById("green_button_sound");
const blueAudio = document.getElementById("blue_button_sound");
const yellowAudio = document.getElementById("yellow_button_sound");

// Resets all the game arrays
function resetGame() {
  gamePattern = [];
  userPattern = [];
  timesClicked = [];
}

// Generates random number out of 4 (as there are 4 colours)
function randomNumber() {
  return Math.floor(Math.random() * 4);
}

// Uses a random number to push to game array
function pushToGameArray() {
  const myRandomNumber = randomNumber();
  gamePattern.push(buttonColours[myRandomNumber]);
  // console.log(gamePattern);
}

let i = 0;

function playLoop() {
  //  create a loop function
  setTimeout(function () {
    if (gamePattern[i] === "red") {
      redAudio.play();
      redButton.classList.add("transparent");
      setTimeout(() => {
        redButton.classList.remove("transparent");
      }, 300);
    } else if (gamePattern[i] === "green") {
      greenAudio.play();
      greenButton.classList.add("transparent");
      setTimeout(() => {
        greenButton.classList.remove("transparent");
      }, 300);
    } else if (gamePattern[i] === "blue") {
      blueAudio.play();
      blueButton.classList.add("transparent");
      setTimeout(() => {
        blueButton.classList.remove("transparent");
      }, 300);
    } else if (gamePattern[i] === "yellow") {
      yellowAudio.play();
      yellowButton.classList.add("transparent");
      setTimeout(() => {
        yellowButton.classList.remove("transparent");
      }, 300);
    }

    i++; //  increment the counter
    if (i <= gameLevel) {
      playLoop();
    }
  }, 1000);
}

// Resets game, then pushes to the gamePattern array 4 times so that 4 colours are selected
// Obviously will start with one, then two, then three, onwards colours. I started with four to
// get the game logic going
// Need to get a timeout going on this so that it selects them slowly rather than all at once
function startGame() {
  resetGame();
  for (let i = 1; i <= gameLevel; i++) {
    pushToGameArray();
    console.log(i);
    //  const myTimeout = setTimeout(pushToGameArray, 1000);
  }
  playLoop();
  console.log(gamePattern);
}

// Checks the elements of the gamePattern and the userPattern, then
// console logs LOSER until they match, then when they match console logs WINNER
function checkWin() {
  let consistencyCounter = 0;
  console.log(userPattern);
  for (let i = 0; i < gamePattern.length; i++) {
    if (gamePattern[i] === userPattern[i]) {
      consistencyCounter++;
      console.log(consistencyCounter);
    }
  }
  if (consistencyCounter === gameLevel && timesClicked === gameLevel) {
    console.log("WINNER");
    gameLevel++;
    startGame();
  } else if (timesClicked === gameLevel) {
    console.log("LOSER");
  }
}

startButton.addEventListener("click", startGame);

// Pushes "red" to the userPattern, adds 1 to timesClicked, and checks for a win
redButton.addEventListener("click", function () {
  //   console.log("red button pressed");
  userPattern.push("red");
  timesClicked++;
  checkWin();
  redAudio.play();
});

// Pushes "green" to the userPattern, adds 1 to timesClicked, and checks for a win
greenButton.addEventListener("click", function () {
  //   console.log("green button pressed");
  userPattern.push("green");
  timesClicked++;
  checkWin();
  greenAudio.play();
});

// Pushes "blue" to the userPattern, adds 1 to timesClicked, and checks for a win
blueButton.addEventListener("click", function () {
  //   console.log("blue button pressed");
  userPattern.push("blue");
  timesClicked++;
  checkWin();
  blueAudio.play();
});

// Pushes "green" to the userPattern, adds 1 to timesClicked, and checks for a win
yellowButton.addEventListener("click", function () {
  //   console.log("yellow button pressed");
  userPattern.push("yellow");
  timesClicked++;
  checkWin();
  yellowAudio.play();
});
