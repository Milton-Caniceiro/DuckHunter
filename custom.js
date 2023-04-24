/* eslint-disable require-jsdoc */
import {runningDog, jumpingDog, removeDog} from '/dog.js';
import {createDuck, fallingDuck} from './duck.js';

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', () => {
  document.getElementById('begin').style.display = 'none';
  startGame();
});

function startGame() {
  document.getElementById('dog-walk').style.display = 'block';
  runningDog();
  setTimeout(() => jumpingDog(), 6600);
  setTimeout(() =>removeDog(), 6500);
  setTimeout(() => startRounds(), 7000);
}

let bulletCounter = 5;
let score = 0;
let roundCounter = 0;
let ducksShot = 0;
const ducksPerRound = [1, 2, 3, 4, 5, 6];
const goalOfDucksShotPerRound = [1, 2, 4, 8, 12, 18];
const bulletCounterElement = document.getElementById('bullet-counter');
const scoreHTML = document.querySelector('#score-counter');
const shotSound = document.getElementById('shotSound');
const gameOverSound = document.getElementById('gameOverSound');

const startRounds = () => {
  const ducksThisRound = ducksPerRound[roundCounter];
  for (let i = 0; i < ducksThisRound; i++) {
    createDuck();
  }
  setInterval(() => {
    checkRound();
  }, 100);
};

const checkRound = () => {
  if (ducksShot >= goalOfDucksShotPerRound[roundCounter]) {
    bulletCounter += ducksPerRound[roundCounter];
    roundCounter++;
    startRounds();
  } if (roundCounter === ducksPerRound.length - 1) {
    gameOver();
  }
};

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('duck')) {
    const duck = event.target;
    if (duck.state === 'flying') {
      clearInterval(duck.flyInterval);
      fallingDuck(duck);
      duck.state = 'falling';
      shotSound.play();
      dogWithDuck();
      setTimeout(() => hideDogWithDuck(), 2000);
      decreaseBullets();
      increaseScore();
      ducksShot++;
    }
  }
});

const img = document.querySelector('.container');

img.addEventListener('click', () => {
  shotSound.play();
  showDogLaughing();
  decreaseBullets();
  setTimeout(hideDogLaughing, 2000);
});

const showDogLaughing = () => {
  const dogLaughing = document.getElementById('dog-laugh');
  laughingDog.play();
  dogLaughing.style.display = 'block';
};

const hideDogLaughing = () => {
  const dogLaughing = document.getElementById('dog-laugh');
  dogLaughing.style.display = 'none';
};

const dogWithDuck = () => {
  const dogWithDuck = document.getElementById('dogWithDuck');
  dogWithDuck.style.display = 'block';
};

const hideDogWithDuck = () => {
  document.getElementById('dogWithDuck');
  const dogWithDuck = document.getElementById('dogWithDuck');
  dogWithDuck.style.display = 'none';
};

const decreaseBullets = () => {
  if (bulletCounter > 0) {
    bulletCounter--;
    bulletCounterElement.innerHTML = bulletCounter;
    gameOverCheck();
  }
};

const increaseScore = () => {
  score += 100;
  scoreHTML.innerHTML = score;
};

const gameOverCheck = () => {
  if (bulletCounter <= 0) {
    gameOver();
  }
};

const gameOver = () => {
  const gameOver = document.createElement('div');
  gameOver.id = 'gameOver';
  document.body.appendChild(gameOver);
  gameOverSound.play();
};
