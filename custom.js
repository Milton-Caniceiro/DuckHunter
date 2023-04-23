/* eslint-disable require-jsdoc */
import {runningDog, jumpingDog, removeDog} from "/dog.js";

const playButton = document.getElementById("play-button");
playButton.addEventListener("click", () => {
  document.getElementById("begin").style.display = "none";
  startGame();
});

function startGame() {
  runningDog();
  setTimeout(jumpingDog, 6600);
  setTimeout(removeDog, 6500);
  shot();
}

// eslint-disable-next-line require-jsdoc
function shot() {
  let bullet = 5;

  const shotSound = document.getElementById("shotSound");

  const duck = document.querySelector("#duck-image");

  duck.addEventListener("click", () => {
    shotSound.play();
    setTimeout(dogWithDuck, 3050);
    setTimeout(hiddeDogWithDuck, 6100);
    increaseScore();
    decreaseBullets();
  });

  const img = document.querySelector(".container");

  img.addEventListener("click", () => {
    shotSound.play();
    showDogLaughing();
    decreaseBullets();
    setTimeout(hiddeDogLaughing, 2000);
  });

  const showDogLaughing = () => {
    const dogLaughing = document.getElementById("dog-laugh");
    dogLaughing.style.display = "block";
  };

  const hiddeDogLaughing = () => {
    const dogLaughing = document.getElementById("dog-laugh");
    dogLaughing.style.display = "none";
  };

  const dogWithDuck = () => {
    const dogWithDuck = document.getElementById("dogWithDuck");
    dogWithDuck.style.display = "block";
  };

  const hiddeDogWithDuck = () => {
    document.getElementById("dogWithDuck");
    const dogWithDuck = document.getElementById("dogWithDuck");
    dogWithDuck.style.display = "none";
  };

  if (bullet < 0) {
    document.getElementById("gameOver").style.display = "block";
  }
}

const decreaseBullets = () => {
  const bullet = document.querySelector("#bullet-counter").innerHTML;

  const bulletHTML = document.querySelector("#bullet-counter");

  let count = Number(bullet);

  bulletHTML.innerHTML = count - 1;
};

const increaseScore = () => {
  const score = document.querySelector("#score-counter").innerHTML;

  const scoreHTML = document.querySelector('#score-counter');

  let count = Number(score);

  scoreHTML.innerHTML = count + 100;
};
