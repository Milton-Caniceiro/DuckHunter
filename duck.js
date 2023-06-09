/* eslint-disable require-jsdoc */
let duckCounter = 0;
const createDuck = () => {
  const duckDiv = document.createElement('div');
  duckCounter++;
  duckDiv.id = 'duck-image'+ duckCounter.toString();

  const screenHeight = window.innerHeight;
  const y = Math.floor(Math.random() * (screenHeight - 200));
  duckDiv.style.left = 0 + 'px';
  duckDiv.style.top = y + 'px';

  duckDiv.style.backgroundImage = 'url(\'duck-hunt.png\')';

  duckDiv.classList.add('duck');

  duckDiv.state = 'flying';

  document.body.appendChild(duckDiv);

  horizontalFlyingDuck(duckDiv);
};

function horizontalDuckAnimation(duckDiv) {
  let position = -130;
  const interval = 100;
  const diff = 40;

  setInterval(() => {
    duckDiv.style.backgroundPosition = `${position}px -121px`;

    if (position > -200) {
      position = position - diff;
    } else {
      position = -130;
    }
  }, interval);
}

function horizontalFlyingDuck(duckDiv) {
  let positionX = parseInt(duckDiv.style.left);
  const diffX = Math.random() * (20 - 10) + 10;
  const maxPositionX = window.innerWidth - duckDiv.offsetWidth;
  const interval = 100;
  horizontalDuckAnimation(duckDiv);

  duckDiv.flyInterval = setInterval(() => {
    if (positionX < maxPositionX) {
      duckDiv.style.left = `${positionX}px`;
      positionX += diffX;
    } else {
      if (duckDiv.parentNode) {
        duckDiv.parentNode.removeChild(duckDiv);
      }
    }
  }, interval);
}

function fallingDuck(duckDiv) {
  let positionY = parseInt(duckDiv.style.top);
  const diffY = 20;
  const maxPositionY = window.innerHeight - duckDiv.offsetHeight;
  const interval = 50;

  duckDiv.fallInterval = setInterval(() => {
    if (positionY < maxPositionY) {
      duckDiv.style.top = `${positionY}px`;
      positionY += diffY;
    } else {
      if (duckDiv.parentNode) {
        duckDiv.parentNode.removeChild(duckDiv);
      }
    }
  }, interval);
}

// eslint-disable-next-line max-len
export {createDuck, horizontalFlyingDuck, horizontalDuckAnimation, fallingDuck, duckCounter};
