/* eslint-disable require-jsdoc */
import {runningDog, jumpingDog, removeDog} from '/dog.js';
import {createDuck, fallingDuck} from './duck.js';

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', () => {
  document.getElementById('begin').style.display = 'none';
  startGame();
});

function startGame() {
  runningDog();
  setTimeout(jumpingDog, 6600);
  setTimeout(removeDog, 6500);
  createDuck();
}

let bulletCounter = 5;
const bulletCounterElement = document.getElementById('bullet-counter');

const shotSound = document.getElementById('shotSound');

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('duck')) {
    const duck = event.target;
    if (duck.state === 'flying') {
      clearInterval(duck.flyInterval);
      fallingDuck(duck);
      duck.state = 'falling';
      shotSound.play();
      dogWithDuck();
      decreaseBullets();
      createDuck();
    }
  }
});

// addEventListener('click', () => {
//   shotSound.play();
//   setTimeout(dogWithDuck, 3050);
//   setTimeout(hiddeDogWithDuck, 6100);
//   increaseScore();
//   decreaseBullets();
// });

const img = document.querySelector('.container');

img.addEventListener('click', () => {
  shotSound.play();
  showDogLaughing();
  decreaseBullets();
  setTimeout(hiddeDogLaughing, 2000);
});

const showDogLaughing = () => {
  const dogLaughing = document.getElementById('dog-laugh');
  dogLaughing.style.display = 'block';
};

const hiddeDogLaughing = () => {
  const dogLaughing = document.getElementById('dog-laugh');
  dogLaughing.style.display = 'none';
};

const dogWithDuck = () => {
  const dogWithDuck = document.getElementById('dogWithDuck');
  dogWithDuck.style.display = 'block';
};

const hiddeDogWithDuck = () => {
  document.getElementById('dogWithDuck');
  const dogWithDuck = document.getElementById('dogWithDuck');
  dogWithDuck.style.display = 'none';
};

// if (bullet < 0) {
//   document.getElementById('gameOver').style.display = 'block';
// }

const decreaseBullets = () => {
  if (bulletCounter > 0) {
    bulletCounter--;
    bulletCounterElement.innerHTML = bulletCounter;
    endGame();
  }
};

const increaseScore = () => {
  const score = document.querySelector('#score-counter').innerHTML;

  const scoreHTML = document.querySelector('#score-counter');

  let count = Number(score);

  scoreHTML.innerHTML = count + 100;
};

const endGame = () => {
  if (bulletCounter <= 0) {
    const gameOver = document.createElement('div');
    gameOver.id = 'gameOver';
    document.body.appendChild(gameOver);
  }
};

